module.exports = {
  extends: ['@pixel-io', 'plugin:lit/recommended'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  rules: {
    '@typescript-eslint/unbound-method': 'off',
  },
};
