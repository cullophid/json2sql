var gulp = require('gulp'),
	watch = require('gulp-watch'),
	jshint = require('gulp-jshint'),
	jshintReporter = require('jshint-stylish'),
	mocha = require('gulp-mocha');


gulp.task('unit',['jshint'], function () {
	return gulp.src('test/**/*.js')
		.pipe(mocha());
});


gulp.task('watch', function () {
	 return gulp.watch([
      'test/**/*.js',
      'src/**/*.js'
    ], ['unit']);
});

gulp.task('jshint', function () {
	return gulp.src([
		'test/**/*.js',
    'src/**/*.js'])
		.pipe(jshint())
    .pipe(jshint.reporter(jshintReporter));
});