'use strict';

angular.module('continuumAssessmentPlatform.teaming', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/teaming', {
    templateUrl: 'teaming/teaming.html',
    controller: 'TeamingCtrl'
  });
}])

.controller('TeamingCtrl', [function() {

}]);