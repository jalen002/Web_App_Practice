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
        .when('/table', {
            templateUrl : 'views/table.html',
            controller  : 'TableController'
        })

});