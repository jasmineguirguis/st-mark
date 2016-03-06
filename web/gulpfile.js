var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');

gulp.task('watch', function() {
  gulp.watch('postcss/*.css', ['postcss']);
});

gulp.task('postcss', function () {
    return gulp.src('postcss/*.css')
        .pipe(sourcemaps.init())
        .pipe( postcss([
          autoprefixer(),
          precss()
        ]))
        .on('error', gutil.log)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css/'))
});

gulp.task('default', ['postcss','watch']);
