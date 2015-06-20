
/* JavaScript content from controllers/sb-page.js in folder common */
var app = angular.module("sb",["ui.bootstrap"]);

app.controller("sb-controller", function($scope, $modal, $log){
	$scope.open = function (size) {
		 var modalInstance = $modal.open({
		      templateUrl: 'myModalContent.html',
		      controller: 'ModalInstanceCtrl',
		      size: size,
		      resolve: {
		        items: function () {
		          return $scope.items;
		        }
		      }
		    });
		 
		    modalInstance.result.then(function (selectedItem) {
		        $scope.selected = selectedItem;
		      }, function () {
		        $log.info('Modal dismissed at: ' + new Date());
		      });
	};
  });


app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

	  $scope.ok = function () {
	    $modalInstance.close();
	  };
	});