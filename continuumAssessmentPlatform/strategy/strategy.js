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
        if(strategy !== undefined) {
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
      }
  };

  $scope.getClass = function(value){
      return value ? 'bg-info': 'bg-warning';
  };

  $scope.saveAssessments = function(){
      if($rootScope.assessments === undefined){
          $rootScope.assessments = {};
      }

      $rootScope.assessments['strategy'] = {
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
          'master4': $scope.master4,
          'score': $scope.computeStrategyAssessmentScore()
      };
  };

  $scope.computeStrategyAssessmentScore = function(){
    if(isTraveller()){
      return 1;
    }
    else if(isArtisan()){
      return 2;
    }
    else if(isExpert()){
      return 3;
    }
    else if(isProfessional() && !isMaster()){
      return 4;
    }
    else if(isMaster()){
      return 5;
    }
    else{
      return 0;
    }

  };

  var isTraveller = function(){
    return $scope.traveller1;
  };

  var isArtisan = function () {
    return !isTraveller() && $scope.artisan1 && $scope.artisan2 && $scope.artisan3;
  };

  var isExpert = function() {
    return !isTraveller() && !$scope.artisan1 && $scope.artisan2 && $scope.artisan3 && $scope.expert1 && $scope.expert2;
  };

  var isProfessional = function () {
      return !isTraveller() && !$scope.artisan1 && $scope.artisan2 && $scope.artisan3
          && !$scope.expert1 && $scope.expert2 && $scope.professional1 && $scope.professional2 && $scope.professional3;
  };

  var isMaster = function () {
      return isProfessional() && $scope.master1 && $scope.master2 && $scope.master3 && $scope.master4;
  }

}]);