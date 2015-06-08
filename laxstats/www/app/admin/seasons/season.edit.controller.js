(function() {
    'use strict';

    function seasonEditController($scope, $stateParams, $location, Season) {
        $scope.season = Season.get({
            id : $stateParams.id
        });

        $scope.saveOrUpdate = function(form) {
            if (form.$valid) {
                $scope.season.$update().then(function(response) {
                    $location.path('/admin/seasons');
                });
            }
        };

        $scope.remove = function() {
            $scope.season.$delete().then(function(result) {
                $location.path('/admin/seasons');
            });
        };
    }

    angular.module('admin.seasons').controller('SeasonEditCtrl',
        [ '$scope', '$stateParams', '$location', 'Season', seasonEditController ]);
})();