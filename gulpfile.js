'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    connect = require('gulp-connect'),
    ghPages = require('gulp-gh-pages'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del');

var config = {
    src: {
        html: './src/*.jade',
        css: './src/css/*.scss'
    },
    dest: './dist/',
    deps: './node_modules/'
};

gulp.task('css', function () {
    return gulp.src(config.src.css)
        .pipe(sass())
        .pipe(gulp.dest(config.dest + '/css'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    return gulp.src(config.src.html)
        .pipe(jade())
        .pipe(gulp.dest(config.dest + '/'))
        .pipe(connect.reload());
});
gulp.task('deploy', ['build'], function () {
    return gulp.src(config.dest + '/**/*')
        .pipe(ghPages());
});
gulp.task('connect', function() {
    connect.server({
        port:8888,
        root: config.dest,
        livereload: true
    });
});
gulp.task('build', ['html', 'css']);

gulp.task('watch', function () {
    gulp.watch(config.src.html,['html']);
    gulp.watch(config.src.css,['css']);
});

gulp.task('default', ['connect', 'watch']);