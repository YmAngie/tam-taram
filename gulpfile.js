const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const ejs = require('gulp-ejs');
const gutil = require('gulp-util');
const stylelint = require('gulp-stylelint');
const eslint = require('gulp-eslint');

browserSync.create();

browserSync.init({
    server: {
        baseDir: 'dist'
    },
    files: [
        'dist/**/*.*'
    ]
});

gulp.task('styles', () => {
    gulp.src('src/less/main.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('img', () => {
    gulp.src('src/img/**/*.*')
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('js', () => {
    gulp.src('src/js/**/*.*')
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('html', () => {
    gulp.src('src/index.ejs')
        .pipe(ejs().on('error', gutil.log))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('stylelint', () => {
    return gulp.src(['src/less/**/*.less'])
        .pipe(stylelint({
            reporters: [
                {formatter: 'string', console: true}
            ]
        }));
});

gulp.task('eslint', () => {
    return gulp.src(['src/js/**/*.*', 'gulpfile.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.watch('src/less/**/*.less', ['styles']);
gulp.watch('src/**/*.ejs', ['html']);
gulp.watch('src/img/**/*.*', ['img']);
gulp.watch('src/js/**/*.*', ['js']);

gulp.task('default', ['stylelint', 'styles', 'html', 'img', 'js']);
