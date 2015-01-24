'use strict';

angular.module('itsMyParty.home', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/:anchor', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  })
  .when('/', {
  	templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', function ($scope, $window, $location, $routeParams, smoothScroll, instaService) {

	instaService.getLatest(1).then(function (data) {
		console.log(data);
	});

	if($routeParams.anchor !== undefined) {
		var elem = document.getElementById($routeParams.anchor)
		smoothScroll(elem);
	}

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

});