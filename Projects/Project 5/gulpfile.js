'use strict';

var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var uglifycss = require("gulp-uglifycss");
var rename = require("gulp-rename");
var maps = require("gulp-sourcemaps");
var del = require("del");

gulp.task("sass", function(){
  return gulp.src([
        "base/*.scss",
        "layout/*.scss",
        "utilities/*.scss"
         ])
     .pipe(sass().on('error', sass.logError))
     .pipe(gulp.dest("scss/css"));
});


gulp.task("minifyCSS", function(){
  return gulp.src("css/application.css")
    .pipe(maps.init())
    .pipe(uglifycss())
    .pipe(rename("app.min.css"))
    .pipe(maps.write("./"))
    .pipe(gulp.dest('scss/css'));
});

gulp.task("build", ["sass", "minifyScripts"], function(){  

});

gulp.task("default", [("build")], function(){

});