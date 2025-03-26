import { defineConfig } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    ignores: ["__webpack__/**/*"],
    extends: compat.extends(
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended"
    ),

    plugins: {
      "@typescript-eslint": typescriptEslint,
      react,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 2015,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "@typescript-eslint/no-var-requires": "off",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: "off",
      "no-fallthrough": "off",

      "no-multiple-empty-lines": [
        1,
        {
          max: 2,
        },
      ],

      "no-nested-ternary": 1,
      eqeqeq: 2,
      "react/prop-types": "off",
    },
  },
]);
