'use strict';

angular.module('continuumAssessmentPlatform.featureteams', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/featureteams', {
    templateUrl: 'featureteams/featureteams.html',
    controller: 'FeatureTeamsCtrl'
  });
}])

.controller('FeatureTeamsCtrl', [function() {

}]);