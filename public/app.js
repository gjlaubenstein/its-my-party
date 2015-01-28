'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'instaService',
  'smoothScroll',
  'ui.bootstrap',
  'itsMyParty.home'
])

.config(['$locationProvider', function($locationProvider) {
         $locationProvider.html5Mode(true);

     }])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
