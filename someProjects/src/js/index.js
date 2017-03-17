require(["JSLite","libs/fastclick.min","libs/layer"],function(JSLite,FastClick) {
	FastClick.attach(document.body);
	require(["libs/new_browser"],function(){
		var browser = Browser();
		console.log(browser);
	})
	
	console.log($("body"));
	console.log(FastClick.notNeeded(document.body));
	console.log(layer.v);
	console.log(hotcss);
});