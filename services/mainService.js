myApp.service('mainService', function() {
    var serviceTeamFilter = null;
    var selectedTeam = null;

    return {
        getServiceTeamFilter: function() {
            return serviceTeamFilter;
        },
        setServiceTeamFilter: function(str) {
            serviceTeamFilter = str;
        },
        getSelectedTeam: function(){
            return selectedTeam;
        },
        setSelectedTeam: function(team){
            selectedTeam = team;
        }
    }
});