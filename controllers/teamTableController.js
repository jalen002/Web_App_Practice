myApp.controller('TeamTableController', ['$scope', 'mainService', function ($scope, mainService) {

    $scope.schedule = mainService.getSchedule();
    $scope.nflSchedule = $scope.schedule["Denver Broncos"].regularSeason;
    $scope.teams = mainService.getTeams();
    $scope.currWeek = -1;
    $scope.currDate = new Date();
    $scope.months = {
        "Jan" : 0,
        "Feb" : 1,
        "Mar" : 2,
        "Apr" : 3,
        "May" : 4,
        "Jun" : 5,
        "Jul" : 6,
        "Aug" : 7,
        "Sep" : 8,
        "Oct" : 9,
        "Nov" : 10,
        "Dec" : 11
    }

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

$scope.calcWeek = function () {

    for (var i = 0; i < $scope.nflWeeks.length; i++) {
        var weekData = $scope.nflWeeks[i];
        var week = weekData["WK"];
        var weekDate = weekData["DATE"];
        var nflWeekDateObj;

        var arr;
        var thisNflweekDay;
        var thisNflMonth;
        var thisNflDay;

        if (weekDate.toLowerCase() != 'bye week') {
            arr = weekDate.split(/[\s,]+/g);	// Split up the NFL week date string
            thisNflweekDay = arr[0];					// The Day of the week that the game takes place
            thisNflMonth = arr[1];						// The month the game takes place
            thisNflDay = arr[2];							// The Date of the month the game takes place
            nflWeekDateObj = new Date(2016, $scope.months[thisNflMonth], thisNflDay);
        } else {
            // Bye Week so take last weeks game and add a week to it, to simulate
            // a game this week
            weekData = $scope.nflWeeks[i - 1];
            week = weekData["WK"];
            weekDate = weekData["DATE"];
            arr = weekDate.split(/[\s,]+/g);	// Split up the NFL week date string
            thisNflweekDay = arr[0];					// The Day of the week that the game takes place
            thisNflMonth = arr[1];						// The month the game takes place
            thisNflDay = arr[2];							// The Date of the month the game takes place
            nflWeekDateObj = new Date($scope.currDate.getFullYear(), $scope.months[thisNflMonth], thisNflDay); // Last weeks date
            nflWeekDateObj.setDate(nflWeekDateObj.getDate() + 7); // Add a week to last week
            week = (parseInt(week) + 1) + ""; // Take last weeks number and add one to it to get this week
        }
        debugger;

        if ($scope.currDate.getMonth() === nflWeekDateObj.getMonth()) {
            //In Same Month
            if ($scope.currDate.getDate() - nflWeekDateObj.getDate() <= 0) {
                //Haven't played that game yet
                $scope.thisWeek = week;
                break;
            } else {
                // They have already played the game, but was it on Thurs?
                if ($scope.currDate.getDate() - nflWeekDateObj.getDate() <= 4 && nflWeekDateObj.getDay() === 4) {
                    // It was on thurs! So, still that week if today is within 4 days
                    $scope.thisWeek = week;
                    break;
                } else if (nflWeekDateObj.getDay() === 0 && $scope.currDate.getDate() - nflWeekDateObj.getDate() < 2) {
                    // It was on sun! So, still that week if today is within 2 days
                    $scope.thisWeek = week;
                    break;
                } else if (nflWeekDateObj.getDay() === 1 && $scope.currDate.getDate() - nflWeekDateObj.getDate() === 0) {
                    // It was on mon! So, still that week if today is monday
                    $scope.thisWeek = week;
                    break;
                }
            }
        } else {
            if ($scope.currDate.getMonth() < nflWeekDateObj.getMonth()) {
                var weekAheadDate = new Date($scope.currDate.getFullYear(), $scope.currDate.getMonth(), $scope.currDate.getDate());
                weekAheadDate.setDate(weekAheadDate.getDate() + 7);

                //Game is played in the next month, so it obviously hasnt been played
                if (nflWeekDateObj.getTime() < weekAheadDate.getTime()) {
                    // The game is in the NEXT month and less than a week away
                    $scope.thisWeek = week;
                    break;
                }
            }

        }
    }

} // End calcWeek()
    
}]);