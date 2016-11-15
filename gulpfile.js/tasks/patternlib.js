var config = require('../config')
if (!config.tasks.html) return

var browserSync = require('browser-sync')
	//var data         = require('gulp-data')
var gulp = require('gulp')
var gulpif = require('gulp-if')
var handleErrors = require('../lib/handleErrors')
var htmlmin = require('gulp-htmlmin')
var path = require('path')
var render = require('gulp-nunjucks-render')
var fs = require('fs')

var paths = {
	src: path.join(config.root.src, config.tasks.html.src),
	src_components: path.join(config.root.src, config.tasks.html.src + '/_components/'),
	src_shared: path.join(config.root.src, config.tasks.html.src + '/_shared/'),
	dest: path.join(config.root.dest, config.tasks.html.dest)
}

var patternlib = function() {
	var fullHTML = '';
	var sharedList = fs.readdirSync(paths.src_shared, 'utf8')
	var componentsList = fs.readdirSync(paths.src_components, 'utf8')
	for (var i = 0; i < sharedList.length; i++) {
		if(sharedList[i] !== 'head.html'){
			fullHTML = fullHTML + '<h2 class="pattern-header">' + sharedList[i] + '</h2><div class="shared-container" data-include="'+sharedList[i]+'">{% include "_shared/' + sharedList[i] + '" %}</div><pre><code id="'+sharedList[i]+'"></code></pre>';
		}
	}
	for (var i = 0; i < componentsList.length; i++) {
		fullHTML = fullHTML + '<h2 class="pattern-header">' + componentsList[i] + '</h2><div class="component-container" data-include="'+componentsList[i]+'">{% include "_components/' + componentsList[i] + '" %}</div><pre><code id="'+componentsList[i]+'"></code></pre>';
	}
	fs.readFile(paths.src + '/_layouts/pattern-template.html', 'utf8', function(err, data) {
		if (err) {
			return console.log(err);
		}
		var result = data.replace(/{{{patternLib}}}/g, fullHTML);

		fs.writeFile(paths.src + '/pattern-library.html', result, 'utf8', function(err) {
			if (err) return console.log(err);
		});
	});
	return gulp.src(paths.src);
}

gulp.task('patternlib', patternlib)
module.exports = patternlib
