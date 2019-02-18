'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var browsersync = require('browser-sync').create();


//TODO understand browsersync

function browserSync(done) {
    browsersync.init({
        proxy: 'localhost:3000'
    });
    done();
}

function browserSyncReload(done) {
    browsersync.reload();
    done();
}

function css() {
    return gulp
        .src("./assets/scss/*.scss")
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(concat('styles.css'))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest("./public/css/"))
        .pipe(browsersync.stream());
}

function scripts() {
    return gulp
        .src([
            './assets/js/generator.js'
        ])
        .pipe(concat('main.js'))
        .pipe(uglify('main.js'))
        .pipe(gulp.dest('./public/js/'))
        .pipe(browsersync.stream());
}

function watchFiles() {
    gulp.watch("./assets/scss/**/*", css);
    gulp.watch("./assets/js/**/*", scripts);
    gulp.watch("./views/**/*", browserSyncReload);
}



const build = gulp.series(gulp.parallel(css, scripts));
const watch = gulp.parallel(watchFiles, browserSync);

exports.css = css;
exports.scripts = scripts;
exports.build = build;
exports.watch = watch;
exports.default = build;