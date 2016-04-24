(function(){

  'use strict';

  var directiveId = 'autoSuggestMenuItem';

  angular.module('SearchApp').directive(directiveId, [function () {
    return {
        require: '?ngModel',
        restrict:'A',
        link: function(scope, elm, attrs, ctrl) {
            if (!elm) return;
            elm.bind('mouseenter', function () {
                elm.addClass("active");
            });
            elm.bind('mouseleave', function () {
                elm.removeClass("active");
            });
            elm.bind('click', function() {
              
            });
        }
    };
  }]);
})();
