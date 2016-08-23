step1:nodejs 4.0-5.0
step2:npm install gulp -g
step3:项目中再安装一次 npm install gulp --save-dev

https://www.npmjs.com/search?q=gulp

npm init 
在当前的项目目录下面创建一个package.json的文件，这个文件主要是保存npm下载包的依赖


npm install 用来执行package.json 

npm uninstall gulp --save-dev


gulp 基本于task(任务)执行工作流,基于插件: uglify

在gulpfile.js文件中编写task

gulp.task 创建一个任务
gulp.src("操作的目录")
gulp.dest("目标目录")
pipe(任务)
**/* 所有子文件夹,下的所有文件