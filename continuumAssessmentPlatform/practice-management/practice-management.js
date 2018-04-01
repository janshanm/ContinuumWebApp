angular.module('continuumAssessmentPlatform.practice-management', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/survey', {
            templateUrl: 'practice-management/practice-management.html',
            controller: 'PracticeManagementCtrl'
        });
    }])

    .controller('PracticeManagementCtrl', ['$window','$location', '$scope', '$rootScope', 'PracticeService', function($window, $location, $scope, $rootScope, PracticeService) {
        $scope.softwareEngineering1 = 'N/A';
        $scope.softwareEngineering2 = 'N/A';
        $scope.softwareEngineering3 = 'N/A';
        $scope.softwareEngineering4 = 'N/A';
        $scope.agileCoaching1 = 'N/A';
        $scope.agileCoaching2 = 'N/A';
        $scope.agileCoaching3 = 'N/A';
        $scope.agileCoaching4 = 'N/A';
        $scope.changeAndRelease1 = 'N/A';
        $scope.changeAndRelease2 = 'N/A';
        $scope.changeAndRelease3 = 'N/A';
        $scope.changeAndRelease4 = 'N/A';
        $scope.qualityEngineering1 = 'N/A';
        $scope.qualityEngineering2 = 'N/A';
        $scope.qualityEngineering3 = 'N/A';
        $scope.qualityEngineering4 = 'N/A';
        $scope.enterpriseArchitecture1 = 'N/A';
        $scope.enterpriseArchitecture2 = 'N/A';
        $scope.enterpriseArchitecture3 = 'N/A';
        $scope.enterpriseArchitecture4 = 'N/A';
        $scope.solutionsArchitecture1 = 'N/A';
        $scope.solutionsArchitecture2 = 'N/A';
        $scope.solutionsArchitecture3 = 'N/A';
        $scope.solutionsArchitecture4 = 'N/A';
        $scope.dataServices1 = 'N/A';
        $scope.dataServices2 = 'N/A';
        $scope.dataServices3 = 'N/A';
        $scope.dataServices4 = 'N/A';
        $scope.bodyData = {};
        $scope.selectedBIO = '';
        $scope.selectedTeam = '';
        $scope.selectedPracticeTeam = '';
        $scope.hasCompletedSurveyAlready = false;

        $scope.init = function () {
            PracticeService.getSurveyees().then(function(response){
                $scope.allSurveyees = response.data;
                $scope.teamNames = getSurveyTeams($scope.allSurveyees);
                $scope.portfolioNames = getPortfolioTeams($scope.allSurveyees);

                $scope.scales = [{'scale': 'not-applicable', 'value': 'N/A'}, {'scale': 'lowest', 'value': 1}, {'scale': 'low', 'value': 2},
                    {'scale': 'middle', 'value': 3}, {'scale': 'high', 'value': 4},
                    {'scale': 'highest', 'value': 5}];

                if($rootScope.surveyData !== undefined){
                    $scope.setData();
                }
                else {
                    $scope.selectedTeam = $scope.teamNames[0];
                    $scope.BIOLists = getSurveyeesForTeam($scope.allSurveyees, $scope.teamNames[0]);
                    $scope.initializeData();
                }
            });
        };

        var getSurveyTeams = function(surveyees){
            var surveyTeams = [];
            for(var id in surveyees){
                var portfolio = surveyees[id].portfolio;
                if (surveyTeams.indexOf(portfolio) === -1) {
                    surveyTeams.push(portfolio);
                }
            }
            return surveyTeams;
        };

        var getPortfolioTeams = function(surveyees){
            var surveyTeams = [];
            for(var id in surveyees){
                var portfolio = surveyees[id].portfolio;
                if (surveyTeams.indexOf(portfolio) === -1 && portfolio !== 'CTO') {
                    surveyTeams.push(portfolio);
                }
            }
            return surveyTeams;
        };

        var getSurveyeesForTeam = function (allSurveyees, teamName) {
          var surveyees = [];

            for(var id in allSurveyees){
                if(allSurveyees[id].portfolio === teamName){
                    surveyees.push({'id': allSurveyees[id].surveyeeName, 'name': allSurveyees[id].surveyeeName})
                }
            }

            return surveyees;
        };

        $scope.updateTeams = function(){
            $scope.selectedBIO = "";
            $scope.BIOLists = getSurveyeesForTeam($scope.allSurveyees, $scope.selectedTeam);
        };

        $scope.initializeData = function () {
            $scope.hasCompletedSurveyAlready = false;
            $scope.softwareEngineering1 = 'N/A';
            $scope.softwareEngineering2 = 'N/A';
            $scope.softwareEngineering3 = 'N/A';
            $scope.softwareEngineering4 = 'N/A';
            $scope.agileCoaching1 = 'N/A';
            $scope.agileCoaching2 = 'N/A';
            $scope.agileCoaching3 = 'N/A';
            $scope.agileCoaching4 = 'N/A';
            $scope.changeAndRelease1 = 'N/A';
            $scope.changeAndRelease2 = 'N/A';
            $scope.changeAndRelease3 = 'N/A';
            $scope.changeAndRelease4 = 'N/A';
            $scope.qualityEngineering1 = 'N/A';
            $scope.qualityEngineering2 = 'N/A';
            $scope.qualityEngineering3 = 'N/A';
            $scope.qualityEngineering4 = 'N/A';
            $scope.enterpriseArchitecture1 = 'N/A';
            $scope.enterpriseArchitecture2 = 'N/A';
            $scope.enterpriseArchitecture3 = 'N/A';
            $scope.enterpriseArchitecture4 = 'N/A';
            $scope.solutionsArchitecture1 = 'N/A';
            $scope.solutionsArchitecture2 = 'N/A';
            $scope.solutionsArchitecture3 = 'N/A';
            $scope.solutionsArchitecture4 = 'N/A';
            $scope.dataServices1 = 'N/A';
            $scope.dataServices2 = 'N/A';
            $scope.dataServices3 = 'N/A';
            $scope.dataServices4 = 'N/A';
        };

        $scope.setData = function () {
            $scope.selectedTeam = $rootScope.surveyData['teamName'];
            $scope.BIOLists = getSurveyeesForTeam($scope.allSurveyees, $scope.selectedTeam);
            $scope.hasCompletedSurveyAlready = false;
            $scope.selectedBIO = $rootScope.surveyData['BIO'];
            $scope.selectedTeam = $rootScope.surveyData['teamName'];
            $scope.selectedPracticeTeam = $rootScope.surveyData['selectedPracticeTeam'];
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

        };

        $scope.saveSurveyResults = function(){
            $scope.bodyData['BIO'] = $scope.selectedBIO;
            $scope.bodyData['softwareEngineering1'] = $scope.softwareEngineering1;
            $scope.bodyData['softwareEngineering2'] = $scope.softwareEngineering2;
            $scope.bodyData['softwareEngineering3'] = $scope.softwareEngineering3;
            $scope.bodyData['softwareEngineering4'] = $scope.softwareEngineering4;
            $scope.bodyData['agileCoaching1'] = $scope.agileCoaching1;
            $scope.bodyData['agileCoaching2'] = $scope.agileCoaching2;
            $scope.bodyData['agileCoaching3'] = $scope.agileCoaching3;
            $scope.bodyData['agileCoaching4'] = $scope.agileCoaching4;
            $scope.bodyData['changeAndRelease1'] = $scope.changeAndRelease1;
            $scope.bodyData['changeAndRelease2'] = $scope.changeAndRelease2;
            $scope.bodyData['changeAndRelease3'] = $scope.changeAndRelease3;
            $scope.bodyData['changeAndRelease4'] = $scope.changeAndRelease4;
            $scope.bodyData['qualityEngineering1'] = $scope.qualityEngineering1;
            $scope.bodyData['qualityEngineering2'] = $scope.qualityEngineering2;
            $scope.bodyData['qualityEngineering3'] = $scope.qualityEngineering3;
            $scope.bodyData['qualityEngineering4'] = $scope.qualityEngineering4;
            $scope.bodyData['enterpriseArchitecture1'] = $scope.enterpriseArchitecture1;
            $scope.bodyData['enterpriseArchitecture2'] = $scope.enterpriseArchitecture2;
            $scope.bodyData['enterpriseArchitecture3'] = $scope.enterpriseArchitecture3;
            $scope.bodyData['enterpriseArchitecture4'] = $scope.enterpriseArchitecture4;
            $scope.bodyData['solutionsArchitecture1'] = $scope.solutionsArchitecture1;
            $scope.bodyData['solutionsArchitecture2'] = $scope.solutionsArchitecture2;
            $scope.bodyData['solutionsArchitecture3'] = $scope.solutionsArchitecture3;
            $scope.bodyData['solutionsArchitecture4'] = $scope.solutionsArchitecture4;
            $scope.bodyData['dataServices1'] = $scope.dataServices1;
            $scope.bodyData['dataServices2'] = $scope.dataServices2;
            $scope.bodyData['dataServices3'] = $scope.dataServices3;
            $scope.bodyData['dataServices4'] = $scope.dataServices4;
            $scope.bodyData['teamName'] = $scope.selectedTeam;
            $scope.bodyData['selectedPracticeTeam'] = $scope.selectedPracticeTeam;
            $rootScope.surveyData = $scope.bodyData;

            if($scope.selectedBIO === ""){
                $scope.hasError = true;
            }
            else{
                $scope.hasError = false;

                var teamName = $scope.selectedTeam !== 'CTO' ? $scope.selectedTeam : $scope.selectedPracticeTeam;

                $scope.portfolioSurveyed = teamName;

                PracticeService.surveyTaken($scope.selectedBIO, teamName).then(function(response){
                   $scope.surveyResponse = response.data;

                   if($scope.surveyResponse['softwareScore'] !== undefined){
                       $('#myModal').modal('show');
                   }
                   else{
                       $('#myModal').modal('hide');
                       $location.path('/complete-survey');
                   }
                });
            }
        };

        $scope.continueToReview = function(){
            $("#myModal").removeClass("in");
            $(".modal-backdrop").remove();
            $('#myModal').modal('hide');
            $location.path('/complete-survey');
        };

        $scope.cancel = function(){
            $("#myModal").removeClass("in");
            $(".modal-backdrop").remove();
            $('#myModal').modal('hide');
        };

        $scope.loadPreviousSurveyToReview = function () {
            $rootScope.surveyData =$scope.surveyResponse['rawData'] !== undefined ? JSON.parse($scope.surveyResponse['rawData']) : {};
            $scope.setData();
            $("#myModal").removeClass("in");
            $(".modal-backdrop").remove();
            $('#myModal').modal('hide');
        }
    }])

    .factory('PracticeService', ['$http', function ($http) {
        return {
            surveyTaken: function (surveyeeName, teamName) {
                return $http({
                    url: "http://178.62.75.15:8081/surveyTaken",
		    method: "GET",
                    params: {'surveyee': surveyeeName, 'teamName': teamName}
                });
            },
            getSurveyees: function(){
                return $http({
                    url: "http://178.62.75.15:8081/surveyees",
                    method: "GET"
                });
            }
        }
    }]);
