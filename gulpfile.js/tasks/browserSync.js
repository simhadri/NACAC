var browserSync = require('browser-sync')
var config      = require('../config')
var gulp        = require('gulp')

var browserSyncTask = function() {
  browserSync.init(config.tasks.browserSync)
}
gulp.watch( config.tasks.browserSync.files ).on( 'change', browserSync.reload );
gulp.task('browserSync', browserSyncTask)
module.exports = browserSyncTask
