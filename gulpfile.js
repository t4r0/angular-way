var batch       =   require('batch-stream2');
var gulp        =   require('gulp');
var livereload  =   require('gulp-livereload');
var stylus      =   require('gulp-stylus');
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

function buildStyles() {
  return gulp.src(src.styles)
    .pipe(stylus({use: ['nib']}))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(dist.css));
}

gulp.task('serve', function(){
  gulp.src('./app')
    .pipe(server({
      fallback: 'index.html',
      open: true
    }));
});

gulp.task('stylus',function(){
  gulp.src('./app/**/*.styl')
    .pipe(stylus({use:['nib']}))
    .pipe(gulp.dest('.tmp/'));
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch(src.styles, buildStyles);
});

gulp.task('wiredep', function(){
  gulp.src('./app/index.html')
    .pipe(wiredep({
      directory: './bower_components'
    }))
    .pipe(gulp.dest('app'));
});
 
gulp.task('default', [
    'stylus',
    'wiredep',
    'serve',
    'watch'
]);
