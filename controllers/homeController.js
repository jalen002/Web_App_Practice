myApp.controller('HomeController', ['$scope', 'mainService', function($scope, mainService) {
    $scope.myName = 'Jalen Halverson';
    $scope.teamFilter = "";

    $scope.$watch('teamFilter', function(newValue, oldValue) {
        mainService.setServiceTeamFilter(newValue);
        console.log("Changing Filter");
    });
}]);