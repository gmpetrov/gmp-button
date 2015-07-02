var gulp = require('gulp'),
    addTemplates = require('gulp-angular-templatecache');

gulp.task('default', function() {
    gulp.src('gmp-button-template.html')
        .pipe(addTemplates('templateFile.js', {module: 'gmp.gmp-button' }))
        .pipe(gulp.dest('dist'));
});