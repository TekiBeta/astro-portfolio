module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  globals: {
    astroHTML: true,
  },
  ignorePatterns: ['.eslintrc.cjs', 'tailwind.config.mjs'],
  rules: {
    semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
    'semi-spacing': ['error', { after: true, before: false }],
    'semi-style': ['error', 'first'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
    },
    {
      files: ['*.astro'],
      extends: ['plugin:astro/recommended'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    {
      files: ['*.jsx', '*.tsx'],
      extends: ['plugin:react/recommended'],
      rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },
    {
      files: ['*.vue'],
      extends: ['plugin:vue/vue3-recommended'],
      rules: {
        'vue/multi-word-component-names': 'off',
        'vue/html-self-closing': [
          'error',
          {
            html: {
              void: 'always',
            },
          },
        ],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': 'off',
      },
    },
  ],
}
