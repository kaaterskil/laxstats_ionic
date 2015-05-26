(function() {
    'use strict';

    angular.module('admin.people').config(function($stateProvider) {
        $stateProvider.state('admin.people', {
            url : '/people',
            views : {
                'menuContent' : {
                    templateUrl : 'app/admin/people/people.html',
                    controller : 'PeopleCtrl'
                }
            }
        });
    });
    ;
})();