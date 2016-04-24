
searchApp.controller('searchController',function($scope,$http){
  $http.get('./data/data.json').success(function(data){
    $scope.data = data;
  });
});
