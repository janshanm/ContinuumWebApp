'use strict';

describe('continuumAssessmentPlatform.pipeline-environments module', function() {

    beforeEach(module('continuumAssessmentPlatform.pipeline-environments'));

    describe('Pipeline - Environments controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('PipelineEnvironmentsCtrl', {'$scope': scope, '$rootScope': rootScope});
        }));

        it('should be defined', function() {
            expect(controller).toBeDefined();
        });

        it('should have defaults as false for the questions', function(){
            expect(scope.question1).toBeDefined();
            expect(scope.question2).toBeDefined();
            expect(scope.question3).toBeDefined();
            expect(scope.question4).toBeDefined();

            expect(scope.question1).toBeFalsy();
            expect(scope.question2).toBeFalsy();
            expect(scope.question3).toBeFalsy();
            expect(scope.question4).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsPipeline': {'pipeline-environments': {
                'question1': true, 'question2': true, 'question3': false, 'question4': false}}};

            controller = $controller('PipelineEnvironmentsCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.question1).toBeTruthy();
            expect(scope.question2).toBeTruthy();
            expect(scope.question3).toBeFalsy();
            expect(scope.question4).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('PipelineEnvironmentsCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.question1).toBeFalsy();
            expect(scope.question2).toBeFalsy();
            expect(scope.question3).toBeFalsy();
            expect(scope.question4).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though assessments exists', inject(function($controller){
            rootScope = {'assessmentsPipeline': {'coding': {}}};

            controller = $controller('PipelineEnvironmentsCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.question1).toBeFalsy();
            expect(scope.question2).toBeFalsy();
            expect(scope.question3).toBeFalsy();
            expect(scope.question4).toBeFalsy();
        }));

        it('should save the values for the assessment results for infrastructure', function(){
            scope.question1 = true;
            scope.question2 = true;
            scope.question3 = true;
            scope.question4 = true;

            var expectedPipelineEnvironments = {
                'question1': true, 'question2': true, 'question3': true, 'question4': true};

            scope.saveAssessments();
            var pipelineEnvironments = rootScope.assessmentsPipeline['pipeline-environments'];

            expect(pipelineEnvironments['question1']).toEqual(expectedPipelineEnvironments[['question1']]);
            expect(pipelineEnvironments['question2']).toEqual(expectedPipelineEnvironments[['question2']]);
            expect(pipelineEnvironments['question3']).toEqual(expectedPipelineEnvironments[['question3']]);
            expect(pipelineEnvironments['question4']).toEqual(expectedPipelineEnvironments[['question4']]);
        });

        it('should save the score for pipeline-environments as 1 if no question is answered', function(){
            scope.question1 = false;
            scope.question2 = false;
            scope.question3 = false;
            scope.question4 = false;

            var expectedPipelineEnvironmentsScore = 1;

            scope.saveAssessments();
            var pipelineEnvironments = rootScope.assessmentsPipeline['pipeline-environments'];

            expect(pipelineEnvironments['score']).toEqual(expectedPipelineEnvironmentsScore);

        });

        it('should save the score for pipeline-environments as 2 if question1 is answered as yes', function(){
            scope.question1 = true;
            scope.question2 = false;
            scope.question3 = false;
            scope.question4 = false;

            var expectedPipelineEnvironmentsScore = 2;

            scope.saveAssessments();
            var pipelineEnvironments = rootScope.assessmentsPipeline['pipeline-environments'];

            expect(pipelineEnvironments['score']).toEqual(expectedPipelineEnvironmentsScore);

        });

        it('should save the score for pipeline-environments as 3 if questions 1 and 2 are answered as yes', function(){
            scope.question1 = true;
            scope.question2 = true;
            scope.question3 = false;
            scope.question4 = false;

            var expectedPipelineEnvironmentsScore = 3;

            scope.saveAssessments();
            var pipelineEnvironments = rootScope.assessmentsPipeline['pipeline-environments'];

            expect(pipelineEnvironments['score']).toEqual(expectedPipelineEnvironmentsScore);

        });

        it('should save the score for pipeline-environments as 4 if questions 1, 2 and 3 are answered as yes', function(){
            scope.question1 = true;
            scope.question2 = true;
            scope.question3 = true;
            scope.question4 = false;

            var expectedPipelineEnvironmentsScore = 4;

            scope.saveAssessments();
            var pipelineEnvironments = rootScope.assessmentsPipeline['pipeline-environments'];

            expect(pipelineEnvironments['score']).toEqual(expectedPipelineEnvironmentsScore);

        });

        it('should save the score for pipeline-environments as 5 if questions 1, 2, 3 and 4 are answered as yes', function(){
            scope.question1 = true;
            scope.question2 = true;
            scope.question3 = true;
            scope.question4 = true;

            var expectedPipelineEnvironmentsScore = 5;

            scope.saveAssessments();
            var pipelineEnvironments = rootScope.assessmentsPipeline['pipeline-environments'];

            expect(pipelineEnvironments['score']).toEqual(expectedPipelineEnvironmentsScore);

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