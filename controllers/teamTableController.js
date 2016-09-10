myApp.controller('TeamTableController', ['$scope', 'mainService', function ($scope, mainService) {

    $scope.schedule = mainService.getSchedule();
    $scope.teams = mainService.getTeams();

    $scope.filterValue = "";
    $scope.$watch(function () { return mainService.getServiceTeamFilter(); }, function (newVal, oldValue) {
        if (newVal) {
            $scope.filterValue = newVal;
            console.log("Team Table Controller: Theme switched to: " + newVal);
        }
    }, true);

    
    $scope.selectedRow = $scope.teams[0];  // initialize our variable to null
    mainService.setSelectedTeam($scope.teams[0]);
    $scope.setClickedRow = function (row) {  //function that sets the value of selectedRow to current row
        if (row === $scope.selectedRow) {
            $scope.selectedRow = null;
        } else {
            $scope.selectedRow = row;
            mainService.setSelectedTeam(row);
        }
    }

}]);