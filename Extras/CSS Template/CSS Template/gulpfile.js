var gulp = require("gulp");
var sass = require('gulp-sass');
var dartsass = require("gulp-dart-sass");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require('browser-sync').create();
var gcmq = require('gulp-group-css-media-queries');
var cleanCSS = require("gulp-clean-css");
var include = require("gulp-include");
var del = require('del');
var modRewrite = require('connect-modrewrite');
sass.compiler = require('node-sass');

/* task to convert sass to minifies css and generate map files resp. */
gulp.task("sass", function () {
  return (
    gulp
      .src("./scss/**/style.scss")
      // return gulp.src('./scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(dartsass())
      .pipe(cleanCSS())
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("./css"))
  );
});
/* task to group-css-media-queries */
gulp.task("gcmq", function () {
  return gulp
    .src("./css/**/*.css")
    .pipe(sourcemaps.init())
    .pipe(gcmq())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("css"));
});

gulp.task("clean", function () {
  return del(["./html/**/*"]);
});

gulp.task("html", async function () {
  gulp
    .src(["./template-html/*.html"])
    .pipe(include())
    .on("error", console.log)
    .pipe(gulp.dest("./static-html"));
});

/* task to reload browser automatically after the changes in file. */
gulp.task("serve", function () {
  browserSync.init({
    injectChanges: true,
    watch: true,
    server: {
      baseDir: "static-html",
      host: "0.0.0.0",
      middleware: [modRewrite(["!\\.\\w+$ /index.html [L]"])],
      routes: {
        "/node_modules": "node_modules",
        "/template-html": "html",
        "/scss": "scss",
        "/css": "css",
        "/images": "images",
        "/fonts": "fonts",
        "/js": "js",
      },
    },
  });
  gulp.watch("./scss/**/*.scss", gulp.series("sass"));

  gulp.watch("./template-html/**/*.html", gulp.parallel("html"));
});

/* task to generate and watch css for the first time */
gulp.task('default', gulp.series('serve'));
