var gulp = require('gulp'),
    traceur = require('gulp-traceur'),
    to5 = require('gulp-6to5'),
    plumber = require('gulp-plumber'),
    es6Path = 'es6/*.js',
    compilePath = 'es6/compiled';

gulp.task('traceur', function () {
    gulp.src([es6Path])
        .pipe(plumber())
        .pipe(traceur({ blockBinding: true }))
        .pipe(gulp.dest(compilePath + '/traceur'));
});

gulp.task('6to5', function () {
    gulp.src([es6Path])
        .pipe(plumber())
        .pipe(to5())
        .pipe(gulp.dest(compilePath + '/to5'));
});

gulp.task('watch', function() {

    gulp.watch([es6Path], ['traceur', '6to5']);

});

gulp.task('default', ['traceur', '6to5', 'watch']);
