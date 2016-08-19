myApp.controller('RosterController', ['$scope', 'mainService', function($scope, mainService) {
    $scope.selectedTeam = mainService.getSelectedTeam();
}]);