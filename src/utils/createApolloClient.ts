import { ApolloLink, HttpLink, fromPromise } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { decodeJwt } from "jose";
import { redirect } from "next/navigation";

let accessToken: string;

const refreshAccessToken = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_HOST}/api/auth/get-graphql-api-jwt`,
  );

  if (res.ok) {
    accessToken = await res.json();
    const claims = decodeJwt(accessToken);
    const refreshPeriod = 500 * ((claims?.exp ?? 0) - (claims?.iat ?? 0));

    setTimeout(() => {
      //refreshAccessToken();
    }, refreshPeriod);
  }
};

const requestAccessToken = async () => {
  if (accessToken) {
    const claims = decodeJwt(accessToken);
    const timeUntilRefreshWithBuffer =
      750 * ((claims?.exp ?? 0) + (claims?.iat ?? 0)) - new Date().getTime();

    if (timeUntilRefreshWithBuffer < 0) {
      //refreshAccessToken();
    }

    return;
  }

  await refreshAccessToken();
};

const authLink = setContext(async () => {
  await requestAccessToken();

  return {
    headers: {
      authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    },
  };
});

const createHttpLink = () => {
  // you can disable result caching here if you want to
  // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
  // fetchOptions: { cache: "no-store" },
  // you can override the default `fetchOptions` on a per query basis
  // via the `context` property on the options passed as a second argument
  // to an Apollo Client data fetching hook, e.g.:
  // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    credentials: "include",
    fetch: (uri, options) =>
      fetch(uri, { ...options, ...{ cache: "no-store" } }),
  });

  return httpLink;
};

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach((err) => {
        switch (err.extensions.code) {
          case "invalid-jwt":
            return fromPromise(
              refreshAccessToken().catch((error) => {
                console.error("error when refreshing accessToken", error);
                redirect("/");
              }),
            )
              .filter((value) => Boolean(value))
              .flatMap(() => {
                const oldHeaders = operation.getContext().headers;
                // modify the operation context with a new token
                operation.setContext({
                  headers: {
                    ...oldHeaders,
                    authorization: `Bearer ${accessToken}`,
                  },
                });

                // retry the request, returning the new observable
                return forward(operation);
              });
        }
      });
    }
  },
);

const createApolloClient = () => {
  const httpLink = createHttpLink();

  return new NextSSRApolloClient({
    // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            errorLink,
            // in a SSR environment, if you use multipart features like
            // @defer, you need to decide how to handle these.
            // This strips all interfaces with a `@defer` directive from your queries.
            new SSRMultipartLink({
              stripDefer: true,
            }),
            authLink,
            httpLink,
          ])
        : ApolloLink.from([errorLink, authLink, httpLink]),
  });
};

export { createApolloClient };
