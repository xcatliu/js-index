const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const rimraf = require('rimraf');
const marked = require('marked');
const swig = require('gulp-swig');
const data = require('gulp-data');

gulp.task('default', [
  'build',
]);

gulp.task('clean:gh-pages', () => {
  rimraf.sync('./gh-pages');
});

gulp.task('build', [
  'clean:gh-pages',
  'build:site:pages',
  'build:site:index',
]);

gulp.task('build:site:pages', () => {
  fs.readdirSync('./src').forEach(buildOneLanguage);
});

gulp.task('build:site:index', () => {

});

function buildOneLanguage(language) {
  gulp.src('./src/' + language + '/**/*.md')
    .pipe(data((file) => {
      return {
        content: marked(fs.readFileSync(file.path)),
      };
    }))
    .pipe(marked({
    	// optional : marked options
    }))
    .pipe(gulp.dest(path.resolve('./gh-pages', language)));
}

function getData(options) {

}
