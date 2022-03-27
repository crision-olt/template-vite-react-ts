// eslint-disable-next-line no-undef
module.exports = {
  settings: {
    react: {
      version: "detect",
    },
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      { name: "Link", linkAttribute: "to" },
    ],
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    quotes: ["warn", "double"],
    "comma-dangle": ["error", "always-multiline"],
    "no-debugger": "warn",
    "array-callback-return": "warn",
    "no-duplicate-imports": "error",
    "no-empty-pattern": "warn",
    "react/button-has-type": "error",
    "react/destructuring-assignment": ["warn", "always"],
    "react/hook-use-state": "warn",
    "react/no-deprecated": "error",
    "react/no-invalid-html-attribute": "warn",
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
    "react/jsx-boolean-value": "warn",
    "react/jsx-child-element-spacing": "warn",
    "react/jsx-closing-bracket-location": "warn",
    "react/jsx-closing-tag-location": "warn",
    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "always", children: "always" },
    ],
    "react/jsx-curly-newline": "warn",
    "react/jsx-curly-spacing": ["warn", { when: "never" }],
    "react/jsx-equals-spacing": ["warn", "never"],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".tsx"],
      },
    ],
    "react/jsx-first-prop-new-line": [1, "multiline"],
    "react/jsx-fragments": "error",
    "react/jsx-indent": ["warn", 2],
    "react/jsx-indent-props": ["warn", 2],
    "react/jsx-key": [
      "warn",
      {
        checkFragmentShorthand: false,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    "react/jsx-max-props-per-line": ["error", { maximum: 3, when: "always" }],
    "react/jsx-no-bind": [
      "error",
      {
        ignoreDOMComponents: false,
        ignoreRefs: false,
        allowArrowFunctions: true,
        allowFunctions: true,
        allowBind: false,
      },
    ],
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-constructed-context-values": "warn",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-literals": "warn",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-target-blank": [
      "error",
      {
        allowReferrer: false,
        enforceDynamicLinks: "always",
        warnOnSpreadAttributes: true,
        links: true,
        forms: true,
      },
    ],
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-one-expression-per-line": ["off"],
    "react/jsx-pascal-case": "error",
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-sort-default-props": [
      "warn",
      {
        ignoreCase: true,
      },
    ],
    "react/jsx-sort-props": [
      "warn",
      {
        multiline: "last",
        ignoreCase: true,
        noSortAlphabetically: false,
      },
    ],
    "react/jsx-wrap-multilines": [
      "warn",
      {
        declaration: "parens",
        assignment: "parens",
        return: "parens",
        arrow: "parens",
        condition: "parens",
        logical: "parens",
        prop: "parens",
      },
    ],
  },
};
