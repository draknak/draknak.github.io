module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      "airbnb-base",
    //   "plugin:vue/recommended",
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'import/no-unresolved': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    // parserOptions: {
    //   parser: 'babel-eslint',
    // },
  };