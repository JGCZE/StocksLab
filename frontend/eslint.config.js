import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import perfectionist from 'eslint-plugin-perfectionist'

export default tseslint.config(
  {ignores: ['dist', './src/types/generatedTypes.ts', './src/components/ui']},
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'perfectionist': perfectionist,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],

      // --- Formátování ---
      'no-multiple-empty-lines': ['warn', {max: 1, maxBOF: 0, maxEOF: 0}],
      'arrow-body-style': ['warn', 'as-needed'],

      // --- ABECEDA (Perfectionist) ---

      // 1. Řazení importů
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          customGroups: [
            {
              groupName: 'react',
              elementNamePattern: '^react',
            },
          ],
          groups: [
            'react',
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'unknown',
          ],
        },
      ],

      // 2. Řazení props v JSX
      'perfectionist/sort-jsx-props': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: true,
        },
      ],

      // 3. Řazení objektů
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: true,
          partitionByComment: false,
        },
      ],

      // 4. Řazení TypeScript definic
      'perfectionist/sort-interfaces': ['error', {type: 'natural', order: 'asc'}],
      'perfectionist/sort-object-types': ['error', {type: 'natural', order: 'asc'}],
      'perfectionist/sort-union-types': ['error', {type: 'natural', order: 'asc'}],
    },
  },
)
