const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


function css() {
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('css'));
}

function watchFiles() {
    gulp.watch('scss/*.scss', css);
    gulp.watch('index.html');
}

gulp.task('css', css);
gulp.task('watch', gulp.parallel(watchFiles));
gulp.task('js', function () {
    return gulp
        .src(['node_modules/@fortawesome/fontawesome-free/js/all.min.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('js'));
})