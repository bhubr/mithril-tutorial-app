module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['airbnb-base', 'plugin:mithril/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prefer-import/prefer-import-over-require': ['error'],
    'comma-dangle': 0,
    'arrow-parens': 0
  },
  plugins: [
    'prefer-import', 'mithril'
  ]
};
