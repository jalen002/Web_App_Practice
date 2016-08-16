myApp.service('mainService', function() {
    var serviceTeamFilter = null;

    return {
        getServiceTeamFilter: function() {
            return theme;
        },
        setServiceTeamFilter: function(str) {
            theme = str;
        }
    }
});