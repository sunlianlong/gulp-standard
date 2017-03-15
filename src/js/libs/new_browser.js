/**
 * Created by Mr.zhao on 2016/11/1.
 */
function Browser(){
    var us = navigator.userAgent.toLowerCase();
    var instance = {};
    instance.system = getSystem();
    instance.isIOS9 = checkIOS9();
    instance.isIOS10 = checkIOS10();
    instance.isBaiduApp = checkBaiduApp();
    instance.isBaiduBrowser = checkBaiduBrowser();
    instance.isWechat = checkWechat();
    instance.isQQ = checkQQ();
    instance.isSafari = checkSafari();

    function getSystem(){
        if(us.indexOf("android") != -1 || us.indexOf("linux") != -1){
            return "Android";
        }
        if(us.indexOf("safari") != -1){
            if(us.indexOf("windows") != -1){
                return "pc";
            }
            else{
                if(us.indexOf("mac") != -1){
                    return "ios";
                }
                else{
                    return "Android";
                }
            }
        }
        if(us.indexOf("iphone") != -1 || us.indexOf("ipad") != -1 || us.indexOf("ios") != -1){
            if(us.indexOf("mac") != -1){
                return "ios";
            }
        }
        if(us.indexOf("iuc") != -1 && us.indexOf("mac") != -1){
            return "ios";
        }
        return "pc";
    };

    function checkIOS9(){
        var n = us.match(/OS [9]_\d[_\d]* like Mac OS X/i);
        if(n == null){
            return false;
        }
        return true;
    };

    function checkIOS10() {
        var n = us.match(/OS [1][0]_\d[_\d]* like Mac OS X/i)
        if(n == null){
            return false;
        }
        return true;
    };

    function checkSafari() {
        var n = us.match(/version\/([\d.]+).*safari/);
        var m = us.indexOf('mqqbrowser/');
        var j = us.indexOf('baidubrowser');
        // alert(m);
        // if(n != null && m == -1) {
        if(n != null && m == -1 && j == -1) {
            return true;
        }
        return false;
    };
    function checkBaiduApp(){
        if(us.indexOf("baiduboxapp") != -1){
            return true;
        }
        return false;
    };
    function checkBaiduBrowser(){
        if(us.indexOf("baidubrowser") != -1){
            return true;
        }
        return false;
    };
    function checkWechat(){
        if(us.indexOf("micromessenger") != -1){
            return true;
        }
        return false;
    };
    function checkQQ(){
        if (us.match(/QQ\//i) == "QQ/") {
            return true;
        }
        return false;
    };
    return instance;
}