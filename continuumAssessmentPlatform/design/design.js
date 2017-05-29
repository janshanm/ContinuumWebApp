'use strict';

angular.module('continuumAssessmentPlatform.design', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/design', {
    templateUrl: 'design/design.html',
    controller: 'DesignCtrl'
  });
}])

.controller('DesignCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.traveller2 = false;
    $scope.traveller3 = false;
    $scope.artisan1 = false;
    $scope.artisan2 = false;
    $scope.expert1 = false;
    $scope.expert2 = false;
    $scope.expert3 = false;
    $scope.expert4 = false;
    $scope.professional1 = false;
    $scope.professional2 = false;
    $scope.professional3 = false;
    $scope.professional4 = false;
    $scope.professional5 = false;
    $scope.master1 = false;
    $scope.master2 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessments !== "undefined"){
            var assessments = $rootScope.assessments;
            var design = assessments['design'];
            if(design !== undefined) {
                $scope.traveller1 = design['traveller1'];
                $scope.traveller2 = design['traveller2'];
                $scope.traveller3 = design['traveller3'];
                $scope.artisan1 = design['artisan1'];
                $scope.artisan2 = design['artisan2'];
                $scope.expert1 = design['expert1'];
                $scope.expert2 = design['expert2'];
                $scope.expert3 = design['expert3'];
                $scope.expert4 = design['expert4'];
                $scope.professional1 = design['professional1'];
                $scope.professional2 = design['professional2'];
                $scope.professional3 = design['professional3'];
                $scope.professional4 = design['professional4'];
                $scope.professional5 = design['professional5'];
                $scope.master1 = design['master1'];
                $scope.master2 = design['master2'];
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

        $rootScope.assessments['design'] = {
            'traveller1': $scope.traveller1,
            'traveller2': $scope.traveller2,
            'traveller3': $scope.traveller3,
            'artisan1': $scope.artisan1,
            'artisan2': $scope.artisan2,
            'expert1': $scope.expert1,
            'expert2': $scope.expert2,
            'expert3': $scope.expert3,
            'expert4': $scope.expert4,
            'professional1': $scope.professional1,
            'professional2': $scope.professional2,
            'professional3': $scope.professional3,
            'professional4': $scope.professional4,
            'professional5': $scope.professional5,
            'master1': $scope.master1,
            'master2': $scope.master2,
            'score': $scope.computeStrategyAssessmentScore()
        };
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
        return $scope.traveller1 && $scope.traveller2 && $scope.traveller3;
    };

    var isArtisan = function () {
        return !$scope.traveller1 && !$scope.traveller2 && $scope.traveller3 && $scope.artisan1 && $scope.artisan2;
    };

    var isExpert = function() {
        return !isTraveller() && $scope.artisan1 && $scope.artisan2 && $scope.expert1 && $scope.expert2
            && $scope.expert3 && $scope.expert4;
    };

    var isProfessional = function () {
        return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3
            && $scope.professional4 && $scope.professional5;
    };

    var isMaster = function () {
        return isExpert() && !$scope.professional1 && $scope.professional2 && $scope.professional3
            && $scope.professional4 && $scope.professional5 && $scope.master1 && $scope.master2;
    };

}]);