'use strict';

angular.module('chatApp').factory('userService', ['$http', '$q', 'config', function($http, $q, config) {
    var REST_SERVICE_URI = config.serverUrl + '/user';

    var factory = {
      getAll: getAll,
      add: add,
      remove: remove
    };

    return factory;

    function getAll() {
        return $http.get(REST_SERVICE_URI)
            .then(function (resolve) {
                return resolve.data;
            })
            .catch(function (reject) {
                console.error('Error while fetching all users', reject);
                return $q.reject(reject);
            })
    }

    function add(user) {
        return $http.post(REST_SERVICE_URI, user)
            .then(function(resolve) {
                return resolve.data;
            })
            .catch(function (reject) {
                console.error('Error while adding new user', reject);
                return $q.reject(reject);
            })
    }

    function remove(id) {
        return $http.delete(REST_SERVICE_URI + '/' + id)
            .then(function (resolve) {
                return resolve.data;
            })
            .catch(function (reject) {
                return $q.reject(reject);
            })
    }
}]);
