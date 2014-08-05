var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var serve = require('gulp-serve');

var metalsmith = require('./metalsmith');

var path = require('path');
var root = path.resolve(__dirname);

// Dist.
gulp.task('dist', function(done) {
    metalsmith({}, done);
});

// Default.
gulp.task('default', ['preview']);

// Preview.
gulp.task('preview', ['preview-docs', 'preview-server'], function() {
    gulp.watch([
        root + '/src/**',
        root + '/templates/**'
    ], ['preview-docs']);
});

// Preview.
gulp.task('preview-docs', function(done) {
    metalsmith({
        destination: 'preview',
        meta: 'meta.preview.yaml'
    }, done);
});

// Preview.
gulp.task('preview-server', serve({
    root: root + '/preview',
    port: 4321
}));

// Vendor.
gulp.task('vendor', ['vendorJS']);

// Vendor.
gulp.task('vendorJS', function() {
    return gulp
        .src([
            root + '/bower_components/jquery/dist/jquery.js',
            root + '/bower_components/bootstrap/js/scrollspy.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest(root + '/src/assets/js'));
});

// Vendor.
gulp.task('vendorCSS', function() {
    return gulp
        .src([])
        .pipe(concat('vendor.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(root + '/src/assets/css'));
});
