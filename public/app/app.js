(function () {
    'use strict';

    var app = angular.module('SearchApp', ['ui.router'])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        // States
     .state("main", {
          controller:'searchController',
          url:"/",
          templateUrl: "index.html"
      })
      .state("main.1", {
          controller:'searchController',
          parent: 'main',
          url:"/1",
          templateUrl: './views/partials/detailView.html'
      })

    }]);

    app.run(['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
    ])

})();
