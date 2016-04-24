(function () {
    'use strict';

    var serviceId = 'searchFactory';

    angular.module('SearchApp').factory(serviceId,
        ['$http', searchFactory]);

    function searchFactory($http) {

        function getSearch() {
            return $http.get('./data/data.json');
        }

        var service = {
            getSearch: getSearch
        };

        return service;
    }
})();
