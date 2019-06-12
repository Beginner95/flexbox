module.exports = function () {
	$.gulp.task('copy', function() {
		return $.gulp.src([
			'font/**/*.{woff,woff2}',
			'img/**',
			'*.html'
		], {
			base: '.'
		})
			.pipe($.gulp.dest('build'));			
	});
};