
/* JavaScript content from controllers/weather-page.js in folder common */
var app = angular.module("weather",["ui.bootstrap"]);

app.controller("weather-controller", function($scope){
  $scope.dynamicPopover = 'Hello, World!';
  $scope.dynamicPopoverTitle = 'Title';
  });