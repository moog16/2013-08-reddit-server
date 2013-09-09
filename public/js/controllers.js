angular.module('myApp.controllers', [])
.controller("redditCtrl", ['$scope', '$http', 'getReddit', function($scope, $http, getReddit) {
  var articles = [];

  $scope.articles = getReddit();

  $scope.plusVote = function(scope) {
    scope.votes++;
  };
  $scope.negVote = function(scope) {
    scope.votes--;
  };
}])
.controller('loginController', ['$scope', '$http', function($scope, $http) {
  
}]);