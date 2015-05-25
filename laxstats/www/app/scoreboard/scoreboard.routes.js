(function() {
    'use strict';

    angular.module('main.scoreboard').config(function($stateProvider) {
        $stateProvider.state('main.scoreboard', {
            url : '/scoreboard',
            views : {
                'menuContent' : {
                    templateUrl : 'app/scoreboard/scoreboard.html',
                    controller : 'ScoreboardCtrl'
                }
            }
        });
    });
})();