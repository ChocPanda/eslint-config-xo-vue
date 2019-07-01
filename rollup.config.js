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
		targets: [
			{ src: 'package.json', dest: 'dist/' },
			{ src: 'README.md', dest: 'dist/' },
			{ src: 'CHANGELOG.md', dest: 'dist/' }
		],
		outputFolder: 'dist'
	})
];

const external = ["eslint",
"eslint-config-xo",
"eslint-plugin-vue", "eslint-plugin-unicorn"]

export default [
	{
		input: 'src/index.js',
		output: {
			file: 'dist/index.js',
			format: 'cjs',
			preferConst: true
		},
		external,
		plugins
	},
	{
		input: 'src/spaces.js',
		output: {
			file: 'dist/spaces.js',
			format: 'cjs',
			preferConst: true
		},
		external,
		plugins
	}
];
