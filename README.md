# eslint-config-xo-vue

<p align="center">
  <a href="https://travis-ci.com/ChocPanda/eslint-config-xo-vue" alt="Travis-CI">
    <img src="https://travis-ci.com/ChocPanda/eslint-config-xo-vue.svg?branch=master"/>
  </a>
  <a href="https://david-dm.org/ChocPanda/eslint-config-xo-vue" alt="dependencies">
    <img src="https://david-dm.org/ChocPanda/eslint-config-xo-vue.svg"/>
  </a>
  <a href="https://www.npmjs.com/package/eslint-config-xo-vue" alt="npm">
    <img alt="npm" src="https://img.shields.io/npm/v/eslint-config-xo-vue.svg?label=npm%40latest&style=popout">
  </a>
  <a href="https://github.com/ChocPanda/eslint-config-xo-vue/blob/master/LICENSE" alt="license">
    <img src="https://img.shields.io/github/license/ChocPanda/eslint-config-xo-vue.svg?style=popout"/>
  </a>
  <a href="https://github.com/xojs/xo" alt="XO code style">
    <img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg"/>
  </a>
  <a href="http://commitizen.github.io/cz-cli/" alt="Commitizen friendly" >
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg"/>
  </a>
  <a href="https://github.com/semantic-release/semantic-release" alt="semantic-release">
    <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg"/>
  </a>
  <a href="https://greenkeeper.io/" alt="Greenkeeper badge" >
    <img src="https://badges.greenkeeper.io/ChocPanda/eslint-config-xo-vue.svg"/>
  </a>
</p>

> ESLint unofficial [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for vue to be used with [eslint-config-xo](https://github.com/xojs/eslint-config-xo)

## Install

```
$ npm install --save-dev eslint-config-xo eslint-config-xo-vue eslint-plugin-vue
```

```
$ yarn add --dev eslint-config-xo eslint-config-xo-vue eslint-plugin-vue
```


## Usage

Add some ESLint config to your package.json:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": [
			"xo",
			"xo-vue"
		]
	}
}
```

Or to .eslintrc:

```json
{
	"extends": [
		"xo",
		"xo-vue"
	]
}
```

Use the `space` sub-config if you want 2 space indentation instead of tabs:

```json
{
	"extends": [
		"xo",
		"xo-vue/space"
	]
}
```

You can also mix it with a [XO](https://github.com/xojs/xo) sub-config:

```json
{
	"extends": [
		"xo/esnext",
		"xo-vue"
	]
}
```

### WARNING

When running eslint be sure to add the [--ext vue](https://eslint.org/docs/user-guide/configuring#specifying-file-extensions-to-lint) command line param

## Tip

### Use with XO

```
$ npm install --save-dev eslint-config-xo-vue eslint-plugin-vue
```

```
$ yarn add --dev eslint-config-xo-vue eslint-plugin-vue
```

```json
{
	"name": "my-awesome-project",
	"xo": {
		"extends": "xo-vue",
		"extensions": ["js", "vue"]
	}
}
```

## Known Issues

### unicorn/filename-case

XO currently doesn't depend on the latest version of the `eslint-plugin-unicorn` and therefore [in my
own projects](https://github.com/ChocPanda/cat-pun/blob/master/packages/client/admin/package.json) I
have a direct dependency on it so I can use the new cases configuration to use pascal case for my components
and kebab case for my other JS files in the `package.json`.

```json
"xo": {
	"rules": {
		"unicorn/filename-case": [
			"warn",
			{
				"cases": {
					"pascalCase": true,
					"kebabCase": true
				}
			}
		]
	}
}
```
### unicorn/prevent-abbreviations - component props

This library doesn't force you to use XO (Despite how strongly I advise you do), therefore I don't setup
the unicorn config. Fortunately as this configuration is based on xo you don't need to override much. Just add
`props` to the whitelist of abbreviations in your `package.json`.

```json
"xo": {
	"rules": {
		"unicorn/prevent-abbreviations": [
			"error",
			{
				"whitelist": {
					"props": true
				}
			}
		]
	}
}
```

## Related

- [eslint-config-xo](https://github.com/xojs/eslint-config-xo) - ESLint shareable config for XO
- [XO](https://github.com/xojs/xo)

## Contributions

See our [contributing doc](./CONTRIBUTING.md), be sure to checkout the [code of conduct](./CONTRIBUTING.md#code-of-conduct)

### Conventional Commits

This project used [conventianal commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/#specification) to manage versions and releases of the library therefore when making a commit please use `yarn commit <COMMIT_PARAMETERS>` and this will guide you through writing a conventional commit message which can be understood work with the ci pipeline
