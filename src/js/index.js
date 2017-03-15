require(["JSLite","libs/fastclick.min","libs/layer","libs/new_browser"],function(JSLite,FastClick) {
	FastClick.attach(document.body);
	var browser = Browser();
	console.log(browser);
	console.log($("body"));
	console.log(FastClick.notNeeded(document.body));
	console.log(layer.v);
	console.log(hotcss);
});