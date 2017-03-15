(function(e,t){typeof define=="function"&&define.amd?define(["JSLite"],t):typeof exports=="object"?module.exports=t(require("JSLite")):e.JSLite=t(e.JSLite)})(this,function(e){function t(e){return e?typeof e.length=="number":null}function n(e,n){var r,i;if(t(e)){for(r=0;r<e.length;r++)if(n.call(e[r],r,e[r])===!1)return e}else for(i in e)if(n.call(e[i],i,e[i])===!1)return e;return e}function i(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?r[T.call(e)]||"object":typeof e}function s(e){return i(e)=="function"}function o(e){return i(e)=="object"}function u(e){return Array.isArray?Array.isArray(e):i(e)==="array"}function a(e){return typeof e=="string"}function f(t){function n(e){return e.hasOwnProperty}return e.type(t)!=="object"||t.nodeType||e.isWindow(t)?!1:t.constructor&&!n.call(t.constructor.prototype,"isPrototypeOf")?!1:!0}function l(e){var t=typeof e=="object"&&T.call(e).toLowerCase()=="[object object]"&&!e.length;return t}function c(e){return e&&e==e.window}function h(e){return e&&e.nodeType==e.DOCUMENT_NODE}function d(t,r){var i,s;return p.singleTagRE.test(t)&&(i=e(document.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(p.tagExpanderRE,"<$1></$2>")),r===undefined&&(r=p.fragmentRE.test(t)&&RegExp.$1),r in p.containers||(r="*"),s=p.containers[r],s.innerHTML=""+t,i=n(w.call(s.childNodes),function(){s.removeChild(this)})),i}function v(e,t,n,r){return s(t)?t.call(e,n,r):t}function m(e){return e.replace(/^-ms-/,"ms-").replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}function g(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function y(e,t,n){var r=[];while(e.length>0)e=$.map(e,function(e){if((e=e[n])&&!h(e)&&r.indexOf(e)<0)return r.push(e),e});return t&&a(t)?$(r).filter(t):$(r)}window&&!window.getComputedStyle&&(window.getComputedStyle=function(e,t){return this.el=e,this.getPropertyValue=function(t){return t=="float"&&(t="styleFloat"),t=m(t),e.currentStyle[t]||null},this}),Array.prototype.filter||(Array.prototype.filter=function(e){if(this===void 0||this===null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(typeof e!="function")throw new TypeError;var r=[],i=arguments.length>=2?arguments[1]:void 0;for(var s=0;s<n;s++)if(s in t){var o=t[s];e.call(i,o,s,t)&&r.push(o)}return r}),Array.indexOf||(Array.prototype.indexOf=function(e){for(var t=0;t<this.length;t++)if(this[t]==e)return t;return-1}),Array.prototype.forEach||(Array.prototype.forEach=function(e){var t=this.length;if(typeof e!="function")throw new TypeError;var n=arguments[1];for(var r=0;r<t;r++)r in this&&e.call(n,this[r],r,this)}),Array.prototype.remove||(Array.prototype.remove=function(e){var t=this.indexOf(e);return t>-1&&this.splice(t,1),this}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")});var r={};n("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){r["[object "+t+"]"]=t.toLowerCase()});var p={};p={singleTagRE:/^<(\w+)\s*\/?>(?:<\/\1>|)$/,fragmentRE:/^\s*<(\w+|!)[^>]*>/,tagExpanderRE:/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,table:document.createElement("table"),tableRow:document.createElement("tr"),containers:{"*":document.createElement("div"),tr:document.createElement("tbody"),tbody:p.table,thead:p.table,tfoot:p.table,td:p.tableRow,th:p.tableRow}};var b=[],w=b.slice,E=b.filter,S=b.some,x={},T=x.toString,N=[1,9,11],C={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},e;e=function(){var e=function(t){return new e.fn.init(t)};return e.fn=e.prototype={init:function(t){var n;if(!t)n=b,n.selector=t||"",n.__proto__=e.fn.init.prototype;else if(typeof t=="string"&&(t=t.trim())&&t[0]=="<"&&/^\s*<(\w+|!)[^>]*>/.test(t))n=d(t),t=null;else{if(s(t))return e(document).ready(t);u(t)?n=t:o(t)?(n=[t],t=null):N.indexOf(t.nodeType)>=0||t===window?(n=[t],t=null):n=function(){var e;return document&&/^#([\w-]+)$/.test(t)?(e=document.getElementById(RegExp.$1))?[e]:[]:w.call(/^\.([\w-]+)$/.test(t)?document.getElementsByClassName(RegExp.$1):/^[\w-]+$/.test(t)?document.getElementsByTagName(t):document.querySelectorAll(t))}()}return n=n||b,e.extend(n,e.fn),n.selector=t||"",n}},e.fn.init.prototype=e.fn,e}(),e.extend=e.fn.extend=function(){var e,t,n,r,i=arguments[0],o=1,u=arguments.length,a=!1;typeof i=="boolean"&&(a=i,i=arguments[1]||{},o=2),typeof i!="object"&&!s(i)&&(i={}),u===o&&(i=this,--o);for(;o<u;o++)if((e=arguments[o])!=null)for(t in e){n=i[t],r=e[t];if(i===r)continue;r!==undefined&&(i[t]=r)}return i},e.extend({isDocument:h,isFunction:s,isObject:o,isArray:u,isString:a,isWindow:c,isPlainObject:f,isJson:l,parseJSON:JSON.parse,type:i,likeArray:t,trim:function(e){return e==null?"":String.prototype.trim.call(e)},intersect:function(e,t){var n=[];return e.forEach(function(e){t.indexOf(e)>-1&&n.push(e)}),n},error:function(e){throw e},getUrlParam:function(e,t){var n=t||location.search,r={};if(n.indexOf("?")!=-1){var i=n.substr(1).split("&");for(var s=0,o=i.length;s<o;s++){var u=i[s].split("=");r[u[0]]=u[1]&&decodeURIComponent(u[1])}}return e?r[e]:r},each:function(e,t){return n.apply(this,arguments)},map:function(n,r){var i,s=[],o,u;if(t(n))for(o=0;o<n.length;o++)i=r(n[o],o),i!=null&&s.push(i);else for(u in n)i=r(n[u],u),i!=null&&s.push(i);return s.length>0?e.fn.concat.apply([],s):s},grep:function(e,t){return E.call(e,t)},matches:function(e,t){if(!t||!e||e.nodeType!==1)return!1;var n=e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.msMatchesSelector||e.matchesSelector;if(n)return n.call(e,t)},unique:function(e){return E.call(e,function(t,n){return e.indexOf(t)==n})},inArray:function(e,t,n){return b.indexOf.call(t,e,n)},sibling:function(t,n){var r=[];return t.length>0&&(r=e.map(t,function(e){return(e=e[n])&&!h(e)&&r.indexOf(e)<0&&r.push(e),e})),this.unique(r)},contains:function(e,t){return e&&!t?document.documentElement.contains(e):e!==t&&e.contains(t)},camelCase:m,now:Date.now}),e.fn.extend({forEach:b.forEach,concat:b.concat,indexOf:b.indexOf,each:function(t){return e.each(this,t)},map:function(t){return e(e.map(this,function(e,n){return t.call(e,n,e)}))},get:function(e){return e===undefined?w.call(this):this[e>=0?e:e+this.length]},index:function(e){return e?i(e)==="string"?this.indexOf(this.parent().children(e)[0]):this.indexOf(e):this.parent().children().indexOf(this[0])},is:function(t){return this.length>0&&typeof t!="string"?this.indexOf(t)>-1?!0:!1:this.length>0&&e.matches(this[0],t)},add:function(t){return e(e.unique(this.concat(e(t))))},eq:function(t){return t===-1?e(this.slice(t)):e(this.slice(t,+t+1))},first:function(){var t=this[0];return t&&!o(t)?t:e(t)},slice:function(t){return e(w.apply(this,arguments))},size:function(){return this.length},filter:function(t){return s(t)?this.not(this.not(t)):e(E.call(this,function(n){return e.matches(n,t)}))},not:function(n){var r=[];if(s(n)&&n.call!==undefined)this.each(function(e){n.call(this,e)||r.push(this)});else{var i=typeof n=="string"?this.filter(n):t(n)&&s(n.item)?w.call(n):e(n);this.forEach(function(e){i.indexOf(e)<0&&r.push(e)})}return e(r)},children:function(t){var n=[];return E.call(this.pluck("children"),function(t,r){e.map(t,function(e){e&&e.nodeType==1&&n.push(e)})}),e(n).filter(t||"*")},contents:function(e){return this.map(function(){return this.contentDocument||$.grep(this.childNodes,function(t){return e?$.matches(t,e):t})})},parent:function(t){return e(e.unique(this.pluck("parentNode"))).filter(t||"*")},parents:function(e){return y(this,e,"parentNode")},closest:function(t,n){var r=this[0],i=!1;typeof t=="object"&&(i=e(t));while(r&&!(i?i.indexOf(r)>=0:e.matches(r,t)))r=r!==n&&!h(r)&&r.parentNode;return e(r)},prev:function(t){return e(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return e(this.pluck("nextElementSibling")).filter(t||"*")},nextAll:function(e){return y(this,e,"nextElementSibling")},prevAll:function(e){return y(this,e,"previousElementSibling")},siblings:function(t){var n=[];return this.map(function(e,t){E.call(t.parentNode.children,function(e,r){e&&e.nodeType==1&&e!=t&&n.push(e)})}),e(n).filter(t||"*")},find:function(t){var n=this.children(),r=[];while(n.length>0)n=e.map(n,function(t,i){r.indexOf(t)<0&&r.push(t);if((n=e(t).children())&&n.length>0)return n});return e(r).filter(t||"*")},replaceWith:function(e){return this.before(e).remove()},unwrap:function(){return this.parent().each(function(){e(this).replaceWith(e(this).html())}),this},remove:function(t){var n=t?e(this.find(v(this,t))):this;return n.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},detach:function(){return this.remove()},empty:function(){return this.each(function(){this.innerHTML=""})},clone:function(){return this.map(function(){return this.cloneNode(!0)})},text:function(e){return e===undefined?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=v(this,e)})},html:function(t){return 0 in arguments?this.each(function(n){e(this).empty().append(v(this,t))}):0 in this?this[0].innerHTML:null},hide:function(){return this.css("display","none")},show:function(){return this.each(function(){function n(n){var r=document.createElement(n),i;return e("body").append(e(r)),i=t(r).display,r.parentNode.removeChild(r),i}this.style.display=="none"&&(this.style.display="");var t=function(e){return e.currentStyle||document.defaultView.getComputedStyle(e,null)};t(this)["display"]=="none"&&(this.style.display=n(this.nodeName))})},toggle:function(t){return this.each(function(){var n=e(this);(t===undefined?n.css("display")=="none":t)?n.show():n.hide()})},offset:function(){if(this.length==0)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:e.width,height:e.height}},css:function(e,t){var n=this[0];if(arguments.length<2){if(!n)return[];if(!t&&typeof e=="string")return n.style[e];if(u(e)){var r={};return $.each(e,function(e,t){r[t]=n.style[m(t)]}),r}}var i={},s;if(typeof e=="string")!t&&t!==0?this.each(function(){this.style.removeProperty(g(e))}):i[g(e)]=t;else for(s in e)!e[s]&&e[s]!==0?this.each(function(){this.style.removeProperty(g(s))}):i[g(s)]=e[s];return this.each(function(){for(var e in i)this.style[e]=i[e]})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").indexOf(t)>-1)return!0;return!1},addClass:function(t){if(!t)return this;var n,r,i;return this.each(function(s){n=[],r=this.className,i=v(this,t).trim(),i.split(/\s+/).forEach(function(t){e(this).hasClass(t)||n.push(t)},this);if(!i)return this;n.length?this.className=r+(r?" ":"")+n.join(" "):null})},removeClass:function(e){var t;return e===undefined?this.removeAttr("class"):this.each(function(n){t=this.className,v(this,e,n,t).split(/\s+/).forEach(function(e){t=t.replace(new RegExp("(^|\\s)"+e+"(\\s|$)")," ").trim()},this),t?this.className=t:this.className=""})},toggleClass:function(t){return t?this.each(function(n){var r=e(this),i=v(this,t);i.split(/\s+/g).forEach(function(e){r.hasClass(e)?r.removeClass(e):r.addClass(e)})}):this},pluck:function(t){return e.map(this,function(e){return e[t]})},prop:function(e,t){return e=C[e]||e,1 in arguments?this.each(function(n){this[e]=v(this,t,n,this[e])}):this[0]&&this[0][e]},removeProp:function(e){return e=C[e]||e,this.each(function(){try{this[e]=undefined,delete this[e]}catch(t){}})},attr:function(e,t){var n,r;return typeof e!="string"||1 in arguments?this.each(function(n){if(o(e))for(r in e)this.setAttribute(r,e[r]);else this.setAttribute(e,v(this,t))}):!this.length||this[0].nodeType!==1?undefined:!(n=this[0].getAttribute(e))&&e in this[0]?this[0][e]:n},removeAttr:function(e){return this.each(function(){this.nodeType===1&&this.removeAttribute(e)})},val:function(t){return 0 in arguments?this.each(function(e){this.value=v(this,t,e,this.value)}):this[0]&&(this[0].multiple?e(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},data:function(e,t){var n="data-"+e,r,i;if(!e)return this[0].dataset;if(e&&l(e)){for(i in e)this.attr("data-"+i,e[i]);return this}t&&(u(t)||l(t))&&(t=JSON.stringify(t)),r=1 in arguments?this.attr(n,t):this.attr(n);try{r=JSON.parse(r)}catch(s){}return r}}),e.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;e.fn[t]=function(e){var i=c(this[0]);return e===undefined?i?window[n]:this[0][t]:i?(window.scrollTo(r?window.pageXOffset:e,r?e:window.pageYOffset),this[0]):this.each(function(){this[t]=e})}}),["after","prepend","before","append"].forEach(function(t,n){var r=n%2;e.fn[t]=function(){var t,s=e.map(arguments,function(e){return t=i(e),t=="function"&&(e=v(this,e)),t=="object"||t=="array"||e==null?e:d(e)}),o,u,a=this.length>1;return s.length<1?this:this.each(function(t,i){o=r?i:i.parentNode,i=n==0?i.nextSibling:n==1?i.firstChild:n==2?i:null;var f=e.contains(document.documentElement,o);s.forEach(function(t){var n;a&&(t=t.cloneNode(!0)),o.insertBefore(t,i),f&&t.nodeName!=null&&t.nodeName.toUpperCase()==="SCRIPT"&&(!t.type||t.type==="text/javascript")&&!t.src?n=t.innerHTML:f&&t.children&&t.children.length>0&&e(t)&&(u=e(t).find("script"))&&u.length>0&&u.each(function(e,t){n=t.innerHTML}),n?window.eval.call(window,n):undefined})})},e.fn[r?t+"To":"insert"+(n?"Before":"After")]=function(n){return e(n)[t](this),this}}),["width","height"].forEach(function(t){var n=t.replace(/./,t[0].toUpperCase());e.fn[t]=function(e){var r,i=this[0];return e===undefined?c(i)?i["inner"+n]:h(i)?i.documentElement["scroll"+n]:(r=this.offset())&&r[t]:this.each(function(n){i=$(this),i.css(t,v(this,e,n,i[t]()))})}});var k=window.JSLite,L=window.$;return e.noConflict=function(t){return window.$===e&&(window.$=L),t&&window.JSLite===e&&(window.JSLite=k),e},window.JSLite=window.$=e,function(t){function l(e){return e._zid||(e._zid=r++)}function v(e,n){if(n||!e.isDefaultPrevented){n||(n=e),t.each(d,function(t,r){var i=n[t];e[t]=function(){return this[r]=c,i&&i.apply(n,arguments)},e[r]=h}),e.timeStamp||(e.timeStamp=Date.now());if(n.defaultPrevented!==undefined?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())e.isDefaultPrevented=c}return e}function m(e){return hover[e]||o&&focus[e]||e}function g(e,t){return e.del&&!o&&e.e in focus||!!t}function y(e){var t,n={originalEvent:e};for(t in e)!p.test(t)&&e[t]!==undefined&&(n[t]=e[t]);return v(n,e)}function b(e,r,i,s,o,u,a){var f=l(e),c=n[f]||(n[f]=[]);r.split(/\s/).forEach(function(n){if(n=="ready")return t(document).ready(i);var r=x(n);r.fn=i,r.sel=o,r.e in hover&&(i=function(e){var n=e.relatedTarget;if(!n||n!==this&&!t.contains(this,n))return r.fn.apply(this,arguments)}),r.del=u;var f=u||i;r.proxy=function(t){t=v(t);if(t.isImmediatePropagationStopped())return;t.data=s;var n=f.apply(e,t._args==undefined?[t]:[t].concat(t._args));return n===!1&&(t.preventDefault(),t.stopPropagation()),n},r.i=c.length,c.push(r),"addEventListener"in e&&e.addEventListener(m(r.e),r.proxy,g(r,a))})}function E(e,r,i,s){(r||"").split(/\s/).forEach(function(r){t.event=x(r),T(e,r,i,s).forEach(function(t){delete n[S(e)][t.i],e.removeEventListener&&e.removeEventListener(t.e,t.proxy,!1)})})}function S(e){return e._jid||(e._jid=i++)}function x(e){var t=(""+e).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function T(e,t,r,i){var s=this,o=S(e);return t=x(t),(n[S(e)]||[]).filter(function(e){return e&&(!t.e||e.e==t.e)&&(!r||e.fn.toString()===r.toString())&&(!i||e.sel==i)})}var n={},r=1,i=1,o="onfocusin"in window,u=event,f={};f.click=f.mousedown=f.mouseup=f.mousemove="MouseEvents",hover={mouseenter:"mouseover",mouseleave:"mouseout"};var c=function(){return!0},h=function(){return!1},p=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,d={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.extend({ready:function(t){return/complete|loaded|interactive/.test(document.readyState)&&document.body?t(e):document.addEventListener("DOMContentLoaded",function(){t(e)},!1),this},bind:function(e,t){return this.each(function(){b(this,e,t)})},unbind:function(e,t){return this.each(function(){E(this,e,t)})},on:function(e,n,r,i,o){var u,f,l=this;if(e&&!a(e))return t.each(e,function(e,t){l.on(e,n,r,t,o)}),l;!a(n)&&!s(i)&&i!==!1&&(i=r,r=n,n=undefined);if(i===undefined||r===!1)i=r,r=undefined;return i===!1&&(i=h),l.each(function(s,a){o&&(u=function(e){return E(a,e.type,i),i.apply(this,arguments)}),n&&(f=function(e){var r,s=t(e.target).closest(n,a).get(0);if(s&&s!==a)return r=t.extend(y(e),{currentTarget:s,liveFired:a}),(u||i).apply(s,[r].concat(w.call(arguments,1)))}),b(a,e,i,r,n,f||u)})},off:function(e,n,r){var i=this;return e&&!t.isString(e)?(t.each(e,function(e,t){i.off(e,n,t)}),i):(!t.isString(n)&&!t.isFunction(r)&&r!==!1&&(r=n,n=undefined),r===!1&&(r=function(){return!1}),i.each(function(){E(this,e,r,n)}))},delegate:function(e,t,n){return this.on(t,e,n)},trigger:function(e,t){if(typeof u!="string")return;return e=document.createEvent(f[u]||"Events"),e.initEvent(u,!0,!0),e._data=t,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(e)})}}),t.event={add:b,remove:E},"blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error paste drop dragstart dragover beforeunload".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),t.Event=function(e,t){a(e)||(t=e,e=t.type);var n=document.createEvent(f[e]||"Events"),r=!0;if(t)for(var i in t)i=="bubbles"?r=!!t[i]:n[i]=t[i];return n.initEvent(e,r,!0),v(n)}}(e),function(e){function c(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function h(e,t,r,i){if(e.global)return c(t||n,r,i)}function p(t){t.global&&e.active++===0&&h(t,null,"ajaxStart")}function d(t){t.global&&!--e.active&&h(t,null,"ajaxStop")}function v(e,t){var n=t.context;if(t.beforeSend.call(n,e,t)===!1||h(t,n,"ajaxBeforeSend",[e,t])===!1)return!1;h(t,n,"ajaxSend",[e,t])}function m(e,t,n,r){var i=n.context,s="success";n.success.call(i,e,s,t),r&&r.resolveWith(i,[e,s,t]),h(n,i,"ajaxSuccess",[t,n,e]),y(s,t,n)}function g(e,t,n,r,i){var s=r.context;r.error.call(s,n,t,e),i&&i.rejectWith(s,[n,t,e]),h(r,s,"ajaxError",[n,r,e||t]),y(t,n,r)}function y(e,t,n){var r=n.context;n.complete.call(r,t,e),h(n,r,"ajaxComplete",[t,n]),d(n)}function b(e,t,n){if(n.dataFilter==w)return e;var r=n.context;return n.dataFilter.call(r,e,t)}function w(){}function E(e){return e&&(e=e.split(";",2)[0]),e&&(e==f?"html":e==a?"json":o.test(e)?"script":u.test(e)&&"xml")||"text"}function S(e,t){return t==""?e:(e+"&"+t).replace(/[&?]{1,2}/,"?")}function x(t){t.processData&&t.data&&e.type(t.data)!="string"&&(t.data=e.param(t.data,t.traditional)),t.data&&(!t.type||t.type.toUpperCase()=="GET")&&(t.url=S(t.url,t.data),t.data=undefined)}function T(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=undefined),e.isFunction(r)||(i=r,r=undefined),{url:t,data:n,success:r,dataType:i}}function C(t,n,r,i){var s,o=e.isArray(n),u=e.isPlainObject(n);e.each(n,function(n,a){s=e.type(a),i&&(n=r?i:i+"["+(u||s=="object"||s=="array"?n:"")+"]"),!i&&o?t.add(a.name,a.value):s=="array"||!r&&s=="object"?C(t,a,r,n):t.add(n,a)})}var t=+(new Date),n=window.document,r,i,s=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,o=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,a="application/json",f="text/html",l=/^\s*$/;e.active=0,e.ajaxSettings={type:"GET",beforeSend:w,success:w,error:w,complete:w,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:a,xml:"application/xml, text/xml",html:f,text:"text/plain"},timeout:0,processData:!0,cache:!0,dataFilter:w},e.ajax=function(t){var n=e.extend({},t||{}),s=e.Deferred&&e.Deferred(),o,u;for(r in e.ajaxSettings)n[r]===undefined&&(n[r]=e.ajaxSettings[r]);p(n),(u=n.url.indexOf("#"))>-1&&(n.url=n.url.slice(0,u)),x(n);var a=n.dataType,f=n.accepts[a],c={},h=function(e,t){c[e.toLowerCase()]=[e,t]},d=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,y=n.xhr(),S=y.setRequestHeader,T;s&&s.promise(y),h("X-Requested-With","XMLHttpRequest"),h("Accept",f||"*/*");if(f=n.mimeType||f)f.indexOf(",")>-1&&(f=f.split(",",2)[0]),y.overrideMimeType&&y.overrideMimeType(f);(n.contentType||n.contentType!==!1&&n.data&&n.type.toUpperCase()!="GET")&&h("Content-Type",n.contentType||"application/x-www-form-urlencoded");if(n.headers)for(i in n.headers)h(i,n.headers[i]);y.setRequestHeader=h,y.onreadystatechange=function(){if(y.readyState==4){y.onreadystatechange=w,clearTimeout(T);var t,r=!1;if(y.status>=200&&y.status<300||y.status==304||y.status==0&&d=="file:"){a=a||E(n.mimeType||y.getResponseHeader("content-type"));if(y.responseType=="arraybuffer"||y.responseType=="blob")t=y.response;else{t=y.responseText;try{t=b(t,a,n),a=="xml"?t=y.responseXML:a=="json"&&(t=l.test(t)?null:e.parseJSON(t))}catch(i){r=i}if(r)return g(r,"parsererror",y,n,s)}m(t,y,n,s)}else g(y.statusText||null,y.status?"error":"abort",y,n,s)}};if(v(y,n)===!1)return y.abort(),g(null,"abort",y,n,s),y;var N="async"in n?n.async:!0;y.open(n.type,n.url,N,n.username,n.password);if(n.xhrFields)for(i in n.xhrFields)y[i]=n.xhrFields[i];for(i in c)S.apply(y,c[i]);return n.timeout>0&&(T=setTimeout(function(){y.onreadystatechange=w,y.abort(),g(null,"timeout",y,n,s)},n.timeout)),y.send(n.data?n.data:null),y},e.fn.load=function(t,n,r){if(!this.length)return this;var i=this,o=t.split(/\s/),u,a=T(t,n,r),f=a.success;return o.length>1&&(a.url=o[0],u=o[1]),a.success=function(t){i.html(u?e("<div>").html(t.replace(s,"")).find(u):t),f&&f.apply(i,arguments)},e.ajax(a),this};var N=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),n==null&&(n=""),this.push(N(t)+"="+N(n))},C(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(e){e.Callbacks=function(t){t=e.extend({},t);var n,r,i,s,o,u,a=[],f=!t.once&&[],l=function(e){n=t.memory&&e,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;++u)if(a[u].apply(e[0],e[1])===!1&&t.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a.length=0:c.disable())},c={add:function(){if(a){var r=a.length,u=function(n){e.each(n,function(e,n){typeof n=="function"?(!t.unique||!c.has(n))&&a.push(n):n&&n.length&&typeof n!="string"&&u(n)})};u(arguments),i?o=a.length:n&&(s=r,l(n))}return this},remove:function(){return a&&e.each(arguments,function(t,n){var r;while((r=e.inArray(n,a,r))>-1)a.splice(r,1),i&&(r<=o&&--o,r<=u&&--u)}),this},has:function(t){return!!a&&!!(t?e.inArray(t,a)>-1:a.length)},empty:function(){return o=a.length=0,this},disable:function(){return a=f=n=undefined,this},disabled:function(){return!a},lock:function(){return f=undefined,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return a&&(!r||f)&&(t=t||[],t=[e,t.slice?t.slice():t],i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments)},fired:function(){return!!r}};return c}}(e),function(e){function n(t){var r=[["resolve","done",e.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",e.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",e.Callbacks({memory:1})]],i="pending",s={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var t=arguments;return n(function(n){e.each(r,function(r,i){var u=e.isFunction(t[r])&&t[r];o[i[1]](function(){var t=u&&u.apply(this,arguments);if(t&&e.isFunction(t.promise))t.promise().done(n.resolve).fail(n.reject).progress(n.notify);else{var r=this===s?n.promise():this,o=u?[t]:arguments;n[i[0]+"With"](r,o)}})}),t=null}).promise()},promise:function(t){return t!=null?e.extend(t,s):s}},o={};return e.each(r,function(e,t){var n=t[2],u=t[3];s[t[1]]=n.add,u&&n.add(function(){i=u},r[e^1][2].disable,r[2][2].lock),o[t[0]]=function(){return o[t[0]+"With"](this===o?s:this,arguments),this},o[t[0]+"With"]=n.fireWith}),s.promise(o),t&&t.call(o,o),o}var t=Array.prototype.slice;e.Deferred=n}(e),e});