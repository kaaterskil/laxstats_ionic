(function() {
    'use strict';

    function asDate(input) {
        return new Date(input);
    }

    angular.module('laxstats.core').filter('asDate', asDate);
})();