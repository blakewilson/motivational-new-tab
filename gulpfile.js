var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('styles', () => {
  return gulp.src('src/app.scss')
    .pipe(sass({
      outputStyle: 'nested',
      includePaths: ['node_modules']
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', function () {
  gulp.watch('src/app.scss', ['styles'])
})
