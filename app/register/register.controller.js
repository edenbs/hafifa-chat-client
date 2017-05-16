'use strict';

angular.module('chatApp').controller('Register', ['$scope', 'authService', '$state', '$q', function ($scope, authService, $state, $q) {
    $scope.user = {};

    $scope.register = function () {
        authService.register($scope.user.username, $scope.user.password, $scope.user.email)
            .then(function() {
                $state.go('login');
            })
            .catch(function(err) {
                alert("An error occured");
            })
    }
}]);