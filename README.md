# eslint-config-xo-vue

## CURRENTLY A WORK IN PROGRESS

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for vue to be used with [eslint-config-xo](https://github.com/xojs/eslint-config-xo)

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
		"extends": "xo-vue"
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
