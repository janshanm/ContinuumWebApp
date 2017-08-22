'use strict';

angular.module('continuumAssessmentPlatform.tools-artefacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tools-artefacts', {
    templateUrl: 'tools-artefacts/tools-artefacts.html',
    controller: 'ToolsArtefactsCtrl'
  });
}])

.controller('ToolsArtefactsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.traveller1 = false;
    $scope.traveller2 = false;
    $scope.traveller3 = false;
    $scope.traveller4 = false;
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
    $scope.professional1 = false;
    $scope.professional2 = false;
    $scope.professional3 = false;
    $scope.professional4 = false;
    $scope.professional5 = false;
    $scope.professional6 = false;
    $scope.professional7 = false;
    $scope.professional8 = false;
    $scope.professional9 = false;
    $scope.master1 = false;
    $scope.master2 = false;
    $scope.master3 = false;
    $scope.master4 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessmentsQaMaM !== "undefined"){
            var assessments = $rootScope.assessmentsQaMaM;
            var toolsArtefacts = assessments['tools-artefacts'];
            if(toolsArtefacts !== undefined) {
                $scope.traveller1 = toolsArtefacts['traveller1'];
                $scope.traveller2 = toolsArtefacts['traveller2'];
                $scope.traveller3 = toolsArtefacts['traveller3'];
                $scope.traveller4 = toolsArtefacts['traveller4'];
                $scope.artisan1 = toolsArtefacts['artisan1'];
                $scope.artisan2 = toolsArtefacts['artisan2'];
                $scope.artisan3 = toolsArtefacts['artisan3'];
                $scope.artisan4 = toolsArtefacts['artisan4'];
                $scope.artisan5 = toolsArtefacts['artisan5'];
                $scope.expert1 = toolsArtefacts['expert1'];
                $scope.expert2 = toolsArtefacts['expert2'];
                $scope.expert3 = toolsArtefacts['expert3'];
                $scope.expert4 = toolsArtefacts['expert4'];
                $scope.expert5 = toolsArtefacts['expert5'];
                $scope.expert6 = toolsArtefacts['expert6'];
                $scope.expert7 = toolsArtefacts['expert7'];
                $scope.professional1 = toolsArtefacts['professional1'];
                $scope.professional2 = toolsArtefacts['professional2'];
                $scope.professional3 = toolsArtefacts['professional3'];
                $scope.professional4 = toolsArtefacts['professional4'];
                $scope.professional5 = toolsArtefacts['professional5'];
                $scope.professional6 = toolsArtefacts['professional6'];
                $scope.professional7 = toolsArtefacts['professional7'];
                $scope.professional8 = toolsArtefacts['professional8'];
                $scope.professional9 = toolsArtefacts['professional9'];
                $scope.master1 = toolsArtefacts['master1'];
                $scope.master2 = toolsArtefacts['master2'];
                $scope.master3 = toolsArtefacts['master3'];
                $scope.master4 = toolsArtefacts['master4'];
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

        $rootScope.assessmentsQaMaM['tools-artefacts'] = {
            'traveller1': $scope.traveller1,
            'traveller2': $scope.traveller2,
            'traveller3': $scope.traveller3,
            'traveller4': $scope.traveller4,
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
            'professional1': $scope.professional1,
            'professional2': $scope.professional2,
            'professional3': $scope.professional3,
            'professional4': $scope.professional4,
            'professional5': $scope.professional5,
            'professional6': $scope.professional6,
            'professional7': $scope.professional7,
            'professional8': $scope.professional8,
            'professional9': $scope.professional9,
            'master1': $scope.master1,
            'master2': $scope.master2,
            'master3': $scope.master3,
            'master4': $scope.master4,
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
        return $scope.traveller1 && $scope.traveller2 && $scope.traveller3 && $scope.traveller4;
    };

    var isArtisan = function () {
        return !$scope.traveller3 && !$scope.traveller4 && $scope.artisan1 && $scope.artisan2 && $scope.artisan3
            && $scope.artisan4 && $scope.artisan5;
    };

    var isExpert = function() {
        return !$scope.traveller3 && !$scope.traveller4 && !$scope.artisan1 && !$scope.artisan2 && $scope.artisan3
            && $scope.artisan4 && $scope.artisan5 && $scope.expert1 && $scope.expert2 && $scope.expert3
            && $scope.expert4 && $scope.expert5 && $scope.expert6 && $scope.expert7;
    };

    var isProfessional = function () {
        return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && !$scope.traveller4 && !$scope.artisan1
            && !$scope.artisan2 && $scope.artisan3 && $scope.artisan4 && $scope.artisan5 && $scope.expert1
            && $scope.expert2 && $scope.expert3 && $scope.expert4 && $scope.expert5 && $scope.expert6 && $scope.expert7
            && $scope.professional1 && $scope.professional2 && $scope.professional3 && $scope.professional4
            && $scope.professional5 && $scope.professional6 && $scope.professional7 && $scope.professional8
            && $scope.professional9;
    };

    var isMaster = function () {
        return !$scope.traveller1 && !$scope.traveller2 && !$scope.traveller3 && !$scope.traveller4 && !$scope.artisan1
            && !$scope.artisan2 && $scope.artisan3 && $scope.artisan4 && !$scope.artisan5 && $scope.expert1
            && $scope.expert2 && $scope.expert3 && $scope.expert4 && $scope.expert5 && $scope.expert6 && $scope.expert7
            && $scope.professional1 && $scope.professional2 && $scope.professional3 && $scope.professional4
            && $scope.professional5 && $scope.professional6 && $scope.professional7 && $scope.professional8
            && $scope.professional9 && $scope.master1 && $scope.master2 && $scope.master3 && $scope.master4;
    };
}]);