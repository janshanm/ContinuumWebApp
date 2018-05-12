'use strict';

describe('continuumAssessmentPlatform.previous-assessments module', function() {

    beforeEach(module('continuumAssessmentPlatform.previous-assessments'));

    describe('previousAssessments controller', function () {

        var expectedRetrievedAssessments = [
            {'portfolio': 'Portfolio1', 'dateAssessed': '01-06-2017',
                'assessments': [{'ci': 0, 'coding': 1, 'dateAssessed': '01-06-2017', 'design': 1, 'environments': 1,
                'featureTeams': 2, 'incident': 3, 'planning': 1, 'qa': 0, 'release': 1, 'rawData': {}, 'risk': 3, 'strategy': 1,
                'teamName': 'Team 1', 'teaming': 2}]},
            {'portfolio': 'Portfolio2', 'dateAssessed': '30-05-2017',
                'assessments': [{'ci': 1, 'coding': 2, 'dateAssessed': '30-05-2017', 'design': 1, 'environments': 1,
                    'featureTeams': 2, 'incident': 3, 'planning': 1, 'qa': 0, 'release': 1, 'rawData': {}, 'risk': 3, 'strategy': 1,
                    'teamName': 'Team 2', 'teaming': 2}]},
            {'portfolio': 'Portfolio3', 'dateAssessed': '20-05-2017',
                'assessments': [{'ci': 0, 'coding': 1, 'dateAssessed': '20-05-2017', 'design': 1, 'environments': 1,
                    'featureTeams': 1, 'incident': 2, 'planning': 2, 'qa': 1, 'release': 0, 'rawData': {}, 'risk': 2, 'strategy': 1,
                    'teamName': 'Team 3', 'teaming': 1}]},
            {'portfolio': 'Portfolio1', 'dateAssessed': '30-05-2017',
                'assessments': [{'ci': 0, 'coding': 1, 'dateAssessed': '30-05-2017', 'design': 1, 'environments': 1,
                    'featureTeams': 1, 'incident': 2, 'planning': 2, 'qa': 1, 'release': 0, 'rawData': {}, 'risk': 2, 'strategy': 1,
                    'teamName': 'Team 1', 'teaming': 1}]},
            {'portfolio': 'Portfolio1', 'dateAssessed': '30-05-2017',
                'assessments': [{'ci': 0, 'coding': 1, 'dateAssessed': '30-05-2017', 'design': 1, 'environments': 1,
                    'featureTeams': 1, 'incident': 2, 'planning': 2, 'qa': 1, 'release': 0, 'rawData': {}, 'risk': 2, 'strategy': 1,
                    'teamName': 'Team 4', 'teaming': 1}]}];

        var controller, q, deferred, retrieveAssessmentsSpy;
        var scope, rootScope;

        beforeEach(inject(function ($controller, $rootScope, $q, RetrieveAssessments) {
            q = $q;
            deferred = $q.defer();
            retrieveAssessmentsSpy = jasmine.createSpyObj("RetrieveAssessments", ['getAssessments']);
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('PreviousAssessmentsCtrl', {'$scope': scope,
                '$rootScope': rootScope,
                'RetrieveAssessments': retrieveAssessmentsSpy});
        }));

        it('should be defined', function () {
            expect(controller).toBeDefined();
        });

        describe('#init', function(){
            beforeEach(function(){
                deferred.resolve({data: expectedRetrievedAssessments});
                retrieveAssessmentsSpy.getAssessments.and.returnValue(deferred.promise);
                spyOn(scope, 'showChart').and.returnValue(true);
                spyOn(scope, 'showHistory').and.returnValue(true);
                scope.init();
                scope.$apply();
            });

            it('should have all assessments in the scope as the response data', function(){
                expect(scope.allAssessments).toEqual(expectedRetrievedAssessments);
            });

            it('should have the portfolio names as all the portfolios with no repitition', function(){
                var expectedPortfolioNames = ['Portfolio1', 'Portfolio2', 'Portfolio3'];
                expect(scope.assessmentPortfolios).toEqual(expectedPortfolioNames);
            });

            it('should have the first portfolio name as the selected portfolio name', function () {
                expect(scope.selectedPortfolio).toEqual('Portfolio1');
            });

            it('should have all the assessment dates for portfolio one with no repetitions', function(){
                var expectedDates = ['01-06-2017', '30-05-2017'];
                expect(scope.assessmentDates).toEqual(expectedDates);
            });

            it('should have the first assessment date for portfolio as selected date', function(){
                var expectedDates = ['01-06-2017', '30-05-2017'];
                expect(scope.dateOfAssessment).toEqual(expectedDates[0]);
            });

            it('should have all the team names assessed', function(){
                var expectedTeamNames = ['Team 1', 'Team 2', 'Team 3', 'Team 4'];
                expect(scope.teamNames).toEqual(expectedTeamNames);
            });

            it('should select the first team as the selected Team name', function(){
                var expectedTeamNames = ['Team 1', 'Team 2', 'Team 3', 'Team 4'];
                expect(scope.selectedTeamName).toEqual(expectedTeamNames[0]);
            });

            it('should call the show chart method on the scope', function(){
                expect(scope.showChart).toHaveBeenCalled();
            });

            it('should call the show history method on the scope', function(){
                expect(scope.showHistory).toHaveBeenCalled();
            });

            describe('#updatePortfolio', function(){
                it('should update the assessment dates and date of assessment when update chart is called to new selected portfolio', function(){
                    scope.selectedPortfolio = 'Portfolio3';
                    var expectedDates = ['20-05-2017'];
                    scope.updatePortfolio();

                    expect(scope.assessmentDates).toEqual(expectedDates);
                    expect(scope.dateOfAssessment).toEqual(expectedDates[0]);
                });

                it('should call the show chart method on the scope on update', function(){

                    scope.selectedPortfolio = 'Portfolio3';
                    scope.updatePortfolio();

                    expect(scope.showChart).toHaveBeenCalled();
                });
            });

            describe('#updateChart', function(){
                it('should call the show chart method', function(){
                    scope.updateChart();
                    expect(scope.showChart).toHaveBeenCalled();
                });
            });

            describe('#updateTeamInformation', function(){
                it('should call the show history method', function(){
                    scope.updateTeamInformation();
                    expect(scope.showHistory).toHaveBeenCalled();
                });
            });

        });

        describe('#showChart', function(){
            beforeEach(function(){
                deferred.resolve({data: expectedRetrievedAssessments});
                retrieveAssessmentsSpy.getAssessments.and.returnValue(deferred.promise);
                spyOn(scope, 'drawRadialChart').and.returnValue(true);
                spyOn(scope, 'showHistory').and.returnValue(true);
                scope.init();
                scope.$apply();
            });

            it('should set the assessment for dates based on the team and date being assessed', function(){
                var expectedAssessmentsForDate = [{ 'ci': 0, 'coding': 1, 'dateAssessed': '01-06-2017', 'design': 1,
                    'environments': 1, 'featureTeams': 2, 'incident': 3, 'planning': 1, 'qa': 0, 'release': 1,
                    'rawData': {}, 'risk': 3, 'strategy': 1, 'teamName': 'Team 1', 'teaming': 2 }];

                scope.showChart();
                expect(scope.assessmentsForDate).toEqual(expectedAssessmentsForDate);
            });

            it('should set the data sets for the chart', function(){
                var expectedDataSet = [{ 'label': 'TEAM: Team 1', 'fill': true, 'backgroundColor': 'rgba(255,99,132,0.2)',
                    'borderColor': 'rgba(255,99,132,1)', 'pointBorderColor': '#fff', 'pointBackgroundColor': 'rgba(255,99,132,1)',
                    'data': [ 1, 1, 1, 0, 3, 3, 1, 2, 1, 0, 1, 2 ] }];
                scope.showChart();
                expect(scope.dataSets).toEqual(expectedDataSet);
            });

            it('should call the draw radial chart method', function(){
                scope.showChart();
                expect(scope.drawRadialChart).toHaveBeenCalled();
            });
        });

        describe('#drawRadialChart', function(){
            it('should call the the document getElementById method with radar-chart-previous ID', function(){
                spyOn(document, 'getElementById').and.returnValue(true);
                spyOn(window, 'Chart').and.callFake(function(){
                    return true;
                });
                scope.datasets = ['test data'];

                scope.drawRadialChart();

                expect(document.getElementById).toHaveBeenCalledWith('radar-chart-previous');
            });

            it('should call the chart constructor with the scope data sets', function(){
                spyOn(document, 'getElementById').and.returnValue(true);
                spyOn(window, 'Chart').and.callFake(function(){
                    return true;
                });

                window.myPreviousChart = {
                    destroy: function () {
                        return true;
                    }
                };

                var expectedPortfolio = 'Portfolio 1';
                var expectedDate = '20-01-2017';
                var expectedDataSets = ['test data'];

                scope.dataSets = expectedDataSets;
                scope.selectedPortfolio = expectedPortfolio;
                scope.dateOfAssessment = expectedDate;

                var data = {
                    type: 'radar',
                        data: {
                    labels: ["Strategy Alignment", "Planning and Requirements", "Coding Practices",
                        "Continuous Integration", "Incident Management", "Risk and Issue Management", "Software Design",
                        "Teaming", "Release Management", "Quality Assurance", "Environments", "Feature Teams"
                    ],
                        datasets: expectedDataSets
                },
                    options: {
                        title: {
                            display: true,
                                text: 'Assessment Results for Teams in Portfolio: ' + expectedPortfolio + ' for Date - ' + expectedDate
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
                };

                scope.drawRadialChart();

                expect(window.Chart).toHaveBeenCalled();
                expect(window.Chart).toHaveBeenCalledWith(true, data);
            });
        });

        describe('#showHistory', function(){
            beforeEach(function(){
                deferred.resolve({data: expectedRetrievedAssessments});
                retrieveAssessmentsSpy.getAssessments.and.returnValue(deferred.promise);
                spyOn(scope, 'drawHistoryChart').and.returnValue(true);
                spyOn(scope, 'showChart').and.returnValue(true);
                scope.init();
                scope.$apply();
            });

            it('should set the assessment for team based on the selected team', function(){
                var expectedAssessmentsForTeam = [
                    { 'ci': 0, 'coding': 1, 'dateAssessed': '01-06-2017', 'design': 1, 'environments': 1, 'featureTeams': 2, 'incident': 3,
                        'planning': 1, 'qa': 0, 'release': 1, 'rawData': {}, 'risk': 3, 'strategy': 1, 'teamName': 'Team 1', 'teaming': 2 },
                    { 'ci': 0, 'coding': 1, 'dateAssessed': '30-05-2017', 'design': 1, 'environments': 1, 'featureTeams': 1, 'incident': 2,
                        'planning': 2, 'qa': 1, 'release': 0, 'rawData': {}, 'risk': 2, 'strategy': 1, 'teamName': 'Team 1', 'teaming': 1 }];

                scope.showHistory();
                expect(scope.assessmentsForTeam).toEqual(expectedAssessmentsForTeam);
            });

            it('should set the data sets for the chart', function(){
                var expectedDataSet = { labels: [ '01-06-2017', '30-05-2017' ],
                    datasets: [
                        { label: 'Strategy Alignment', data: [ 1, 1 ], backgroundColor: 'blue', borderColor: 'blue', fill: false, lineTension: 0, radius: 5 },
                        { label: 'Planning and Requirements', data: [ 1, 2 ], backgroundColor: 'green', borderColor: 'green', fill: false, lineTension: 0, radius: 5 },
                        { label: 'Coding Practices', data: [ 1, 1 ], backgroundColor: 'red', borderColor: 'red', fill: false, lineTension: 0, radius: 5 },
                        { label: 'Continuous Integration', data: [ 0, 0 ], backgroundColor: 'black', borderColor: 'black', fill: false, lineTension: 0, radius: 5 },
                        { label: 'Incident Management', data: [ 3, 2 ], backgroundColor: 'purple', borderColor: 'purple', fill: false, lineTension: 0, radius: 5 },
                        { label: 'Risk and Issue Management', data: [ 3, 2 ], backgroundColor: 'yellow', borderColor: 'yellow', fill: false, lineTension: 0, radius: 5 },
                        { label: 'Software Design', data: [ 1, 1 ], backgroundColor: 'orange', borderColor: 'orange', fill: false, lineTension: 0, radius: 5 },
                        { label: 'Teaming', data: [ 2, 1 ], backgroundColor: 'brown', borderColor: 'brown', fill: false, lineTension: 0, radius: 5 },
                        { label: 'Release Management', data: [ 1, 0 ], backgroundColor: 'grey', borderColor: 'grey', fill: false, lineTension: 0, radius: 5 },
                        { label: 'Quality Assurance', data: [ 0, 1 ], backgroundColor: 'gold', borderColor: 'gold', fill: false, lineTension: 0, radius: 5 },
                        { label: 'Environments', data: [ 1, 1 ], backgroundColor: 'magenta', borderColor: 'magenta', fill: false, lineTension: 0, radius: 5 },
                        { label: 'Feature Teams', data: [ 2, 1 ], backgroundColor: 'pink', borderColor: 'pink', fill: false, lineTension: 0, radius: 5 } ] };
                scope.showHistory();
                expect(scope.data).toEqual(expectedDataSet);
            });

            it('should call the draw radial chart method', function(){
                var options = {
                    responsive: true,
                    title: {
                        display: true,
                        position: "top",
                        text: "Trends for Feature Team Team 1",
                        fontSize: 18,
                        fontColor: "#111"
                    },
                    legend: {
                        display: true,
                        position: "bottom",
                        labels: {
                            fontColor: "#333",
                            fontSize: 16
                        }
                    },
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 5,
                            stepSize: 1
                        }
                    }
                };
                scope.showHistory();
                expect(scope.drawHistoryChart).toHaveBeenCalledWith(options);
            });
        });

        describe('#drawHistoryChart', function(){
            it('should call the the document getElementById method with history-chart-previous ID', function(){
                spyOn(document, 'getElementById').and.returnValue(true);
                spyOn(window, 'Chart').and.callFake(function(){
                    return true;
                });
                scope.data = ['test data'];

                scope.drawHistoryChart();

                expect(document.getElementById).toHaveBeenCalledWith('history-chart-previous');
            });

            it('should call the chart constructor with the scope data', function(){
                spyOn(document, 'getElementById').and.returnValue(true);
                spyOn(window, 'Chart').and.callFake(function(){
                    return true;
                });

                window.myHistoryChart = {
                    destroy: function () {
                        return true;
                    }
                };

                var expectedPortfolio = 'Portfolio 1';
                var expectedDate = '20-01-2017';
                var expectedData = ['test data'];
                var options = {
                    title: {
                        display: true,
                            text: 'Assessment Results for Teams in Portfolio: ' + expectedPortfolio + ' for Date - ' + expectedDate
                    },
                    scale: {
                        ticks: {
                            beginAtZero: true,
                                min: 0,
                                max: 5,
                                stepSize: 1
                        }
                    }
                };

                scope.data = expectedData;

                var data = {
                    type: "line",
                    data: expectedData,
                    options: options
                };

                scope.drawHistoryChart(options);

                expect(window.Chart).toHaveBeenCalled();
                expect(window.Chart).toHaveBeenCalledWith(true, data);
            });
        });
    });

    describe('previousAssessments services', function(){
        var retrieveAssessmentsService, $httpBackend;

        beforeEach(inject(function($injector) {
            retrieveAssessmentsService = $injector.get('RetrieveAssessments');
            $httpBackend = $injector.get('$httpBackend');

            $httpBackend.when('GET', "http://178.62.75.15:8080/assessments").respond("Successfully Retrieved");
        }));

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should respond successfully when the service is called', function(){
            var expectedResponse = "Successfully Retrieved";

            retrieveAssessmentsService.getAssessments().then(function(response){
                expect(response.data).toEqual(expectedResponse);
            });
            $httpBackend.flush();
        });
    });
});
