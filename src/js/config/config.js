var urlArgs = localStorage.getItem("urlArgs");
if(!urlArgs){
	localStorage.setItem("urlArgs","1");
	urlArgs = 1;
}else{
	if(urlArgs > 30){
		localStorage.setItem("urlArgs",1);
	}else{
		localStorage.setItem("urlArgs",Number(urlArgs)+1);
	}	
};
var requirejs = {
	urlArgs: "v="+urlArgs,
	paths: {
		libs: 'libs',
		JSLite: 'libs/JSLite',
	}
};