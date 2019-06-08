import path from 'path';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import license from 'rollup-plugin-license';
import copy from 'rollup-plugin-copy';
import peerDeps from 'rollup-plugin-peer-deps-external';

const plugins = [
	resolve(),
	commonjs({ ignore: ['conditional-runtime-dependency'] }),
	peerDeps(),
	license({
		banner: {
			file: path.join(__dirname, 'LICENSE')
		}
	}),
	copy({
		targets: ['package.json', 'README.md', 'CHANGELOG.md'],
		outputFolder: 'dist'
	})
];

export default [
	{
		input: 'src/index.js',
		output: {
			file: 'dist/index.js',
			format: 'cjs',
			preferConst: true
		},
		plugins
	},
	{
		input: 'src/spaces.js',
		output: {
			file: 'dist/spaces.js',
			format: 'cjs',
			preferConst: true
		},
		plugins
	}
];
