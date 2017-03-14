'use strict';

angular.module('chatApp').controller('Stam', ['$scope', 'UserService', function ($scope, UserService) {
    $scope.users = [];
    $scope.user = {ID: null, name: '', email: ''};

    var getAll = function () {
        UserService.getAll()
            .then(function (data) {
                $scope.users = data;
            });
    };

    getAll();

    $scope.addUser = function () {
        UserService.add($scope.user)
            .then(function (data) {
                console.log('added successfuly', data);
                getAll();
            })
            .catch(function (data) {
                console.log('error adding', data);
            });
        $scope.user = {ID: null, name: '', email: ''};
    };

    $scope.deleteUser = function (index) {
        UserService.remove($scope.users[index].id)
         .then(function (data) {
         console.log('deleted successfully', data);
         getAll();
         })
         .catch(function (data){
         console.log('error deleting', data);
         });
    };
}]);
