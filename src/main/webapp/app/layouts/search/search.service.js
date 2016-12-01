(function() {
    'use strict';
    angular
        .module('yaldayGatewayApp')
        .factory('Search'  , Search);

    Search.$inject   = ['$resource'];

    function Search ($resource) {
        var resourceUrl =  'microservicemerchant/' + 'api/merchants/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
