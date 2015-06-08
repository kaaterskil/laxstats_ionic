(function() {
    'use strict';

    angular.module('admin.seasons').config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/seasons');

        $stateProvider.state('admin.seasons', {
            abstract : true,
            url : '/seasons',
            views : {
                'menuContent' : {
                    template : '<ion-nav-view></ion-nav-view>'
                }
            }
        }).state('admin.seasons.index', {
            cache : false,
            url : '',
            templateUrl : 'app/admin/seasons/seasons.html',
            controller : 'SeasonsCtrl'
        }).state('admin.seasons.edit', {
            url : '/:id',
            templateUrl : 'app/admin/seasons/season.html',
            controller : 'SeasonEditCtrl'
        }).state('admin.seasons.new', {
            url : '/new',
            templateUrl : 'app/admin/seasons/season.html',
            controller : 'SeasonCtrl'
        });
    });
})();