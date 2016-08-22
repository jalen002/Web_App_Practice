myApp.controller('RosterController', ['$scope', 'mainService', function($scope, mainService) {
    $scope.selectedTeam = mainService.getSelectedTeam();
    $scope.selectedTeamRoster = mainService.getNFLRoster()[$scope.selectedTeam.name].roster;
}]);