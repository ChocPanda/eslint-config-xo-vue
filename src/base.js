const xoConfigRules = require('eslint-config-xo').rules;

module.exports = indent => {
	const defaultConfig = {
		parser: require.resolve('vue-eslint-parser'),
		parserOptions: {
			ecmaVersion: 2018,
			sourceType: 'module',
			ecmaFeatures: {
				jsx: true
			}
		},
		env: {
			browser: true,
			es6: true
		},
		plugins: ['vue'],
		rules: {
			// 'vue/no-deprecated-scope-attribute': 'warn',
			// 'vue/keyword-spacing': xoConfigRules['keyword-spacing'],
			// 'vue/dot-location': xoConfigRules['dot-location'],
			// 'vue/no-empty-pattern': xoConfigRules['no-empty-pattern'],
			'vue/attribute-hyphenation': ['error', 'always'],
			'vue/attributes-order': 'warn',
			'vue/block-spacing': 'warn',
			'vue/brace-style': xoConfigRules['brace-style'],
			'vue/camelcase': xoConfigRules.camelcase,
			'vue/comma-dangle': xoConfigRules['comma-dangle'],
			'vue/comment-directive': ['error'],
			'vue/component-name-in-template-casing': [
				'error',
				'PascalCase',
				{ registeredComponentsOnly: false }
			],
			'vue/eqeqeq': xoConfigRules.eqeqeq,
			'vue/html-closing-bracket-newline': [
				'error',
				{
					singleline: 'never',
					multiline: 'always'
				}
			],
			'vue/html-closing-bracket-spacing': [
				'error',
				{
					startTag: 'never',
					endTag: 'never',
					selfClosingTag: 'always'
				}
			],
			'vue/html-end-tags': ['error'],
			'vue/html-indent': [
				'error',
				indent,
				{
					attribute: 1,
					baseIndent: 1,
					closeBracket: 0,
					alignAttributesVertically: true
				}
			],
			'vue/html-quotes': ['error', 'double'],
			'vue/html-self-closing': [
				'error',
				{
					html: {
						void: 'always',
						normal: 'always',
						component: 'always'
					},
					svg: 'always',
					math: 'always'
				}
			],
			'vue/jsx-uses-vars': ['error'],
			'vue/key-spacing': xoConfigRules['key-spacing'],
			'vue/match-component-file-name': [
				'error',
				{
					extensions: ['jsx', 'vue'],
					shouldMatchCase: true
				}
			],
			'vue/max-attributes-per-line': [
				'error',
				{
					singleline: 3,
					multiline: {
						max: 1,
						allowFirstLine: false
					}
				}
			],
			'vue/multiline-html-element-content-newline': [
				'error',
				{
					ignoreWhenEmpty: true
				}
			],
			'vue/mustache-interpolation-spacing': ['error', 'always'],
			'vue/name-property-casing': ['error', 'PascalCase'],
			'vue/no-async-in-computed-properties': ['error'],
			'vue/no-boolean-default': ['error', 'no-default'],
			'vue/no-use-v-if-with-v-for': [
				'error',
				{
					allowUsingIterationVar: false
				}
			],
			'vue/no-dupe-keys': ['error'],
			'vue/no-duplicate-attributes': [
				'error',
				{
					allowCoexistClass: true,
					allowCoexistStyle: true
				}
			],
			'vue/no-multi-spaces': xoConfigRules['no-multi-spaces'],
			'vue/no-parsing-error': ['error'],
			'vue/no-reserved-keys': ['error'],
			'vue/no-restricted-syntax': ['error'],
			'vue/no-shared-component-data': ['error'],
			'vue/no-side-effects-in-computed-properties': ['error'],
			'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
			'vue/no-template-key': ['error'],
			'vue/no-template-shadow': ['error'],
			'vue/no-textarea-mustache': ['error'],
			'vue/no-unused-components': [
				'error',
				{
					ignoreWhenBindingPresent: true
				}
			],
			'vue/no-unused-vars': ['error'],
			'vue/no-v-html': ['error'],
			'vue/object-curly-spacing': xoConfigRules['object-curly-spacing'],
			'vue/order-in-components': [
				'warn',
				{
					order: [
						'el',
						'name',
						'parent',
						'functional',
						['delimiters', 'comments'],
						['components', 'directives', 'filters'],
						'extends',
						'mixins',
						'inheritAttrs',
						'model',
						['props', 'propsData'],
						'data',
						'computed',
						'watch',
						'LIFECYCLE_HOOKS',
						'methods',
						['template', 'render'],
						'renderError'
					]
				}
			],
			'vue/prop-name-casing': ['error', 'camelCase'],
			'vue/require-component-is': ['error'],
			'vue/require-default-prop': ['error'],
			'vue/require-direct-export': ['warn'],
			'vue/require-prop-type-constructor': ['error'],
			'vue/require-prop-types': ['error'],
			'vue/require-render-return': ['error'],
			'vue/require-v-for-key': ['error'],
			'vue/require-valid-default-prop': ['error'],
			'vue/return-in-computed-property': [
				'error',
				{
					treatUndefinedAsUnspecified: true
				}
			],
			'vue/script-indent': [
				'error',
				indent,
				{
					baseIndent: 0,
					switchCase: 1
				}
			],
			'vue/singleline-html-element-content-newline': [
				'error',
				{
					ignoreWhenNoAttributes: true,
					ignoreWhenEmpty: true,
					ignores: ['pre', 'textarea']
				}
			],
			'vue/space-infix-ops': xoConfigRules['space-infix-ops'],
			'vue/space-unary-ops': xoConfigRules['space-unary-ops'],
			'vue/this-in-template': ['error', 'never'],
			'vue/use-v-on-exact': ['error'],
			'vue/v-bind-style': ['error', 'shorthand'],
			'vue/v-on-function-call': ['error', 'always'],
			'vue/v-on-style': ['error', 'shorthand'],
			'vue/valid-template-root': ['error'],
			'vue/valid-v-bind': ['error'],
			'vue/valid-v-cloak': ['error'],
			'vue/valid-v-else-if': ['error'],
			'vue/valid-v-else': ['error'],
			'vue/valid-v-for': ['error'],
			'vue/valid-v-html': ['error'],
			'vue/valid-v-if': ['error'],
			'vue/valid-v-model': ['error'],
			'vue/valid-v-on': ['error'],
			'vue/valid-v-once': ['error'],
			'vue/valid-v-pre': ['error'],
			'vue/valid-v-show': ['error'],
			'vue/valid-v-text': ['error'],
			'import/no-unresolved': ['webpack']
		}
	};

	try {
		// Test whether unicorn config is in scope
		// eslint-disable-next-line no-unused-vars
		const _ = require('eslint-plugin-unicorn');
		return {
			...defaultConfig,
			rules: {
				...defaultConfig.rules,
				'unicorn/prevent-abbreviations': [
					'error',
					{
						whitelist: {
							props: true,
							assetsDir: true
						}
					}
				],
				'unicorn/filename-case': [
					'warn',
					{
						cases: {
							pascalCase: true,
							kebabCase: true
						}
					}
				]
			}
		};
	} catch (error) {}

	return defaultConfig;
};
