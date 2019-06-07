/**
 * MIT License
 *
 * Copyright (c) 2019 Matt Searle
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

var eslintConfigXo = {
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		node: true,
		es6: true
	},
	rules: {
		'comma-dangle': [
			'error',
			'never'
		],
		'for-direction': 'error',
		'getter-return': 'error',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-constant-condition': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty-character-class': 'error',
		'no-empty': [
			'error',
			{
				allowEmptyCatch: true
			}
		],
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		// Disabled because of https://github.com/eslint/eslint/issues/6028
		// 'no-extra-parens': [2, 'all', {
		// 	nestedBinaryExpressions: false,
		// 	ignoreJSX: 'multi-line'
		// }],
		'no-extra-semi': 'error',
		'no-func-assign': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-misleading-character-class': 'error',
		'no-obj-calls': 'error',
		'no-prototype-builtins': 'error',
		'no-regex-spaces': 'error',
		'no-sparse-arrays': 'error',
		'no-template-curly-in-string': 'error',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'require-atomic-updates': 'error',
		'use-isnan': 'error',
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: false
			}
		],
		'no-unexpected-multiline': 'error',
		'accessor-pairs': 'error',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		complexity: 'warn',
		curly: 'error',
		'default-case': 'error',
		'dot-notation': 'error',
		'dot-location': [
			'error',
			'property'
		],
		eqeqeq: 'error',
		'guard-for-in': 'error',
		'no-alert': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-div-regex': 'error',
		'no-else-return': [
			'error',
			{
				allowElseIf: false
			}
		],
		'no-empty-pattern': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-new': 'error',
		'no-octal-escape': 'error',
		'no-octal': 'error',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-return-assign': [
			'error',
			'always'
		],
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': [
			'error',
			{
				props: true
			}
		],
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-warning-comments': 'warn',
		'no-with': 'error',
		'prefer-promise-reject-errors': [
			'error',
			{
				allowEmptyReject: true
			}
		],
		radix: 'error',

		// Disabled for now as it causes too much churn
		// TODO: Enable it in the future when I have time to deal with
		// the churn and the rule is stable and has an autofixer
		// 'require-unicode-regexp': 'error',

		'wrap-iife': [
			'error',
			'inside',
			{
				functionPrototypeMethods: true
			}
		],
		yoda: 'error',
		'no-delete-var': 'error',
		'no-label-var': 'error',
		'no-restricted-globals': [
			'error',
			'event'
		],
		'no-shadow-restricted-names': 'error',
		'no-undef-init': 'error',
		'no-undef': [
			'error',
			{
				typeof: true
			}
		],
		'no-unused-vars': [
			'error',
			{
				ignoreRestSiblings: true,
				argsIgnorePattern: '^_$'
			}
		],
		// Disabled because of https://github.com/eslint/eslint/issues/3420
		// 'callback-return': ['warn', ['cb', 'callback', 'next', 'done']],
		'handle-callback-err': 'warn',
		'no-buffer-constructor': 'error',
		'no-mixed-requires': [
			'error',
			{
				grouping: true,
				allowCall: true
			}
		],
		'no-new-require': 'error',
		'no-path-concat': 'error',
		'no-restricted-imports': [
			'error',
			'domain',
			'freelist',
			'smalloc',
			'sys',
			'colors'
		],
		'no-restricted-modules': [
			'error',
			'domain',
			'freelist',
			'smalloc',
			'sys',
			'colors'
		],
		'array-bracket-newline': [
			'error',
			'consistent'
		],
		'array-bracket-spacing': [
			'error',
			'never'
		],
		'array-element-newline': [
			'error',
			'consistent'
		],
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: false
			}
		],
		camelcase: [
			'error',
			{
				properties: 'always'
			}
		],
		'capitalized-comments': [
			'error',
			'always',
			{
				// You can also ignore this rule by wrapping the first word in quotes
				ignorePattern: 'pragma|ignore|prettier-ignore',
				ignoreInlineComments: true,
				ignoreConsecutiveComments: true
			}
		],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'comma-style': [
			'error',
			'last'
		],
		'computed-property-spacing': [
			'error',
			'never'
		],
		'eol-last': 'error',
		'func-call-spacing': [
			'error',
			'never'
		],
		'func-name-matching': [
			'error',
			{
				considerPropertyDescriptor: true
			}
		],
		'func-names': [
			'error',
			'never'
		],
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'jsx-quotes': 'error',
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true
			}
		],
		'keyword-spacing': 'error',
		'linebreak-style': [
			process.platform === 'win32' ? 'off' : 'error',
			'unix'
		],
		'lines-between-class-members': [
			'error',
			'always'
		],
		'max-depth': 'warn',
		'max-nested-callbacks': [
			'warn',
			4
		],
		'max-params': [
			'warn',
			{
				max: 4
			}
		],
		'max-statements-per-line': 'error',
		'new-cap': [
			'error',
			{
				newIsCap: true,
				capIsNew: true
			}
		],
		'new-parens': 'error',
		'no-array-constructor': 'error',
		'no-lonely-if': 'error',
		'no-mixed-operators': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-assign': 'error',
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1
			}
		],
		'no-negated-condition': 'error',
		'no-new-object': 'error',
		'no-restricted-syntax': [
			'error',
			'WithStatement'
		],
		'no-whitespace-before-property': 'error',
		'no-trailing-spaces': 'error',
		'no-unneeded-ternary': 'error',
		'object-curly-spacing': [
			'error',
			'never'
		],
		// Disabled because of https://github.com/xojs/eslint-config-xo/issues/27
		// 'object-property-newline': 'error',
		'one-var': [
			'error',
			'never'
		],
		'one-var-declaration-per-line': 'error',
		'operator-assignment': [
			'error',
			'always'
		],
		'operator-linebreak': [
			'error',
			'after'
		],
		'padded-blocks': [
			'error',
			'never'
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: 'multiline-block-like',
				next: '*'
			}
		],
		'quote-props': [
			'error',
			'as-needed'
		],
		quotes: [
			'error',
			'single'
		],
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'semi-style': [
			'error',
			'last'
		],
		semi: [
			'error',
			'always'
		],
		'space-before-blocks': [
			'error',
			'always'
		],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-in-parens': [
			'error',
			'never'
		],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': [
			'error',
			'always',
			{
				line: {
					exceptions: [
						'-',
						'+',
						'*'
					],
					markers: [
						'!',
						'/',
						'=>'
					]
				},
				block: {
					exceptions: [
						'-',
						'+',
						'*'
					],
					markers: [
						'!',
						'*'
					],
					balanced: true
				}
			}
		],
		'switch-colon-spacing': [
			'error',
			{
				after: true,
				before: false
			}
		],
		'template-tag-spacing': [
			'error',
			'never'
		],
		'unicode-bom': [
			'error',
			'never'
		],
		'arrow-parens': [
			'error',
			'as-needed'
		],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'constructor-super': 'error',
		'generator-star-spacing': [
			'error',
			'both'
		],
		'no-class-assign': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-new-symbol': 'error',
		'no-this-before-super': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'require-yield': 'error',
		'rest-spread-spacing': [
			'error',
			'never'
		],
		'symbol-description': 'error',
		'template-curly-spacing': 'error',
		'yield-star-spacing': [
			'error',
			'both'
		],
		'valid-jsdoc': [
			'warn',
			{
				requireReturn: false,
				requireParamDescription: true,
				requireReturnDescription: true
			}
		]
	}
};

const xoConfigRules = eslintConfigXo.rules;

var src = {
	parser: commonjsRequire.resolve('vue-eslint-parser'),
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
		'vue/no-unused-components': [
			'error',
			{
				ignoreWhenBindingPresent: true
			}
		],
		'vue/no-unused-vars': xoConfigRules['no-unused-vars'],
		'vue/no-v-html': ['error'],
		'vue/object-curly-spacing': xoConfigRules['object-curly-spacing'],
		'vue/order-in-components': [
			'warning',
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
			'tab',
			{
				baseIndent: 1,
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
var src_1 = src.parser;
var src_2 = src.parserOptions;
var src_3 = src.env;
var src_4 = src.plugins;
var src_5 = src.rules;

exports.default = src;
exports.env = src_3;
exports.parser = src_1;
exports.parserOptions = src_2;
exports.plugins = src_4;
exports.rules = src_5;
