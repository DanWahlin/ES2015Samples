var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
    ts = require('gulp-typescript'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    es2015Path = 'samples/*.js',
    compilePath = 'samples/js',
    dist = 'samples/js';

gulp.task('compressScripts', function () {
    return gulp.src([
        compilePath + '/*.js'
    ])
        .pipe(plumber())
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist));
});

gulp.task('babel', function () {
    return gulp.src([es2015Path])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({
			presets: ['@babel/env']
		}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(compilePath));
});

gulp.task('watch', function() {
    gulp.watch(es2015Path, gulp.series('babel'));
});

gulp.task('default', gulp.series('babel', 'watch', 'compressScripts'));
