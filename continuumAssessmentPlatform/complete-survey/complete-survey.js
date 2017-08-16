angular.module('continuumAssessmentPlatform.complete-survey', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/complete-survey', {
            templateUrl: 'complete-survey/complete-survey.html',
            controller: 'CompleteSurveyCtrl'
        });
    }])

    .controller('CompleteSurveyCtrl', ['$scope', '$rootScope', '$location', 'SurveyService', function($scope, $rootScope, $location, SurveyService) {
        $scope.softwareEngineering1 = 3;
        $scope.softwareEngineering2 = 3;
        $scope.softwareEngineering3 = 3;
        $scope.softwareEngineering4 = 3;
        $scope.agileCoaching1 = 3;
        $scope.agileCoaching2 = 3;
        $scope.agileCoaching3 = 3;
        $scope.agileCoaching4 = 3;
        $scope.changeAndRelease1 = 3;
        $scope.changeAndRelease2 = 3;
        $scope.changeAndRelease3 = 3;
        $scope.changeAndRelease4 = 3;
        $scope.qualityEngineering1 = 3;
        $scope.qualityEngineering2 = 3;
        $scope.qualityEngineering3 = 3;
        $scope.qualityEngineering4 = 3;
        $scope.enterpriseArchitecture1 = 3;
        $scope.enterpriseArchitecture2 = 3;
        $scope.enterpriseArchitecture3 = 3;
        $scope.enterpriseArchitecture4 = 3;
        $scope.solutionsArchitecture1 = 3;
        $scope.solutionsArchitecture2 = 3;
        $scope.solutionsArchitecture3 = 3;
        $scope.solutionsArchitecture4 = 3;
        $scope.dataServices1 = 3;
        $scope.dataServices2 = 3;
        $scope.dataServices3 = 3;
        $scope.dataServices4 = 3;
        $scope.selectedBIO = '';
        $scope.hasSaved = false;

        $scope.init = function () {
            if($rootScope.surveyData !== undefined) {
                $scope.selectedBIO = $rootScope.surveyData['BIO'];
                $scope.softwareEngineering1 = $rootScope.surveyData['softwareEngineering1'];
                $scope.softwareEngineering2 = $rootScope.surveyData['softwareEngineering2'];
                $scope.softwareEngineering3 = $rootScope.surveyData['softwareEngineering3'];
                $scope.softwareEngineering4 = $rootScope.surveyData['softwareEngineering4'];
                $scope.agileCoaching1 = $rootScope.surveyData['agileCoaching1'];
                $scope.agileCoaching2 = $rootScope.surveyData['agileCoaching2'];
                $scope.agileCoaching3 = $rootScope.surveyData['agileCoaching3'];
                $scope.agileCoaching4 = $rootScope.surveyData['agileCoaching4'];
                $scope.changeAndRelease1 = $rootScope.surveyData['changeAndRelease1'];
                $scope.changeAndRelease2 = $rootScope.surveyData['changeAndRelease2'];
                $scope.changeAndRelease3 = $rootScope.surveyData['changeAndRelease3'];
                $scope.changeAndRelease4 = $rootScope.surveyData['changeAndRelease4'];
                $scope.qualityEngineering1 = $rootScope.surveyData['qualityEngineering1'];
                $scope.qualityEngineering2 = $rootScope.surveyData['qualityEngineering2'];
                $scope.qualityEngineering3 = $rootScope.surveyData['qualityEngineering3'];
                $scope.qualityEngineering4 = $rootScope.surveyData['qualityEngineering4'];
                $scope.enterpriseArchitecture1 = $rootScope.surveyData['enterpriseArchitecture1'];
                $scope.enterpriseArchitecture2 = $rootScope.surveyData['enterpriseArchitecture2'];
                $scope.enterpriseArchitecture3 = $rootScope.surveyData['enterpriseArchitecture3'];
                $scope.enterpriseArchitecture4 = $rootScope.surveyData['enterpriseArchitecture4'];
                $scope.solutionsArchitecture1 = $rootScope.surveyData['solutionsArchitecture1'];
                $scope.solutionsArchitecture2 = $rootScope.surveyData['solutionsArchitecture2'];
                $scope.solutionsArchitecture3 = $rootScope.surveyData['solutionsArchitecture3'];
                $scope.solutionsArchitecture4 = $rootScope.surveyData['solutionsArchitecture4'];
                $scope.dataServices1 = $rootScope.surveyData['dataServices1'];
                $scope.dataServices2 = $rootScope.surveyData['dataServices2'];
                $scope.dataServices3 = $rootScope.surveyData['dataServices3'];
                $scope.dataServices4 = $rootScope.surveyData['dataServices4'];
            }

            $scope.softwareScore = parseInt($scope.softwareEngineering1) + parseInt($scope.softwareEngineering2) +
                parseInt($scope.softwareEngineering3) + parseInt($scope.softwareEngineering4);

            $scope.agileCoachingScore = parseInt($scope.agileCoaching1) + parseInt($scope.agileCoaching2) +
                parseInt($scope.agileCoaching3) + parseInt($scope.agileCoaching4);

            $scope.changeAndReleaseScore = parseInt($scope.changeAndRelease1) + parseInt($scope.changeAndRelease2) +
                parseInt($scope.changeAndRelease3) + parseInt($scope.changeAndRelease4);

            $scope.qualityEngineeringScore = parseInt($scope.qualityEngineering1) + parseInt($scope.qualityEngineering2) +
                parseInt($scope.qualityEngineering3) + parseInt($scope.qualityEngineering4);

            $scope.enterpriseArchitectureScore = parseInt($scope.enterpriseArchitecture1) + parseInt($scope.enterpriseArchitecture2) +
                parseInt($scope.enterpriseArchitecture3) + parseInt($scope.enterpriseArchitecture4);

            $scope.solutionsArchitectureScore = parseInt($scope.solutionsArchitecture1) + parseInt($scope.solutionsArchitecture2) +
                parseInt($scope.solutionsArchitecture3) + parseInt($scope.solutionsArchitecture4);

            $scope.dataServicesScore = parseInt($scope.dataServices1) + parseInt($scope.dataServices2) +
                parseInt($scope.dataServices3) + parseInt($scope.dataServices4);
        };

        $scope.saveSurveyResults = function(){
            var formattedData = {};

            formattedData['BIO'] = $scope.selectedBIO;
            formattedData['rawData'] = $rootScope.surveyData;
            formattedData['softwareScore'] = $scope.softwareScore / 4;
            formattedData['agileCoachingScore'] = $scope.agileCoachingScore / 4;
            formattedData['changeAndReleaseScore'] = $scope.changeAndReleaseScore / 4;
            formattedData['qualityEngineeringScore'] = $scope.qualityEngineeringScore / 4;
            formattedData['enterpriseArchitectureScore'] = $scope.enterpriseArchitectureScore / 4;
            formattedData['solutionsArchitectureScore'] = $scope.solutionsArchitectureScore / 4;
            formattedData['dataServicesScore'] = $scope.dataServicesScore / 4;

            SurveyService.saveSurvey(formattedData).then(function(response){
                $scope.hasSaved = true;
                $rootScope.surveyData = undefined;
                $rootScope.successMessage = response.data;
                $location.path('/complete-survey');
            });
        };

    }])

    .factory('SurveyService', ['$http', function ($http) {
        return {
            saveSurvey: function (body) {
                return $http({
                    url: "http://localhost:8082/saveSurvey",
                    method: "POST",
                    data: body
                });
            }
        }
    }]);
