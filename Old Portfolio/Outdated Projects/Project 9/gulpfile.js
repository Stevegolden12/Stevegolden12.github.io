'use strict';

var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var uglifycss = require("gulp-uglifycss");
var rename = require("gulp-rename");
var maps = require("gulp-sourcemaps");
var del = require("del");
var jsValidate = require('gulp-jsvalidate');
var babel  = require('gulp-babel');

gulp.task("minifyScripts", function(){
  return gulp.src("js/app.js")
     .pipe(babel({presets: ['es2015']}))
     .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
     .pipe(rename("app.min.js"))
     .pipe(gulp.dest('js'));
});

gulp.task("concatCSS", function(){
  return gulp.src([
        'css/normalize.css',
        'css/main.css'
         ])
     .pipe(concat("app.css"))
     .pipe(gulp.dest('css'));  
}); 

gulp.task("minifyCSS", [("concatCSS")], function(){
  return gulp.src("css/app.css")
    .pipe(uglifycss())
    .pipe(rename("app.min.css"))
    .pipe(gulp.dest('css'));
});

gulp.task("build", [("minifyScripts", "minifyCSS")], function(){  

});

gulp.task("default", [("build")], function(){
  gulp.start("minifyScripts");
});