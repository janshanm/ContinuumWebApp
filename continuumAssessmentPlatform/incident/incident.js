'use strict';

angular.module('continuumAssessmentPlatform.incident', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/incident', {
    templateUrl: 'incident/incident.html',
    controller: 'IncidentCtrl'
  });
}])

.controller('IncidentCtrl', [function() {

}]);