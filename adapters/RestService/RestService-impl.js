/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */
function getStock(stockID) {

	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : 'v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%3D%22'
	    	+
	    	stockID
	    	+
	    	'%22&diagnostics=true&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json'	 
	};
	
	 WL.Logger.debug("Stocks Adapter Called");
		    

	return WL.Server.invokeHttp(input);
}

function getLocation(location){
	
	var locationIn = {
		    method : 'get',
		    returnedContentType : 'json',
		    path : 'v1/public/yql?q=select%20*%20from%20geo.places%20where%20text%3D%22'
		    	+
		    	location
		    	+
		    	'%22&format=json&diagnostics=true&callback='	 
		};
	
		 return WL.Server.invokeHttp(locationIn);
}


function getWeather(locationNumber){
	
			var weatherIn = {
				    method : 'get',
				    returnedContentType : 'json',
				    path : 'v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D'
				    	+
				    	locationNumber
				    	+
				    	'&format=json&diagnostics=true&callback='

				};
		 
		return WL.Server.invokeHttp(weatherIn);
}
