(function() {
    'use strict';

    angular.module('admin').config(function($stateProvider) {
        $stateProvider.state('admin', {
            url : '/admin',
            abstract : true,
            templateUrl : 'app/admin/admin.html',
            controller : 'AdminCtrl'
        });
    });
})();