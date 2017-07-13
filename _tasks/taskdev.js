var browserSync= require('browser-sync'),
	reload = browserSync.reload;

module.exports = function(gulp, plugins){
	gulp.task('server', function(){
		browserSync.init({
			server: {
				baseDir: './src/'
			},
			ui: false,
			directory: true,
			port: 8090,
			open: false
		});
		gulp.watch('./src/css/*.css').on('change', reload);
		gulp.watch('./src/html/*.*').on('change', reload);
		gulp.watch('./src/script/**/*.js').on('change', reload);
	});


	gulp.task('default',['server'])
}
