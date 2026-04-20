module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': ['error', 'ignorePackages', {
      js: 'always',
    }],
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'semi': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
  },
};
