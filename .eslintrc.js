module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "airbnb-typescript",
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
    project: "./tsconfig.json",
    createDefaultProgram: true,
  },
  plugins: ["import", "prettier"],
  rules: {
    "prettier/prettier": "error",
    // "禁止解構賦值" => 提升程式碼可讀性
    "react/jsx-props-no-spreading": "off",
    // type unfined need defaultProps
    "react/require-default-props": "off",
    // label 要有 for (htmlFor)
    "jsx-a11y/label-has-associated-control": "off",
  },
};
