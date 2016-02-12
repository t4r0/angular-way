var batch       =   require('batch-stream2');
var gulp        =   require('gulp');
var livereload  =   require('gulp-livereload');
var watch       =   require('gulp-watch');
var server      =   require('gulp-webserver');
var wiredep     =   require('gulp-wiredep');

var appConfig = {
  app: require('./bower.json').appPath || 'app',
  dist: 'dist'
};

var src = {
  stylus: ['app/**/*.styl'],
  css: ['app/**/*.css'],
  js: ['app/**/**.js'],
  bower: ['bower.json','.bowerrc']
};

var dist = {
  css: '.tmp/styles/'
};

src.styles = src.stylus.concat(src.css);

gulp.task('serve', function(){
  gulp.src('./app')
    .pipe(server({
      fallback: 'index.html',
      open: true
    }));
});

gulp.task('watch', function(){
  livereload.listen();
});

gulp.task('wiredep', function(){
  gulp.src('./app/index.html')
    .pipe(wiredep({
      directory: './bower_components'
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('default', [
    'wiredep',
    'serve',
    'watch'
]);
