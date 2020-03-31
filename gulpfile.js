// core

const gulp = require('gulp');
const rename = require('gulp-rename');

// sass

const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

// exports

exports.watch = gulp.series(compile, watcher);
exports.build = gulp.series(compile, minify);

// watcher

function watcher() {
	gulp.watch('./scss/**/*.scss', gulp.series(compile));
}

// compile

function compile() {
	return gulp
		.src('./ceratops.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css'));
}

// minify

function minify() {
	return gulp
		.src('./css/ceratops.css')
		.pipe(cleancss())
		.pipe(rename({ basename: 'ceratops.min' }))
		.pipe(gulp.dest('./css'));
}
