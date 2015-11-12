'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const PATH = {
    js: [
        './routes/**/*.js',
        './components/**/*.jsx',
        './*.js'
    ],
    test: [
        './test/**/*.test.js'
    ]
};

gulp.task('lint', () => {
    return gulp.src(PATH.js)
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.format())
        .pipe(plugins.eslint.failOnError())
        .pipe(plugins.livereload());
});

gulp.task('mocha', () => {
    return gulp.src(PATH.test, { read: false })
        .pipe(plugins.spawnMocha());
});

gulp.task('watch-mocha', () => {
    gulp.watch(PATH.js.concat(PATH.test), ['mocha']);
});

gulp.task('watch-lint', () => {
    plugins.livereload.listen({ quiet: true });
    gulp.watch(PATH.js, ['lint']);
});

gulp.task('test', ['lint', 'mocha']);
gulp.task('default', ['watch-mocha']);
gulp.task('watch', ['watch-lint']);
