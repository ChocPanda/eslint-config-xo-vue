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

