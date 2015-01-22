'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function ($scope, $window, $location) {
	$scope.menu = {};
	$scope.menu.collapsed = false;
	$scope.splashHeight = $window.innerHeight + "px";
	if($window.innerWidth >= 800 && $window.innerHeight >= 600) {
		$scope.height = $window.innerHeight + "px";
		$scope.mapHeight = $window.innerHeight + "px";
	}
	else {
		$scope.height = 'auto';
		$scope.mapHeight = "300px";
	}
	$scope.scrollTo = function(id) {
		console.log(id);
		$location.hash(id);
		//$anchorScroll();
	}
});