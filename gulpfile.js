var gulp = require('gulp'),
	watch = require('gulp-watch'),
	mocha = require('gulp-mocha');


gulp.task('unit', function () {
	return gulp.src('test/**/*.js')
		.pipe(mocha());
});


gulp.task('watch-unit', function () {
	 return gulp.watch([
      'test/**/*.js',
      'src/**/*.js'
    ], ['unit']);
})