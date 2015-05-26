(function() {
    'use strict';

    angular.module('admin.sites').config(function($stateProvider) {
        $stateProvider.state('admin.sites', {
            url : '/sites',
            views : {
                'menuContent' : {
                    templateUrl : 'app/admin/sites/sites.html',
                    controller : 'SitesCtrl'
                }
            }
        });
    });
    ;
})();