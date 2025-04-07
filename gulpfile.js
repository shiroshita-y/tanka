const gulp = require("gulp");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require('sass'));
const browserSync = require("browser-sync");
const ejs = require("gulp-ejs");
const postcss = require("gulp-postcss"); //Autoprefixと一緒に使うもの
const autoprefixer = require("autoprefixer"); //Autoprefix
const plumber = require("gulp-plumber");
// const imagemin = require("gulp-imagemin");
// const pngquant  = require("imagemin-pngquant");
// const mozjpeg  = require("imagemin-mozjpeg");
// const svgo = require("imagemin-svgo");
const uglify = require("gulp-uglify");
const terser = require("gulp-terser");
const babel = require('gulp-babel');

// directory
const HOME = "app"
const DEV = "app/dev";
const PUBLIC = "app/assets";

// エラーハンドラ
function handleError(err) {
  console.log(err.toString());
  this.emit('end');  // エラーが発生してもタスクを終了しない
}

// ejs
function htmlFunc() {
  return gulp
    .src([DEV + "/ejs/**/*.ejs",'!' + DEV + "/ejs/**/_*.ejs"], {since: gulp.lastRun(htmlFunc) })
    // .pipe(plumber())
    .pipe(plumber({errorHandler: handleError}))
    .pipe(ejs())
    .pipe(rename({extname:".html"}))
    .pipe(gulp.dest(HOME))
    .pipe(browserSync.reload({stream:true}))
}
// style
function stylesFunc() {
  return gulp
    .src([DEV + "/sass/**/*.scss",'!' + DEV + "/sass/**/_*.scss"], {sourcemaps: true/*, since: gulp.lastRun(stylesFunc)*/})
    .pipe(plumber({errorHandler: handleError}))
    .pipe(sass({
      outputStyle: "expanded"
    }).on('error', sass.logError))
    .pipe(postcss([ autoprefixer({
      cascade: false,
          grid: "autoplace"
    })
   ]))
    .pipe(gulp.dest(PUBLIC + "/css", { sourcemaps: "./maps" }))
    .pipe(browserSync.reload({stream:true}));
    // .pipe(browserSync.stream());
}
// SCSSファイルを納品用（/asetts）にコピー
function copyScssFunc() {
  return gulp
    .src([DEV + "/sass/**/*.scss"]) // 元のSCSSファイル
    .pipe(gulp.dest(PUBLIC + "/sass")); // 納品用のsassフォルダに出力
}
// js
function scriptFunc() {
  return gulp
    .src([DEV + "/js/**/*.js",'!' + DEV + "/js/**/_*.js"], { sourcemaps: true })
    .pipe(plumber())
    .pipe(babel({
      presets: ['@babel/preset-env'] // ES6コードをES5にトランスパイル
      // presets: [['@babel/preset-env', { targets: "> 0.25%, not dead" }]] // ← 修正
    }))
    // .pipe(uglify())
    .pipe(terser()) // uglify の代わりに terser を使用
    .pipe(gulp.dest(PUBLIC + "/js"))
    .pipe(browserSync.reload({stream:true}));
}
// images
function imageFunc() {
  return gulp
  .src([DEV + "/img/**/*",'!' + DEV + "/img/**/_*"], {encoding: false,since: gulp.lastRun(imageFunc)})
    .pipe(gulp.dest(PUBLIC + "/img"));
}
// server
function destServer(done) {
  browserSync.init({
      server: {
        baseDir: HOME,
        index  : "index.html"
      },
      reloadOnRestart: true,
  });
  done();
}

// タスクを監視
function watchFiles() {
  gulp.watch(DEV + "/ejs/**/*.ejs",gulp.parallel(htmlFunc));
  gulp.watch(DEV + "/sass/**/*.scss",gulp.parallel(stylesFunc, copyScssFunc));
  gulp.watch(DEV + "/js/**/*.js",gulp.parallel(scriptFunc));
  gulp.watch(DEV + "/img/**/*",gulp.parallel(imageFunc));
}
// exports.default = gulp.series(gulp.parallel(stylesFunc, htmlFunc, scriptFunc, imageFunc), gulp.series(destServer, watchFiles));
exports.default = gulp.series(
  gulp.parallel(stylesFunc, htmlFunc, scriptFunc, imageFunc, copyScssFunc), // 並列処理
  gulp.series(destServer, watchFiles)
);