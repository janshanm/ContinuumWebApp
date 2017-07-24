'use strict';

angular.module('continuumAssessmentPlatform.login', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl'
        });
    }])

    .controller('LoginCtrl', ['$location', '$scope', '$rootScope', 'PasswordService', function($location, $scope, $rootScope, PasswordService) {
        $scope.user = {};

        $scope.init = function () {

        };

        $scope.confirmLoginDetails = function(){

            var encryptedPassword = PasswordService.getEncryptedPassword($scope.password);

            PasswordService.loginUser($scope.userName, encryptedPassword).then(function(response){
                var data = response.data;

                if(data["Error"] !== undefined){
                    $scope.hasError = true;
                }
                else{
                    $scope.hasError = false;
                    $rootScope.selectedTeam = data['teamname'];
                    $rootScope.selectedPortfolio = data['portfolio'];
                    $location.path('/home');
                }
            });

        }

    }])

    .factory('PasswordService', ['$http', function ($http) {
        return {
            getEncryptedPassword: function (password) {
                var publicKey = "-----BEGIN PUBLIC KEY-----\n" +
                "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC9g1KT4A6vCDEMT+ABJq2y42r4\n" +
                "p84m8JQ28/M+cEELfnMQ86+QBhWBprp/lU4SyIULgKAX3wmYyaLKKSGg2rdN21Mu\n" +
                "pZSf8QVW3L0tV71CB0WdF8JNjf5Pt5op7auCNglqGngB7xLHJbu8kOU9g7tau8dW\n" +
                "+iHuDw5ZW5UivLjcbQIDAQAB\n" +
                "-----END PUBLIC KEY-----";

                var encrypt = new JSEncrypt();
                encrypt.setPublicKey(publicKey);

                return encrypt.encrypt(password);
            },
            loginUser: function(username, password){
                return $http({
                    url: "http://localhost:8080/login",
                    method: "POST",
                    data: {'userName': username, 'password': password}
                });
            }
        }
    }]);