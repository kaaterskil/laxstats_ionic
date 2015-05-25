(function() {
    'use strict';

    angular.module('main.schedule').config(function($stateProvider) {
        $stateProvider.state('main.schedule', {
            url : '/schedule',
            views : {
                'menuContent' : {
                    templateUrl : 'app/schedule/schedule.html',
                    controller : 'ScheduleCtrl'
                }
            }
        });
    });
})();