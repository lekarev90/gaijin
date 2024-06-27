module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:import/recommended', 'plugin:import/typescript'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'import'],
  rules: {
    'react/no-array-index-key': 0,
    'react/prop-types': 0,
    'react/jsx-max-props-per-line': [
      2,
      {
        maximum: {
          single: 5,
          multi: 1,
        },
      },
    ],
    'no-underscore-dangle': 0,
    'no-console': ['error', { allow: ['warn', 'error', 'assert'] }],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': 0,
    'no-shadow': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/no-unstable-nested-components': 1,
    'react/jsx-one-expression-per-line': [
      2,
      {
        allow: 'literal',
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'function-paren-newline': ['error', 'multiline-arguments'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 0,
    'max-len': ['error', { code: 140 }],
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-cycle': 0,
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'], // Библиотеки (react, redux и т.д.)
          ['internal'], // Абсолютные пути (использование алиасов)
          ['parent'], // Родительские относительные пути
          ['sibling'], // Соседние относительные пути
          ['index'], // Импорты из текущей папки
          ['type', 'unknown'], // Импорты стилей
        ],
        pathGroups: [
          {
            pattern: '{react,react-dom,classnames,bind,react-redux,i18next}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: './*.scss',
            group: 'unknown',
            position: 'after',
            patternOptions: {
              matchBase: true,
            },
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

  },
};
