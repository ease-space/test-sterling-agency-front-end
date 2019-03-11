const pkg = require('./package.json');

const reactVersion = () => {
  if (pkg.dependencies && pkg.dependencies.react) {
    return { version: pkg.dependencies.react.replace(/[^0-9.]/g, '') };
  }
  if (pkg.devDependencies && pkg.devDependencies.react) {
    return { version: pkg.devDependencies.react.replace(/[^0-9.]/g, '') };
  }
};

module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'jest', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/order': 'error',
    'no-console': 'off',
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    document: true,
    window: true,
    localStorage: true,
  },
  settings: {
    react: {
      ...reactVersion(),
    },
  },
};
