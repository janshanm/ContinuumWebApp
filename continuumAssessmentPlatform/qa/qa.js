'use strict';

angular.module('continuumAssessmentPlatform.pipeline-qa', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pipeline-qa', {
    templateUrl: 'qa/qa.html',
    controller: 'PipelineQACtrl'
  });
}])

.controller('PipelineQACtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.question1 = false;
    $scope.question2 = false;
    $scope.question3 = false;
    $scope.question4 = false;
    $scope.question5 = '';
    $scope.question6 = false;
    $scope.question7 = false;
    $scope.question8 = false;
    $scope.question9 = false;
    $scope.question10 = false;

    $scope.init = function () {
        if(typeof $rootScope.assessmentsPipeline !== "undefined"){
            var assessments = $rootScope.assessmentsPipeline;
            var qa = assessments['qa'];
            if(qa !== undefined) {
                $scope.question1 = qa['question1'];
                $scope.question2 = qa['question2'];
                $scope.question3 = qa['question3'];
                $scope.question4 = qa['question4'];
                $scope.question5 = qa['question5'];
                $scope.question6 = qa['question6'];
                $scope.question7 = qa['question7'];
                $scope.question8 = qa['question8'];
                $scope.question9 = qa['question9'];
                $scope.question10 = qa['question10'];
            }
        }
    };

    $scope.getClass = function(value){
        return value ? 'bg-info': 'bg-warning';
    };

    $scope.getClassUnit = function(value){
        return (value === '30' || value === '50' || value === '70' || value === '80' || value === '90') ? 'bg-info': 'bg-warning';
    };

    $scope.saveAssessments = function(){
        if($rootScope.assessmentsPipeline === undefined){
            $rootScope.assessmentsPipeline = {};
        }

        $rootScope.assessmentsPipeline['qa'] = {
            'question1': $scope.question1,
            'question2': $scope.question2,
            'question3': $scope.question3,
            'question4': $scope.question4,
            'question5': $scope.question5,
            'question6': $scope.question6,
            'question7': $scope.question7,
            'question8': $scope.question8,
            'question9': $scope.question9,
            'question10': $scope.question10,
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

    var artisanValues = ['50', '70', '80', '90'];
    var expertValues = ['70', '80', '90'];
    var professionalValues = ['80', '90'];

    var isTraveller = function(){
        return $scope.question5 === '30';
    };

    var isArtisan = function () {
        return (artisanValues.indexOf($scope.question5) !== -1) && $scope.question2 && $scope.question7;
    };

    var isExpert = function() {
        return (expertValues.indexOf($scope.question5) !== -1) && $scope.question1 && $scope.question2 && $scope.question4 && $scope.question6
            && $scope.question7;
    };

    var isProfessional = function () {
        return (professionalValues.indexOf($scope.question5) !== -1) && $scope.question1 && $scope.question2 && $scope.question4
            && $scope.question6 && $scope.question7 && $scope.question8;
    };

    var isMaster = function () {
        return ($scope.question5 === '90') && $scope.question1 && $scope.question2 && $scope.question3 && $scope.question4
            && $scope.question6 && $scope.question7 && $scope.question8 && $scope.question9 && $scope.question10;
    }


}]);