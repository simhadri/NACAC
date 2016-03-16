var config = require('../config');
var gulp = require('gulp');

var paths = {
	src: config.root.src,
	dest: config.root.dest
}

var copyJsonFunction = function(){
	gulp.src(paths.src + '/javascripts/data/**/*')
	.pipe(gulp.dest(paths.dest +'/javascripts/data'));
	//console.log('this is the copy vendor scripts function expression');
}

gulp.task('copyJson', copyJsonFunction);

module.exports = copyJsonFunction