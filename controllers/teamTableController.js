myApp.controller('TeamTableController', ['$scope', 'mainService', function($scope, mainService) {

    $scope.filterValue = "";
    $scope.$watch(function(){return mainService.getServiceTeamFilter();}, function(newVal, oldValue) {
        if (newVal) {
            $scope.filterValue = newVal;
            console.log("Team Table Controller: Theme switched to: " + newVal);
        }
    }, true);
    
$scope.teams = [
        {
            'name': 'Cincinnati Bengals',
            'division': 'AFC North'
        },
        {
            'name': 'Cleveland Browns',
            'division': 'AFC North'
        },
        {
            'name': 'Baltimore Ravens',
            'division': 'AFC North'
        },
        {
            'name': 'Pittsburgh Steelers',
            'division': 'AFC North'
        },
        {
            'name': 'Houston Texans',
            'division': 'AFC South'
        },
        {
            'name': 'Indianapolis Colts',
            'division': 'AFC South'
        },
        {
            'name': 'Jacksonville Jaguars',
            'division': 'AFC South'
        },
        {
            'name': 'Tennessee Titans',
            'division': 'AFC South'
        },
        {
            'name': 'Buffalo Bills',
            'division': 'AFC East'
        },
        {
            'name': 'Miami Dolphins',
            'division': 'AFC East'
        },
        {
            'name': 'New England Patriots',
            'division': 'AFC East'
        },
        {
            'name': 'New York Jets',
            'division': 'AFC East'
        },
        {
            'name': 'Denver Broncos',
            'division': 'AFC West'
        },
        {
            'name': 'Kansas City Chiefs',
            'division': 'AFC West'
        },
        {
            'name': 'Oakland Raiders',
            'division': 'AFC West'
        },
        {
            'name': 'San Diego Chargers',
            'division': 'AFC West'
        },
        {
            'name': 'Chicago Bears',
            'division': 'NFC North'
        },
        {
            'name': 'Detroit Lions',
            'division': 'NFC North'
        },
        {
            'name': 'Green Bay Packers',
            'division': 'NFC North'
        },
        {
            'name': 'Minnesota Vikings',
            'division': 'NFC North'
        },
        {
            'name': 'Atlanta Falcons',
            'division': 'NFC South'
        },
        {
            'name': 'Carolina Panthers',
            'division': 'NFC South'
        },
        {
            'name': 'New Orleans Saints',
            'division': 'NFC South'
        },
        {
            'name': 'Tampa Bay Buccaneers',
            'division': 'NFC South'
        },
        {
            'name': 'Dallas Cowboys',
            'division': 'NFC East'
        },
        {
            'name': 'New York Giants',
            'division': 'NFC East'
        },
        {
            'name': 'Philadelphia Eagles',
            'division': 'NFC East'
        },
        {
            'name': 'Washington Redskins',
            'division': 'NFC East'
        },
        {
            'name': 'Arizona Cardinals',
            'division': 'NFC West'
        },
        {
            'name': 'Los Angeles Rams',
            'division': 'NFC West'
        },
        {
            'name': 'San Francisco 49ers',
            'division': 'NFC West'
        },
        {
            'name': 'Seattle Seahawks',
            'division': 'NFC West'
        }
    ];

    $scope.selectedRow = $scope.teams[0];  // initialize our variable to null
    $scope.setClickedRow = function(row){  //function that sets the value of selectedRow to current row
        if (row === $scope.selectedRow) {
            $scope.selectedRow = null;
        } else {
            $scope.selectedRow = row;
        }
    }
}]);