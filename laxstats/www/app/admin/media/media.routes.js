(function() {
    'use strict';

    angular.module('admin.media').config(function($stateProvider) {
        $stateProvider.state('admin.media', {
            url : '/media',
            views : {
                'menuContent' : {
                    templateUrl : 'app/admin/media/media.html',
                    controller : 'MediaCtrl'
                }
            }
        });
    });
    ;
})();