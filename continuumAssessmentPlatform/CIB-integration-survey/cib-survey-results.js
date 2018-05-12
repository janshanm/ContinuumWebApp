angular.module('continuumAssessmentPlatform.cib-survey-results', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/cib-survey-results', {
            templateUrl: 'CIB-integration-survey/cib-survey-results.html',
            controller: 'CIBSurveyResultsCtrl'
        });
    }])

    .controller('CIBSurveyResultsCtrl', ['$scope', 'CIBResultService', function($scope, CIBResultService) {
        $scope.selectedTab = 1;

        $scope.init = function () {
            $scope.selectedTab = 1;
            $scope.practiceNames = [{id: 'SoftwareEng', text: 'Software Engineering Practice'},
                {id: 'OpsAndInfra', text: 'Operations and Infrastructure'},
                {id: 'LeanAgile', text: 'Lean Agile Coaching'},
                {id: 'APO', text: 'APO'},
                {id: 'DataServices', text: 'Data Services'}];

            $scope.selectedPerspective = 'PracticeConsumer';

            $scope.roleNames = [{id: 'PracticeConsumer', text: 'I am a Practice Consumer'},
                {id: 'PracticeLead', text: 'I am a Practice Lead/Anchor'},
                {id: 'PracticeTeam', text: 'I am part of a Practice Team'}];

            $scope.scales = [{'scale': 'lowest', 'value': 1 }, {'scale': 'low', 'value': 2},
                {'scale': 'middle', 'value': 3}, {'scale': 'high', 'value': 4},
                {'scale': 'highest', 'value': 5}];

            CIBResultService.getSurveyResults().then(function(response){
                $scope.resultsData = response.data;
                $scope.showChart('PracticeConsumer');
            });

        };

        var foreColors = ["rgba(255,99,132,1)", "rgba(141, 92, 7, 1)","rgba(216, 239, 42, 1)", "rgba(130, 239, 42, 1)", "rgba(239, 147, 42, 1)",
            "rgba(223, 58, 93, 1)", "rgba(53, 3, 14, 1)", "rgba(87, 5, 22, 1)", "rgba(251, 187, 201, 1)",
            "rgba(92, 60, 5, 1)", "rgba(242, 158, 13, 1)", "rgba(251, 228, 187, 1)"];

        var backColors = ["rgba(255,99,132,0.2)", "rgba(141, 92, 7, 0.2)", "rgba(216, 239, 42, 0.2)", "rgba(130, 239, 42, 0.2)",
            "rgba(223, 58, 93, 0.2)", "rgba(53, 3, 14, 0.2)", "rgba(87, 5, 22, 0.2)", "rgba(251, 187, 201, 0.2)",
            "rgba(92, 60, 5, 0.2)", "rgba(239, 147, 42, 0.2)", "rgba(242, 158, 13, 0.2)", "rgba(251, 228, 187, 0.2)"];


        $scope.showChart = function(perspective){
            $scope.surveyResults = $scope.getDataForPerspective(perspective);
            $scope.dataSets = $scope.formatByPractice($scope.surveyResults, perspective);
            $scope.labels = $scope.getLabels(perspective);
            $scope.drawRadialChart();
        };

        $scope.formatByPractice = function(surveyResultsData, perspective){
            var practiceNames = ['Software Engineering Practice', 'Operations and Infrastructure',
                'Lean Agile Coaching', 'APO', 'DataServices'];

            var colorSelector = 0;

            var datasets = [];

            for(var pos in practiceNames){
                var counter = 0;
                var executiveQuestion1 = 0;
                var executiveQuestion2 = 0;
                var executiveQuestion3 = 0;
                var executiveQuestion4 = 0;
                var executiveQuestion5 = 0;
                var executiveQuestion6 = 0;
                var executiveQuestion7 = 0;
                var practiceQuestion1 = 0;
                var practiceQuestion2 = 0;
                var practiceQuestion3 = 0;
                var practiceQuestion4 = 0;
                var practiceQuestion5 = 0;
                var practiceQuestion6 = 0;
                var practiceQuestion7 = 0;
                var practiceQuestion8 = 0;
                var practiceQuestion9 = 0;
                var teamQuestion1 = 0;
                var teamQuestion2 = 0;
                var teamQuestion3 = 0;
                var teamQuestion4 = 0;
                var teamQuestion5 = 0;
                var teamQuestion6 = 0;
                var teamQuestion7 = 0;
                var teamQuestion8 = 0;
                var teamQuestion9 = 0;
                var teamQuestion10 = 0;
                var teamQuestion11 = 0;
                var teamQuestion12 = 0;
                var teamQuestion13 = 0;

                for(var id in surveyResultsData){
                    if(surveyResultsData[id].practiceDisplay === practiceNames[pos]){
                        var data = surveyResultsData[id];
                        var responses = data['rawData'] !== undefined ? JSON.parse(data['rawData']) : {}
                        if(perspective === 'PracticeConsumer'){
                            executiveQuestion1 += parseInt(responses['executiveQuestion1']);
                            executiveQuestion2 += parseInt(responses['executiveQuestion2']);
                            executiveQuestion3 += parseInt(responses['executiveQuestion3']);
                            executiveQuestion4 += parseInt(responses['executiveQuestion4']);
                            executiveQuestion5 += parseInt(responses['executiveQuestion5']);
                            executiveQuestion6 += parseInt(responses['executiveQuestion6']);
                            executiveQuestion7 += parseInt(responses['executiveQuestion7']);
                        }

                        if(perspective === 'PracticeLead'){
                            practiceQuestion1 += parseInt(responses['practiceQuestion1']);
                            practiceQuestion2 += parseInt(responses['practiceQuestion2']);
                            practiceQuestion3 += parseInt(responses['practiceQuestion3']);
                            practiceQuestion4 += parseInt(responses['practiceQuestion4']);
                            practiceQuestion5 += parseInt(responses['practiceQuestion5']);
                            practiceQuestion6 += parseInt(responses['practiceQuestion6']);
                            practiceQuestion7 += parseInt(responses['practiceQuestion7']);
                            practiceQuestion8 += parseInt(responses['practiceQuestion8']);
                            practiceQuestion9 += parseInt(responses['practiceQuestion9']);
                        }

                        if(perspective === 'PracticeTeam'){
                            teamQuestion1 += parseInt(responses['teamQuestion1']);
                            teamQuestion2 += parseInt(responses['teamQuestion2']);
                            teamQuestion3 += parseInt(responses['teamQuestion3']);
                            teamQuestion4 += parseInt(responses['teamQuestion4']);
                            teamQuestion5 += parseInt(responses['teamQuestion5']);
                            teamQuestion6 += parseInt(responses['teamQuestion6']);
                            teamQuestion7 += parseInt(responses['teamQuestion7']);
                            teamQuestion8 += parseInt(responses['teamQuestion8']);
                            teamQuestion9 += parseInt(responses['teamQuestion9']);
                            teamQuestion10 += parseInt(responses['teamQuestion10']);
                            teamQuestion11 += parseInt(responses['teamQuestion11']);
                            teamQuestion12 += parseInt(responses['teamQuestion12']);
                            teamQuestion13 += parseInt(responses['teamQuestion13']);
                        }

                        counter++;
                    }
                }

                var formattedData = {};

                if(counter === 0){
                    counter = 1;
                }

                if(perspective === 'PracticeConsumer'){
                    formattedData = {
                        label: "Practice: " + practiceNames[pos],
                        fill: true,
                        backgroundColor: backColors[colorSelector],
                        borderColor: foreColors[colorSelector],
                        pointBorderColor: "#fff",
                        pointBackgroundColor: foreColors[colorSelector],
                        data: [executiveQuestion1/counter, executiveQuestion2/counter, executiveQuestion3/counter,
                            executiveQuestion4/counter, executiveQuestion5/counter, executiveQuestion6/counter,
                            executiveQuestion7/counter
                        ]
                    };
                }

                if(perspective === 'PracticeLead'){
                    formattedData = {
                        label: "Practice: " + practiceNames[pos],
                        fill: true,
                        backgroundColor: backColors[colorSelector],
                        borderColor: foreColors[colorSelector],
                        pointBorderColor: "#fff",
                        pointBackgroundColor: foreColors[colorSelector],
                        data: [practiceQuestion1/counter, practiceQuestion2/counter, practiceQuestion3/counter,
                            practiceQuestion4/counter, practiceQuestion5/counter, practiceQuestion6/counter,
                            practiceQuestion7/counter, practiceQuestion8/counter, practiceQuestion9/counter
                        ]
                    };
                }
                if(perspective === 'PracticeTeam'){
                    formattedData = {
                        label: "Practice: " + practiceNames[pos],
                        fill: true,
                        backgroundColor: backColors[colorSelector],
                        borderColor: foreColors[colorSelector],
                        pointBorderColor: "#fff",
                        pointBackgroundColor: foreColors[colorSelector],
                        data: [teamQuestion1/counter, teamQuestion2/counter, teamQuestion3/counter,
                            teamQuestion4/counter, teamQuestion5/counter, teamQuestion6/counter,
                            teamQuestion7/counter, teamQuestion8/counter, teamQuestion9/counter,
                            teamQuestion10/counter, teamQuestion11/counter, teamQuestion12/counter,
                            teamQuestion13/counter
                        ]
                    };
                }

                datasets.push(formattedData);
                colorSelector++;
            }

            return datasets;
        };

        $scope.drawRadialChart = function(){
            if(window.myPreviousChart != undefined)
                window.myPreviousChart.destroy();

            window.myPreviousChart = new Chart(document.getElementById("radar-perspective-chart"), {
                type: 'radar',
                data: {
                    labels: $scope.labels,
                    datasets: $scope.dataSets
                },
                options: {
                    title: {
                        display: true,
                        text: 'Survey Results'
                    },
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 5,
                            stepSize: 1
                        }
                    }
                }
            });
        };

        $scope.getLabels = function (perspective) {
          var labels = [];

            if(perspective === 'PracticeConsumer'){
                labels = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5",
                "Question 6", "Question 7"];
            }

            if(perspective === 'PracticeLead'){
                labels = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5",
                    "Question 6", "Question 7", "Question 8", "Question 9"];
            }

            if(perspective === 'PracticeTeam'){
                labels = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5",
                    "Question 6", "Question 7", "Question 8", "Question 9", "Question 10",
                    "Question 11", "Question 12", "Question 13"];
            }

            return labels;
        };

        $scope.getDataForPerspective = function(perspective){
            var perspectiveData = $scope.resultsData;
            var filteredData = [];
            for(var id in perspectiveData){
                if(perspectiveData[id].role == perspective){
                    filteredData.push(perspectiveData[id]);
                }
            }

            return filteredData;
        };

        $scope.updatePerspective = function(){
            $scope.showChart($scope.selectedPerspective);
        };

    }])

    .factory('CIBResultService', ['$http', function ($http) {
        return {
            getSurveyResults: function () {
                return $http({
                    url: "http://178.62.75.15:8081/CIBSurveys",
                    method: "GET"
                });
            }
        }
    }]);
