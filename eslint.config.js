import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      indent: [
        "error",
        2,
        {
          SwitchCase: 1,
          FunctionDeclaration: {
            parameters: "first",
          },
          FunctionExpression: {
            parameters: "first",
          },
          CallExpression: {
            arguments: "first",
          },
          ArrayExpression: "first",
          ObjectExpression: "first",
        },
      ],
      "linebreak-style": ["error", "unix"],
      "no-trailing-spaces": "error",
      quotes: ["warn", "double", { avoidEscape: true }],
      semi: ["error", "always"],
      "prefer-const": "error",
      "no-unused-vars": "warn",
    },
  },
]);
