/** @type {import('eslint').Linter.Config} */
// eslint-disable-next-line no-undef
module.exports = {
  extends: ['@vtal/eslint-config/node'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
  },
}
