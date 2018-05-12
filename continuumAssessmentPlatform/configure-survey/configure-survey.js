angular.module('continuumAssessmentPlatform.configure-survey', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/configure-survey', {
            templateUrl: 'configure-survey/configure-survey.html',
            controller: 'ConfigureSurveyCtrl'
        });
    }])

    .controller('ConfigureSurveyCtrl', ['$window','$location', '$scope', '$rootScope', 'ConfigureSurveyService', function($window, $location, $scope, $rootScope, ConfigureSurveyService) {
        $scope.selectedBIO = '';
        $scope.selectedPortfolio = '';
        $scope.enteredName = '';
        $scope.portfolioEnteredName = '';

        $scope.init = function () {
            ConfigureSurveyService.getSurveyees().then(function(response){
                $scope.allSurveyees = response.data;
                $scope.portfolioNames = getSurveyPortfolio($scope.allSurveyees);
                $scope.BIOLists = getSurveyeesFormatted($scope.allSurveyees);
            });
        };

        var getSurveyPortfolio = function(surveyees){
            var surveyTeams = [];
            for(var id in surveyees){
                var portfolio = surveyees[id].portfolio;
                if (surveyTeams.indexOf(portfolio) === -1) {
                    surveyTeams.push(portfolio);
                }
            }
            return surveyTeams;
        };

        var getSurveyeesFormatted = function (allSurveyees) {
          var surveyees = [];
            for(var id in allSurveyees){
                surveyees.push({'id': allSurveyees[id].surveyeeName, 'name': allSurveyees[id].surveyeeName,
                    'portfolio': allSurveyees[id].portfolio})
            }

            return surveyees;
        };

        $scope.updateBIODetails = function(){
            $scope.enteredName = $scope.selectedBIO;

            var surveyeeInfo = findSurveyeeInformation($scope.allSurveyees, $scope.enteredName);

            $scope.enteredTeam = surveyeeInfo.teamName;
            $scope.selectedPortfolio = surveyeeInfo.portfolio;
        };


        var findSurveyeeInformation = function(allSurveyees, surveyeeName){
            for(var id in allSurveyees){
                if(allSurveyees[id].surveyeeName === surveyeeName){
                    return allSurveyees[id];
                }
            }

            return {};
        };

        $scope.saveDetails = function(){
            var portfolioName = $scope.selectedPortfolio !== '' ? $scope.selectedPortfolio : $scope.portfolioEnteredName;
            if($scope.enteredName !== '' && $scope.enteredTeam !== '' && portfolioName !== '') {
                ConfigureSurveyService.saveDetails($scope.enteredName, $scope.enteredTeam, portfolioName).then(function () {
                    $scope.hasError = false;
                    $scope.hasSaved = true;
                });
            }
            else{
                $scope.hasError = true;
                $scope.hasSaved = false;
            }
        };

        $scope.deleteDetails = function(){
            var portfolioName = $scope.selectedPortfolio !== '' ? $scope.selectedPortfolio : $scope.portfolioEnteredName;
            if($scope.enteredName !== '' && $scope.enteredTeam !== '' && portfolioName !== '') {
                ConfigureSurveyService.deleteDetails($scope.enteredName, $scope.enteredTeam, portfolioName).then(function () {
                    $scope.hasError = false;
                    $scope.hasDeleted = true;
                    $scope.BIOLists = removeFromSurveyees($scope.BIOLists, $scope.enteredName, portfolioName);
                    $scope.selectedBIO = '';
                    $scope.selectedPortfolio = '';
                    $scope.enteredName = '';
                    $scope.enteredTeam = '';
                    $scope.portfolioEnteredName = '';

                });
            }
            else{
                $scope.hasError = true;
                $scope.hasDeleted = false;
            }
        };

        var removeFromSurveyees = function (originalList, surveyeeName, portfolio) {
            var updatedList = [];
            for(var id in originalList){
                if(originalList[id].name !== surveyeeName){
                    updatedList.push(originalList[id]);
                }
                else {
                    if(originalList[id].portfolio !== portfolio){
                        updatedList.push(originalList[id]);
                    }
                }
            }
            return updatedList;
        };


    }])

    .factory('ConfigureSurveyService', ['$http', function ($http) {
        return {
            saveDetails: function (surveyeeName, teamName, portfolio) {
                return $http({
                    url: "http://178.62.75.15:8081/update",
                    method: "POST",
                    params: {'surveyee': surveyeeName, 'teamName': teamName, 'portfolio': portfolio}
                });
            },
            getSurveyees: function(){
                return $http({
                    url: "http://178.62.75.15:8081/surveyees",
                    method: "GET"
                });
            },
            deleteDetails: function (surveyeeName, teamName, portfolio) {
                return $http({
                    url: "http://178.62.75.15:8081/delete",
                    method: "DELETE",
                    params: {'surveyee': surveyeeName, 'teamName': teamName, 'portfolio': portfolio}
                });
            }
        }
    }]);
