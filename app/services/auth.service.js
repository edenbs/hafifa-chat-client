'use strict';

angular.module('chatApp')
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    })
    .service('authService' , ['$http', 'config', '$q', function ($http, config, $q) {
        var serviceUrl = config.serverUrl + '/user';

        this.login = function(email, password) {
            return $http.post(serviceUrl + '/login', {email: email, password: password})
                .then(function (response) {
                    localStorage.setItem('token', response.data.token);
                })
                .catch(function (err) {
                    console.log('Error loging in');

                    return $q.reject(err);
                });
        };

        this.register = function(username, password, email) {
            return $http.post(serviceUrl + '/register', {username: username, password:password, email:email});
        }
    }])
    .factory('authInterceptor', ['$q', '$rootScope', function($q, $rootScope) {
        return {
            request: function (request) {
                var token = localStorage.getItem('token');

                request.headers = request.headers || {};

                if (token) {
                    request.headers.Authorization = 'Bearer ' + token;
                }

                return request;
            },
            responseError: function (response) {
                if (response.status === 401) {
                    $rootScope.$emit('$stateUnauthorized');
                }
                if (response.status === 403) {
                    $rootScope.$emit('$stateNoPermission');
                }

                return $q.reject(response);
            }
        }}]
    );