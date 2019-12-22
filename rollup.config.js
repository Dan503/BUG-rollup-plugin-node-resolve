const CommonJS = require('@rollup/plugin-commonjs')
const NodeResolve = require('@rollup/plugin-node-resolve')

export default {
	input: 'input/main.js',
	output: {
		format: 'iife',
		file: 'output/main.js',
		sourcemap: true,
	},
	plugins: [CommonJS(), NodeResolve()],
}
