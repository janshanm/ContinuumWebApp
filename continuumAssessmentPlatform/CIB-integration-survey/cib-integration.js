angular.module('continuumAssessmentPlatform.cib-integration', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/cib-survey', {
            templateUrl: 'CIB-integration-survey/cib-integration.html',
            controller: 'CIBIntegrationSurveyCtrl'
        });
    }])

    .controller('CIBIntegrationSurveyCtrl', ['$location', '$scope', '$rootScope', function($location, $scope, $rootScope) {
        $scope.executiveQuestion1 = 'N/A';
        $scope.executiveQuestion2 = 'N/A';
        $scope.executiveQuestion3 = 'N/A';
        $scope.executiveQuestion4 = 'N/A';
        $scope.executiveQuestion5 = 'N/A';
        $scope.executiveQuestion6 = 'N/A';
        $scope.executiveQuestion7 = 'N/A';
        $scope.practiceQuestion1 = 'N/A';
        $scope.practiceQuestion2 = 'N/A';
        $scope.practiceQuestion3 = 'N/A';
        $scope.practiceQuestion4 = 'N/A';
        $scope.practiceQuestion5 = 'N/A';
        $scope.practiceQuestion6 = 'N/A';
        $scope.practiceQuestion7 = 'N/A';
        $scope.practiceQuestion8 = 'N/A';
        $scope.practiceQuestion9 = 'N/A';
        $scope.teamQuestion1 = 'N/A';
        $scope.teamQuestion2 = 'N/A';
        $scope.teamQuestion3 = 'N/A';
        $scope.teamQuestion4 = 'N/A';
        $scope.teamQuestion5 = 'N/A';
        $scope.teamQuestion6 = 'N/A';
        $scope.teamQuestion7 = 'N/A';
        $scope.teamQuestion8 = 'N/A';
        $scope.teamQuestion9 = 'N/A';
        $scope.teamQuestion10 = 'N/A';
        $scope.teamQuestion11 = 'N/A';
        $scope.teamQuestion12 = 'N/A';
        $scope.teamQuestion13 = 'N/A';
        $scope.bodyData = {};
        $scope.selectedName = '';
        $scope.selectedRole = '';
        $scope.selectedPractice = '';

        $scope.init = function () {
            // CIBService.getSurveyees().then(function (response) {
            //     $scope.allSurveyees = response.data;
            // });

            $scope.practiceNames = [{id: 'SoftwareEng', text: 'Software Engineering Practice'},
                {id: 'OpsAndInfra', text: 'Operations and Infrastructure'},
                {id: 'LeanAgile', text: 'Lean Agile Coaching'},
                {id: 'APO', text: 'APO'},
                {id: 'DataServices', text: 'Data Services'}];

            $scope.roleNames = [{id: 'PracticeConsumer', text: 'I am a Practice Consumer'},
                {id: 'PracticeLead', text: 'I am a Practice Lead/Anchor'},
                {id: 'PracticeTeam', text: 'I am part of a Practice Team'}];

            $scope.scales = [{'scale': 'lowest', 'value': 1 }, {'scale': 'low', 'value': 2},
                {'scale': 'middle', 'value': 3}, {'scale': 'high', 'value': 4},
                {'scale': 'highest', 'value': 5}];

            if ($rootScope.surveyData !== undefined) {
                $scope.setData();
            }
            else {
                $scope.initializeData();
            }
        };

        $scope.initializeData = function () {
            $scope.executiveQuestion1 = 'N/A';
            $scope.executiveQuestion2 = 'N/A';
            $scope.executiveQuestion3 = 'N/A';
            $scope.executiveQuestion4 = 'N/A';
            $scope.executiveQuestion5 = 'N/A';
            $scope.executiveQuestion6 = 'N/A';
            $scope.executiveQuestion7 = 'N/A';
            $scope.practiceQuestion1 = 'N/A';
            $scope.practiceQuestion2 = 'N/A';
            $scope.practiceQuestion3 = 'N/A';
            $scope.practiceQuestion4 = 'N/A';
            $scope.practiceQuestion5 = 'N/A';
            $scope.practiceQuestion6 = 'N/A';
            $scope.practiceQuestion7 = 'N/A';
            $scope.practiceQuestion8 = 'N/A';
            $scope.practiceQuestion9 = 'N/A';
            $scope.teamQuestion1 = 'N/A';
            $scope.teamQuestion2 = 'N/A';
            $scope.teamQuestion3 = 'N/A';
            $scope.teamQuestion4 = 'N/A';
            $scope.teamQuestion5 = 'N/A';
            $scope.teamQuestion6 = 'N/A';
            $scope.teamQuestion7 = 'N/A';
            $scope.teamQuestion8 = 'N/A';
            $scope.teamQuestion9 = 'N/A';
            $scope.teamQuestion10 = 'N/A';
            $scope.teamQuestion11 = 'N/A';
            $scope.teamQuestion12 = 'N/A';
            $scope.teamQuestion13 = 'N/A';
            $scope.teamQuestion14 = 'N/A';
            $scope.teamQuestion15 = 'N/A';
        };

        $scope.setData = function () {
            $scope.selectedRole = $rootScope.surveyData['roleName'];
            $scope.selectedPractice = $rootScope.surveyData['practiceName'];
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
        };

        $scope.saveSurveyResults = function(){
            $rootScope.surveyData = {};
            $rootScope.surveyData['executiveQuestion1'] = $scope.executiveQuestion1;
            $rootScope.surveyData['executiveQuestion2'] = $scope.executiveQuestion2;
            $rootScope.surveyData['executiveQuestion3'] = $scope.executiveQuestion3;
            $rootScope.surveyData['executiveQuestion4'] = $scope.executiveQuestion4;
            $rootScope.surveyData['executiveQuestion5'] = $scope.executiveQuestion5;
            $rootScope.surveyData['executiveQuestion6'] = $scope.executiveQuestion6;
            $rootScope.surveyData['executiveQuestion7'] = $scope.executiveQuestion7;
            $rootScope.surveyData['practiceQuestion1'] = $scope.practiceQuestion1;
            $rootScope.surveyData['practiceQuestion2'] = $scope.practiceQuestion2;
            $rootScope.surveyData['practiceQuestion3'] = $scope.practiceQuestion3;
            $rootScope.surveyData['practiceQuestion4'] = $scope.practiceQuestion4;
            $rootScope.surveyData['practiceQuestion5'] = $scope.practiceQuestion5;
            $rootScope.surveyData['practiceQuestion6'] = $scope.practiceQuestion6;
            $rootScope.surveyData['practiceQuestion7'] = $scope.practiceQuestion7;
            $rootScope.surveyData['practiceQuestion8'] = $scope.practiceQuestion8;
            $rootScope.surveyData['practiceQuestion9'] = $scope.practiceQuestion9;
            $rootScope.surveyData['teamQuestion1'] = $scope.teamQuestion1;
            $rootScope.surveyData['teamQuestion2'] = $scope.teamQuestion2;
            $rootScope.surveyData['teamQuestion3'] = $scope.teamQuestion3;
            $rootScope.surveyData['teamQuestion4'] = $scope.teamQuestion4;
            $rootScope.surveyData['teamQuestion5'] = $scope.teamQuestion5;
            $rootScope.surveyData['teamQuestion6'] = $scope.teamQuestion6;
            $rootScope.surveyData['teamQuestion7'] = $scope.teamQuestion7;
            $rootScope.surveyData['teamQuestion8'] = $scope.teamQuestion8;
            $rootScope.surveyData['teamQuestion9'] = $scope.teamQuestion9;
            $rootScope.surveyData['teamQuestion10'] = $scope.teamQuestion10;
            $rootScope.surveyData['teamQuestion11'] = $scope.teamQuestion11;
            $rootScope.surveyData['teamQuestion12'] = $scope.teamQuestion12;
            $rootScope.surveyData['teamQuestion13'] = $scope.teamQuestion13;
            $rootScope.surveyData['roleName'] = $scope.selectedRole;
            $rootScope.surveyData['practiceName'] = $scope.selectedPractice;

            if($scope.selectedRole === ""){
                $scope.hasPerspectiveError = true;
            }
            else{
                $scope.hasPerspectiveError = false;
            }

            if($scope.selectedPractice === ""){
                $scope.hasPracticeError = true;
            }
            else{
                $scope.hasPracticeError = false;
            }

            if($scope.selectedRole !== "" && $scope.selectedPractice !== ""){
                $location.path('/complete-cib-survey');
            }
        };

    }]);