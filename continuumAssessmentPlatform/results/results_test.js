'use strict';

describe('continuumAssessmentPlatform.results module', function() {

    beforeEach(module('continuumAssessmentPlatform.results'));

    describe('results controller', function(){

        var controller, q, deferred;
        var scope, rootScope;
        var saveResultsSpy;

        beforeEach(inject(function($controller, $rootScope, $q, SaveResults){
            q = $q;
            deferred = $q.defer();
            saveResultsSpy = jasmine.createSpyObj("SaveResults", ['drawChart', 'saveAssessments']);
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('ResultsCtrl', {'$scope': scope, '$rootScope': rootScope, 'SaveResults': saveResultsSpy});
        }));

        it('should be defined', function() {
            expect(controller).toBeDefined();
        });

        it('should have the default values set for scores as zero', function(){
            var zero = 0;

            expect(scope.strategyScore).toEqual(zero);
            expect(scope.planningScore).toEqual(zero);
            expect(scope.codingScore).toEqual(zero);
            expect(scope.ciScore).toEqual(zero);
            expect(scope.incidentScore).toEqual(zero);
            expect(scope.riskScore).toEqual(zero);
            expect(scope.designScore).toEqual(zero);
            expect(scope.teamingScore).toEqual(zero);
            expect(scope.releaseScore).toEqual(zero);
            expect(scope.QAScore).toEqual(zero);
            expect(scope.environmentsScore).toEqual(zero);
            expect(scope.featureTeamsScore).toEqual(zero);
        });

        it('should have the no results data', function(){
            var expectedResultsData = {};
            expect(scope.resultsData).toEqual(expectedResultsData);
        });

        describe('#init', function(){
            describe('#noAssessments', function(){
                it('should set the results data with initialisation values of zero and undefined team name', function(){
                    var expectedResultData = {'teamName': undefined, 'strategy': 0, 'planning': 0, 'coding': 0, 'ci': 0,
                    'incident': 0, 'risk': 0, 'design': 0, 'teaming': 0, 'release': 0, 'qa': 0, 'environments': 0,
                    'featureTeams': 0, 'portfolioName': undefined};
                    scope.init();

                    expect(scope.resultsData).toEqual(expectedResultData);
                });

                it('should call the draw chart function with the right parameters', function(){
                    scope.init();
                    expect(saveResultsSpy.drawChart).toHaveBeenCalledWith(undefined,0,0,0,0,0,0,0,0,0,0,0,0,undefined);
                });
            });
            describe('#emptyAssessments', function(){
                it('should set the results data with initialisation values of zero and undefined team name', function(){
                    rootScope.assessments = {};
                    var expectedResultData = {'teamName': undefined, 'strategy': 0, 'planning': 0, 'coding': 0, 'ci': 0,
                        'incident': 0, 'risk': 0, 'design': 0, 'teaming': 0, 'release': 0, 'qa': 0, 'environments': 0,
                        'featureTeams': 0, 'portfolioName': undefined};
                    scope.init();

                    expect(scope.resultsData).toEqual(expectedResultData);
                });

                it('should call the draw chart function with the right parameters', function(){
                    rootScope.assessments = {};
                    scope.init();
                    expect(saveResultsSpy.drawChart).toHaveBeenCalledWith(undefined,0,0,0,0,0,0,0,0,0,0,0,0,undefined);
                });
            });
            describe('#withAssessmentResults', function(){
                it('should set the results data with initialisation values of zero and undefined team name', function(){
                    rootScope.teamName = 'Example Team';
                    rootScope.selectedPortfolioName = 'Example Portfolio';
                    rootScope.assessments = {'strategy': {'score': 2}, 'planning': {'score': 1}, 'coding': {'score': 3},
                        'ci': {'score': 3}, 'incident': {'score': 4}, 'risk': {'score': 1}, 'design': {'score': 2},
                        'teaming': {'score': 3}, 'release': {'score': 2}, 'QA': {'score': 4}, 'environments': {'score': 3},
                        'featureTeams': {'score': 2}};

                    var expectedResultData = {'teamName': 'Example Team', 'strategy': 2, 'planning': 1, 'coding': 3, 'ci': 3,
                        'incident': 4, 'risk': 1, 'design': 2, 'teaming': 3, 'release': 2, 'qa': 4, 'environments': 3,
                        'featureTeams': 2, 'portfolioName': 'Example Portfolio'};
                    scope.init();

                    expect(scope.resultsData).toEqual(expectedResultData);
                });

                it('should call the draw chart function with the right parameters', function(){
                    rootScope.teamName = 'Example Team';
                    rootScope.selectedPortfolioName = 'Example Portfolio';
                    rootScope.assessments = {'strategy': {'score': 2}, 'planning': {'score': 1}, 'coding': {'score': 3},
                        'ci': {'score': 3}, 'incident': {'score': 4}, 'risk': {'score': 1}, 'design': {'score': 2},
                        'teaming': {'score': 3}, 'release': {'score': 2}, 'QA': {'score': 4}, 'environments': {'score': 3},
                        'featureTeams': {'score': 2}};

                    scope.init();

                    expect(saveResultsSpy.drawChart).toHaveBeenCalledWith('Example Team',2,1,3,3,4,1,2,3,2,4,3,2,'Example Portfolio');
                });

                it('should set the scope parameters for the different scores', function(){
                    rootScope.teamName = 'Example Team';
                    rootScope.selectedPortfolioName = 'Example Portfolio';
                    rootScope.assessments = {'strategy': {'score': 2}, 'planning': {'score': 1}, 'coding': {'score': 3},
                        'ci': {'score': 3}, 'incident': {'score': 4}, 'risk': {'score': 1}, 'design': {'score': 2},
                        'teaming': {'score': 3}, 'release': {'score': 2}, 'QA': {'score': 4}, 'environments': {'score': 3},
                        'featureTeams': {'score': 2}};

                    scope.init();

                    expect(scope.strategyScore).toEqual(2);
                    expect(scope.planningScore).toEqual(1);
                    expect(scope.codingScore).toEqual(3);
                    expect(scope.ciScore).toEqual(3);
                    expect(scope.incidentScore).toEqual(4);
                    expect(scope.riskScore).toEqual(1);
                    expect(scope.designScore).toEqual(2);
                    expect(scope.teamingScore).toEqual(3);
                    expect(scope.releaseScore).toEqual(2);
                    expect(scope.QAScore).toEqual(4);
                    expect(scope.environmentsScore).toEqual(3);
                    expect(scope.featureTeamsScore).toEqual(2);
                });
            });
        });

        describe('#saveAssessmentResult', function () {
            it('should call the save results service when called', function () {
                var resultsData = {'teamName': 'Example Team', 'strategy': 2, 'planning': 1, 'coding': 3, 'ci': 3,
                    'incident': 4, 'risk': 1, 'design': 2, 'teaming': 3, 'release': 2, 'qa': 4, 'environments': 3,
                    'featureTeams': 2, 'portfolioName': 'Example Portfolio'};
                scope.resultsData = resultsData;
                deferred.resolve({'status': 200, 'data': 'Saved Successfully'});
                saveResultsSpy.saveAssessments.and.returnValue(deferred.promise);

                scope.$apply();
                scope.saveAssessmentResult();

                expect(saveResultsSpy.saveAssessments).toHaveBeenCalledWith(resultsData);
            });

            it('should set the flags for the save appropriately', function () {
                scope.resultsData = {'teamName': 'Example Team', 'strategy': 2, 'planning': 1, 'coding': 3, 'ci': 3,
                    'incident': 4, 'risk': 1, 'design': 2, 'teaming': 3, 'release': 2, 'qa': 4, 'environments': 3,
                    'featureTeams': 2, 'portfolioName': 'Example Portfolio'};
                deferred.resolve({'status': 200, 'data': 'Saved Successfully'});
                spyOn(console, 'log');
                saveResultsSpy.saveAssessments.and.returnValue(deferred.promise);
                scope.saveAssessmentResult();
                scope.$apply();

                expect(console.log).toHaveBeenCalledWith('Saved Successfully');
                expect(scope.isSaved).toBeTruthy();
                expect(scope.isNotSaved).toBeFalsy();
            });

            it('should set the flags for the not saved appropriately if error is returned from the save call', function () {
                scope.resultsData = {'teamName': 'Example Team', 'strategy': 2, 'planning': 1, 'coding': 3, 'ci': 3,
                    'incident': 4, 'risk': 1, 'design': 2, 'teaming': 3, 'release': 2, 'qa': 4, 'environments': 3,
                    'featureTeams': 2, 'portfolioName': 'Example Portfolio'};
                deferred.reject({'status': 400, 'data': 'Not Saved Successfully'});

                spyOn(console, 'log');
                saveResultsSpy.saveAssessments.and.returnValue(deferred.promise);
                scope.saveAssessmentResult();
                scope.$apply();

                expect(console.log).toHaveBeenCalledWith('Not Saved Successfully');
                expect(scope.isSaved).toBeFalsy();
                expect(scope.isNotSaved).toBeTruthy();
            })
        });

    });
});