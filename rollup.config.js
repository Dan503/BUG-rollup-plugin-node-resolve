const CommonJS = require('@rollup/plugin-commonjs')
const NodeResolve = require('@rollup/plugin-node-resolve')

export default {
	input: 'src/main.js',
	output: {
		format: 'iife',
		file: 'dist/main.js',
		sourcemap: true,
	},
	plugins: [CommonJS(), NodeResolve()],
}
