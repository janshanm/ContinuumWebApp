'use strict';

angular.module('continuumAssessmentPlatform.quality', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/quality', {
    templateUrl: 'quality/quality.html',
    controller: 'QualityCtrl'
  });
}])

.controller('QualityCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.traveller2 = false;
    $scope.traveller3 = false;
    $scope.traveller4 = false;
    $scope.traveller5 = false;
    $scope.traveller6 = false;
    $scope.artisan1 = false;
    $scope.artisan2 = false;
    $scope.artisan3 = false;
    $scope.expert1 = false;
    $scope.expert2 = false;
    $scope.expert3 = false;
    $scope.expert4 = false;
    $scope.expert5 = false;
    $scope.expert6 = false;
    $scope.expert7 = false;
    $scope.expert8 = false;
    $scope.expert9 = false;
    $scope.professional1 = false;
    $scope.professional2 = false;
    $scope.professional3 = false;
    $scope.professional4 = false;
    $scope.professional5 = false;
    $scope.professional6 = false;
    $scope.professional7 = false;
    $scope.master1 = false;
    $scope.master2 = false;
    $scope.master3 = false;
    $scope.master4 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessments !== "undefined"){
            var assessments = $rootScope.assessments;
            var QA = assessments['QA'];
            if(QA !== undefined) {
                $scope.traveller1 = QA['traveller1'];
                $scope.traveller2 = QA['traveller2'];
                $scope.traveller3 = QA['traveller3'];
                $scope.traveller4 = QA['traveller4'];
                $scope.traveller5 = QA['traveller5'];
                $scope.traveller6 = QA['traveller6'];
                $scope.artisan1 = QA['artisan1'];
                $scope.artisan2 = QA['artisan2'];
                $scope.artisan3 = QA['artisan3'];
                $scope.expert1 = QA['expert1'];
                $scope.expert2 = QA['expert2'];
                $scope.expert3 = QA['expert3'];
                $scope.expert4 = QA['expert4'];
                $scope.expert5 = QA['expert5'];
                $scope.expert6 = QA['expert6'];
                $scope.expert7 = QA['expert7'];
                $scope.expert8 = QA['expert8'];
                $scope.expert9 = QA['expert9'];
                $scope.professional1 = QA['professional1'];
                $scope.professional2 = QA['professional2'];
                $scope.professional3 = QA['professional3'];
                $scope.professional4 = QA['professional4'];
                $scope.professional5 = QA['professional5'];
                $scope.professional6 = QA['professional6'];
                $scope.professional7 = QA['professional7'];
                $scope.master1 = QA['master1'];
                $scope.master2 = QA['master2'];
                $scope.master3 = QA['master3'];
                $scope.master4 = QA['master4'];
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

        $rootScope.assessments['QA'] = {
            'traveller1': $scope.traveller1,
            'traveller2': $scope.traveller2,
            'traveller3': $scope.traveller3,
            'traveller4': $scope.traveller4,
            'traveller5': $scope.traveller5,
            'traveller6': $scope.traveller6,
            'artisan1': $scope.artisan1,
            'artisan2': $scope.artisan2,
            'artisan3': $scope.artisan3,
            'expert1': $scope.expert1,
            'expert2': $scope.expert2,
            'expert3': $scope.expert3,
            'expert4': $scope.expert4,
            'expert5': $scope.expert5,
            'expert6': $scope.expert6,
            'expert7': $scope.expert7,
            'expert8': $scope.expert8,
            'expert9': $scope.expert9,
            'professional1': $scope.professional1,
            'professional2': $scope.professional2,
            'professional3': $scope.professional3,
            'professional4': $scope.professional4,
            'professional5': $scope.professional5,
            'professional6': $scope.professional6,
            'professional7': $scope.professional7,
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
        return $scope.traveller1 && $scope.traveller2 && $scope.traveller3 && $scope.traveller4
            && $scope.traveller5 && $scope.traveller6;
    };

    var isArtisan = function () {
        return !$scope.traveller1 && $scope.traveller2 && $scope.traveller3 && !$scope.traveller4
            && $scope.traveller5 && $scope.traveller6 && $scope.artisan1 && $scope.artisan2 && $scope.artisan3;
    };

    var isExpert = function() {
        return !isTraveller() && !$scope.artisan1 && !$scope.artisan2 && !$scope.artisan3 && $scope.expert1
            && $scope.expert2 && $scope.expert3 && $scope.expert4 && $scope.expert5 && $scope.expert6 && $scope.expert7
            && $scope.expert8 && $scope.expert9;
    };

    var isProfessional = function () {
        return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3 && $scope.professional4
            && $scope.professional5 && $scope.professional6 && $scope.professional7;
    };

    var isMaster = function () {
        return isProfessional() && $scope.master1 && $scope.master2 && $scope.master3 && $scope.master4;
    };

}]);