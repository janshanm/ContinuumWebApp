'use strict';

angular.module('continuumAssessmentPlatform.planning', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/planning', {
    templateUrl: 'planning/planning.html',
    controller: 'PlanningCtrl'
  });
}])

.controller('PlanningCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.traveller2 = false;
    $scope.traveller3 = false;
    $scope.traveller4 = false;
    $scope.traveller5 = false;
    $scope.artisan1 = false;
    $scope.artisan2 = false;
    $scope.artisan3 = false;
    $scope.artisan4 = false;
    $scope.artisan5 = false;
    $scope.expert1 = false;
    $scope.expert2 = false;
    $scope.expert3 = false;
    $scope.expert4 = false;
    $scope.expert5 = false;
    $scope.expert6 = false;
    $scope.professional1 = false;
    $scope.professional2 = false;
    $scope.professional3 = false;
    $scope.professional4 = false;
    $scope.professional5 = false;
    $scope.professional6 = false;
    $scope.master1 = false;
    $scope.master2 = false;
    $scope.master3 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessments !== "undefined"){
            var assessments = $rootScope.assessments;
            var planning = assessments['planning'];
            if(planning !== undefined) {
                $scope.traveller1 = planning['traveller1'];
                $scope.traveller2 = planning['traveller2'];
                $scope.traveller3 = planning['traveller3'];
                $scope.traveller4 = planning['traveller4'];
                $scope.traveller5 = planning['traveller5'];
                $scope.artisan1 = planning['artisan1'];
                $scope.artisan2 = planning['artisan2'];
                $scope.artisan3 = planning['artisan3'];
                $scope.artisan4 = planning['artisan4'];
                $scope.artisan5 = planning['artisan5'];
                $scope.expert1 = planning['expert1'];
                $scope.expert2 = planning['expert2'];
                $scope.expert3 = planning['expert3'];
                $scope.expert4 = planning['expert4'];
                $scope.expert5 = planning['expert5'];
                $scope.expert6 = planning['expert6'];
                $scope.professional1 = planning['professional1'];
                $scope.professional2 = planning['professional2'];
                $scope.professional3 = planning['professional3'];
                $scope.professional4 = planning['professional4'];
                $scope.professional5 = planning['professional5'];
                $scope.professional6 = planning['professional6'];
                $scope.master1 = planning['master1'];
                $scope.master2 = planning['master2'];
                $scope.master3 = planning['master3'];
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

        $rootScope.assessments['planning'] = {
            'traveller1': $scope.traveller1,
            'traveller2': $scope.traveller2,
            'traveller3': $scope.traveller3,
            'traveller4': $scope.traveller4,
            'traveller5': $scope.traveller5,
            'artisan1': $scope.artisan1,
            'artisan2': $scope.artisan2,
            'artisan3': $scope.artisan3,
            'artisan4': $scope.artisan4,
            'artisan5': $scope.artisan5,
            'expert1': $scope.expert1,
            'expert2': $scope.expert2,
            'expert3': $scope.expert3,
            'expert4': $scope.expert4,
            'expert5': $scope.expert5,
            'expert6': $scope.expert6,
            'professional1': $scope.professional1,
            'professional2': $scope.professional2,
            'professional3': $scope.professional3,
            'professional4': $scope.professional4,
            'professional5': $scope.professional5,
            'professional6': $scope.professional6,
            'master1': $scope.master1,
            'master2': $scope.master2,
            'master3': $scope.master3,
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
        return $scope.traveller1 && $scope.traveller2 && $scope.traveller3 && $scope.traveller4 && $scope.traveller5;
    };

    var isArtisan = function () {
        return !isTraveller() && $scope.artisan1 && $scope.artisan2 && $scope.artisan3 && $scope.artisan4 && $scope.artisan5;
    };

    var isExpert = function() {
        return !isTraveller() && !$scope.artisan1 && $scope.artisan2 && $scope.artisan3 && $scope.artisan4 && $scope.artisan4
            && $scope.expert1 && $scope.expert2 && $scope.expert3 && $scope.expert4 && $scope.expert5 && $scope.expert6;
    };

    var isProfessional = function () {
        return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3 && $scope.professional4
            && $scope.professional5 && $scope.professional6;
    };

    var isMaster = function () {
        return isProfessional() && $scope.master1 && $scope.master2 && $scope.master3;
    }

}]);