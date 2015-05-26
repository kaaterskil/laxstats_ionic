(function() {
    'use strict';

    angular.module('admin.playbook').config(function($stateProvider) {
        $stateProvider.state('admin.playbook', {
            url : '/playbook',
            views : {
                'menuContent' : {
                    templateUrl : 'app/admin/playbook/playbook.html',
                    controller : 'PlaybookCtrl'
                }
            }
        });
    });
    ;
})();