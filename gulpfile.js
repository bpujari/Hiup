var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var plumber = require('gulp-plumber');
var rename = require("gulp-rename");
var browserSync = require('browser-sync').create();


// Styles Tasks
gulp.task('styles', function () {
  gulp.src('components/stylesheets/**/*.scss')
  	.pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

// Scripts Tasks
gulp.task('scripts', function() {
  return gulp.src('components/scripts/*.js')
  	.pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

gulp.task('js-watch', ['scripts'], browserSync.reload);

// Uglify-js Plugins Tasks
gulp.task('uglify-js', function() {
  return gulp.src(['components/libs/Materialize/dist/js/materialize.js',
    'components/libs/jquery/dist/jquery.js',
    'components/libs/owlcarousel/owl-carousel/owl.carousel.js',
    'components/libs/ScrollToFixed/jquery-scrolltofixed.js',
    'components/libs/simpleParallax/js/jquery.simpleparallax.js',
    'components/libs/wow/dist/wow.js',
    'components/libs/matchHeight/dist/jquery.matchHeight.js'])
  	.pipe(rename({
	    suffix: ".min",
	    extname: ".js"
  	}))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

// Minify-css Plugins Tasks
gulp.task('minify-css', function() {
  return gulp.src(['components/libs/Materialize/dist/css/materialize.css',
    'components/libs/font-awesome/css/font-awesome.css',
    'components/libs/owlcarousel/owl-carousel/owl.carousel.css',
    'components/libs/simpleParallax/css/simpleparallax.css',
    'components/libs/wow/css/libs/animate.css'])
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename({
	    suffix: ".min",
	    extname: ".css"
  	}))
    .pipe(gulp.dest('css'));
});

// Images Tasks
gulp.task('img-min', function(){
	return gulp.src('components/images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('images'));
});

// Watch
gulp.task('watch', function () {
 browserSync.init({
      server: ""
  });
 
  gulp.watch('components/stylesheets/**/*.scss', ['styles']);
  gulp.watch("components/scripts/*.js", ['js-watch']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
gulp.task('build', ['minify-css', 'uglify-js', 'img-min']);


