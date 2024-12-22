const { FlatCompat } = require('@eslint/eslintrc');
const eslint = require('@eslint/js');
const nrwlEslintPluginNx = require('@nrwl/eslint-plugin-nx');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
});

module.exports = [
  { plugins: { '@nrwl/nx': nrwlEslintPluginNx } },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nrwl/nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
      '@angular-eslint/component-class-suffix': 'error',
      '@angular-eslint/contextual-lifecycle': 'error',
      '@angular-eslint/directive-class-suffix': 'error',
      '@angular-eslint/no-empty-lifecycle-method': 'error',
      '@angular-eslint/no-input-rename': 'error',
      '@angular-eslint/no-inputs-metadata-property': 'error',
      '@angular-eslint/no-output-native': 'error',
      '@angular-eslint/no-output-on-prefix': 'error',
      '@angular-eslint/no-output-rename': 'error',
      '@angular-eslint/no-outputs-metadata-property': 'error',
      '@angular-eslint/prefer-standalone': 'error',
      '@angular-eslint/use-pipe-transform-interface': 'error',
      '@angular-eslint/use-lifecycle-interface': 'warn',
      "@angular-eslint/template/prefer-self-closing-tags": 'error',
      "@angular-eslint/template/prefer-control-flow": 'error',
      "@angular-eslint/prefer-on-push-component-change-detection": 'error',
      "no-unused-vars": ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": true }]
    },
  },
  ...compat
    .config({
      extends: [
        'plugin:@nrwl/nx/typescript',
        './libs/eslint-custom-overrides/eslint-custom-overrides.json',
      ],
    })
    .map((config) => ({
      ...config,
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        ...config.rules,
      },
    })),
  ...compat
    .config({ extends: ['plugin:@nrwl/nx/javascript'] })
    .map((config) => ({
      ...config,
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        ...config.rules,
      },
    })),
];
