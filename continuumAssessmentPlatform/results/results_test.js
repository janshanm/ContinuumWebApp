'use strict';

describe('continuumAssessmentPlatform.results module', function() {

    beforeEach(module('continuumAssessmentPlatform.results'));

    describe('results controller', function(){

        var controller, q, deferred;
        var scope, rootScope;
        var saveResultsSpy;

        var strategyTasks = {'traveller1': 'Any alignment to Strategy is coincidental or opportunistic',
            'artisan1': 'Upfront engagement with stakeholders to ensure Business and Technical Alignment',
            'artisan2': 'The product/project vision is explicitly aligned to strategy',
            'artisan3': 'Post implementation review to confirm strategy alignment',
            'expert1': 'Occasional engagement with stakeholders throughout delivery cycle to review business and technical alignment',
            'expert2': 'Backlog items are created to deal with strategy alignment issues',
            'professional1': 'Frequent engagement with Stakeholders to review Business and technical alignment',
            'professional2': 'Team presents product to Architecture and Design teams with the intent of picking up alignment issues ',
            'professional3': 'Metrics to measure strategy elements defined and tracked ',
            'master1': 'All major strategy alignment backlog items have been resolved',
            'master2': 'All requirements are attached to business metric',
            'master3': 'Metrics are tracked over time and improvements targets are set and achieved',
            'master4': 'Team independently innovates by creating new features or optimisations in support of or extending the strategy. '};
        var planningTasks = {
            'traveller1': 'Team is not involved in estimates',
            'traveller2': 'No Specific prioritization of requirements',
            'traveller3': 'Iteration lengths are erratic and based on the amount of functionality',
            'traveller4': 'The team does not know their velocity',
            'traveller5': 'No Stakeholder management in place ',
            'artisan1': 'Team performs estimates up-front',
            'artisan2': 'Requirements are prioritized based on business value',
            'artisan3': 'Iteration lengths are fixed',
            'artisan4': 'The team knows their velocity ',
            'artisan5': 'Stakeholders have been identified and a communication plan is in place',
            'expert1': 'Team performs estimation iteratively',
            'expert2': 'When the team estimates, the estimates include all activities to reach \'Done\'.',
            'expert3': 'The MVP and MVPS have been identified',
            'expert4': 'The teams velocity is predictable ',
            'expert5': 'All backlog items are sized by the teams',
            'expert6': 'Stakeholders attend showcase',
            'professional1': 'Team tracks performance against estimates',
            'professional2': 'Requirements are developed on a just –in –time basis',
            'professional3': 'Analytics are implemented to determine the effectiveness of requirements',
            'professional4': 'The amount of functionality for each iteration is determined by the teams velocity',
            'professional5': 'Technical debt and defects are tracked on the backlog and form part of the estimated team velocity',
            'professional6': 'Stakeholders actively participate in retrospective',
            'master1': 'Requirements are defined with an expected outcome with an objective measure',
            'master2': 'Release planning is performed based on the teams current velocity',
            'master3': 'A process is in place (e.g. a formal beta program)  to allow extended stakeholders and customers to evaluate the software and provide feedback.'};


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
            it('should set the selected tab to 1', function(){
                scope.init();
                expect(scope.selectedTab).toEqual(1);
            });

            it('should set the default for isSaved to false', function(){
                scope.init();
                expect(scope.isSaved).toBeFalsy();
            });

            it('should set the default for isNotSaved to false', function(){
                scope.init();
                expect(scope.isNotSaved).toBeFalsy();
            });

            describe('#noAssessments', function(){
                it('should set the results data with initialisation values of zero and undefined team name', function(){
                    var expectedResultData = {'teamName': undefined, 'strategy': 0, 'planning': 0, 'coding': 0, 'ci': 0,
                    'incident': 0, 'risk': 0, 'design': 0, 'teaming': 0, 'release': 0, 'qa': 0, 'environments': 0,
                    'featureTeams': 0, 'portfolioName': undefined, 'rawData': undefined};
                    scope.init();

                    expect(scope.resultsData).toEqual(expectedResultData);
                });

                it('should call the draw chart function with the right parameters', function(){
                    scope.init();
                    expect(saveResultsSpy.drawChart).toHaveBeenCalledWith(undefined,0,0,0,0,0,0,0,0,0,0,0,0,undefined);
                });

                it('should have the expected formatted strategy tasks', function(){
                    var zero = 0;
                    var two = 2;
                    scope.init();
                    expect(scope.strategy['current_score']).toEqual(zero);
                    expect(scope.strategy['next_score']).toEqual(two);
                    expect(scope.strategy['tasks']).toContain(strategyTasks['artisan1']);
                    expect(scope.strategy['tasks']).toContain(strategyTasks['artisan2']);
                    expect(scope.strategy['tasks']).toContain(strategyTasks['artisan3']);
                    expect(scope.strategy['undoTasks'].length).toEqual(zero);
                });

                it('should have the expected formatted planning tasks', function(){
                    var zero = 0;
                    var two = 2;
                    scope.init();
                    expect(scope.planning['current_score']).toEqual(zero);
                    expect(scope.planning['next_score']).toEqual(two);
                    expect(scope.planning['tasks']).toContain(planningTasks['artisan1']);
                    expect(scope.planning['tasks']).toContain(planningTasks['artisan2']);
                    expect(scope.planning['tasks']).toContain(planningTasks['artisan3']);
                    expect(scope.planning['tasks']).toContain(planningTasks['artisan4']);
                    expect(scope.planning['tasks']).toContain(planningTasks['artisan5']);
                    expect(scope.planning['undoTasks'].length).toEqual(zero);
                });
            });
            describe('#emptyAssessments', function(){
                it('should set the results data with initialisation values of zero and undefined team name', function(){
                    rootScope.assessments = {};
                    var expectedResultData = {'teamName': undefined, 'strategy': 0, 'planning': 0, 'coding': 0, 'ci': 0,
                        'incident': 0, 'risk': 0, 'design': 0, 'teaming': 0, 'release': 0, 'qa': 0, 'environments': 0,
                        'featureTeams': 0, 'portfolioName': undefined, 'rawData': {}};
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
                        'featureTeams': 2, 'portfolioName': 'Example Portfolio', 'rawData': rootScope.assessments};
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
                    'featureTeams': 2, 'portfolioName': 'Example Portfolio', 'rawData': {}};
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
                    'featureTeams': 2, 'portfolioName': 'Example Portfolio', 'rawData': {}};
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

        describe('#getImages', function(){
            it('should return traveller female icon if the score is 1', function(){
                expect(scope.getImage(1)).toEqual('images/traveller_female.png');
            });

            it('should return artisan female icon if the score is 2', function(){
                expect(scope.getImage(2)).toEqual('images/artisan_female.png');
            });

            it('should return expert female icon if the score is 3', function(){
                expect(scope.getImage(3)).toEqual('images/expert_female.png');
            });

            it('should return professional female icon if the score is 4', function(){
                expect(scope.getImage(4)).toEqual('images/professional_female.png');
            });

            it('should return master female icon if the score is 5', function(){
                expect(scope.getImage(5)).toEqual('images/master_female.png');
            });

            it('should return traveller male icon if the score is 0', function(){
                expect(scope.getImage(0)).toEqual('images/traveller_male.png');
            });
        });

    });
});