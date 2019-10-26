const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

// copy html
gulp.task("copyHTML", async function() {
	gulp.src("src/*.html")
		.pipe(gulp.dest("build"));
});

gulp.task("imagemin", async function() {
	gulp.src("src/img/*")
		.pipe(imagemin())
		.pipe(gulp.dest("build/img"));
});

gulp.task("sass", async function() {
	gulp.src("src/sass/*")
		.pipe(sass())
		.on("error", sass.logError)
		.pipe(gulp.dest("build/css"));
});

gulp.task("scripts", async function() {
	gulp.src("src/js/*.js")
		.pipe(concat("app.js"))
		.pipe(ugligy())
		.pipe(gulp.dest("build/js"));
});