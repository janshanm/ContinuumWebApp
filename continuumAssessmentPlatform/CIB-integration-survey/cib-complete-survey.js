angular.module('continuumAssessmentPlatform.cib-survey-completion', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/complete-cib-survey', {
            templateUrl: 'CIB-integration-survey/cib-complete-survey.html',
            controller: 'CIBSurveyCompletionCtrl'
        });
    }])

    .controller('CIBSurveyCompletionCtrl', ['$location', '$scope', '$rootScope', 'CIBService', function($location, $scope, $rootScope, CIBService) {
        $scope.init = function () {
            if($rootScope.surveyData !== undefined) {

                $scope.roleNames = {'PracticeConsumer': 'I am a Practice Consumer',
                    'PracticeLead': 'I am a Practice Lead/Anchor',
                    'PracticeTeam': 'I am part of a Practice Team'};

                $scope.practiceNames = {'SoftwareEng': 'Software Engineering Practice',
                    'OpsAndInfra': 'Operations & Infrastructure', 'LeanAgile': 'Lean Agile Coaching',
                    'APO': 'APO', 'DataServices': 'Data Services'};

                $scope.executiveQuestion1 = $rootScope.surveyData['executiveQuestion1'];
                $scope.executiveQuestion2 = $rootScope.surveyData['executiveQuestion2'];
                $scope.executiveQuestion3 = $rootScope.surveyData['executiveQuestion3'];
                $scope.executiveQuestion4 = $rootScope.surveyData['executiveQuestion4'];
                $scope.executiveQuestion5 = $rootScope.surveyData['executiveQuestion5'];
                $scope.executiveQuestion6 = $rootScope.surveyData['executiveQuestion6'];
                $scope.executiveQuestion7 = $rootScope.surveyData['executiveQuestion7'];
                $scope.practiceQuestion1 = $rootScope.surveyData['practiceQuestion1'];
                $scope.practiceQuestion2 = $rootScope.surveyData['practiceQuestion2'];
                $scope.practiceQuestion3 = $rootScope.surveyData['practiceQuestion3'];
                $scope.practiceQuestion4 = $rootScope.surveyData['practiceQuestion4'];
                $scope.practiceQuestion5 = $rootScope.surveyData['practiceQuestion5'];
                $scope.practiceQuestion6 = $rootScope.surveyData['practiceQuestion6'];
                $scope.practiceQuestion7 = $rootScope.surveyData['practiceQuestion7'];
                $scope.practiceQuestion8 = $rootScope.surveyData['practiceQuestion8'];
                $scope.practiceQuestion9 = $rootScope.surveyData['practiceQuestion9'];
                $scope.teamQuestion1 = $rootScope.surveyData['teamQuestion1'];
                $scope.teamQuestion2 = $rootScope.surveyData['teamQuestion2'];
                $scope.teamQuestion3 = $rootScope.surveyData['teamQuestion3'];
                $scope.teamQuestion4 = $rootScope.surveyData['teamQuestion4'];
                $scope.teamQuestion5 = $rootScope.surveyData['teamQuestion5'];
                $scope.teamQuestion6 = $rootScope.surveyData['teamQuestion6'];
                $scope.teamQuestion7 = $rootScope.surveyData['teamQuestion7'];
                $scope.teamQuestion8 = $rootScope.surveyData['teamQuestion8'];
                $scope.teamQuestion9 = $rootScope.surveyData['teamQuestion9'];
                $scope.teamQuestion10 = $rootScope.surveyData['teamQuestion10'];
                $scope.teamQuestion11 = $rootScope.surveyData['teamQuestion11'];
                $scope.teamQuestion12 = $rootScope.surveyData['teamQuestion12'];
                $scope.teamQuestion13 = $rootScope.surveyData['teamQuestion13'];

                $scope.selectedRole = $rootScope.surveyData['roleName'];
                $scope.selectedRoleDisplay = $scope.roleNames[$scope.selectedRole];
                $scope.selectedPractice = $rootScope.surveyData['practiceName'];
                $scope.selectedPracticeDisplay = $scope.practiceNames[$scope.selectedPractice];
            }
        };

        $scope.saveSurveyResults = function(){
            var formattedData = {};

            formattedData['role'] = $scope.selectedRole;
            formattedData['rawData'] = $rootScope.surveyData;
            formattedData['roleLongDisplay'] = $scope.selectedRoleDisplay;
            formattedData['practiceDisplay'] = $scope.selectedPracticeDisplay;

            CIBService.saveSurvey(formattedData).then(function(response){
                $scope.hasSaved = true;
                $rootScope.surveyData = undefined;
                $rootScope.successMessage = response.data;
                $location.path('/complete-cib-survey');
            });
        };


    }])

    .factory('CIBService', ['$http', function ($http) {
        return {
            saveSurvey: function (body) {
                return $http({
                    url: "http://localhost:8081/saveCIBSurvey",
                    method: "POST",
                    data: body
                });
            }
        }
    }]);