const gulp = require('gulp')
const stylus = require('gulp-stylus')
const nib = require('nib')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')

gulp.task('compile', function () {
  return gulp.src('app.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
      use: nib()
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('build', ['compile'], function () {
  return gulp.src([
    './dist/app.css',
    './node_modules/github-markdown-css/github-markdown.css'
  ])
    .pipe(concat('app.css'))
    .pipe(gulp.dest('../idevjs-angular2/'))
// .pipe(gulp.dest('dist'))
})

gulp.task('watch', ['build'], function () {
  gulp.watch('./stylus/**/*.styl', ['build'])
})

gulp.task('default', ['build'])
