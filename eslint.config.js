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
      ]
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
