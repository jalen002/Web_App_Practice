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
            'division': 'AFC North',
            'imagePath': 'data/images/team_logos/cincinnati_bengals.png'
        },
        {
            'name': 'Cleveland Browns',
            'division': 'AFC North',
            'imagePath': 'data/images/team_logos/cleveland_browns.png'
        },
        {
            'name': 'Baltimore Ravens',
            'division': 'AFC North',
            'imagePath': 'data/images/team_logos/baltimore_ravens.png'
        },
        {
            'name': 'Pittsburgh Steelers',
            'division': 'AFC North',
            'imagePath': 'data/images/team_logos/pittsburgh_steelers.png'
        },
        {
            'name': 'Houston Texans',
            'division': 'AFC South',
            'imagePath': 'data/images/team_logos/houston_texans.png'
        },
        {
            'name': 'Indianapolis Colts',
            'division': 'AFC South',
            'imagePath': 'data/images/team_logos/indianapolis_colts.png'
        },
        {
            'name': 'Jacksonville Jaguars',
            'division': 'AFC South',
            'imagePath': 'data/images/team_logos/jacksonville_jaguars.png'
        },
        {
            'name': 'Tennessee Titans',
            'division': 'AFC South',
            'imagePath': 'data/images/team_logos/tennessee_titans.png'
        },
        {
            'name': 'Buffalo Bills',
            'division': 'AFC East',
            'imagePath': 'data/images/team_logos/buffalo_bills.png'
        },
        {
            'name': 'Miami Dolphins',
            'division': 'AFC East',
            'imagePath': 'data/images/team_logos/miami_dolphins.png'
        },
        {
            'name': 'New England Patriots',
            'division': 'AFC East',
            'imagePath': 'data/images/team_logos/new_england_patriots.png'
        },
        {
            'name': 'New York Jets',
            'division': 'AFC East',
            'imagePath': 'data/images/team_logos/new_york_jets.png'
        },
        {
            'name': 'Denver Broncos',
            'division': 'AFC West',
            'imagePath': 'data/images/team_logos/denver_broncos.png'
        },
        {
            'name': 'Kansas City Chiefs',
            'division': 'AFC West',
            'imagePath': 'data/images/team_logos/kansas_city_chiefs.png'
        },
        {
            'name': 'Oakland Raiders',
            'division': 'AFC West',
            'imagePath': 'data/images/team_logos/oakland_raiders.png'
        },
        {
            'name': 'San Diego Chargers',
            'division': 'AFC West',
            'imagePath': 'data/images/team_logos/san_diego_chargers.png'
        },
        {
            'name': 'Chicago Bears',
            'division': 'NFC North',
            'imagePath': 'data/images/team_logos/chicago_bears.png'
        },
        {
            'name': 'Detroit Lions',
            'division': 'NFC North',
            'imagePath': 'data/images/team_logos/detroit_lions.png'
        },
        {
            'name': 'Green Bay Packers',
            'division': 'NFC North',
            'imagePath': 'data/images/team_logos/green_bay_packers.png'
        },
        {
            'name': 'Minnesota Vikings',
            'division': 'NFC North',
            'imagePath': 'data/images/team_logos/minnesota_vikings.png'
        },
        {
            'name': 'Atlanta Falcons',
            'division': 'NFC South',
            'imagePath': 'data/images/team_logos/atlanta_falcons.png'
        },
        {
            'name': 'Carolina Panthers',
            'division': 'NFC South',
            'imagePath': 'data/images/team_logos/carolina_panthers.png'
        },
        {
            'name': 'New Orleans Saints',
            'division': 'NFC South',
            'imagePath': 'data/images/team_logos/new_orleans_saints.png'
        },
        {
            'name': 'Tampa Bay Buccaneers',
            'division': 'NFC South',
            'imagePath': 'data/images/team_logos/tampa_bay_buccaneers.png'
        },
        {
            'name': 'Dallas Cowboys',
            'division': 'NFC East',
            'imagePath': 'data/images/team_logos/dallas_cowboys.png'
        },
        {
            'name': 'New York Giants',
            'division': 'NFC East',
            'imagePath': 'data/images/team_logos/new_york_giants.png'
        },
        {
            'name': 'Philadelphia Eagles',
            'division': 'NFC East',
            'imagePath': 'data/images/team_logos/philadelphia_eagles.png'
        },
        {
            'name': 'Washington Redskins',
            'division': 'NFC East',
            'imagePath': 'data/images/team_logos/washington_redskins.png'
        },
        {
            'name': 'Arizona Cardinals',
            'division': 'NFC West',
            'imagePath': 'data/images/team_logos/arizona_cardinals.png'
        },
        {
            'name': 'Los Angeles Rams',
            'division': 'NFC West',
            'imagePath': 'data/images/team_logos/los_angeles_rams.png'
        },
        {
            'name': 'San Francisco 49ers',
            'division': 'NFC West',
            'imagePath': 'data/images/team_logos/san_francisco_49ers.png'
        },
        {
            'name': 'Seattle Seahawks',
            'division': 'NFC West',
            'imagePath': 'data/images/team_logos/seattle_seahawks.png'
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