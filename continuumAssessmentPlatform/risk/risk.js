'use strict';

angular.module('continuumAssessmentPlatform.risk', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/risk', {
    templateUrl: 'risk/risk.html',
    controller: 'RiskCtrl'
  });
}])

.controller('RiskCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.traveller2 = false;
    $scope.artisan1 = false;
    $scope.artisan2 = false;
    $scope.artisan3 = false;
    $scope.expert1 = false;
    $scope.expert2 = false;
    $scope.expert3 = false;
    $scope.professional1 = false;
    $scope.professional2 = false;
    $scope.professional3 = false;
    $scope.master1 = false;
    $scope.master2 = false;
    $scope.master3 = false;
    $scope.master4 = false;
    $scope.master5 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessments !== "undefined"){
            var assessments = $rootScope.assessments;
            var risk = assessments['risk'];
            $scope.traveller1 = risk['traveller1'];
            $scope.traveller2 = risk['traveller2'];
            $scope.artisan1 = risk['artisan1'];
            $scope.artisan2 = risk['artisan2'];
            $scope.artisan3 = risk['artisan3'];
            $scope.expert1 = risk['expert1'];
            $scope.expert2 = risk['expert2'];
            $scope.expert3 = risk['expert3'];
            $scope.professional1 = risk['professional1'];
            $scope.professional2 = risk['professional2'];
            $scope.professional3 = risk['professional3'];
            $scope.master1 = risk['master1'];
            $scope.master2 = risk['master2'];
            $scope.master3 = risk['master3'];
            $scope.master4 = risk['master4'];
            $scope.master5 = risk['master5'];
        }
    };

    $scope.saveAssessments = function(){
        $rootScope.assessments = {'risk': {
            'traveller1': $scope.traveller1,
            'traveller2': $scope.traveller2,
            'artisan1': $scope.artisan1,
            'artisan2': $scope.artisan2,
            'artisan3': $scope.artisan3,
            'expert1': $scope.expert1,
            'expert2': $scope.expert2,
            'expert3': $scope.expert3,
            'professional1': $scope.professional1,
            'professional2': $scope.professional2,
            'professional3': $scope.professional3,
            'master1': $scope.master1,
            'master2': $scope.master2,
            'master3': $scope.master3,
            'master4': $scope.master4,
            'master5': $scope.master5,
            'score': $scope.computeStrategyAssessmentScore()
        }};
    };

    $scope.computeStrategyAssessmentScore = function(){
        if(isTraveller()){
            return 1;
        }
        else if(isArtisan() && !isExpert() && !isProfessional() && !isMaster()){
            return 2;
        }
        else if(isExpert() && !isProfessional() && !isMaster()){
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
        return $scope.traveller1 && $scope.traveller2;
    };

    var isArtisan = function () {
        return !isTraveller() && $scope.artisan1 && $scope.artisan2 && $scope.artisan3;
    };

    var isExpert = function() {
        return isArtisan() && $scope.expert1 && $scope.expert2 && $scope.expert3;
    };

    var isProfessional = function () {
        return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3;
    };

    var isMaster = function () {
        return isProfessional() && $scope.master1 && $scope.master2 && $scope.master3 && $scope.master4 && $scope.master5;
    };

}]);