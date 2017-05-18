'use strict';

angular.module('continuumAssessmentPlatform.risk', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/risk', {
    templateUrl: 'risk/risk.html',
    controller: 'RiskCtrl'
  });
}])

.controller('RiskCtrl', [function() {

}]);