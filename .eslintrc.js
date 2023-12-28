export default {
  ignorePatterns: ["public", "node_modules", "tmp"],
  overrides: [
    {
      files: ["**/*.tsx", "**/*.ts"],
      env: {
        browser: true,
        es2020: true,
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.json",
      },
      extends: [
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:@typescript-eslint/recommended",
        "preact",
        "prettier",
      ],
      settings: {
        "import/resolver": {
          typescript: {
            project: "./tsconfig.json",
          },
        },
      },
      plugins: ["import"],
      rules: {
        "no-undef": "off",
        "no-anonymous-exports-page-templates": "warn",
        "limited-exports-page-templates": "warn",
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-floating-promises": "error",
        quotes: [
          "error",
          "double",
          {
            avoidEscape: true,
            allowTemplateLiterals: false,
          },
        ],
        "import/order": [
          "error",
          {
            groups: [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index",
            ],
            "newlines-between": "always",
          },
        ],
      },
    },
    {
      files: ["*.js"],
      env: {
        browser: false,
        node: true,
        es2020: true,
      },
      rules: {
        quotes: [
          "error",
          "double",
          {
            avoidEscape: true,
            allowTemplateLiterals: false,
          },
        ],
      },
    },
  ],
};
