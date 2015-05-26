(function() {
    'use strict';

    angular.module('main.login').config(function($stateProvider) {
        $stateProvider.state('main.login', {
            url : '/login',
            views : {
                'menuContent' : {
                    templateUrl : 'app/login/login.html',
                    controller : 'LoginCtrl'
                }
            }
        });
    });
})();