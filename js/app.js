var myApp = angular.module('nflApp', ['ngRoute']);

// configure our routes
myApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/teamTable.html',
            controller  : 'TeamTableController'
        })

        // route for the about page
        .when('/roster', {
            templateUrl : 'views/roster.html',
            controller  : 'RosterController'
        })

});