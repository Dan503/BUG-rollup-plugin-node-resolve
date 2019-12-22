const gulp = require('gulp')
const { exec } = require('child_process')

gulp.task('rollup', done => {
	exec('npx rollup -c', (error, stdout, logInfo) => {
		console.log(logInfo)
		done(error)
	})
})
