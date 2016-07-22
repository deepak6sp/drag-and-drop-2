'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
 
gulp.task('sass', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./style'));
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('./scss/**/*.scss').on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});


gulp.task('default',["serve"]);