module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  extends: ['plugin:@stencil/recommended'],
  rules: {
    // these rules are not working properly
    '@stencil/strict-boolean-conditions': 0,
    '@stencil/decorators-context': 0,
  },
};
