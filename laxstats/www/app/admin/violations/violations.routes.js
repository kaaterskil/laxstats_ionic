(function() {
    'use strict';

    angular.module('admin.violations').config(function($stateProvider) {
        $stateProvider.state('admin.violations', {
            url : '/violations',
            views : {
                'menuContent' : {
                    templateUrl : 'app/admin/violations/violations.html',
                    controller : 'ViolationsCtrl'
                }
            }
        });
    });
    ;
})();