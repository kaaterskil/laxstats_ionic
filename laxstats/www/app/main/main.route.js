(function() {
    'use strict';

    angular.module('laxstats.main').config(function($stateProvider) {
        $stateProvider.state('home', {
            url : '/',
            templateUrl : 'app/main/main.html',
            controller : 'MainCtrl as vm'
        });
    });
})();