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

.controller('homeCtrl', function ($scope, $window, $location, $routeParams, $modal, smoothScroll, instaService) {

	$scope.instas = [];
	$scope.balloons = [];
	$scope.partySupplies = [];
	$scope.costumes = [];

	instaService.getLatest(6).then(function (data) {
		$scope.instas = data;
	});

	instaService.getByHashtag(50,'balloons').then(function (data) {
		$scope.balloons = data;
	});

	instaService.getByHashtag(50,'costumeccessories').then(function (data) {
		$scope.costumes = data;
	});

	instaService.getByHashtag(50,'partysupplies').then(function (data) {
		$scope.partySupplies = data;
	});

	if($routeParams.anchor !== undefined) {
		var elem = document.getElementById($routeParams.anchor)
		smoothScroll(elem);
	}

	$scope.menu = {};
	$scope.menu.collapsed = false;
	$scope.splashHeight = $window.innerHeight + "px";

	if($window.innerWidth >= 997 && $window.innerHeight >= 575) {
		$scope.height = $window.innerHeight + "px";
		$scope.mapHeight = $window.innerHeight + "px";
	}
	else {
		$scope.height = 'auto';
		$scope.mapHeight = "300px";
	}

	$scope.goToInsta = function (link) {
		//console.log(link);
		$window.open(link);
	}

	$scope.items = ['item1', 'item2', 'item3'];

  	$scope.open = function (size, cat, title) {

	    var modalInstance = $modal.open({
	      templateUrl: 'myModalContent.html',
	      controller: 'ModalInstanceCtrl',
	      size: size,
	      resolve: {
	        items: function () {
	          if(cat == 'b') {
	          	return $scope.balloons;
	          }
	          else if(cat == 'c') {
	          	return $scope.costumes;
	          }
	          else if(cat == 's') {
	          	return $scope.partySupplies;
	          }
	        },
	        title: function() {
	        	return title;
	        }
	      }
	    });
	 };

});

angular.module('itsMyParty.home').controller('ModalInstanceCtrl', function ($scope, $window, $modalInstance, items, title) {
 
  	$scope.category = title;
  	$scope.grams = items;

  	$scope.goToInsta = function (link) {
		//console.log(link);
		$window.open(link);
	}

  	$scope.cancel = function () {
    	$modalInstance.dismiss('cancel');
  	};
});