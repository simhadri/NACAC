var config = require('../config');
var gulp = require('gulp');

var paths = {
	src: config.root.src,
	dest: config.root.dest
}

var copyGlobalScriptsFunction = function(){
	gulp.src(paths.src + '/javascripts/global/**/*')
	.pipe(gulp.dest(paths.dest +'/javascripts/global'));
	//console.log('this is the copy vendor scripts function expression');
}

gulp.task('copyGlobalScripts', copyGlobalScriptsFunction);

module.exports = copyGlobalScriptsFunction