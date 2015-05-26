(function() {
    'use strict';

    angular.module('admin.home').config(function($stateProvider) {
        $stateProvider.state('admin.home', {
            url : '/home',
            views : {
                'menuContent' : {
                    templateUrl : 'app/admin/home/home.html',
                    controller : 'OfficeCtrl'
                }
            }
        });
    });
    ;
})();