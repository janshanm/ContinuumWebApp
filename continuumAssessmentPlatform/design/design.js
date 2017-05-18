'use strict';

angular.module('continuumAssessmentPlatform.design', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/design', {
    templateUrl: 'design/design.html',
    controller: 'DesignCtrl'
  });
}])

.controller('DesignCtrl', [function() {

}]);