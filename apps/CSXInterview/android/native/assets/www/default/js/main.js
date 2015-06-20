
/* JavaScript content from js/main.js in folder common */
function wlCommonInit(){
	
	console.log("loading Angular");
	
	// All libraries must be load in a single bootstrap
	var allAngularModules = ['page-load','weather','stock','sb'];
	
	angular.element (document).ready(function(){
		angular.bootstrap(document,allAngularModules);
	});
}

/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}