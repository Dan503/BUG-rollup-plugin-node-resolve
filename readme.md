# Solution for node-resolve and commonjs not working in Gulp

This repository is an example of how to get `@rollup/plugin-commonjs` and `@rollup/plugin-node-resolve` working in Gulp.

## What is the problem?

See [TypeError: Cannot read property 'resolve' of undefined](https://github.com/rollup/plugins/issues/103) and [Error: Could not load [object Object]](https://github.com/rollup/plugins/issues/68) GitHub issues.

The core of the problem is that [Rollup Stream](https://www.npmjs.com/package/rollup-stream) is used to integrate Rollup with Gulp however it is not being maintained anymore though.

New versions of rollup plugins do not work with the Rollup Stream.

## Steps to working around the issue

The key is to use Gulp only as a means to start up Rollup and use rollup to do all the code modifications

1. Create a `rollup.config.js` file in the root folder of your project. Something like the following:

```js
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
```

2. npm install the latest versions of gulp, rollup, the CommonJS plugin and the NodeResolve plugin

```
npm i -D gulp rollup @rollup/plugin-commonjs @rollup/plugin-node-resolve
```

3. Create a gulp task that looks like this: ("child_process" is native to node and does not need npm installing)

```js
const gulp = require('gulp')
const { exec } = require('child_process')

gulp.task('rollup', done => {
	// "npx rollup -c" is the equivalent of a command you would write directly into a terminal window
	exec('npx rollup -c', (error, stdout, logInfo) => {
		console.log(logInfo)
		done(error)
	})
})
```

4. Run `npx gulp rollup` to compile the code.

Make sure to do any modifications to the output through either the `rollup.config.js` file or by passing parameters into the string passed into the `exec()` function call.

Do not do any `.pipe()` calls or anything like that to the `exec()` function as it is not a stream.
