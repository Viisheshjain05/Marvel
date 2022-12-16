const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
var dartsass = require("gulp-dart-sass");

const browserSync = require("browser-sync").create();

// 1) compile Sass file into
function style() {
  return (
    // 1) Locate sass file
    gulp
      .src("./scss/**/style.scss")

      // 2) pass file through sass compiler
      .pipe(sass())
      //   .pipe(dartsass())

      // 3) save Compiled css file into folder
      .pipe(gulp.dest("./gulpCss"))
  );
}

// exports.style = style;
gulp.task('default', gulp.series('serve'));
