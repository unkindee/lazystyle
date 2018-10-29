var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

//Compile Sass into CSS and inject into browser
gulp.task('sass', function () {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/style.scss'])
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream())
});

//Move the js dependencies files into src/js
gulp.task('js', function () {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.stream())
});

//Move fontAwesome dependencies files into src/fonts
gulp.task('fonts', function() {
    return gulp.src('node_modules/font-awesome/fonts/*')
      .pipe(gulp.dest('src/fonts'))
  })

//Static Server + watch html/scss
gulp.task('serve', ['sass'], function(){

    browserSync.init({
        server: './src'
    })

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/**/*.scss'], ['sass']);
    gulp.watch(['src/*.html']).on('change', browserSync.reload);
    
});

gulp.task('default', ['js', 'fonts', 'serve']);

