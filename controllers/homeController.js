myApp.controller('HomeController', ['$scope', 'mainService', '$http', '$location', '$mdToast',
    function ($scope, mainService, $http, $location, $mdToast) {
        $scope.myName = 'Jalen Halverson';
        $scope.teamFilter = "";
        $scope.location = $location.path();

        $scope.clicked = function () {
            alert("HELLO");
        }

        $scope.$watch('teamFilter', function (newValue, oldValue) {
            mainService.setServiceTeamFilter(newValue);
            console.log("Changing Filter");
        });
        $scope.$watch(function(){ return $location.path() }, function (newValue, oldValue) {
            $scope.location = newValue;
            console.log("Changing Paths");
        });

        $http.get('data/rosters/nfl_rosters.json').then(
            function successCallback(response) {
                mainService.setNFLRoster(response.data);
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Rosters Loaded!')
                            .position('top right')
                            .parent(document.querySelectorAll('.navbar'))
                            .toastClass("success-toast")
                            .hideDelay(3500)
                    );
        }, function errorCallback(response) {
            $mdToast.show(
                    $mdToast.simple()
                        .textContent('ERROR: Rosters Failed to Load!')
                        .position('top right')
                        .parent(document.querySelectorAll('.navbar'))
                        .toastClass("danger-toast")
                        .hideDelay(4000)
                );
        });

    }]);