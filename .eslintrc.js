const path = require("path");

module.exports = {
  extends: [
    "mantine",
    "plugin:@next/next/recommended",
    "plugin:jest/recommended",
  ],
  plugins: [
    "testing-library",
    "jest",
    "import",
    "react",
    "jsx-a11y",
    "react-hooks",
    "testing-library",
  ],
  overrides: [
    {
      files: ["**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/extensions": "off",
    "@typescript-eslint/quotes": "off",
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            alias: {
              "~": path.join(__dirname, "src/app"),
            },
            extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs"],
          },
        },
      },
    },
  },
};
