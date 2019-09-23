// var gulp = require('gulp'),
//     cleanCSS = require('gulp-clean-css'),
//     autoprefixer = require('gulp-autoprefixer'),
//     imagemin = require('gulp-imagemin'),
//     JSminify = require('gulp-minify');
//
// gulp.task('compress_js', function() {
//     return gulp.src(['trikotatv/js/*.js'])
//         .pipe(JSminify({
//             ext:{
//                 min:'.js'
//             }, noSource: true
//         }))
//         .pipe(gulp.dest('dist/js'))
// });
//
//
//
// gulp.task('imagemin', function () {
//     return gulp.src('trikotatv/img/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/imagemin'))
// });
// gulp.task('autoprefix', function () {
//     return gulp.src('dist/style.css')
//         .pipe(autoprefixer({
//             cascade: false
//         }))
//         .pipe(gulp.dest('dist/autoprefix'))
// });
//
// gulp.task('minCSS', function () {
//     return gulp.src('trikotatv/css/*.css')
//         .pipe(cleanCSS({compatibility: 'ie8'}))
//         .pipe(gulp.dest('dist'));
// });
//
// gulp.task('css_watcher', function () {
//     gulp.watch('trikotatv/css/style.css', gulp.series('minCSS'));
// });
//
// gulp.task('default', gulp.series('minCSS', 'autoprefix'));
