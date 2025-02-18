module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-hooks', '@typescript-eslint', 'react'],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    // Disabling prop-types as we are using TypeScript for type checking
    'react/prop-types': 'off',
  },
}