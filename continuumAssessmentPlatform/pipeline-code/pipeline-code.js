'use strict';

angular.module('continuumAssessmentPlatform.pipeline-code', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pipeline-code', {
    templateUrl: 'pipeline-code/pipeline-code.html',
    controller: 'PipelineCodeCtrl'
  });
}])

.controller('PipelineCodeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.question1 = false;
    $scope.question2 = false;
    $scope.question3 = '';
    $scope.question4 = false;
    $scope.question5 = false;
    $scope.question6 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessmentsPipeline !== "undefined"){
            var assessments = $rootScope.assessmentsPipeline;
            var pipelineCode = assessments['pipeline-code'];
            if(pipelineCode !== undefined) {
                $scope.question1 = pipelineCode['question1'];
                $scope.question2 = pipelineCode['question2'];
                $scope.question3 = pipelineCode['question3'];
                $scope.question4 = pipelineCode['question4'];
                $scope.question5 = pipelineCode['question5'];
                $scope.question6 = pipelineCode['question5'];
            }
        }
    };

    $scope.getClass = function(value){
        return value ? 'bg-info': 'bg-warning';
    };

    $scope.getClassTechDebt = function(value){
        return (value === '>20' || value === '15' || value === '10' || value === '5' || value === '2') ? 'bg-info': 'bg-warning';
    };

    $scope.saveAssessments = function(){
        if($rootScope.assessmentsPipeline === undefined){
            $rootScope.assessmentsPipeline = {};
        }

        $rootScope.assessmentsPipeline['pipeline-code'] = {
            'question1': $scope.question1,
            'question2': $scope.question2,
            'question3': $scope.question3,
            'question4': $scope.question4,
            'question5': $scope.question5,
            'question6': $scope.question6,
            'score': $scope.computeCodeAssessmentScore()
        };
    };

    var artisanValues = ['15', '10', '5', '2'];
    var expertValues = ['10', '5', '2'];
    var professionalValues = ['5', '2'];

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
        return $scope.question3 === '>20';
    };

    var isArtisan = function () {
        return (artisanValues.indexOf($scope.question3) !== -1 && $scope.question5);
    };

    var isExpert = function() {
        return (expertValues.indexOf($scope.question3) !== -1 && $scope.question2 && $scope.question4 && $scope.question5);
    };

    var isProfessional = function () {
        return (professionalValues.indexOf($scope.question3) !== -1 && $scope.question2 && $scope.question4 && $scope.question5);
    };

    var isMaster = function () {
        return $scope.question3 === '2' && $scope.question1 && $scope.question2 && $scope.question4 && $scope.question5 && $scope.question6;
    }

}]);