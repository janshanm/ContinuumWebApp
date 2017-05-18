'use strict';

angular.module('continuumAssessmentPlatform.quality', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/quality', {
    templateUrl: 'quality/quality.html',
    controller: 'QualityCtrl'
  });
}])

.controller('QualityCtrl', [function() {

}]);