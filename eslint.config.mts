// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked, {
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
},
  eslintPluginPrettier, {
  rules: {
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
  },
}
)