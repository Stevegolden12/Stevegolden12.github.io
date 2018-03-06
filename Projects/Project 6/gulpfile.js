'use strict';

var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var uglifycss = require("gulp-uglifycss");
var rename = require("gulp-rename");
var maps = require("gulp-sourcemaps");
var del = require("del");

gulp.task("minifyCSS", function(){
  return gulp.src("css/styles.css")
    .pipe(maps.init())
    .pipe(uglifycss())
    .pipe(rename("app.min.css"))
    .pipe(maps.write("./"))
    .pipe(gulp.dest('css'));
});

gulp.task("build", ["minifyCSS"], function(){  

});

gulp.task("default", [("build")], function(){

});