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

    $scope.searchResults = [];

    $scope.searchClicked = function(){
        $scope.nflRoster = mainService.getNFLRoster();
        $scope.searchResults = [];
        if($scope.searchName != null){
            for(var k in $scope.nflRoster){
                for(x = 0; x < $scope.nflRoster[k].roster.length; x++){
                    if($scope.nflRoster[k].roster[x].NAME.toUpperCase().includes($scope.searchName.toUpperCase())){
                        $scope.searchResults.push({ "TEAM" : $scope.nflRoster[k].name,
                                                    "NO" : $scope.nflRoster[k].roster[x].NO,
                                                    "NAME" : $scope.nflRoster[k].roster[x].NAME,
                                                    "POS" : $scope.nflRoster[k].roster[x].POS,
                                                    "AGE" : $scope.nflRoster[k].roster[x].AGE,
                                                    "HT" : $scope.nflRoster[k].roster[x].HT,
                                                    "WT" : $scope.nflRoster[k].roster[x].WT,
                                                    "EXP" : $scope.nflRoster[k].roster[x].EXP,
                                                    "COLLEGE" : $scope.nflRoster[k].roster[x].COLLEGE});
                    }
                }
            }
        }
        return $scope.searchResults;
    }

}]).config(function($mdThemingProvider) {
        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark()});