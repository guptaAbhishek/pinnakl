(function () {
    'use strict';

    var controllerId = 'searchController';

    angular.module('SearchApp').controller(controllerId,
        ['$scope', 'searchFactory', searchController]);

    function searchController($scope, searchFactory) {
        $scope.searches = [];

        searchFactory.getSearch().success(function (data) {
            $scope.searches = data;
        }).error(function (error) {
            // log errors
        });
        $scope.searchQuery = { keywords: '', filterCategory: '' };
        $scope.getSugestion = function(ev){
          console.log('something is workin'+ $scope.searchQuery.keywords);
          var suggestions = [];
          var count = 0;
          var keyword =  $scope.searchQuery.keywords;
          console.log($scope.searches.length);
          if($scope.searches.length > 0){
            for(var i=0;i<$scope.searches.length;i++){
              if(($scope.searches[i].SecType.toLowerCase() == keyword.toLowerCase()) || ($scope.searches[i].Ticker.toLowerCase() == keyword.toLowerCase()) || ($scope.searches[i].Cusip.toLowerCase() == keyword.toLowerCase()) || ($scope.searches[i].Description.toLowerCase() == keyword.toLowerCase())){
                  suggestions.push($scope.searches[i]);
                  count++;
                  if(count == 5){
                    break;
                  }
              }
            }
          }
          $scope.suggestions = suggestions;
        }

    }
})();
