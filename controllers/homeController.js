myApp.controller('HomeController', ['$scope', 'mainService', '$http', function($scope, mainService, $http) {
    $scope.myName = 'Jalen Halverson';
    $scope.teamFilter = "";

    $scope.clicked = function(){
        alert("HELLO");
    }

    $scope.$watch('teamFilter', function(newValue, oldValue) {
        mainService.setServiceTeamFilter(newValue);
        console.log("Changing Filter");
    });

    $http.get('data/rosters/nfl_rosters.json').then(function(response) {
        mainService.setNFLRoster(response.data);
    });

}]);