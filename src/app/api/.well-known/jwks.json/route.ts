import { importSPKI, exportJWK } from "jose";

const revalidate = 300;

const GET = async () => {
  const algorithmCurrent =
    process.env.NEXT_PUBLIC_HASURA_JWT_SIGNING_ALGORITHM_CURRENT ?? "";
  const publicSPKICurrent =
    process.env.NEXT_PUBLIC_HASURA_JWT_PUBLIC_KEY_CURRENT.trim().replace(
      /\\n/g,
      "\n",
    ) ?? "";
  const publicKeyCurrent = await importSPKI(
    publicSPKICurrent,
    algorithmCurrent,
  );
  const publicJwkCurrent = await exportJWK(publicKeyCurrent);

  const algorithmUpcoming =
    process.env.NEXT_PUBLIC_HASURA_JWT_SIGNING_ALGORITHM_UPCOMING ?? "";
  const publicSPKIUpcoming =
    process.env.NEXT_PUBLIC_HASURA_JWT_PUBLIC_KEY_UPCOMING.trim().replace(
      /\\n/g,
      "\n",
    ) ?? "";
  const publicKeyUpcoming = await importSPKI(
    publicSPKIUpcoming,
    algorithmUpcoming,
  );
  const publicJwkUpcoming = await exportJWK(publicKeyUpcoming);

  const publicJwks = { keys: [publicJwkCurrent, publicJwkUpcoming] };

  return Response.json(publicJwks);
};

export { revalidate, GET };
