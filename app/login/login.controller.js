'use strict';

angular.module('chatApp').controller('Login', ['$scope', 'userService', '$mdDialog', 'authService', '$state', function ($scope, userService, $mdDialog, authService, $state) {
    $scope.user = {};

    $scope.login = function() {
        authService.login($scope.user.email, $scope.user.password)
            .then(function (res) {
                $state.go('chat');
            })
            .catch(function (err) {
                alert(err.status);
            });
    };

    /*var getAll = function () {
        UserService.getAll()
            .then(function (data) {
                $scope.users = data;
            });
    };*/

    //getAll();

    /*$scope.addUser = function (user) {
        UserService.add(user)
            .then(function (data) {
                console.log('added successfuly', data);
                getAll();
            })
            .catch(function (data) {
                console.log('error adding', data);
            });
        $scope.user = {name: '', email: ''};
    };*/

    /*$scope.deleteUser = function (index) {
        UserService.remove($scope.users[index].id)
         .then(function (data) {
         console.log('deleted successfully', data);
         getAll();
         })
         .catch(function (data){
         console.log('error deleting', data);
         });
    };*/
}]);
