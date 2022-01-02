const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

// Compile the SCSS into CSS
function style() {
	// 1. Where is my scss file
	return (
		gulp
			.src("./scss/**/*.scss")

			// 2. Pass that file through sass compiler
			.pipe(sass())

			// 3. Where do I save the complied CSS?
			.pipe(gulp.dest("./css"))
	);
}

function watch() {
	browserSync.init({
		server: {
			baseDir: "./",
		},
	});
	gulp.watch("./scss/**/*.scss", style);
	gulp.watch("./css/**/*.css").on("change", browserSync.reload);
	gulp.watch("./*.html").on("change", browserSync.reload);
	gulp.watch("./js/*.js").on("change", browserSync.reload);
}

exports.default = gulp.series(style, watch);
