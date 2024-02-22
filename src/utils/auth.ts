import NextAuth from "next-auth";
// When the hasura adapter is fixed to work with the graphql naming scheme, that
// adapter should be used instead so permissions can be more granularly-scoped.
import PostgresAdapter from "@auth/pg-adapter";
import { Pool } from "pg";
import Google from "next-auth/providers/google";

const pool = new Pool({
  connectionString: process.env.AUTH_PG_CONNECTION_STRING,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: PostgresAdapter(pool),
  providers: [Google],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session, user: { id } }) => ({
      ...session,
      user: {
        ...session.user,
        id,
      },
    }),
  },
});

export { GET, POST, auth };
