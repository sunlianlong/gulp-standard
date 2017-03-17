/**
 * Created by Mr.zhao on 2016/11/1.
 */
function Browser(){
    var us = navigator.userAgent.toLowerCase();
    var instance = {};
    instance.system = getSystem();
    instance.isWechat = checkWechat();
    instance.isQQ = checkQQ();
    instance.isBrowser = checkBrowser();
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
    function checkWechat(){
        if(us.indexOf("micromessenger") != -1){
            return true;
        }
        return false;
    };
    function checkQQ(){
        if (us.match(/QQ\//i)&&String(us.match(/QQ\//i)) == "qq/") {
            return true;
        }
        return false;
    };
    function checkBrowser(){
        if (us.match(/zh-cn/i)&&String(us.match(/zh-cn/i)) == "zh-cn") {
            return true;
        }
        return false;
    };
    return instance;
}