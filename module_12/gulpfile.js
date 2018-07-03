var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
 
gulp.task('compress', function (cb) {
  pump([
        gulp.src('src/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('default', function () {
  return gulp.src('src/css/*.css')
    .pipe(concatCss("styles/bundle.css"))
    .pipe(gulp.dest('dist/'));
});