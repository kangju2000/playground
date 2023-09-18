module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: 'variable',
        leadingUnderscore: 'allow',
      },
      { format: ['camelCase', 'PascalCase'], selector: 'function' },
      { format: ['PascalCase'], selector: 'interface' },
      { format: ['PascalCase'], selector: 'typeAlias' },
    ],
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
          ['object'],
          ['type'],
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./packages/**/tsconfig.json'],
      },
    },
    {
      files: ['packages/blog/*.ts?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: `${__dirname}/packages/blog/tsconfig.json`,
          },
        },
      },
    },
    {
      files: ['packages/react/**/*.ts?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: `${__dirname}/packages/react/tsconfig.json`,
          },
        },
      },
    },
    {
      files: ['packages/next-blog/**/*.ts?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: `${__dirname}/packages/next-blog/tsconfig.json`,
          },
        },
      },
    },
  ],
}
