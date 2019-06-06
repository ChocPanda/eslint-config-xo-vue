const xoConfigRules = require('eslint-config-xo').rules;

module.exports = {
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
		'vue/dot-location': xoConfigRules['dot-location'],
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
			'tab',
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
					void: 'never',
					normal: 'always',
					component: 'always'
				},
				svg: 'always',
				math: 'always'
			}
		],
		'vue/jsx-uses-vars': ['error'],
		'vue/key-spacing': xoConfigRules['key-spacing'],
		'vue/keyword-spacing': xoConfigRules['keyword-spacing'],
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
		'vue/no-deprecated-scope-attribute': 'warn',
		'vue/no-dupe-keys': ['error'],
		'vue/no-duplicate-attributes': [
			'error',
			{
				allowCoexistClass: true,
				allowCoexistStyle: true
			}
		],
		'vue/no-empty-pattern': xoConfigRules['no-empty-pattern'],
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
		'vue/no-unused-components': ["error", {
			"ignoreWhenBindingPresent": true
		}],
		'vue/no-unused-vars': xoConfigRules['no-unused-vars'],
		'vue/no-v-html': ['error'],
		'vue/object-curly-spacing': xoConfigRules['object-curly-spacing'],
		'vue/order-in-components': ['warning' { "order": [
      "el",
      "name",
      "parent",
      "functional",
      ["delimiters", "comments"],
      ["components", "directives", "filters"],
      "extends",
      "mixins",
      "inheritAttrs",
      "model",
      ["props", "propsData"],
      "data",
      "computed",
      "watch",
      "LIFECYCLE_HOOKS",
      "methods",
      ["template", "render"],
      "renderError"
    ]
  }],
  "vue/prop-name-casing": ["error", "camelCase"],
		'vue/require-component-is': ['error'],
		'vue/require-default-prop': ['error'],
		'vue/require-direct-export': ['warn'],
		'vue/require-prop-type-constructor': ['error'],
		'vue/require-prop-types': ['error'],
		'vue/require-render-return': ['error'],
		'vue/require-v-for-key': ['error'],
		'vue/require-valid-default-prop': ['error'],
		'vue/return-in-computed-property': ["error", {
			"treatUndefinedAsUnspecified": true
		}],
		'vue/script-indent': ["error", "tab", {
			"baseIndent": 1,
			"switchCase": 1
		}],
		'vue/singleline-html-element-content-newline': ["error", {
			"ignoreWhenNoAttributes": true,
			"ignoreWhenEmpty": true,
			"ignores": ["pre", "textarea"]
		}],
		'vue/space-infix-ops': xoConfigRules['space-infix-ops'],
		'vue/space-unary-ops': xoConfigRules['space-unary-ops'],
		'vue/this-in-template': ['error', 'always'],
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
		'vue/valid-v-text': ['error']
	}
};
