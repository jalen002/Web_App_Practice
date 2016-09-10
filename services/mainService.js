myApp.service('mainService', function() {
    var serviceTeamFilter = null;
    var selectedTeam = null;
    var nflTeamsRoster = null;
    var selectedTeamRoster = null;
    var schedule = null;
    var teams = null;

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
        },
        getNFLRoster: function() {
            return nflTeamsRoster;
        },
        setNFLRoster: function(nflRosters) {
            nflTeamsRoster = nflRosters;
        },
        getSchedule: function(){
            return schedule;
        },
        setSchedule: function(nflSchedules){
            schedule = nflSchedules;
        },
        getTeams: function(){
            return teams;
        },
        setTeams: function(nflTeams){
            teams = nflTeams;
        }
    }
});