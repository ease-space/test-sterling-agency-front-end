module.exports = {
  plugins: [],
  extends: ['stylelint-config-standard'],
  rules: {
    indentation: 2,
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['mixin', 'define-mixin', 'include'] },
    ],
  },
};
