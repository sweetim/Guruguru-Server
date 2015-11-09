'use strict';

let gulp = require('gulp');
let jshint = require('gulp-jshint');
let stylish = require('jshint-stylish');

const PATH = {
    js: [
        './routes/**/*.js',
        './components/*.jsx',
        './*.js'
    ]
}

gulp.task('lint', () => {
    return gulp.src(PATH.js)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('watch', () => {
    gulp.watch(PATH.js, ['lint']);
});

gulp.task('default', ['watch']);
