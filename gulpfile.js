const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function(){
    // node source
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("js"));
});

gulp.task('watch', ['default'], function () {
    gulp.watch(["es6/**/*.js"], ['default']);
});