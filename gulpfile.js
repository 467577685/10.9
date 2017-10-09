/**
 * Created by 123 on 2017/10/9.
 */
var gulp = require('gulp');
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var minifycss = require("gulp-minify-css");
var uglify = require("gulp-uglify");
var webserver = require("gulp-webserver");
gulp.task("minifycss",function(){
    gulp.src("./css/*.css").
        pipe(concat("main.css")).
        pipe(rename({suffix:".min"})).
        pipe(minifycss()).
        pipe(gulp.dest("./css"))

});
gulp.task("minifyjs",function(){
    gulp.src("./js/*.js").
        pipe(concat("main.js")).
        pipe(rename({suffix:".min"})).
        pipe(uglify()).
        pipe(gulp.dest("./js"))

});
gulp.task("server",function(){
    gulp.src("./").
        pipe(webserver({
            livereload:true,
            dectoryListing:true,
            open:true
        }))
});