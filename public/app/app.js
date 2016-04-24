var searchApp = angular.module('searchApp',['ui.router']);

searchApp.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/search');

  // Now set the states
  $stateProvider
    .state('search',{
      url:'/search',
      templateUrl:'searchList.html',
      controller: 'SearchListController'
    })
    .state('/:seachTerm',{
      url:'/searchTerm',
      templateUrl:'searchDetail.html',
      controller:'SearchDetailController'
    });

});

searchApp.factory('searchTerms',function($http){
  return{
    // getSearchs:function(){
    //   var deferred = $q.defer(),
    //   httpPromise = $http.get('./data/data.json');
    //
    //   httpPromise.then(function (response) {
    //       deferred.resolve(response);
    //     }, function (error) {
    //       console.error(error);
    //     });
    //
    //   return deferred.promise;
    //
    // }
    list: function(callback){
      $http.get('./data/data.json').success(callback);
    }
  };
});


searchApp.controller('SearchListController',function($scope,searchTerms){
  searchTerms.list(function(searches){
    $scope.searches = searches;
    console.log(searches);
  });
});

searchApp.controller('SearchDetailController',function(){
  $http.get('./data/data.json').success(function(data) {
         $scope.searches = data.filter(function(entry){
           return entry.SecType === $routeParams.SecType;
     })[0];
  });
});
