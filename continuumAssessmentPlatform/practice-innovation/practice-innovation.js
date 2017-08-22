'use strict';

angular.module('continuumAssessmentPlatform.practice-innovation', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/practice-innovation', {
    templateUrl: 'practice-innovation/practice-innovation.html',
    controller: 'PracticeInnovationCtrl'
  });
}])

.controller('PracticeInnovationCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.traveller2 = false;
    $scope.traveller3 = false;
    $scope.traveller4 = false;
    $scope.traveller5 = false;
    $scope.traveller6 = false;
    $scope.traveller7 = false;
    $scope.traveller8 = false;
    $scope.traveller9 = false;
    $scope.traveller10 = false;
    $scope.traveller11 = false;
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
    $scope.expert7 = false;
    $scope.expert8 = false;
    $scope.expert9 = false;
    $scope.expert10 = false;
    $scope.expert11 = false;
    $scope.professional1 = false;
    $scope.professional2 = false;
    $scope.professional3 = false;
    $scope.professional4 = false;
    $scope.professional5 = false;
    $scope.professional6 = false;
    $scope.professional7 = false;
    $scope.professional8 = false;
    $scope.professional9 = false;
    $scope.professional10 = false;
    $scope.master1 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessmentsQaMaM !== "undefined"){
            var assessments = $rootScope.assessmentsQaMaM;
            var practiceInnovation = assessments['practice-innovation'];
            if(practiceInnovation !== undefined) {
                $scope.traveller1 = practiceInnovation['traveller1'];
                $scope.traveller2 = practiceInnovation['traveller2'];
                $scope.traveller3 = practiceInnovation['traveller3'];
                $scope.traveller4 = practiceInnovation['traveller4'];
                $scope.traveller5 = practiceInnovation['traveller5'];
                $scope.traveller6 = practiceInnovation['traveller6'];
                $scope.traveller7 = practiceInnovation['traveller7'];
                $scope.traveller8 = practiceInnovation['traveller8'];
                $scope.traveller9 = practiceInnovation['traveller9'];
                $scope.traveller10 = practiceInnovation['traveller10'];
                $scope.traveller11 = practiceInnovation['traveller11'];
                $scope.artisan1 = practiceInnovation['artisan1'];
                $scope.artisan2 = practiceInnovation['artisan2'];
                $scope.artisan3 = practiceInnovation['artisan3'];
                $scope.artisan4 = practiceInnovation['artisan4'];
                $scope.artisan5 = practiceInnovation['artisan5'];
                $scope.expert1 = practiceInnovation['expert1'];
                $scope.expert2 = practiceInnovation['expert2'];
                $scope.expert3 = practiceInnovation['expert3'];
                $scope.expert4 = practiceInnovation['expert4'];
                $scope.expert5 = practiceInnovation['expert5'];
                $scope.expert6 = practiceInnovation['expert6'];
                $scope.expert7 = practiceInnovation['expert7'];
                $scope.expert8 = practiceInnovation['expert8'];
                $scope.expert9 = practiceInnovation['expert9'];
                $scope.expert10 = practiceInnovation['expert10'];
                $scope.expert11 = practiceInnovation['expert11'];
                $scope.professional1 = practiceInnovation['professional1'];
                $scope.professional2 = practiceInnovation['professional2'];
                $scope.professional3 = practiceInnovation['professional3'];
                $scope.professional4 = practiceInnovation['professional4'];
                $scope.professional5 = practiceInnovation['professional5'];
                $scope.professional6 = practiceInnovation['professional6'];
                $scope.professional7 = practiceInnovation['professional7'];
                $scope.professional8 = practiceInnovation['professional8'];
                $scope.professional9 = practiceInnovation['professional9'];
                $scope.professional10 = practiceInnovation['professional10'];
                $scope.master1 = practiceInnovation['master1'];
            }
        }
    };

    $scope.getClass = function(value){
        return value ? 'bg-info': 'bg-warning';
    };

    $scope.saveAssessments = function(){
        if($rootScope.assessmentsQaMaM === undefined){
            $rootScope.assessmentsQaMaM = {};
        }

        $rootScope.assessmentsQaMaM['practice-innovation'] = {
            'traveller1': $scope.traveller1,
            'traveller2': $scope.traveller2,
            'traveller3': $scope.traveller3,
            'traveller4': $scope.traveller4,
            'traveller5': $scope.traveller5,
            'traveller6': $scope.traveller6,
            'traveller7': $scope.traveller7,
            'traveller8': $scope.traveller8,
            'traveller9': $scope.traveller9,
            'traveller10': $scope.traveller10,
            'traveller11': $scope.traveller11,
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
            'expert7': $scope.expert7,
            'expert8': $scope.expert8,
            'expert9': $scope.expert9,
            'expert10': $scope.expert10,
            'expert11': $scope.expert11,
            'professional1': $scope.professional1,
            'professional2': $scope.professional2,
            'professional3': $scope.professional3,
            'professional4': $scope.professional4,
            'professional5': $scope.professional5,
            'professional6': $scope.professional6,
            'professional7': $scope.professional7,
            'professional8': $scope.professional8,
            'professional9': $scope.professional9,
            'professional10': $scope.professional10,
            'master1': $scope.master1,
            'score': $scope.computeAssessmentScore()
        };
    };

    $scope.computeAssessmentScore = function(){
        if(isTraveller() && !isArtisan() && !isExpert() && !isProfessional() && !isMaster()){
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
            return 1;
        }

    };

    var isTraveller = function(){
        return $scope.traveller1 && $scope.traveller2 && $scope.traveller3 && $scope.traveller4 && $scope.traveller5
            && $scope.traveller6 && $scope.traveller7 && $scope.traveller8 && $scope.traveller9 && $scope.traveller10
            && $scope.traveller11;
    };

    var isArtisan = function () {
        return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && !$scope.traveller5 && !$scope.traveller6
            && $scope.artisan1 && $scope.artisan2 && $scope.artisan3 && $scope.artisan4 && $scope.artisan5;
    };

    var isExpert = function() {
        return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && !$scope.traveller4 && !$scope.traveller5
            && !$scope.traveller6 && !$scope.traveller7 && !$scope.traveller8 && !$scope.traveller10
            && $scope.artisan1 && $scope.artisan2 && !$scope.artisan3 && $scope.artisan4
            && $scope.artisan5 && $scope.expert1 && $scope.expert2 && $scope.expert3 && $scope.expert4 && $scope.expert5
            && $scope.expert6 && $scope.expert7 && $scope.expert8 && $scope.expert9 && $scope.expert10 && $scope.expert11;
    };

    var isProfessional = function () {
        return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && !$scope.traveller4 && !$scope.traveller5
            && !$scope.traveller6 && !$scope.traveller7 && !$scope.traveller8 && !$scope.traveller9 && !$scope.traveller10
            && !$scope.traveller11 && $scope.artisan1 && $scope.artisan2 && !$scope.artisan3 && $scope.artisan4
            && $scope.artisan5 && $scope.expert1 && $scope.expert2 && $scope.expert3 && $scope.expert4 && $scope.expert5
            && $scope.expert6 && $scope.expert7 && $scope.expert8 && $scope.expert9 && $scope.expert10 && $scope.expert11
            && $scope.professional1 && $scope.professional2 && $scope.professional3 && $scope.professional4
            && $scope.professional5 && $scope.professional6 && $scope.professional7 && $scope.professional8
            && $scope.professional9 && $scope.professional10;
    };

    var isMaster = function () {
        return isProfessional() && $scope.master1;
    };
}]);