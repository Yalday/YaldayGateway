(function() {
    'use strict';

    angular
        .module('yaldayGatewayApp')
        .controller('SearchController'  , SearchController);

    SearchController.$inject = ['$scope', '$state', 'Search'];

    function SearchController ($scope, $state, Search) {
        var vm = this;
        vm.queryresults = [];

        vm.merchantDeets = [
            {name: "Name1", address: "Addy1", city: "City1", postcode: "PostCode1", rating: "4", reviews: "102"},
            {name: "Name2", address: "Addy2", city: "City2", postcode: "PostCode2", rating: "3", reviews: "10"},
            {name: "Name3", address: "Addy3", city: "City3", postcode: "PostCode3", rating: "2", reviews: "2"},
            {name: "Name4", address: "Addy4", city: "City4", postcode: "PostCode4", rating: "0.5", reviews: "0"},
            {name: "Name5", address: "Addy5", city: "City5", postcode: "PostCode5", rating: "4.5", reviews: "10"}


        ];

        loadAll();

        function loadAll() {
            Search.query(function(result) {
                vm.queryresults = result;
            });
        }


    }
})();

