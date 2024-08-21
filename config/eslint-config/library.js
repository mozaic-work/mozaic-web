/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@vtal/eslint-config/node'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
}