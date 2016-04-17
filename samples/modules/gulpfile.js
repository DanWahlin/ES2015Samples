var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    //traceur = require('gulp-traceur'),
    babel = require('gulp-babel'),
    ts = require('gulp-typescript'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    es6Path = './*.js',
    compilePath = './js',
    dist = './js';

gulp.task('compressScripts', function () {
    gulp.src([
        compilePath + '/*.js'
    ])
        .pipe(plumber())
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist));
});

// gulp.task('traceur', function () {
//     gulp.src([es6Path])
//         .pipe(plumber())
//         .pipe(sourcemaps.init())
//         .pipe(traceur({ blockBinding: true }))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest(compilePath + '/traceur'));
// });

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
