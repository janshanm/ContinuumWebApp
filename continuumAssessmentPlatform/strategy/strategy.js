'use strict';

angular.module('continuumAssessmentPlatform.strategy', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/strategy', {
    templateUrl: 'strategy/strategy.html',
    controller: 'StrategyCtrl'
  });
}])

.controller('StrategyCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.traveller1 = false;
  $scope.artisan1 = false;
  $scope.artisan2 = false;
  $scope.artisan3 = false;
  $scope.expert1 = false;
  $scope.expert2 = false;
  $scope.professional1 = false;
  $scope.professional2 = false;
  $scope.professional3 = false;
  $scope.master1 = false;
  $scope.master2 = false;
  $scope.master3 = false;
  $scope.master4 = false;

  $scope.init = function () {
      if(typeof $rootScope.assessments !== "undefined"){
        var assessments = $rootScope.assessments;
        var strategy = assessments['strategy'];
        $scope.traveller1 = strategy['traveller1'];
        $scope.artisan1 = strategy['artisan1'];
        $scope.artisan2 = strategy['artisan2'];
        $scope.artisan3 = strategy['artisan3'];
        $scope.expert1 = strategy['expert1'];
        $scope.expert2 = strategy['expert2'];
        $scope.professional1 = strategy['professional1'];
        $scope.professional2 = strategy['professional2'];
        $scope.professional3 = strategy['professional3'];
        $scope.master1 = strategy['master1'];
        $scope.master2 = strategy['master2'];
        $scope.master3 = strategy['master3'];
        $scope.master4 = strategy['master4'];
      }
  };

  $scope.saveAssessments = function(){
      $rootScope.assessments = {'strategy': {
        'traveller1': $scope.traveller1,
          'artisan1': $scope.artisan1,
          'artisan2': $scope.artisan2,
          'artisan3': $scope.artisan3,
          'expert1': $scope.expert1,
          'expert2': $scope.expert2,
          'professional1': $scope.professional1,
          'professional2': $scope.professional2,
          'professional3': $scope.professional3,
          'master1': $scope.master1,
          'master2': $scope.master2,
          'master3': $scope.master3,
          'master4': $scope.master4
      }};
  }
}]);