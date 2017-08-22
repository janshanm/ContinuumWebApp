'use strict';

// Declare app level module which depends on views, and components
angular.module('continuumAssessmentPlatform', [
  'ngRoute',
  'continuumAssessmentPlatform.login',
  'continuumAssessmentPlatform.teamselection',
  'continuumAssessmentPlatform.teamselectionqa',
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
  'continuumAssessmentPlatform.standards',
  'continuumAssessmentPlatform.metrics',
  'continuumAssessmentPlatform.integration',
  'continuumAssessmentPlatform.stakeholder-management',
  'continuumAssessmentPlatform.team-management',
  'continuumAssessmentPlatform.documentation',
  'continuumAssessmentPlatform.assessment-process',
  'continuumAssessmentPlatform.research',
  'continuumAssessmentPlatform.involvement',
  'continuumAssessmentPlatform.repository',
  'continuumAssessmentPlatform.execution',
  'continuumAssessmentPlatform.process',
  'continuumAssessmentPlatform.resultsqa',
  'continuumAssessmentPlatform.teamselection-qamam',
  'continuumAssessmentPlatform.test-criteria',
  'continuumAssessmentPlatform.defect-and-exploratory',
  'continuumAssessmentPlatform.automation-testing',
  'continuumAssessmentPlatform.test-metrics',
  'continuumAssessmentPlatform.quality-alignment',
  'continuumAssessmentPlatform.practice-innovation',
  'continuumAssessmentPlatform.tools-artefacts',
  'continuumAssessmentPlatform.qamam-results',
  'continuumAssessmentPlatform.previous-assessments-qa',
  'continuumAssessmentPlatform.practice-management',
  'continuumAssessmentPlatform.complete-survey',
  'continuumAssessmentPlatform.survey-results',
  'continuumAssessmentPlatform.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/login'});
}]);
