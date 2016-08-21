myApp.controller('RosterController', ['$scope', 'mainService', '$http', function($scope, mainService, $http) {
    $scope.selectedTeam = mainService.getSelectedTeam();

    $scope.nflTeamsRoster = null;
    $scope.selectedTeamRoster = null;

    $http.get('data/rosters/nfl_rosters.json').then(function(response) {
        $scope.nflTeamsRoster = response.data;
        $scope.selectedTeamRoster = $scope.nflTeamsRoster[$scope.selectedTeam.name].roster;
    });
}]);