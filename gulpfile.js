var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    ts = require('gulp-typescript'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    es6Path = 'samples/*.js',
    compilePath = 'samples/js',
    dist = 'samples/js';

gulp.task('compressScripts', function () {
    gulp.src([
        compilePath + '/*.js'
    ])
        .pipe(plumber())
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist));
});

gulp.task('babel', function () {
    gulp.src([es6Path])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(compilePath));
});

gulp.task('watch', function() {

    gulp.watch([es6Path], ['babel']);

});

gulp.task('default', ['babel', 'watch', 'compressScripts']);
