function wlCommonInit(){
	
	console.log("loading Angular");
	
	// All libraries must be load in a single bootstrap
	var allAngularModules = ['page-load','weather','stock','sb'];
	
	angular.element (document).ready(function(){
		angular.bootstrap(document,allAngularModules);
	});
}
