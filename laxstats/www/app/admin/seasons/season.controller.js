(function() {
    'use strict';

    function seasonController($scope, $stateParams, $location, Season) {
        $scope.season = Season.get({
            id : $stateParams.id
        });

        $scope.create = function() {
            $scope.season.$save();
            $location.path('/admin/seasons');
        };

        $scope.update = function() {
            $scope.season.$update();
            $location.path('/admin/seasons');
        };
    }

    angular.module('admin.seasons').controller('SeasonCtrl',
        [ '$scope', '$stateParams', '$location', 'Season', seasonController ]);
})();