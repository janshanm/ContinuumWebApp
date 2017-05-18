'use strict';

angular.module('continuumAssessmentPlatform.release', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/release', {
    templateUrl: 'release/release.html',
    controller: 'ReleaseCtrl'
  });
}])

.controller('ReleaseCtrl', [function() {

}]);