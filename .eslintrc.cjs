module.exports = {
<<<<<<< HEAD
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'react/react-in-jsx-scope': 0,
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        // Allow semi-colons at end of line
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
=======
  root: true,
  env: { browser: true, es2020: true },
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
      'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
      'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 0,
      'comma-dangle': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      // Allow semi-colons at end of line
      'prettier/prettier': [
          'error',
          {
              endOfLine: 'auto',
          },
      ],
  },
>>>>>>> bbe35762337c35be39c9398f0d81ea830b40fe09
};
