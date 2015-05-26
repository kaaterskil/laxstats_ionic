(function() {
    'use strict';

    angular.module('main.home').config(function($stateProvider) {
        $stateProvider.state('main.home', {
            url : '/home',
            views : {
                'menuContent' : {
                    templateUrl : 'app/main/home/home.html',
                    controller : 'HomeCtrl'
                }
            }
        });
    });
    ;
})();