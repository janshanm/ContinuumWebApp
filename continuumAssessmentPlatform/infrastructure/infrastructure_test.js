'use strict';

describe('continuumAssessmentPlatform.pipeline-infrastructure module', function() {

    beforeEach(module('continuumAssessmentPlatform.pipeline-infrastructure'));

    describe('Pipeline - Infrastructure controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('InfrastructureCtrl', {'$scope': scope, '$rootScope': rootScope});
        }));

        it('should be defined', function() {
            expect(controller).toBeDefined();
        });

        it('should have defaults as false for the questions', function(){
            expect(scope.question1).toBeDefined();
            expect(scope.question2).toBeDefined();
            expect(scope.question3).toBeDefined();
            expect(scope.question4).toBeDefined();
            expect(scope.question5).toBeDefined();

            expect(scope.question1).toBeFalsy();
            expect(scope.question2).toBeFalsy();
            expect(scope.question3).toBeFalsy();
            expect(scope.question4).toBeFalsy();
            expect(scope.question5).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsPipeline': {'infrastructure': {
                'question1': true, 'question2': true, 'question3': false, 'question4': false, 'question5': true}}};

            controller = $controller('InfrastructureCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.question1).toBeTruthy();
            expect(scope.question2).toBeTruthy();
            expect(scope.question3).toBeFalsy();
            expect(scope.question4).toBeFalsy();
            expect(scope.question5).toBeTruthy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('InfrastructureCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.question1).toBeFalsy();
            expect(scope.question2).toBeFalsy();
            expect(scope.question3).toBeFalsy();
            expect(scope.question4).toBeFalsy();
            expect(scope.question5).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though assessments exists', inject(function($controller){
            rootScope = {'assessmentsPipeline': {'coding': {}}};

            controller = $controller('InfrastructureCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.question1).toBeFalsy();
            expect(scope.question2).toBeFalsy();
            expect(scope.question3).toBeFalsy();
            expect(scope.question4).toBeFalsy();
            expect(scope.question5).toBeFalsy();
        }));

        it('should save the values for the assessment results for infrastructure', function(){
            scope.question1 = true;
            scope.question2 = true;
            scope.question3 = true;
            scope.question4 = true;
            scope.question5 = true;

            var expectedCI = {
                'question1': true, 'question2': true, 'question3': true, 'question4': true, 'question5': true};

            scope.saveAssessments();
            var infrastructure = rootScope.assessmentsPipeline['infrastructure'];

            expect(infrastructure['question1']).toEqual(expectedCI[['question1']]);
            expect(infrastructure['question2']).toEqual(expectedCI[['question2']]);
            expect(infrastructure['question3']).toEqual(expectedCI[['question3']]);
            expect(infrastructure['question4']).toEqual(expectedCI[['question4']]);
            expect(infrastructure['question5']).toEqual(expectedCI[['question5']]);
        });

        it('should save the score for infrastructure as 1 if no question is answered', function(){
            scope.question1 = false;
            scope.question2 = false;
            scope.question3 = false;
            scope.question4 = false;
            scope.question5 = false;

            var expectedInfrastructureScore = 1;

            scope.saveAssessments();
            var infrastructure = rootScope.assessmentsPipeline['infrastructure'];

            expect(infrastructure['score']).toEqual(expectedInfrastructureScore);

        });

        it('should save the score for infrastructure as 1 if question3 is answered as yes', function(){
            scope.question1 = false;
            scope.question2 = false;
            scope.question3 = true;
            scope.question4 = false;
            scope.question5 = false;

            var expectedInfrastructureScore = 1;

            scope.saveAssessments();
            var infrastructure = rootScope.assessmentsPipeline['infrastructure'];

            expect(infrastructure['score']).toEqual(expectedInfrastructureScore);

        });

        it('should save the score for infrastructure as 2 if questions 1 and 3 are answered as yes', function(){
            scope.question1 = true;
            scope.question2 = false;
            scope.question3 = true;
            scope.question4 = false;
            scope.question5 = false;

            var expectedInfrastructureScore = 2;

            scope.saveAssessments();
            var infrastructure = rootScope.assessmentsPipeline['infrastructure'];

            expect(infrastructure['score']).toEqual(expectedInfrastructureScore);

        });

        it('should save the score for infrastructure as 3 if questions 1, 2 and 3 are answered as yes', function(){
            scope.question1 = true;
            scope.question2 = true;
            scope.question3 = true;
            scope.question4 = false;
            scope.question5 = false;

            var expectedInfrastructureScore = 3;

            scope.saveAssessments();
            var infrastructure = rootScope.assessmentsPipeline['infrastructure'];

            expect(infrastructure['score']).toEqual(expectedInfrastructureScore);

        });

        it('should save the score for infrastructure as 4 if questions 1, 2, 3 and 4 are answered as yes', function(){
            scope.question1 = true;
            scope.question2 = true;
            scope.question3 = true;
            scope.question4 = true;
            scope.question5 = false;

            var expectedInfrastructureScore = 4;

            scope.saveAssessments();
            var infrastructure = rootScope.assessmentsPipeline['infrastructure'];

            expect(infrastructure['score']).toEqual(expectedInfrastructureScore);

        });

        it('should save the score for infrastructure as 5 if all questions are answered as yes', function(){
            scope.question1 = true;
            scope.question2 = true;
            scope.question3 = true;
            scope.question4 = true;
            scope.question5 = true;

            var expectedInfrastructureScore = 5;

            scope.saveAssessments();
            var infrastructure = rootScope.assessmentsPipeline['infrastructure'];

            expect(infrastructure['score']).toEqual(expectedInfrastructureScore);

        });

        describe('#getClass', function () {
            it('should get the warning class for parameters that are false', function(){
                var warningClass = 'bg-warning';
                expect(scope.getClass(false)).toEqual(warningClass);
            });

            it('should get the info class for parameters that are false', function(){
                var infoClass = 'bg-info';
                expect(scope.getClass(true)).toEqual(infoClass);
            });
        });

    });
});