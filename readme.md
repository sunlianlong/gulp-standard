gulp-rev-append 插件将通过正则(?:href|src)=”(.*)[?]rev=(.*)[“]
查找并给指定链接填加版本号（默认根据文件MD5生成，因此文件未发生改变，此版本号将不会变）
该插件只对存在的文件添加版本号如果方法执行时文件不存在则即使添加下面的参数也不会改变

注意:需要在引用后面添加?rev=@@hash参数




使用方法：
1. npm install
2. gulp init
3. gulp

清除生成的www文件夹
gulp clean

此时代码中的JS是使用requireJS加载

执行
```
gulp rjs
```
将代码使用r.js与almond加载到一起，此时可以去掉requirejs的引用而直接引用合并后的文件（此时代码未压缩）

在gulpfile.js中找到rjs任务中默认设置了压缩为none,注释掉即为使用uglify压缩

执行
```
gulp build
```
生成合并后文件,需要在index.html中去掉require及config的引入，换成index.js


#### 项目默认使用requirejs,默认引入了[JSLite(jquery精简)](http://jslite.io/)、[fastclick.js](https://github.com/ftlabs/fastclick)、[layerMobile.js](https://github.com/sentsin/layer/tree/master/src/mobile)、browser.js(这个来源网络)框架(库),默认使用[hotCss方案](https://github.com/imochen/hotcss)。

###### 备注：[JSLite经过修改已与官网不同(修改了hasClass方法、去掉了ajax中其他方法只保留ajax()方法并增加callback模块与Deferred模块,支持.done()与.fail()方法)。fastclick中对目标为input的标签进行了修改,解决了网上常见的三个跟input相关的bug](https://github.com/sunlianlong/JSliteAjaxDeferred)