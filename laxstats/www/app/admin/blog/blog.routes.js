(function() {
    'use strict';

    angular.module('admin.blog').config(function($stateProvider) {
        $stateProvider.state('admin.blog', {
            url : '/blog',
            views : {
                'menuContent' : {
                    templateUrl : 'app/admin/blog/blog.html',
                    controller : 'BlogCtrl'
                }
            }
        });
    });
    ;
})();