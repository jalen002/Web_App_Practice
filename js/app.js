var myApp = angular.module('nflApp', ['ngRoute', 'ngMaterial']);

// configure our routes
myApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/teamTable.html',
            controller  : 'TeamTableController'
        })

        // route for the roster page
        .when('/roster', {
            templateUrl : 'views/roster.html',
            controller  : 'RosterController'
        })

        //route for the search page
        .when('/search', {
            templateUrl : 'views/search.html',
            controller : 'SearchController'
        })

});