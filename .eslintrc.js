module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  settings: {
    ecmascript: 6,
    jsx: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  extends: 'airbnb',
  rules: {
    'max-len': ['error', { 'code': 150, 'tabWidth': 2, 'ignoreUrls': true }],
    'react/jsx-filename-extension': 0,
    'function-paren-newline': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
  },
  globals: {
    test: true,
    expect: true,
    afterEach: true,
  },
};
