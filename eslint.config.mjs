import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { 
    files: ["**/*.js"], 
    languageOptions: { 
      sourceType: "commonjs",
      globals: { ...globals.browser, ...globals.jest } 
    },
    rules: {
      "semi": ["error", "always"],  
      "quotes": ["error", "double"],  
    }
  },
];