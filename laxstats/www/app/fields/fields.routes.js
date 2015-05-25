(function() {
    'use strict';

    angular.module('main.fields').config(function($stateProvider) {
        $stateProvider.state('main.fields', {
            url : '/fields',
            views : {
                'menuContent' : {
                    templateUrl : 'app/fields/fields.html',
                    controller : 'FieldsCtrl'
                }
            }
        });
    });
})();