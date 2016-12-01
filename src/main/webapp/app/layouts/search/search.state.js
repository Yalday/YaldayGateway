(function() {
    'use strict';

    angular
        .module('yaldayGatewayApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('search', {
            parent: 'app',
            url: '/search',
            data: {
                authorities: [],
                pageTitle: 'yaldayGatewayApp.search.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/layouts/search/searchResults.html',
                    controller: 'SearchController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('search');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })

        ;
    }
})();
