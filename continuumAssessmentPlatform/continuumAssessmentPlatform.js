'use strict';

// Declare app level module which depends on views, and components
angular.module('continuumAssessmentPlatform', [
  'ngRoute',
  'continuumAssessmentPlatform.strategy',
  'continuumAssessmentPlatform.planning',
  'continuumAssessmentPlatform.coding',
  'continuumAssessmentPlatform.ci',
  'continuumAssessmentPlatform.incident',
  'continuumAssessmentPlatform.risk',
  'continuumAssessmentPlatform.design',
  'continuumAssessmentPlatform.teaming',
  'continuumAssessmentPlatform.release',
  'continuumAssessmentPlatform.quality',
  'continuumAssessmentPlatform.environments',
  'continuumAssessmentPlatform.featureteams',
  'continuumAssessmentPlatform.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/strategy'});
}]);