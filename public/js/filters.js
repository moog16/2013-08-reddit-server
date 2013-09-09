angular.module('myApp.filters', [])
.filter('sfw', function() {
  return function(array) {
    if (array) {
      var articles = [];
      angular.forEach(array, function(article) {
        if (article.data.thumbnail !== 'nsfw')
          articles.push(article);
      });
      return articles;
    }
  };
});