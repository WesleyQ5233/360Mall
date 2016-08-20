var gulp = require("gulp");
var imgmin = require("gulp-imagemin");
var cssminfiy = require("gulp-minify-css");
/*var concat = require("gulp-concat");*/
var uglify= require("gulp-uglify");
var htmlmin = require("gulp-htmlmin");

/*
var sass = require("gulp-sass");
var connect = require("gulp-connect");
var concat = require("gulp-concat");
var uglify= require("gulp-uglify");
var rename = require("gulp-rename");
var cssminfiy = require("gulp-minify-css");
var htmlmin = require("gulp-htmlmin");
var imgmin = require("gulp-imagemin");
*/


//图片 压缩
gulp.task("minimg",function(){
    return gulp.src("images/*").pipe(imgmin()).pipe(gulp.dest("dist/images"));
})
//css 压缩
gulp.task("mincss",function(){
    return gulp.src("css/*.css").pipe(cssminfiy()).pipe(gulp.dest("dist/css"));
})
// 压缩 js
gulp.task("minjs",function(){
    return gulp.src("js/**/*.js").pipe(uglify()).pipe(gulp.dest("dist/js"))
})

//data 文件的复制 就不用压缩啦
gulp.task("copy-data",function(){
    return gulp.src("data/**/*").pipe(gulp.dest("dist/data"));
})

//html 压缩
gulp.task("minhtml",function(){
    return gulp.src("html/**/*").pipe(htmlmin({collapseWhitespace: true,minifyCSS:true,minifyJS:true,removeComments: true,removeStyleLinkTypeAttributes: true})).pipe(gulp.dest("dist/html"));
})

gulp.task("default",["minimg","mincss","minjs","minhtml","copy-data"]);

/*
//单个文件copy
gulp.task("copy-index",function(){
    return gulp.src("index.html").pipe(htmlmin({collapseWhitespace: true,minifyCSS:true,minifyJS:true})).pipe(gulp.dest("dist"));
})

//排除 文件 !
gulp.task("copy-c-d",function(){
    return gulp.src(["configs/!*","data/!*","!data/test.json"]).pipe(gulp.dest("dist/data"));
})

//watch来自动同步
gulp.task("watchfiles",function(){
    gulp.watch("index.html",["copy-index"]);
    gulp.watch("images/!**!/!*",["copy-images"]);
    gulp.watch(["configs/!*","data/!*","!data/test.json"],["copy-c-d"]);
    gulp.watch("scss/!**!/!*.scss",["sass"]);
})

gulp.task("default",["copy-c-d","copy-index"]);

//对scss目录下的所有.scss的文件进行编译和发布
gulp.task("sass",function(){
    return gulp.src("scss/!**!/!*.scss").pipe(sass({outputStyle:"compressed"})).pipe(gulp.dest("dist/css"))
})

//通过gulp-connect 搭建本地服务器
gulp.task("servers",function(){
    connect.server({
        "root":"dist"
    });
})

//合并js
gulp.task("js",function(){
    return gulp.src("js/!**!/!*.js").pipe(concat("all.js")).pipe(gulp.dest("dist/js")).pipe(uglify()).pipe(rename("all.min.js")).pipe(gulp.dest("dist/js"))
})


gulp.task("mincss",function(){
    return gulp.src("style/!*.css").pipe(cssminfiy()).pipe(gulp.dest("dist/style"));
})

gulp.task("minimg",function(){
    return gulp.src("images/!*").pipe(imgmin()).pipe(gulp.dest("dist/img"));
})

*/
