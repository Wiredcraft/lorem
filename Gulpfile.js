process.env.NODE_ENV = 'test';
process.env.DEBUG = 'carcass:*';
require('should');

var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var coffeelint = require('gulp-coffeelint');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

// Files.
var src = 'src/**/*.coffee';
var tests = 'test/*.mocha.js';

// Compile coffee scripts.
gulp.task('coffee', function() {
    return gulp.src(src)
        .pipe(coffee({
            bare: true
        }).on('error', gutil.log))
        .pipe(gulp.dest('./'));
});

// Lint (or hint as an alias).
gulp.task('lint', ['coffeelint', 'jshint']);
gulp.task('hint', ['coffeelint', 'jshint']);
gulp.task('coffeelint', function() {
    return gulp.src(src)
        .pipe(coffeelint())
        .pipe(coffeelint.reporter());
});
gulp.task('jshint', function() {
    return gulp.src(['*.js', 'docs/*.js', 'mock/*.js', tests])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// Run tests.
gulp.task('mocha', ['coffee'], function() {
    return gulp.src(tests)
        .pipe(mocha({
            reporter: 'spec'
        }));
});

gulp.task('default', ['coffeelint', 'jshint', 'coffee', 'mocha']);
