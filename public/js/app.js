angular.module('myApp', ['ngRoute', 'myApp.filters', 'myApp.controllers', 'myApp.directives', 'myApp.services'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'redditCtrl',
    templateUrl: 'templates/home.html'
  })
  .when('/login', {
    controller: 'loginController',
    templateUrl: 'templates/login.html'
  })
  .otherwise({redirectTo: '/'});
}]);