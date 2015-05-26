(function() {
    'use strict';

    angular.module('admin.users').config(function($stateProvider) {
        $stateProvider.state('admin.users', {
            url : '/users',
            views : {
                'menuContent' : {
                    templateUrl : 'app/admin/users/users.html',
                    controller : 'UsersCtrl'
                }
            }
        });
    });
    ;
})();