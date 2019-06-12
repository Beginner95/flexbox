module.exports = function () {
  $.gulp.task('images', function () {
    return $.gulp.src('img/**/*.{jpg,png,svg}')
        .pipe($.gp.imagemin([
        	$.gp.imagemin.jpegtran({progressive: true}),
        	$.imageminJpegRecompress({
        		loops: 5,
        		min: 65,
        		max: 70,
        		quality: 'medium'
        	}),
        	$.gp.imagemin.optipng({optimizationLevel: 3}),
        	$.pngquant({quality: '65-70', speed: 5}),
        	$.gp.imagemin.svgo()
        ]))
        .pipe($.gulp.dest('build/img'))
  });
};