'use strict';

angular.module('continuumAssessmentPlatform.planning', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/planning', {
    templateUrl: 'planning/planning.html',
    controller: 'PlanningCtrl'
  });
}])

.controller('PlanningCtrl', [function() {

}]);