# 个人用的gulp配置方案，用于多页面

gulp-rev-append 插件将通过正则(?:href|src)=”(.*)[?]rev=(.*)[“]
查找并给指定链接填加版本号（默认根据文件MD5生成，因此文件未发生改变，此版本号将不会变）
该插件只对存在的文件添加版本号如果方法执行时文件不存在则即使添加下面的参数也不会改变

注意:需要在引用后面添加?rev=@@hash参数

项目中使用gulp-connect+proxy-middleware做代理，相关配置信息请修改gulpfile.js中的host对象。

## 欢迎 [Issues](https://github.com/sunlianlong/gulp-standard/issues/new)


#### 使用方法：
1. npm install
2. gulp init
3. gulp

清除生成的www文件夹
gulp clean

