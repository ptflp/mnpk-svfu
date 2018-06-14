var
	gulp 		= require("gulp"),
	browserSync = require('browser-sync').create(),
	sass		= require("gulp-sass");

gulp.task("reload-css", function () {
	gulp.src('./src/*.scss')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('./src/css/'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['reload-css'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("./src/*.scss", ['reload-css']);
    gulp.watch("./src/*.html").on('change', browserSync.reload);
});


gulp.task("default",['serve']);