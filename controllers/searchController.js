myApp.controller('SearchController', ['$scope', 'mainService', function($scope, mainService) {
    $scope.nflRoster = mainService.getNFLRoster();
    $scope.searchCriteria = {   "NO" : null,
                                "NAME" : null,
                                "POS" : null,
                                "AGE" : null,
                                "HT" : null,
                                "WT" : null,
                                "EXP" : null,
                                "COLLEGE" : null};

    $scope.searchResults = [];

    $scope.searchClicked = function (searching) {
        var flag = true;                            //used to flag a player within criteria to add
        $scope.searchResults = [];

        for (var k in $scope.nflRoster) {
            var currTeam = $scope.nflRoster[k];
            for (x = 0; x < currTeam.roster.length; x++) {
                var currPlayer = currTeam.roster[x];
                for(prop in searching){
                    if(searching[prop] != null && !currPlayer[prop].toLowerCase().includes(searching[prop].toLowerCase())){
                        flag = false;
                    }
                }
                if (flag) {
                    $scope.searchResults.push({ 
                            "TEAM" : currTeam.name,
                            "NO" : currPlayer.NO,
                            "NAME" : currPlayer.NAME,
                            "POS" : currPlayer.POS,
                            "AGE" : currPlayer.AGE,
                            "HT" : currPlayer.HT,
                            "WT" : currPlayer.WT,
                            "EXP" : currPlayer.EXP,
                            "COLLEGE" : currPlayer.COLLEGE});
                }
                flag = true;
            }
        }
        $scope.searchCriteria = [];
        return $scope.searchResults;
    }

}]).config(function($mdThemingProvider) {
        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark()});