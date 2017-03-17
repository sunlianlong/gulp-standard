# 个人用的gulp配置方案，用于单页跟踪

gulp-rev-append 插件将通过正则(?:href|src)=”(.*)[?]rev=(.*)[“]
查找并给指定链接填加版本号（默认根据文件MD5生成，因此文件未发生改变，此版本号将不会变）
该插件只对存在的文件添加版本号如果方法执行时文件不存在则即使添加下面的参数也不会改变

注意:需要在引用后面添加?rev=@@hash参数

项目中使用gulp-connect+proxy-middleware做代理，相关配置信息请修改gulpfile.js中的host对象。

## 欢迎 [Issues](https://github.com/sunlianlong/gulp-standard/issues/new)

simpleProject为单页面使用require方案；适用于单页活动页

someProjects为多页面项目，使用任何技术均可，但目前没有添加压缩

## 注意：src文件夹中styles放所有样式文件（less、scss、css），gulp在编译时会在src中生成一个css文件，该文件中不要放入任何样式文件（由于gulp-rev-append在修改html文件中的代码是对应文件必须存在的，所以需要在src中也生成一个css便于添加版本号）

#### 项目默认使用requirejs,默认引入了[JSLite(jquery精简)](http://jslite.io/)、[fastclick.js](https://github.com/ftlabs/fastclick)、[layerMobile.js](https://github.com/sentsin/layer/tree/master/src/mobile)、browser.js(这个来源网络)框架(库),默认使用[hotCss方案](https://github.com/imochen/hotcss)。

###### 备注：[点击查看JSLite与fastclick的修改](https://github.com/sunlianlong/JSliteAjaxDeferred)、browser为对浏览器的检查，目前里面有是否是微信、QQ、PC以及是否是浏览器的检查，isBrowser为false表示为webview而不是浏览器