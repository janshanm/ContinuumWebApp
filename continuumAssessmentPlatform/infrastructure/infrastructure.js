'use strict';

angular.module('continuumAssessmentPlatform.pipeline-infrastructure', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pipeline-infrastructure', {
    templateUrl: 'infrastructure/infrastructure.html',
    controller: 'InfrastructureCtrl'
  });
}])

.controller('InfrastructureCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.question1 = false;
    $scope.question2 = false;
    $scope.question3 = false;
    $scope.question4 = false;
    $scope.question5 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessmentsPipeline !== "undefined"){
            var assessments = $rootScope.assessmentsPipeline;
            var infrastructure = assessments['infrastructure'];
            if(infrastructure !== undefined) {
                $scope.question1 = infrastructure['question1'];
                $scope.question2 = infrastructure['question2'];
                $scope.question3 = infrastructure['question3'];
                $scope.question4 = infrastructure['question4'];
                $scope.question5 = infrastructure['question5'];
            }
        }
    };

    $scope.getClass = function(value){
        return value ? 'bg-info': 'bg-warning';
    };

    $scope.saveAssessments = function(){
        if($rootScope.assessmentsPipeline === undefined){
            $rootScope.assessmentsPipeline = {};
        }

        $rootScope.assessmentsPipeline['infrastructure'] = {
            'question1': $scope.question1,
            'question2': $scope.question2,
            'question3': $scope.question3,
            'question4': $scope.question4,
            'question5': $scope.question5,
            'score': $scope.computeCodeAssessmentScore()
        };
    };

    $scope.computeCodeAssessmentScore = function(){
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
        return $scope.question3;
    };

    var isArtisan = function () {
        return $scope.question1 && $scope.question3;
    };

    var isExpert = function() {
        return isArtisan() && $scope.question2;
    };

    var isProfessional = function () {
        return isExpert() && $scope.question4;
    };

    var isMaster = function () {
        return isProfessional() && $scope.question5;
    }


}]);