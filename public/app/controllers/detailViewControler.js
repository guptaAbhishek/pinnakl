(function(){
  'use strict';

  var controllerId = 'detailViewControler';

  angular.module('SearchApp').controller(controllerId,
      ['$scope', '$state','$stateParams',function($scope,$state,$stateParams){
        var SecType = $stateParams.SecType;
        var Ticker = $stateParams.Ticker;
        var Cusip = $stateParams.Cusip;
        var Description = $stateParams.Description;
        $scope.state = $state.current
        $scope.params = $stateParams;
      }]);
})();
