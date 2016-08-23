myApp.controller('SearchController', ['$scope', 'mainService', function($scope, mainService) {
    $scope.nflRoster = mainService.getNFLRoster();
    $scope.searchName = null;
    $scope.searchNumber = null;
    $scope.searchAge = null;
    $scope.searchPosition = null;
    $scope.searchHeight = null;
    $scope.searchWeight = null;
    $scope.searchCollege = null;
    $scope.searchExperience = null;

}]).config(function($mdThemingProvider) {
        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark()});