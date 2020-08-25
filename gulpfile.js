const {src, dest, watch, series, parallel} = require('gulp');

const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// File paths
const files = {
    scssPath: 'scss/custom.scss'
}

function scssTask() {
    return src(files.scssPath)

        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass({})) // compile SCSS to CSS
        .pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(dest('dist')
        ); // put final CSS in dist folder
}

function watchTask() {
    watch([files.scssPath],
        parallel(scssTask));
}

exports.default = series(
    parallel(scssTask),
    watchTask
);