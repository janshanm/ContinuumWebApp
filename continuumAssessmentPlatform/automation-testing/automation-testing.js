'use strict';

angular.module('continuumAssessmentPlatform.automation-testing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/automation-testing', {
    templateUrl: 'automation-testing/automation-testing.html',
    controller: 'AutomationTestingCtrl'
  });
}])

.controller('AutomationTestingCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.traveller2 = false;
    $scope.traveller3 = false;
    $scope.traveller4 = false;
    $scope.traveller5 = false;
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
    $scope.master2 = false;
    $scope.master3 = false;
    $scope.master4 = false;
    $scope.master5 = false;
    $scope.master6 = false;
    $scope.master7 = false;
    $scope.master8 = false;
    $scope.master9 = false;
    $scope.master10 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessmentsQaMaM !== "undefined"){
            var assessments = $rootScope.assessmentsQaMaM;
            var automationTesting = assessments['automation-testing'];
            if(automationTesting !== undefined) {
                $scope.traveller1 = automationTesting['traveller1'];
                $scope.traveller2 = automationTesting['traveller2'];
                $scope.traveller3 = automationTesting['traveller3'];
                $scope.traveller4 = automationTesting['traveller4'];
                $scope.traveller5 = automationTesting['traveller5'];
                $scope.artisan1 = automationTesting['artisan1'];
                $scope.artisan2 = automationTesting['artisan2'];
                $scope.artisan3 = automationTesting['artisan3'];
                $scope.expert1 = automationTesting['expert1'];
                $scope.expert2 = automationTesting['expert2'];
                $scope.expert3 = automationTesting['expert3'];
                $scope.expert4 = automationTesting['expert4'];
                $scope.expert5 = automationTesting['expert5'];
                $scope.expert6 = automationTesting['expert6'];
                $scope.expert7 = automationTesting['expert7'];
                $scope.professional1 = automationTesting['professional1'];
                $scope.professional2 = automationTesting['professional2'];
                $scope.professional3 = automationTesting['professional3'];
                $scope.professional4 = automationTesting['professional4'];
                $scope.professional5 = automationTesting['professional5'];
                $scope.professional6 = automationTesting['professional6'];
                $scope.professional7 = automationTesting['professional7'];
                $scope.professional8 = automationTesting['professional8'];
                $scope.professional9 = automationTesting['professional9'];
                $scope.professional10 = automationTesting['professional10'];
                $scope.master1 = automationTesting['master1'];
                $scope.master2 = automationTesting['master2'];
                $scope.master3 = automationTesting['master3'];
                $scope.master4 = automationTesting['master4'];
                $scope.master5 = automationTesting['master5'];
                $scope.master6 = automationTesting['master6'];
                $scope.master7 = automationTesting['master7'];
                $scope.master8 = automationTesting['master8'];
                $scope.master9 = automationTesting['master9'];
                $scope.master10 = automationTesting['master10'];
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

        $scope.testCriteria = $rootScope.assessmentsQaMaM['test-criteria'];
        $scope.defectExploratory = $rootScope.assessmentsQaMaM['defect-and-exploratory'];

        $rootScope.assessmentsQaMaM['automation-testing'] = {
            'traveller1': $scope.traveller1,
            'traveller2': $scope.traveller2,
            'traveller3': $scope.traveller3,
            'traveller4': $scope.traveller4,
            'traveller5': $scope.traveller5,
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
            'master2': $scope.master2,
            'master3': $scope.master3,
            'master4': $scope.master4,
            'master5': $scope.master5,
            'master6': $scope.master6,
            'master7': $scope.master7,
            'master8': $scope.master8,
            'master9': $scope.master9,
            'master10': $scope.master10
        };

        $rootScope.assessmentsQaMaM['testing'] = {'score': $scope.computeAssessmentScore()};
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
            && $scope.testCriteria['traveller1'] && $scope.testCriteria['traveller2'] && $scope.testCriteria['traveller3']
            && $scope.defectExploratory['traveller1'] && $scope.defectExploratory['traveller2'] && $scope.defectExploratory['traveller3'];
    };

    var isArtisan = function () {
        return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && !$scope.traveller4 && !$scope.traveller5
            && !$scope.testCriteria['traveller1'] && !$scope.testCriteria['traveller2'] && !$scope.testCriteria['traveller3']
            && !$scope.defectExploratory['traveller1'] && !$scope.defectExploratory['traveller2'] && !$scope.defectExploratory['traveller3']
            && $scope.artisan1 && $scope.artisan2 && $scope.artisan3 && $scope.testCriteria['artisan1'] && $scope.testCriteria['artisan2']
            && $scope.testCriteria['artisan3'] && $scope.testCriteria['artisan4'] && $scope.testCriteria['artisan5']
            && $scope.defectExploratory['artisan1'] && $scope.defectExploratory['artisan2'] && $scope.defectExploratory['artisan3'];
    };

    var isExpert = function() {
        return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && !$scope.traveller4 && !$scope.traveller5
            && !$scope.testCriteria['traveller1'] && !$scope.testCriteria['traveller2'] && !$scope.testCriteria['traveller3']
            && !$scope.defectExploratory['traveller1'] && !$scope.defectExploratory['traveller2'] && !$scope.defectExploratory['traveller3']
            && !$scope.artisan1 && !$scope.artisan2 && !$scope.artisan3 && !$scope.testCriteria['artisan1'] && $scope.testCriteria['artisan2']
            && $scope.testCriteria['artisan3'] && $scope.testCriteria['artisan4'] && !$scope.testCriteria['artisan5']
            && !$scope.defectExploratory['artisan1'] && !$scope.defectExploratory['artisan2'] && !$scope.defectExploratory['artisan3']
            && $scope.expert1 && $scope.expert2 && $scope.expert3 && $scope.expert4 && $scope.expert5 && $scope.expert6 && $scope.expert7
            && $scope.testCriteria['expert1'] && $scope.testCriteria['expert2'] && $scope.testCriteria['expert3'] && $scope.testCriteria['expert4']
            && $scope.testCriteria['expert5'] && $scope.testCriteria['expert6'] && $scope.defectExploratory['expert1']
            && $scope.defectExploratory['expert2'] && $scope.defectExploratory['expert3'];
    };

    var isProfessional = function () {
        return isExpert() && $scope.professional1 && $scope.professional2 && $scope.professional3 && $scope.professional4
            && $scope.professional5 && $scope.professional6 && $scope.professional7 && $scope.professional8 && $scope.professional9
            && $scope.professional10 && $scope.testCriteria['professional1'] && $scope.testCriteria['professional2'] && $scope.testCriteria['professional3']
            && $scope.testCriteria['professional4'] && $scope.testCriteria['professional5'] && $scope.testCriteria['professional6']
            && $scope.defectExploratory['professional1'] && $scope.defectExploratory['professional2'] && $scope.defectExploratory['professional3']
            && $scope.defectExploratory['professional4'] && $scope.defectExploratory['professional5'] && $scope.defectExploratory['professional6'];
    };

    var isMaster = function () {
        return isProfessional() && $scope.master1 && $scope.master2 && $scope.master3 && $scope.master4 && $scope.master5 && $scope.master6
            && $scope.master7 && $scope.master8 && $scope.master9 && $scope.master10 && $scope.testCriteria['master1']
            && $scope.testCriteria['master2'] && $scope.defectExploratory['master1'] && $scope.defectExploratory['master2']
            && $scope.defectExploratory['master3'] && $scope.defectExploratory['master4'] && $scope.defectExploratory['master5'];
    };
}]);