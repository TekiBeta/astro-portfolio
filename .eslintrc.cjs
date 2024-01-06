module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:astro/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  globals: {
    astroHTML: true,
  },
  ignorePatterns: ['.eslintrc.cjs'],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
};
