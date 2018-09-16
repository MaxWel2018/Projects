var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var config = {
    path: {
        scss: './app/sass/**/*.scss',
        html: './app/index.html'
    },
    output: {
        cssName: 'bundle.min.css',
        path: './app/css'
    }
};

gulp.task('scss', function() {
    return gulp.src(config.path.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat(config.output.cssName))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.output.path))
});


gulp.watch(config.path.scss, ['scss']);
gulp.task('default', ['scss']);
