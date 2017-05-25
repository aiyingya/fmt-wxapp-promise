/* jshint globalstrict:true, node:true */

'use strict';
var gulp = require('gulp');
var del = require('del');
const $ = require('gulp-load-plugins')()
const babel = require("gulp-babel");
// img min plugin
//var concat = require('gulp-concat');
// concat plugin
//var uglify = require('gulp-uglify');

// javascript file tasks
gulp.task('js', function() {
    gulp.src('./src/*.js')
    .pipe($.babel())
//      .pipe(uglify())
//				.pipe(concat('wxapp-promise.js'))
        .pipe(gulp.dest('dist/'));
});

// 清理
gulp.task('clean', function (cb) {
  return del(['./dist']);
});

// default task
gulp.task('build', ['js'], function() {

});
//default 任务
gulp.task('default',['clean'],function() {
  gulp.start('build');
});
