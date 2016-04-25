(function(){
  'use strict';

  var controllerId = 'detailViewControler';

  angular.module('SearchApp').controller(controllerId,
      ['$scope', '$state','$stateParams',function($scope,$state,$stateParams){
        var desc = $stateParams.desc;
        var sec = $stateParams.sec;
        var tic = $stateParams.tic;
        var cus = $stateParams.cus;
        $scope.state = $state.current
        $scope.params = $stateParams;
      }]);
})();
