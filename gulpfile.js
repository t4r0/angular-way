var connect = require('connect-livereload'),
    gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    webserver = require('gulp-webserver');
    inject = require('gulp-inject'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    stylus = require('gulp-stylus'),
    uglify = require('gulp-uglify'),
    nib = require('nib'),
    livereload = require('tiny-lr'),
    wiredep = require('wiredep').stream;

var lr;

var styles = 'app/styles/**/*.styl';

var paths = {
  tmp : './.tmp/',
  src : 'app/'
};

gulp.task('connect', function(){
  var lrConnect = connect({port: 35729});
});

gulp.task('serve',['stylus','wiredep'], function(){
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      port: 9000,
      open: true,
      fallback: 'index.html'
    })
  );
});

gulp.task('stylus', function(){
  gulp.src(styles)
    .pipe(stylus({ use: nib(), compress: true}))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('.tmp/styles'));
});


gulp.task('watch', function(){
  gulp.watch(styles, ['stylus']);
  gulp.watch(paths.src + '[scripts|styles|images]/*', ['wiredep'])
});

gulp.task('wiredep', function(){
  var styles = gulp.src(
    [paths.tmp + '**/*.css'],
    {read: false}
  );

  var scripts =  gulp.src([
    paths.src + 'scripts/**/*.js'
  ]);

  var wiredepOptions = {
    directory: './app/bower_components',
    src: './app/index.html'
  };

  return gulp.src(paths.src + '**/*.html')
    .pipe(inject(styles, {relative: true}))
    .pipe(inject(scripts, {relative: true}))
    .pipe(wiredep(wiredepOptions))
    .pipe(gulp.dest(paths.src));
});

gulp.task('default', [
  'serve',
  'watch'
]);
