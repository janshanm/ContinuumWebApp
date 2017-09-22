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
        $scope.selectedPracticeTeam = '';
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
                $scope.selectedPracticeTeam = $rootScope.surveyData['selectedPracticeTeam'];
            }

            $scope.softwareScore = toInt($scope.softwareEngineering1) + toInt($scope.softwareEngineering2) +
                toInt($scope.softwareEngineering3) + toInt($scope.softwareEngineering4);

            $scope.softwareDenominator = denominator($scope.softwareEngineering1, $scope.softwareEngineering2,
                $scope.softwareEngineering3, $scope.softwareEngineering4);

            $scope.agileCoachingScore = toInt($scope.agileCoaching1) + toInt($scope.agileCoaching2) +
                toInt($scope.agileCoaching3) + toInt($scope.agileCoaching4);

            $scope.agileCoachingDenominator = denominator($scope.agileCoaching1, $scope.agileCoaching2,
                $scope.agileCoaching3, $scope.agileCoaching4);

            $scope.changeAndReleaseScore = toInt($scope.changeAndRelease1) + toInt($scope.changeAndRelease2) +
                toInt($scope.changeAndRelease3) + toInt($scope.changeAndRelease4);

            $scope.changeAndReleaseDenominator = denominator($scope.changeAndRelease1, $scope.changeAndRelease2,
                $scope.changeAndRelease3, $scope.changeAndRelease4);

            $scope.qualityEngineeringScore = toInt($scope.qualityEngineering1) + toInt($scope.qualityEngineering2) +
                toInt($scope.qualityEngineering3) + toInt($scope.qualityEngineering4);

            $scope.qualityEngineeringDenominator = denominator($scope.qualityEngineering1, $scope.qualityEngineering2,
                $scope.qualityEngineering3, $scope.qualityEngineering4);

            $scope.enterpriseArchitectureScore = toInt($scope.enterpriseArchitecture1) + toInt($scope.enterpriseArchitecture2) +
                toInt($scope.enterpriseArchitecture3) + toInt($scope.enterpriseArchitecture4);

            $scope.enterpriseArchitectureDenominator = denominator($scope.enterpriseArchitecture1, $scope.enterpriseArchitecture2,
                $scope.enterpriseArchitecture3, $scope.enterpriseArchitecture4);

            $scope.solutionsArchitectureScore = toInt($scope.solutionsArchitecture1) + toInt($scope.solutionsArchitecture2) +
                toInt($scope.solutionsArchitecture3) + toInt($scope.solutionsArchitecture4);

            $scope.solutionsArchitectureDenominator = denominator($scope.solutionsArchitecture1, $scope.solutionsArchitecture2,
                $scope.solutionsArchitecture3, $scope.solutionsArchitecture4);

            $scope.dataServicesScore = toInt($scope.dataServices1) + toInt($scope.dataServices2) +
                toInt($scope.dataServices3) + toInt($scope.dataServices4);

            $scope.dataServicesDenominator = denominator($scope.dataServices1, $scope.dataServices2, $scope.dataServices3,
                $scope.dataServices4);
        };

        var toInt = function(value){
            if(value !== 'N/A'){
                return parseInt(value);
            }
            return 0;
        };

        var denominator = function(value1, value2, value3, value4){
          var denominatorNumber = 0;

          if(value1 !== 'N/A'){
              denominatorNumber++;
          }

          if(value2 !== 'N/A'){
              denominatorNumber++;
          }

          if(value3 !== 'N/A'){
              denominatorNumber++;
          }

          if(value4 !== 'N/A'){
              denominatorNumber++;
          }

          return denominatorNumber;
        };

        $scope.saveSurveyResults = function(){
            var formattedData = {};

            formattedData['BIO'] = $scope.selectedBIO;
            formattedData['rawData'] = $rootScope.surveyData;
            formattedData['softwareScore'] = $scope.softwareDenominator !== 0 ? $scope.softwareScore / $scope.softwareDenominator : 0;
            formattedData['agileCoachingScore'] = $scope.agileCoachingDenominator !== 0 ? $scope.agileCoachingScore / $scope.agileCoachingDenominator : 0;
            formattedData['changeAndReleaseScore'] = $scope.changeAndReleaseDenominator !== 0 ? $scope.changeAndReleaseScore / $scope.changeAndReleaseDenominator : 0;
            formattedData['qualityEngineeringScore'] = $scope.qualityEngineeringDenominator !== 0 ? $scope.qualityEngineeringScore / $scope.qualityEngineeringDenominator : 0;
            formattedData['enterpriseArchitectureScore'] = $scope.enterpriseArchitectureDenominator !== 0 ? $scope.enterpriseArchitectureScore / $scope.enterpriseArchitectureDenominator : 0;
            formattedData['solutionsArchitectureScore'] = $scope.solutionsArchitectureDenominator !== 0 ? $scope.solutionsArchitectureScore / $scope.solutionsArchitectureDenominator : 0;
            formattedData['dataServicesScore'] = $scope.dataServicesDenominator !== 0 ? $scope.dataServicesScore / $scope.dataServicesDenominator : 0;

            if($scope.selectedPracticeTeam !== ''){
                formattedData['selectedPracticeTeam'] = $scope.selectedPracticeTeam;
            }

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
                    url: "http://localhost:8081/saveSurvey",
                    method: "POST",
                    data: body
                });
            }
        }
    }]);
