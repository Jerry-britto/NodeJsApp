import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { 
    files: ["**/*.js"], 
    languageOptions: { 
      sourceType: "commonjs",
      globals: { ...globals.browser, ...globals.jest } // Add Jest globals
    },
    rules: {
      "semi": ["error", "always"],  // Enforce semicolons
      "quotes": ["error", "double"],  // Enforce double 
    }
  },
];