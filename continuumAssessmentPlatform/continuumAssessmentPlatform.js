'use strict';

// Declare app level module which depends on views, and components
angular.module('continuumAssessmentPlatform', [
  'ngRoute',
  'continuumAssessmentPlatform.login',
  'continuumAssessmentPlatform.teamselection',
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
  'continuumAssessmentPlatform.review',
  'continuumAssessmentPlatform.results',
  'continuumAssessmentPlatform.welcome',
  'continuumAssessmentPlatform.previous-assessments',
  'continuumAssessmentPlatform.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/login'});
}]);
