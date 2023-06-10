module.exports = {
  env: {
      browser: true,
      es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
  },
  plugins: ["react"],
  rules: {
      // Ошибка: Expected indentation of 2 spaces but found 4
      // Отступы д/б кратны 4-м
      indent: ["error", 4],

      // Ошибка: Extra semicolon
      // Наличие ";" - допускается
      semi: [2, "always"],

      // Ошибка: Missing space before function parentheses
      // Отсутствие пробела перед скобками при обозначении функции
      "space-before-function-paren": ["error", {anonymous: "always", named: "never"}],

      "space-comment": ["off"],

      // Ошибка: Strings must use singlequote
      // Строковые значения оформляются одинарными кавычками
      quotes: ["error", "double", { allowTemplateLiterals: true }],

      // "multiline-ternary": ["off"] // Отключение переноса строк в тернарных выражениях
  }
};
