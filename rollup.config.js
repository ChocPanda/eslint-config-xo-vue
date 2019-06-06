import path from 'path';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import license from 'rollup-plugin-license';

const plugins = [
	resolve(),
	commonjs(),
	license({
		banner: {
			file: path.join(__dirname, 'LICENSE')
		}
	})
];

export default [
	{
		input: 'src/index.js.js',
		output: {
			file: 'dist/index.js',
			format: 'cjs',
			preferConst: true,
			exports: 'default'
		},
		plugins
	},
	{
		input: 'src/spaces.js',
		output: {
			file: 'dist/spaces.js',
			format: 'cjs',
			preferConst: true,
			exports: 'named'
		},
		plugins
	}
];
