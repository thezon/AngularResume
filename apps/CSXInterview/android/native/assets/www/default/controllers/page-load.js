
/* JavaScript content from controllers/page-load.js in folder common */
var app = angular.module("page-load",["ngSanitize"]);

app.controller("pageController", function($scope){
	console.log("loading pageController");
	$scope.pageKey = "Home";
	
	this.changePage = function(page) {$scope.pageKey  = page;};
	
	this.showPage = function(page){return page == $scope.pageKey ;};

});

app.directive("menuComponent", function(){
	return {
		restrict: 'E',
		templateUrl: "components/menu/menu.html"
	};
});

app.directive("footerComponent", function(){
	return {
		restrict: 'E',
		templateUrl: "components/footer.html"
	};
});

app.directive("homePage", function(){
	return {
		restrict: 'E',
		templateUrl: "pages/homePage.html"
	};
});

app.directive("aboutAppPage", function(){
	return {
		restrict: 'E',
		templateUrl: "pages/aboutAppPage.html"
	};
});

app.directive("aboutSbPage", function(){
	return {
		restrict: 'E',
		templateUrl: "pages/aboutSbPage.html"
	};
});

app.directive("stockPage", function(){
	return {
		restrict: 'E',
		templateUrl: "pages/stockPage.html"
	};
});

app.directive("weatherPage", function(){
	return {
		restrict: 'E',
		templateUrl: "pages/weatherPage.html"
	};
});