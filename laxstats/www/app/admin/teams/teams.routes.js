(function() {
    'use strict';

    angular.module('admin.teams').config(function($stateProvider) {
        $stateProvider.state('admin.teams', {
            url : '/teams',
            views : {
                'menuContent' : {
                    templateUrl : 'app/admin/teams/teams.html',
                    controller : 'TeamsCtrl'
                }
            }
        });
    });
    ;
})();