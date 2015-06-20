
/* JavaScript content from controllers/stock-page.js in folder common */
var app = angular.module("stock",["ui.bootstrap"]);

app.controller("stock-controller", function($scope){
  $scope.dynamicPopover = 'Hello, World!';
  $scope.dynamicPopoverTitle = 'Title';
  });