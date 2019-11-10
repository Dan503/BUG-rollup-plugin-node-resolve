const gulp = require('gulp')
const rollup = require('rollup-stream')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const sourcemaps = require('gulp-sourcemaps')

// const resolve = require('rollup-plugin-node-resolve')
const CommonJS = require('rollup-plugin-commonjs')

const rollupJS = (inputFile, options) => {
	return () => {
		return (
			rollup({
				input: options.basePath + inputFile,
				format: options.format,
				sourcemap: options.sourcemap,
				plugins: [
					// resolve()
					CommonJS(),
				],
			})
				// point to the entry file.
				.pipe(source(inputFile, options.basePath))
				// we need to buffer the output, since many gulp plugins don't support streams.
				.pipe(buffer())
				.pipe(sourcemaps.init({ loadMaps: true }))
				// some transformations like uglify, rename, etc.
				.pipe(sourcemaps.write('.'))
				.pipe(gulp.dest(options.distPath))
		)
	}
}

gulp.task(
	'rollup',
	rollupJS('main.js', {
		basePath: './src/',
		format: 'iife',
		distPath: './dist',
		sourcemap: true,
	}),
)
