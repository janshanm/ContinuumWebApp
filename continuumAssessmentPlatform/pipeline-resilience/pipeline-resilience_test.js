'use strict';

describe('continuumAssessmentPlatform.pipeline-resilience module', function() {

    beforeEach(module('continuumAssessmentPlatform.pipeline-resilience'));

    describe('Pipeline - Resilience controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('PipelineResilienceCtrl', {'$scope': scope, '$rootScope': rootScope});
        }));

        it('should be defined', function() {
            expect(controller).toBeDefined();
        });

        it('should have defaults as false for the questions', function(){
            expect(scope.question1).toBeDefined();
            expect(scope.question2).toBeDefined();
            expect(scope.question3).toBeDefined();

            expect(scope.question1).toBeFalsy();
            expect(scope.question2).toBeFalsy();
            expect(scope.question3).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsPipeline': {'pipeline-resilience': {
                'question1': true, 'question2': true, 'question3': false}}};

            controller = $controller('PipelineResilienceCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.question1).toBeTruthy();
            expect(scope.question2).toBeTruthy();
            expect(scope.question3).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('PipelineResilienceCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.question1).toBeFalsy();
            expect(scope.question2).toBeFalsy();
            expect(scope.question3).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though assessments exists', inject(function($controller){
            rootScope = {'assessmentsPipeline': {'coding': {}}};

            controller = $controller('PipelineResilienceCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.question1).toBeFalsy();
            expect(scope.question2).toBeFalsy();
            expect(scope.question3).toBeFalsy();
        }));

        it('should save the values for the assessment results for pipeline-resilience', function(){
            scope.question1 = true;
            scope.question2 = true;
            scope.question3 = true;

            var expectedPipelineResilience = {
                'question1': true, 'question2': true, 'question3': true};

            scope.saveAssessments();
            var pipelineResilience = rootScope.assessmentsPipeline['pipeline-resilience'];

            expect(pipelineResilience['question1']).toEqual(expectedPipelineResilience[['question1']]);
            expect(pipelineResilience['question2']).toEqual(expectedPipelineResilience[['question2']]);
            expect(pipelineResilience['question3']).toEqual(expectedPipelineResilience[['question3']]);
        });

        it('should save the score for pipeline-resilience as 1 if no question is answered', function(){
            scope.question1 = false;
            scope.question2 = false;
            scope.question3 = false;

            var expectedPipelineResilienceScore = 1;

            scope.saveAssessments();
            var pipelineResilience = rootScope.assessmentsPipeline['pipeline-resilience'];

            expect(pipelineResilience['score']).toEqual(expectedPipelineResilienceScore);

        });

        it('should save the score for pipeline-resilience as 3 if question 1 and 3 is answered as yes', function(){
            scope.question1 = true;
            scope.question2 = false;
            scope.question3 = true;

            var expectedPipelineResilienceScore = 3;

            scope.saveAssessments();
            var pipelineResilience = rootScope.assessmentsPipeline['pipeline-resilience'];

            expect(pipelineResilience['score']).toEqual(expectedPipelineResilienceScore);

        });

        it('should save the score for pipeline-resilience as 5 if all questions are answered as yes', function(){
            scope.question1 = true;
            scope.question2 = true;
            scope.question3 = true;

            var expectedPipelineResilienceScore = 5;

            scope.saveAssessments();
            var pipelineResilience = rootScope.assessmentsPipeline['pipeline-resilience'];

            expect(pipelineResilience['score']).toEqual(expectedPipelineResilienceScore);

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