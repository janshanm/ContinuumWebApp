'use strict';

angular.module('continuumAssessmentPlatform.ci', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ci', {
    templateUrl: 'continuousintegration/ci.html',
    controller: 'CICtrl'
  });
}])

.controller('CICtrl', [function() {

}]);