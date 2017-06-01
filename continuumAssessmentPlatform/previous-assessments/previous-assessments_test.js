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
    });
});