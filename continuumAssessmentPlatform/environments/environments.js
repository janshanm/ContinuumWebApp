'use strict';

angular.module('continuumAssessmentPlatform.environments', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/environments', {
    templateUrl: 'environments/environments.html',
    controller: 'EnvironmentsCtrl'
  });
}])

.controller('EnvironmentsCtrl', [function() {

}]);