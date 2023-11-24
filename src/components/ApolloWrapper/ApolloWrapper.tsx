"use client";

import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support/ssr";

import { createApolloClient } from "@/utils";

const ApolloWrapper = ({ children }: React.PropsWithChildren) => (
  <ApolloNextAppProvider makeClient={createApolloClient}>
    {children}
  </ApolloNextAppProvider>
);

export { ApolloWrapper };
