(function() {
    'use strict';

    function seasonsController($scope, Season) {
        $scope.seasons = Season.query();
    }

    angular.module('admin.seasons').controller('SeasonsCtrl',
        [ '$scope', 'Season', seasonsController ]);
})();