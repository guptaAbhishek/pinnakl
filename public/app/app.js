(function () {
    'use strict';

    var app = angular.module('SearchApp', ['ui.router'])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider.state("search", {
          controller:'searchController',
          url:"/search",
          templateUrl: "./views/partials/detailView.html"
      })
    }]);

    app.run(['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
    ])

})();
