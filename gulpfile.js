//引入插件
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-minify-css'),
    cssver = require('gulp-make-css-url-version'),
    autoprefixer = require('gulp-autoprefixer'),
    requirejsOptimize = require('gulp-requirejs-optimize'),
    rev = require('gulp-rev-append'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect'),
    url = require('url'),
    proxy = require('proxy-middleware'),
    runSequence = require('run-sequence');

// 默认文
var host = {
	// 最终输出目录
    lastUrl: 'dist/',
	// 默认开发输出目录
    path: 'www/',
    // 默认源目录
    devUrl:"src/",
    // 指定rjs压缩的index.js文件输出地址
    outUrl:'out-require-js',
    // 设置服务端口
    port: 8080,
    // 代理的路由----建议与nginx配置相同
    proxy:'/yqget',
    //需要被代理的服务端地址
    url:'http://106.75.63.191:9789'
};
var forbuild = true;
// 清除生成的文件
gulp.task('clean', function() {
  return    gulp.src([host.path,host.outUrl,host.lastUrl])
    		.pipe(clean());
});
//require打包文件
gulp.task('rjs', function () {
	return  gulp.src('src/js/index.js')
		    .pipe(requirejsOptimize({
		      mainConfigFile: host.devUrl+'js/config/config.js',
		      optimize:"none",//否压缩  默认使用uglify压缩
		      name: "almond",
			  include: "index",
			  findNestedDependencies:true
		    }))
		    .pipe(gulp.dest(host.lastUrl+"/js/"));
  
});
// 复制index.html
gulp.task("html",function(){
	if(forbuild){
		return  gulp.src(host.devUrl+"index.html")
			    .pipe(rev())
			    .pipe(gulp.dest(host.path))
			    .pipe(connect.reload());//自动刷新
	}else{
		return  gulp.src(host.devUrl+"index.html")
			    .pipe(rev())
			    .pipe(gulp.dest(host.lastUrl));
	}
    
});
// 复制图片
gulp.task("images",function(){
	if(forbuild){
		return  gulp.src(host.devUrl+"img/**/*")
    			.pipe(gulp.dest(host.path+"img"))
	}else{
		return  gulp.src(host.devUrl+"img/**/*")
    			.pipe(gulp.dest(host.lastUrl+"img"))
	}
});
//sass转css加前缀加版本号操作
gulp.task('scss', function() {
	if(forbuild){
		return  gulp.src(host.devUrl+'css/*.scss')
		        .pipe(sass())
		        .pipe(autoprefixer({
		            browsers: ['last 2 versions', 'Android >= 4.0'],
		            cascade: false, //是否美化属性值 默认：true 像这样：
		            //-webkit-transform: rotate(45deg);
		            //        transform: rotate(45deg);
		            remove:true //是否去掉不必要的前缀 默认：true
		        }))
		        .pipe(cssver()) //给css文件里引用文件加版本号（文件MD5）
		        .pipe(cssmin({
		            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
		            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
		            keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
		            keepSpecialComments: '*'//保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
		        }))
		        .pipe(gulp.dest(host.devUrl+'css'));
	}else{
		return  gulp.src(host.devUrl+'css/*.scss')
		        .pipe(sass())
		        .pipe(autoprefixer({
		            browsers: ['last 2 versions', 'Android >= 4.0'],
		            cascade: false, //是否美化属性值 默认：true 像这样：
		            //-webkit-transform: rotate(45deg);
		            //        transform: rotate(45deg);
		            remove:true //是否去掉不必要的前缀 默认：true
		        }))
		        .pipe(cssver()) //给css文件里引用文件加版本号（文件MD5）
		        .pipe(cssmin({
		            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
		            keepSpecialComments: '*'//保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
		        }))
		        .pipe(gulp.dest(host.devUrl+'css'));
	}
    
});
// 复制css文件
gulp.task('css', function() {
	if(forbuild){
		return  gulp.src(host.devUrl+"css/**/*.css")
    			.pipe(gulp.dest(host.path+"css"))
	}else{
		return  gulp.src(host.devUrl+"css/**/*.css")
    			.pipe(gulp.dest(host.lastUrl+"css"))
	}
    
});
//复制JS
gulp.task("js",function(){
	if(forbuild){
		return  gulp.src(host.devUrl+"js/**/*.*")
    			.pipe(gulp.dest(host.path+"js"))
	}else{
		return  gulp.src(host.devUrl+"js/**/*.*")
    			.pipe(gulp.dest(host.lastUrl+"js"))
	}
    
});

// 初始化目录
gulp.task('init', function(done) {
	runSequence(['clean'],['images'], ['js'], ['scss'],['css'], ['html'],done);
});
gulp.task('build', function(done) {
	forbuild = false;
	runSequence(['clean'],['images'],['rjs'], ['scss'],['css'], ['html'],done);
});
// 侦听
gulp.task("watch",function(){
    // 监听图片
    gulp.watch(host.devUrl+"img/**/*",["images"]);
    // 监听主文件
    gulp.watch(host.devUrl+"index.html",["html"]);
    // 设置队列
    gulp.watch(host.devUrl+"js/**/*.js",['js',"html"]);
    gulp.watch(host.devUrl+"css/**/*.*",['scss','css',"html"]);
});

// 使用connect启动一个Web服务器
gulp.task('connect', function() {
    connect.server({
        root: host.path,
        port: host.port,
        livereload: true,
		middleware: function (connect, opt) {
            var proxyOptions = url.parse(host.url);
            proxyOptions.route = host.proxy;
            return [
            	proxy(proxyOptions)
            ]
        }
    });
});
// 开启事件监听，对所有的修改进行实时更新
gulp.task('default',["connect","watch"]);