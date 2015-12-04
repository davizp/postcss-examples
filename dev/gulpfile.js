var gulp 			= require('gulp'),
	notify			= require("gulp-notify");

var webserver		= require('gulp-webserver');

var uglify			= require('gulp-uglify');

var postcss 		= require('gulp-postcss'),
	csswring 		= require('csswring'),
	stylus 			= require('gulp-stylus'),
	autoprefixer 	= require('autoprefixer'),
	cssnext 		= require('cssnext'),
	combinemq		= require('gulp-combine-mq');

var wrap			= require('gulp-wrap');

// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 				💻	WEBSERVER							|
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
	gulp.task('webserver', function() {
		gulp.src('../web')
			.pipe(webserver({
				port: 3000,
				livereload: true,
				directoryListing: true
		}));
	});

// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 					⚡	JS								|
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
	gulp.task('js',function(){
		return gulp.src('./js/**/*.js')
		.pipe(uglify())
		.on('error', notify.onError({  message: "Error: <%= error.message %>", title: "JS"}))
		.pipe(notify('JS Success'))
		.pipe(gulp.dest('../web/assets/js'));
	});
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 					📑	CSS								|
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
	gulp.task('styles',function(){
		gulp.slurped = true;
		var processors = [
			// csswring({}), // this is for minification
			require('postcss-import'),
			require('postcss-define-property'),
			autoprefixer,
			cssnext,
			require('postcss-nested'),
			require('postcss-mixins'),
			require('postcss-sassy-mixins'),
			require('postcss-simple-vars'),
			require('postcss-extend'),
			require('postcss-functions')({
				// TODO: CREATE A FUNCTION FILE
			    functions: {
			        "strip-units": function (val) {
			        	val = val.match(/^[0-9]*/g);
						return (val / (val * 0 + 1));
			        },
					px_rem: function (pxval,base) {
						pxval = pxval.match(/^[0-9]*/g) || -1;
						base = (base)?base.match(/^[0-9]*/g) : 16;

						return (pxval / base) + "rem";
					}
			    }
			}),
			require('postcss-calc')
		];
		return gulp.src('./styles/**/*.css')
		.pipe(postcss(processors))
		.on('error', notify.onError({  message: "Error: <%= error.message %>", title: "CSS"}))
		.pipe(notify('CSS Success'))
		.pipe(gulp.dest('../web/assets/css/'));
	});
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 					📝	HTML							|
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
	gulp.task('html', function () {
		return gulp.src(['./views/**/*.html', '!./views/layout.html'])
			.pipe(wrap({src: './views/layout.html'}))
			.pipe(gulp.dest('../web/views'));
	});

// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 					👀	WATCH							|
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
	gulp.task('watch',function(){
		gulp.watch(['./js/**/*.js'],['js']);
		gulp.watch('./styles/**/*.css',['styles']);
		gulp.watch('./views/**/*.html',['html']);
	});

// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// 					📋	TASKS							|
// - - - - - - - - - - - - - - - - - - - - - - - - - - -
	gulp.task('default', ['js','styles','html','watch']);
	gulp.task('server', ['webserver','js','styles','html','watch']);