'use strict';

angular.module('continuumAssessmentPlatform.review', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/review', {
    templateUrl: 'review/review.html',
    controller: 'ReviewCtrl'
  });
}])

.controller('ReviewCtrl', [function() {

}]);