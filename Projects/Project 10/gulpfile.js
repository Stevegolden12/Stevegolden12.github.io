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

gulp.task("concatScripts", function(){
  return gulp.src([
        'js/app.js',
        'js/reportcard.js'
        ])
     .pipe(maps.init())
     .pipe(concat("main.js"))
     .pipe(maps.write("./"))
     .pipe(gulp.dest('js'));
});

gulp.task("minifyScripts", [("concatScripts")], function(){
  return gulp.src("js/main.js")
     .pipe(babel({presets: ['es2015']}))
     .pipe(uglify().on('error', function(e){
            console.log(e);
         }))
     .pipe(rename("main.min.js"))
     .pipe(gulp.dest('js'));
});

gulp.task("concatCSS", function(){
  return gulp.src([
        'css/normalize.css',
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

gulp.task("default", [("minifyCSS")], function(){
  gulp.start("minifyScripts");
});