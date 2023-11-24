import { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

// @ts-ignore
loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: [
    {
      [process.env.INTERNAL_GRAPHQL_URL]: {
        headers: {
          "x-hasura-admin-secret": "Candles1",
        },
      },
    },
  ],
  documents: ["src/**/*graphql.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/graphql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
  watch: true,
};

export default config;
