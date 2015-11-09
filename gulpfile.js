'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');

const PATH = {
    js: [
        './routes/**/*.js',
        './components/*.jsx',
        './*.js'
    ]
};

gulp.task('lint', () => {
    return gulp.src(PATH.js)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('watch', () => {
    gulp.watch(PATH.js, ['lint']);
});

gulp.task('default', ['watch']);
