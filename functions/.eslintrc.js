module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    "quote-props": [2, "as-needed"],
    quotes: ["error", "double"],
    indent: ["error", 2],
    "object-curly-spacing": [2, "always"],
  },
};
