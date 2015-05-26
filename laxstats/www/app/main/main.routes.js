(function() {
    'use strict';

    /**
     * This is the parent state that will house the public templates. The named template here
     * contains both the public side menu as well as the yield to the main content.
     */
    angular.module('main').config(function($stateProvider) {
        $stateProvider.state('main', {
            url : '/main',
            abstract : true,
            templateUrl : 'app/main/main.html',
            controller : 'MainCtrl'
        });
    });
})();