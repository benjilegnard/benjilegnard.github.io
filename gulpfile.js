'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    connect = require('gulp-connect'),
    ghPages = require('gulp-gh-pages'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del');

var config = {
    src: './src/',
    dest: './build/',
    deps:'./node_modules/'
};
