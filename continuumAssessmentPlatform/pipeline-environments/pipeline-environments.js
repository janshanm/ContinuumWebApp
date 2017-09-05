'use strict';

angular.module('continuumAssessmentPlatform.pipeline-environments', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pipeline-environments', {
    templateUrl: 'pipeline-environments/pipeline-environments.html',
    controller: 'PipelineEnvironmentsCtrl'
  });
}])

.controller('PipelineEnvironmentsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.question1 = false;
    $scope.question2 = false;
    $scope.question3 = false;
    $scope.question4 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessmentsPipeline !== "undefined"){
            var assessments = $rootScope.assessmentsPipeline;
            var pipelineEnvironments = assessments['pipeline-environments'];
            if(pipelineEnvironments !== undefined) {
                $scope.question1 = pipelineEnvironments['question1'];
                $scope.question2 = pipelineEnvironments['question2'];
                $scope.question3 = pipelineEnvironments['question3'];
                $scope.question4 = pipelineEnvironments['question4'];
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

        $rootScope.assessmentsPipeline['pipeline-environments'] = {
            'question1': $scope.question1,
            'question2': $scope.question2,
            'question3': $scope.question3,
            'question4': $scope.question4,
            'score': $scope.computeCodeAssessmentScore()
        };
    };

    $scope.computeCodeAssessmentScore = function(){
        if(isTraveller() && !isArtisan() && !isExpert() && !isProfessional()){
            return 2;
        }
        else if(isArtisan() && !isExpert() && !isProfessional()){
            return 3;
        }
        else if(isExpert() && !isProfessional()){
            return 4;
        }
        else if(isProfessional()){
            return 5;
        }
        else{
            return 1;
        }

    };

    var isTraveller = function(){
        return $scope.question1;
    };

    var isArtisan = function () {
        return $scope.question1 && $scope.question2;
    };

    var isExpert = function() {
        return isArtisan() && $scope.question3;
    };

    var isProfessional = function () {
        return isExpert() && $scope.question4;
    };

}]);