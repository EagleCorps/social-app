import { importPKCS8, SignJWT } from "jose";

import { auth } from "@/utils/auth";

type ApiResponse = () => Response;

const GET = auth(async ({ auth: { user } }) => {
  const alg =
    process.env.NEXT_PUBLIC_HASURA_JWT_SIGNING_ALGORITHM_CURRENT ?? "";
  const pkcs8 =
    process.env.HASURA_JWT_PRIVATE_KEY_CURRENT.trim().replace(/\\n/g, "\n") ??
    "";
  const privateKey = await importPKCS8(pkcs8, alg);

  const jwt = await new SignJWT({
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "user",
      "x-hasura-allowed-roles": ["user"],
      "x-hasura-user-id": user?.id,
    },
  })
    .setSubject(user?.id)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer("https://eaglecorps.com")
    .setAudience("https://hasura.io")
    .setExpirationTime("12h")
    .sign(privateKey);

  return Response.json(jwt);
}) as ApiResponse;

export { GET };
