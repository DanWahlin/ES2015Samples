var gulp = require('gulp'),
    traceur = require('gulp-traceur'),
    babel = require('gulp-babel'),
    plumber = require('gulp-plumber'),
    es6Path = 'es6/*.js',
    compilePath = 'es6/compiled';

gulp.task('traceur', function () {
    gulp.src([es6Path])
        .pipe(plumber())
        .pipe(traceur({ blockBinding: true }))
        .pipe(gulp.dest(compilePath + '/traceur'));
});

gulp.task('babel', function () {
    return gulp.src([
            es6Path
         ])
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(compilePath + '/babel'));
});

gulp.task('watch', function() {

    gulp.watch([es6Path], ['traceur', 'babel']);

});

gulp.task('default', ['traceur', 'babel', 'watch']);
