(function() {
    'use strict';

    angular.module('admin.games').config(function($stateProvider) {
        $stateProvider.state('admin.games', {
            url : '/games',
            views : {
                'menuContent' : {
                    templateUrl : 'app/admin/games/games.html',
                    controller : 'GamesCtrl'
                }
            }
        });
    });
    ;
})();