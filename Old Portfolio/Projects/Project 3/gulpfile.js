'use strict';

var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var uglifycss = require("gulp-uglifycss");
var rename = require("gulp-rename");
var maps = require("gulp-sourcemaps");
var del = require("del");

gulp.task("concatCSS", function(){
  return gulp.src([
        'css/reset.css',
        'css/main.css'
         ])
     .pipe(maps.init())
     .pipe(concat("app.css"))
     .pipe(maps.write("./"))
     .pipe(gulp.dest('css'));  
}); 

gulp.task("minifyCSS", [("concatCSS")], function(){
  return gulp.src("css/app.css")
    .pipe(maps.init())
    .pipe(uglifycss())
    .pipe(rename("app.min.css"))
    .pipe(maps.write("./"))
    .pipe(gulp.dest('css'));
});


gulp.task("build", [("concatCSS", "minifyCSS")], function(){  

});

gulp.task("default", [("clean")], function(){
  gulp.start("build");
});