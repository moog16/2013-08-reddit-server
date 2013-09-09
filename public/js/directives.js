var myApp = angular.module('myApp.directives', []);
myApp.directive('articleView', function() {
  return {
    template: '<a href="{{data.url}}"><img class="img-rounded" ng-src="{{data.thumbnail}}" /><h4>{{ data.title }}</h4></a><button type="button" class="btn btn-success btn-xs" ng-click="plusVote(article)">+</button><span class="btn btn-default btn-xs" ng-bind="article.votes"></span><button type="button" class="btn btn-danger btn-xs" ng-click="negVote(article)">-</button>',
    link: function(scope, elem, attr, ctrl) {
      scope.article.votes = 0;
      scope.$watch(attr.ngModel, function(v) {
        scope.data = v.data;
      });
    }
  };
});

myApp.directive('login', function() {
  return {
    link: function(scope, elem, attr, ctrl) {
      console.log(scope,'scope');
    }
  };
});
