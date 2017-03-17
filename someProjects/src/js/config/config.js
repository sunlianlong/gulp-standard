// var urlArgs = localStorage.getItem("urlArgs");
// if(!urlArgs){
// 	localStorage.setItem("urlArgs","1");
// 	urlArgs = 1;
// }else{
// 	localStorage.setItem("urlArgs",Number(urlArgs)+1);	
// };
var requirejs = {
	// urlArgs: "v="+urlArgs,
	urlArgs: "v=1",
	paths: {
		libs: 'libs',
		JSLite: 'libs/JSLite',
	}
};