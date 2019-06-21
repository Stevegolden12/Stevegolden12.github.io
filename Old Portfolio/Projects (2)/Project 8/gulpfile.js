'use strict';

var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var uglifycss = require("gulp-uglifycss");
var rename = require("gulp-rename");
var maps = require("gulp-sourcemaps");
var del = require("del");

gulp.task("minifystylesCSS", function(){
  return gulp.src("css/styles.css")
    .pipe(maps.init())
    .pipe(uglifycss())
    .pipe(rename("styles.min.css"))
    .pipe(maps.write("./"))
    .pipe(gulp.dest('css'));
});

gulp.task("concatsurveyCSS", function(){
  return gulp.src([
         "css/styles.css",
         "css/survey.css"
         ])
         .pipe(concat("survey-styles.css")
         .pipe(gulp.dest('css');
});

gulp.task("minifysurveyCSS", [("concatsurveyCSS")], function(){
  return gulp.src("css/survey-styles.css")
    .pipe(maps.init())
    .pipe(uglifycss())
    .pipe(rename("survey-styles.min.css"))
    .pipe(maps.write("./"))
    .pipe(gulp.dest('css'));
});

gulp.task("concattourCSS", function(){
  return gulp.src([
         'css/styles.css',
         'css/tour.css'
         ])
         .pipe(concat("survey-tour.css")
         .pipe(gulp.dest('css');
});


gulp.task("minifytourCSS", [("concattourCSS")], function(){
  return gulp.src("css/tour-styles.css")
    .pipe(maps.init())
    .pipe(uglifycss())
    .pipe(rename("tour-styles.min.css"))
    .pipe(maps.write("./"))
    .pipe(gulp.dest('css'));
});

gulp.task("build", [("minifystylesCSS", "minifysurveyCSS", "minifytourCSS")], function(){  

});

gulp.task("default", [("build")], function(){

});