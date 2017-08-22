'use strict';

angular.module('continuumAssessmentPlatform.quality-alignment', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/quality-alignment', {
    templateUrl: 'quality-alignment/quality-alignment.html',
    controller: 'QualityAlignmentCtrl'
  });
}])

.controller('QualityAlignmentCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.traveller2 = false;
    $scope.traveller3 = false;
    $scope.traveller4 = false;
    $scope.traveller5 = false;
    $scope.traveller6 = false;
    $scope.traveller7 = false;
    $scope.traveller8 = false;
    $scope.traveller9 = false;
    $scope.artisan1 = false;
    $scope.artisan2 = false;
    $scope.artisan3 = false;
    $scope.artisan4 = false;
    $scope.artisan5 = false;
    $scope.artisan6 = false;
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
    $scope.professional11 = false;
    $scope.master1 = false;
    $scope.master2 = false;
    $scope.master3 = false;
    $scope.master4 = false;
    $scope.master5 = false;
    $scope.master6 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessmentsQaMaM !== "undefined"){
            var assessments = $rootScope.assessmentsQaMaM;
            var qualityAlignment = assessments['quality-alignment'];
            if(qualityAlignment !== undefined) {
                $scope.traveller1 = qualityAlignment['traveller1'];
                $scope.traveller2 = qualityAlignment['traveller2'];
                $scope.traveller3 = qualityAlignment['traveller3'];
                $scope.traveller4 = qualityAlignment['traveller4'];
                $scope.traveller5 = qualityAlignment['traveller5'];
                $scope.traveller6 = qualityAlignment['traveller6'];
                $scope.traveller7 = qualityAlignment['traveller7'];
                $scope.traveller8 = qualityAlignment['traveller8'];
                $scope.traveller9 = qualityAlignment['traveller9'];
                $scope.artisan1 = qualityAlignment['artisan1'];
                $scope.artisan2 = qualityAlignment['artisan2'];
                $scope.artisan3 = qualityAlignment['artisan3'];
                $scope.artisan4 = qualityAlignment['artisan4'];
                $scope.artisan5 = qualityAlignment['artisan5'];
                $scope.artisan6 = qualityAlignment['artisan6'];
                $scope.expert1 = qualityAlignment['expert1'];
                $scope.expert2 = qualityAlignment['expert2'];
                $scope.expert3 = qualityAlignment['expert3'];
                $scope.expert4 = qualityAlignment['expert4'];
                $scope.expert5 = qualityAlignment['expert5'];
                $scope.expert6 = qualityAlignment['expert6'];
                $scope.expert7 = qualityAlignment['expert7'];
                $scope.expert8 = qualityAlignment['expert8'];
                $scope.expert9 = qualityAlignment['expert9'];
                $scope.expert10 = qualityAlignment['expert10'];
                $scope.professional1 = qualityAlignment['professional1'];
                $scope.professional2 = qualityAlignment['professional2'];
                $scope.professional3 = qualityAlignment['professional3'];
                $scope.professional4 = qualityAlignment['professional4'];
                $scope.professional5 = qualityAlignment['professional5'];
                $scope.professional6 = qualityAlignment['professional6'];
                $scope.professional7 = qualityAlignment['professional7'];
                $scope.professional8 = qualityAlignment['professional8'];
                $scope.professional9 = qualityAlignment['professional9'];
                $scope.professional10 = qualityAlignment['professional10'];
                $scope.professional11 = qualityAlignment['professional11'];
                $scope.master1 = qualityAlignment['master1'];
                $scope.master2 = qualityAlignment['master2'];
                $scope.master3 = qualityAlignment['master3'];
                $scope.master4 = qualityAlignment['master4'];
                $scope.master5 = qualityAlignment['master5'];
                $scope.master6 = qualityAlignment['master6'];
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

        $rootScope.assessmentsQaMaM['quality-alignment'] = {
            'traveller1': $scope.traveller1,
            'traveller2': $scope.traveller2,
            'traveller3': $scope.traveller3,
            'traveller4': $scope.traveller4,
            'traveller5': $scope.traveller5,
            'traveller6': $scope.traveller6,
            'traveller7': $scope.traveller7,
            'traveller8': $scope.traveller8,
            'traveller9': $scope.traveller9,
            'artisan1': $scope.artisan1,
            'artisan2': $scope.artisan2,
            'artisan3': $scope.artisan3,
            'artisan4': $scope.artisan4,
            'artisan5': $scope.artisan5,
            'artisan6': $scope.artisan6,
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
            'professional11': $scope.professional11,
            'master1': $scope.master1,
            'master2': $scope.master2,
            'master3': $scope.master3,
            'master4': $scope.master4,
            'master5': $scope.master5,
            'master6': $scope.master6,
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
            && $scope.traveller6 && $scope.traveller7 && $scope.traveller8 && $scope.traveller9;
    };

    var isArtisan = function () {
        return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && !$scope.traveller4 && !$scope.traveller5
            && !$scope.traveller6 && !$scope.traveller7 && !$scope.traveller8 && !$scope.traveller9 && $scope.artisan1
            && $scope.artisan2 && $scope.artisan3 && $scope.artisan4 && $scope.artisan5 && $scope.artisan6;
    };

    var isExpert = function() {
        return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && !$scope.traveller4 && !$scope.traveller5
            && !$scope.traveller6 && !$scope.traveller7 && !$scope.traveller8 && !$scope.traveller9 && $scope.artisan1
            && $scope.artisan2 && !$scope.artisan3 && !$scope.artisan5 && !$scope.artisan6
            && $scope.expert1 && $scope.expert2 && $scope.expert3 && $scope.expert4 && $scope.expert5 && $scope.expert6
            && $scope.expert7 && $scope.expert8 && $scope.expert9 && $scope.expert10;
    };

    var isProfessional = function () {
        return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && !$scope.traveller4 && !$scope.traveller5
            && !$scope.traveller6 && !$scope.traveller7 && !$scope.traveller8 && !$scope.traveller9 && $scope.artisan1
            && $scope.artisan2 && !$scope.artisan3 && !$scope.artisan4 && !$scope.artisan5 && !$scope.artisan6
            && $scope.expert1 && $scope.expert2 && $scope.expert3 && $scope.expert4 && $scope.expert5 && $scope.expert6
            && $scope.expert7 && $scope.expert8 && !$scope.expert9 && $scope.expert10 && $scope.professional1
            && $scope.professional2 && $scope.professional3 && $scope.professional4 && $scope.professional5
            && $scope.professional6 && $scope.professional7 && $scope.professional8 && $scope.professional9
            && $scope.professional10 && $scope.professional11;
    };

    var isMaster = function () {
        return isProfessional() && $scope.master1 && $scope.master2 && $scope.master3 && $scope.master4
            && $scope.master5 && $scope.master6;
    };
}]);