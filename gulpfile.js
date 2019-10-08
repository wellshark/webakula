var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    JSminify = require('gulp-minify'),
    concat = require('gulp-concat'),
    useref = require('gulp-useref'),
    browserSync = require('browser-sync').create(),
    cache = require('gulp-cache'),
    del = require('del');

gulp.task('clean', function (callback) {
    del('dist');
    return cache.clearAll(callback);
});

gulp.task('not_cached_image_min', function () {
    return gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
    // кэширование изображений, прошедших через imagemin
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/img'))
});

gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});

// Static Server + watching css/js/html files
gulp.task('serve', function () {

    browserSync.init({
        server: "app/"
    });

    gulp.watch("app/css/*.css", function () {
        return gulp.src("app/css/*.css").pipe(browserSync.stream());
    });
    gulp.watch("app/js/*.js", function () {
        return gulp.src("app/js/*.js").pipe(browserSync.reload());
    });
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('compress_js', function () {
    return gulp.src(['app/js/*.js'])
        .pipe(JSminify({
            ext: {
                min: '.js'
            }, noSource: true
        }))
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('html_rebuild', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('image_min', function () {
    return gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});

gulp.task('minCSS', function () {
    return gulp.src('app/css/**/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.series('minCSS', 'compress_js', 'not_cached_image_min', 'html_rebuild', 'fonts'));