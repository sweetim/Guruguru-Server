'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const PATH = {
    js: [
        './content/*.js',
        './routes/**/*.js',
        './components/**/**',
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
        .pipe(plugins.eslint.failOnError());
});

gulp.task('mocha', () => {
    return gulp.src(PATH.test, { read: false })
        .pipe(plugins.spawnMocha());
});

gulp.task('monitor', () => {
    plugins.nodemon({
        script: 'server.js',
        ext: 'js jsx html',
        env: {
            'DEBUG': 'main:*'
        }
    });
});

gulp.task('watch-mocha', () => {
    gulp.watch(PATH.js.concat(PATH.test), ['mocha']);
});

gulp.task('watch-lint', () => {
    gulp.watch(PATH.js, ['lint']);
});

gulp.task('test', ['lint', 'mocha']);
gulp.task('default', ['watch-mocha']);
gulp.task('watch', ['watch-lint']);
