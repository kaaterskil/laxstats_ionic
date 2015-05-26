(function() {
    'use strict';

    angular.module('admin.seasons').config(function($stateProvider) {
        $stateProvider.state('admin.seasons', {
            url : '/seasons',
            views : {
                'menuContent' : {
                    templateUrl : 'app/admin/seasons/seasons.html',
                    controller : 'SeasonsCtrl'
                }
            }
        });
    });
    ;
})();