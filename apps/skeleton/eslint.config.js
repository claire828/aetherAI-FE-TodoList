const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.js');

module.exports = [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    plugins: ['rxjs-angular'],
    extends: [
      'plugin:rxjs-angular/recommended',
      'plugin:@nx/angular',
      'plugin:@nx/typescript',
      'plugin:@angular-eslint/template/process-inline-templates',
    ],
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/component-class-suffix': 'error',
      '@angular-eslint/directive-class-suffix': 'error',
      '@angular-eslint/directive-selector': 'warn',
      '@angular-eslint/no-host-metadata-property': 'error',
      '@angular-eslint/no-input-rename': 'error',
      '@angular-eslint/no-inputs-metadata-property': 'error',
      '@angular-eslint/no-output-on-prefix': 'error',
      '@angular-eslint/no-output-rename': 'error',
      '@angular-eslint/no-outputs-metadata-property': 'error',
      '@angular-eslint/use-lifecycle-interface': 'error',
      '@angular-eslint/use-pipe-transform-interface': 'error',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/dot-notation': 'off',
      '@typescript-eslint/explicit-member-accessibility': [
        'off',
        {
          accessibility: 'explicit',
        },
      ],
      '@typescript-eslint/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        },
      ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          classes: [
            // Index signature
            'signature',
            'readonly-signature',
            // Fields
            'public-static-field',
            'public-static-readonly-field',
            'protected-static-field',
            'protected-static-readonly-field',
            'private-static-field',
            'private-static-readonly-field',
            '#private-static-field',
            '#private-static-readonly-field',
            'public-decorated-field',
            'public-decorated-readonly-field',
            'protected-decorated-field',
            'protected-decorated-readonly-field',
            'private-decorated-field',
            'private-decorated-readonly-field',
            'public-instance-field',
            'public-instance-readonly-field',
            'protected-instance-field',
            'protected-instance-readonly-field',
            'private-instance-field',
            'private-instance-readonly-field',
            '#private-instance-field',
            '#private-instance-readonly-field',
            'public-abstract-field',
            'public-abstract-readonly-field',
            'protected-abstract-field',
            'protected-abstract-readonly-field',
            'public-field',
            'public-readonly-field',
            'protected-field',
            'protected-readonly-field',
            'private-field',
            'private-readonly-field',
            '#private-field',
            '#private-readonly-field',
            'static-field',
            'static-readonly-field',
            'instance-field',
            'instance-readonly-field',
            'abstract-field',
            'abstract-readonly-field',
            'decorated-field',
            'decorated-readonly-field',
            'field',
            'readonly-field',
            // Static initialization
            'static-initialization',
            // Constructors
            'public-constructor',
            'protected-constructor',
            'private-constructor',
            // Getters && Setters
            ['get', 'set'],
            // Methods
            'public-static-method',
            'protected-static-method',
            'private-static-method',
            '#private-static-method',
            'public-decorated-method',
            'protected-decorated-method',
            'private-decorated-method',
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
            '#private-instance-method',
            'public-abstract-method',
            'protected-abstract-method',
          ],
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
      ],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': [
        'error',
        {
          ignoreParameters: true,
        },
      ],
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-shadow': [
        'error',
        {
          hoist: 'all',
        },
      ],
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }],
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/semi': ['error', 'always'],
      '@typescript-eslint/type-annotation-spacing': 'error',
      '@typescript-eslint/unified-signatures': 'error',
      'arrow-body-style': 'off',
      'brace-style': ['error', '1tbs'],
      'constructor-super': 'error',
      curly: 'error',
      'dot-notation': 'off',
      'eol-last': 'error',
      eqeqeq: ['error', 'smart'],
      'guard-for-in': 'error',
      'id-denylist': 'off',
      'id-match': 'off',
      indent: 'off',
      'max-len': [
        'error',
        {
          code: 140,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'off',
      'no-console': [
        'error',
        {
          allow: [
            'warn',
            'dir',
            'timeLog',
            'assert',
            'clear',
            'count',
            'countReset',
            'group',
            'groupEnd',
            'table',
            'dirxml',
            'error',
            'groupCollapsed',
            'Console',
            'profile',
            'profileEnd',
            'timeStamp',
            'context',
          ],
        },
      ],
      'no-debugger': 'error',
      'no-empty': 'off',
      'no-empty-function': 'off',
      'no-eval': 'error',
      'no-fallthrough': 'error',
      'no-multi-spaces': 'error',
      'no-new-wrappers': 'error',
      'no-restricted-imports': ['error', 'rxjs/Rx'],
      'no-shadow': 'off',
      'no-throw-literal': 'error',
      'no-trailing-spaces': [
        'error',
        {
          skipBlankLines: true,
        },
      ],
      'no-undef-init': 'error',
      'no-underscore-dangle': 'off',
      'no-unused-expressions': 'off',
      'no-unused-labels': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      quotes: 'off',
      radix: 'error',
      semi: 'off',
      'spaced-comment': [
        'error',
        'always',
        {
          exceptions: ['*'],
          markers: ['/'],
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
