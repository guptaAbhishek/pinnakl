(function () {
    'use strict';

    var app = angular.module('SearchApp', ['ui.router'])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state("search", {
          controller:'detailViewControler',
          url:"/:?desc?sec?tic?cus",
          templateUrl: "./views/partials/detailView.html",
           params: { hiddenOne: null, }
      })
    }]);

    app.run(['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
    ])

})();
