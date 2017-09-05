'use strict';

describe('continuumAssessmentPlatform.pipeline-qa module', function() {

    beforeEach(module('continuumAssessmentPlatform.pipeline-qa'));

    describe('Pipeline - QA controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('PipelineQACtrl', {'$scope': scope, '$rootScope': rootScope});
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
            expect(scope.question6).toBeDefined();
            expect(scope.question7).toBeDefined();
            expect(scope.question8).toBeDefined();
            expect(scope.question9).toBeDefined();
            expect(scope.question10).toBeDefined();

            expect(scope.question1).toBeFalsy();
            expect(scope.question2).toBeFalsy();
            expect(scope.question3).toBeFalsy();
            expect(scope.question4).toBeFalsy();
            expect(scope.question5).toEqual('');
            expect(scope.question6).toBeFalsy();
            expect(scope.question7).toBeFalsy();
            expect(scope.question8).toBeFalsy();
            expect(scope.question9).toBeFalsy();
            expect(scope.question10).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsPipeline': {'qa': {
                'question1': true, 'question2': true, 'question3': false, 'question4': false, 'question5': '50',
                'question6': true, 'question7': true, 'question8': false, 'question9': false, 'question10': false}}};

            controller = $controller('PipelineQACtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.question1).toBeTruthy();
            expect(scope.question2).toBeTruthy();
            expect(scope.question3).toBeFalsy();
            expect(scope.question4).toBeFalsy();
            expect(scope.question5).toEqual('50');
            expect(scope.question6).toBeTruthy();
            expect(scope.question7).toBeTruthy();
            expect(scope.question8).toBeFalsy();
            expect(scope.question9).toBeFalsy();
            expect(scope.question10).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('PipelineQACtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.question1).toBeFalsy();
            expect(scope.question2).toBeFalsy();
            expect(scope.question3).toBeFalsy();
            expect(scope.question4).toBeFalsy();
            expect(scope.question5).toEqual('');
            expect(scope.question6).toBeFalsy();
            expect(scope.question7).toBeFalsy();
            expect(scope.question8).toBeFalsy();
            expect(scope.question9).toBeFalsy();
            expect(scope.question10).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though assessments exists', inject(function($controller){
            rootScope = {'assessmentsPipeline': {'coding': {}}};

            controller = $controller('PipelineQACtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.question1).toBeFalsy();
            expect(scope.question2).toBeFalsy();
            expect(scope.question3).toBeFalsy();
            expect(scope.question4).toBeFalsy();
            expect(scope.question5).toEqual('');
            expect(scope.question6).toBeFalsy();
            expect(scope.question7).toBeFalsy();
            expect(scope.question8).toBeFalsy();
            expect(scope.question9).toBeFalsy();
            expect(scope.question10).toBeFalsy();
        }));

        it('should save the values for the assessment results for infrastructure', function(){
            scope.question1 = true;
            scope.question2 = true;
            scope.question3 = false;
            scope.question4 = false;
            scope.question5 = '50';
            scope.question6 = true;
            scope.question7 = true;
            scope.question8 = false;
            scope.question9 = false;
            scope.question10 = false;

            var expectedPipelineQA = {
                'question1': true, 'question2': true, 'question3': false, 'question4': false, 'question5': '50',
                'question6': true, 'question7': true, 'question8': false, 'question9': false, 'question10': false};

            scope.saveAssessments();
            var pipelineQA = rootScope.assessmentsPipeline['qa'];

            expect(pipelineQA['question1']).toEqual(expectedPipelineQA[['question1']]);
            expect(pipelineQA['question2']).toEqual(expectedPipelineQA[['question2']]);
            expect(pipelineQA['question3']).toEqual(expectedPipelineQA[['question3']]);
            expect(pipelineQA['question4']).toEqual(expectedPipelineQA[['question4']]);
            expect(pipelineQA['question5']).toEqual(expectedPipelineQA[['question5']]);
            expect(pipelineQA['question6']).toEqual(expectedPipelineQA[['question6']]);
            expect(pipelineQA['question7']).toEqual(expectedPipelineQA[['question7']]);
            expect(pipelineQA['question8']).toEqual(expectedPipelineQA[['question8']]);
            expect(pipelineQA['question9']).toEqual(expectedPipelineQA[['question9']]);
            expect(pipelineQA['question10']).toEqual(expectedPipelineQA[['question10']]);
        });

        it('should save the score for pipeline-qa as 1 if no question is answered', function(){
            scope.question1 = false;
            scope.question2 = false;
            scope.question3 = false;
            scope.question4 = false;
            scope.question5 = '';
            scope.question6 = false;
            scope.question7 = false;
            scope.question8 = false;
            scope.question9 = false;
            scope.question10 = false;

            var expectedPipelineQAScore = 1;

            scope.saveAssessments();
            var pipelineQA = rootScope.assessmentsPipeline['qa'];

            expect(pipelineQA['score']).toEqual(expectedPipelineQAScore);

        });

        it('should save the score for pipeline-qa as 1 if question 5 is 30% is answered', function(){
            scope.question1 = false;
            scope.question2 = false;
            scope.question3 = false;
            scope.question4 = false;
            scope.question5 = '30';
            scope.question6 = false;
            scope.question7 = false;
            scope.question8 = false;
            scope.question9 = false;
            scope.question10 = false;

            var expectedPipelineQAScore = 1;

            scope.saveAssessments();
            var pipelineQA = rootScope.assessmentsPipeline['qa'];

            expect(pipelineQA['score']).toEqual(expectedPipelineQAScore);

        });

        it('should save the score for pipeline-qa as 2 if question5 is 50% and questions 2 and 7 is answered as yes', function(){
            scope.question1 = false;
            scope.question2 = true;
            scope.question3 = false;
            scope.question4 = false;
            scope.question5 = '50';
            scope.question6 = false;
            scope.question7 = true;
            scope.question8 = false;
            scope.question9 = false;
            scope.question10 = false;

            var expectedPipelineQAScore = 2;

            scope.saveAssessments();
            var pipelineQA = rootScope.assessmentsPipeline['qa'];

            expect(pipelineQA['score']).toEqual(expectedPipelineQAScore);

        });

        it('should save the score for pipeline-qa as 3 if question5 is 70% and questions 1, 2, 4, 6 and 7 are answered as yes', function(){
            scope.question1 = true;
            scope.question2 = true;
            scope.question3 = false;
            scope.question4 = true;
            scope.question5 = '70';
            scope.question6 = true;
            scope.question7 = true;
            scope.question8 = false;
            scope.question9 = false;
            scope.question10 = false;

            var expectedPipelineQAScore = 3;

            scope.saveAssessments();
            var pipelineQA = rootScope.assessmentsPipeline['qa'];

            expect(pipelineQA['score']).toEqual(expectedPipelineQAScore);

        });

        it('should save the score for pipeline-qa as 3 if question5 is 80% and questions 1, 2, 4, 6, 7 and 8 are answered as yes', function(){
            scope.question1 = true;
            scope.question2 = true;
            scope.question3 = false;
            scope.question4 = true;
            scope.question5 = '80';
            scope.question6 = true;
            scope.question7 = true;
            scope.question8 = true;
            scope.question9 = false;
            scope.question10 = false;

            var expectedPipelineQAScore = 4;

            scope.saveAssessments();
            var pipelineQA = rootScope.assessmentsPipeline['qa'];

            expect(pipelineQA['score']).toEqual(expectedPipelineQAScore);

        });

        it('should save the score for pipeline-qa as 3 if question5 is 90% and all other questions are answered as yes', function(){
            scope.question1 = true;
            scope.question2 = true;
            scope.question3 = true;
            scope.question4 = true;
            scope.question5 = '90';
            scope.question6 = true;
            scope.question7 = true;
            scope.question8 = true;
            scope.question9 = true;
            scope.question10 = true;

            var expectedPipelineQAScore = 5;

            scope.saveAssessments();
            var pipelineQA = rootScope.assessmentsPipeline['qa'];

            expect(pipelineQA['score']).toEqual(expectedPipelineQAScore);

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

        describe('#getClassUnit', function () {
            it('should get the warning class for parameter is empty', function(){
                var warningClass = 'bg-warning';
                expect(scope.getClassUnit('')).toEqual(warningClass);
            });

            it('should get the info class for parameter is 30', function(){
                var infoClass = 'bg-info';
                expect(scope.getClassUnit('30')).toEqual(infoClass);
            });

            it('should get the info class for parameter is 50', function(){
                var infoClass = 'bg-info';
                expect(scope.getClassUnit('50')).toEqual(infoClass);
            });

            it('should get the info class for parameter is 70', function(){
                var infoClass = 'bg-info';
                expect(scope.getClassUnit('70')).toEqual(infoClass);
            });

            it('should get the info class for parameter is 80', function(){
                var infoClass = 'bg-info';
                expect(scope.getClassUnit('80')).toEqual(infoClass);
            });

            it('should get the info class for parameter is 90', function(){
                var infoClass = 'bg-info';
                expect(scope.getClassUnit('90')).toEqual(infoClass);
            });
        });

    });
});