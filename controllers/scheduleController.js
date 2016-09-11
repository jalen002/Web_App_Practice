myApp.controller('ScheduleController', ['$scope', 'mainService', function ($scope, mainService) {
    $scope.selectedTeam = mainService.getSelectedTeam();
    $scope.selectedTeamSchedule = mainService.getSchedule()[$scope.selectedTeam.name].regularSeason;
}]);