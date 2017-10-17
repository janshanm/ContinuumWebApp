'use strict';

describe('continuumAssessmentPlatform.pipeline-code module', function() {

    beforeEach(module('continuumAssessmentPlatform.pipeline-code'));

    describe('Pipeline - Code controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('PipelineCodeCtrl', {'$scope': scope, '$rootScope': rootScope});
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

            expect(scope.question1).toBeFalsy();
            expect(scope.question2).toBeFalsy();
            expect(scope.question3).toBeFalsy();
            expect(scope.question4).toBeFalsy();
            expect(scope.question5).toBeFalsy();
            expect(scope.question6).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsPipeline': {'pipeline-code': {
                'question1': true, 'question2': true, 'question3': '>20', 'question4': false, 'question5': false, 'question6': false}}};

            controller = $controller('PipelineCodeCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.question1).toBeTruthy();
            expect(scope.question2).toBeTruthy();
            expect(scope.question3).toEqual('>20');
            expect(scope.question4).toBeFalsy();
            expect(scope.question5).toBeFalsy();
            expect(scope.question6).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('PipelineCodeCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.question1).toBeFalsy();
            expect(scope.question2).toBeFalsy();
            expect(scope.question3).toEqual('');
            expect(scope.question4).toBeFalsy();
            expect(scope.question5).toBeFalsy();
            expect(scope.question6).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though assessments exists', inject(function($controller){
            rootScope = {'assessmentsPipeline': {'coding': {}}};

            controller = $controller('PipelineCodeCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.question1).toBeFalsy();
            expect(scope.question2).toBeFalsy();
            expect(scope.question3).toEqual('');
            expect(scope.question4).toBeFalsy();
            expect(scope.question5).toBeFalsy();
            expect(scope.question6).toBeFalsy();
        }));

        it('should save the values for the assessment results for pipeline-code', function(){
            scope.question1 = true;
            scope.question2 = true;
            scope.question3 = '>20';
            scope.question4 = true;
            scope.question5 = true;
            scope.question6 = true;

            var expectedPipelineCode = {
                'question1': true, 'question2': true, 'question3': '>20', 'question4': true, 'question5': true, 'question6': true};

            scope.saveAssessments();
            var pipelineCode = rootScope.assessmentsPipeline['pipeline-code'];

            expect(pipelineCode['question1']).toEqual(expectedPipelineCode[['question1']]);
            expect(pipelineCode['question2']).toEqual(expectedPipelineCode[['question2']]);
            expect(pipelineCode['question3']).toEqual(expectedPipelineCode[['question3']]);
            expect(pipelineCode['question4']).toEqual(expectedPipelineCode[['question4']]);
            expect(pipelineCode['question5']).toEqual(expectedPipelineCode[['question5']]);
            expect(pipelineCode['question6']).toEqual(expectedPipelineCode[['question6']]);
        });

        it('should save the score for pipeline-code as 1 if no question is answered', function(){
            scope.question1 = false;
            scope.question2 = false;
            scope.question3 = '';
            scope.question4 = false;
            scope.question5 = false;
            scope.question6 = false;

            var expectedPipelineCodeScore = 1;

            scope.saveAssessments();
            var pipelineCode = rootScope.assessmentsPipeline['pipeline-code'];

            expect(pipelineCode['score']).toEqual(expectedPipelineCodeScore);

        });

        it('should save the score for pipeline-code as 1 if the tech debt is greater than 20%', function(){
            scope.question1 = false;
            scope.question2 = false;
            scope.question3 = '>20';
            scope.question4 = false;
            scope.question5 = false;
            scope.question6 = false;

            var expectedPipelineCodeScore = 1;

            scope.saveAssessments();
            var pipelineCode = rootScope.assessmentsPipeline['pipeline-code'];

            expect(pipelineCode['score']).toEqual(expectedPipelineCodeScore);

        });

        it('should save the score for pipeline-code as 2 if question1 is answered as yes', function(){
            scope.question1 = false;
            scope.question2 = false;
            scope.question3 = '15';
            scope.question4 = false;
            scope.question5 = true;
            scope.question6 = false;

            var expectedPipelineCodeScore = 2;

            scope.saveAssessments();
            var pipelineCode = rootScope.assessmentsPipeline['pipeline-code'];

            expect(pipelineCode['score']).toEqual(expectedPipelineCodeScore);

        });

        it('should save the score for pipeline-code as 3 if questions 1 and 2 are answered as yes', function(){
            scope.question1 = false;
            scope.question2 = true;
            scope.question3 = '10';
            scope.question4 = true;
            scope.question5 = true;
            scope.question6 = false;

            var expectedPipelineCodeScore = 3;

            scope.saveAssessments();
            var pipelineCode = rootScope.assessmentsPipeline['pipeline-code'];

            expect(pipelineCode['score']).toEqual(expectedPipelineCodeScore);

        });

        it('should save the score for pipeline-code as 4 if questions 1, 2 and 3 are answered as yes', function(){
            scope.question1 = false;
            scope.question2 = true;
            scope.question3 = '5';
            scope.question4 = true;
            scope.question5 = true;
            scope.question6 = false;

            var expectedPipelineCodeScore = 4;

            scope.saveAssessments();
            var pipelineCode = rootScope.assessmentsPipeline['pipeline-code'];

            expect(pipelineCode['score']).toEqual(expectedPipelineCodeScore);

        });

        it('should save the score for pipeline-code as 5 if questions 1, 2, 3 and 4 are answered as yes', function(){
            scope.question1 = true;
            scope.question2 = true;
            scope.question3 = '2';
            scope.question4 = true;
            scope.question5 = true;
            scope.question6 = true;

            var expectedPipelineCodeScore = 5;

            scope.saveAssessments();
            var pipelineCode = rootScope.assessmentsPipeline['pipeline-code'];

            expect(pipelineCode['score']).toEqual(expectedPipelineCodeScore);

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

        describe('#getClassTechDebt', function () {
            it('should get the warning class for parameter is empty', function(){
                var warningClass = 'bg-warning';
                expect(scope.getClassTechDebt('')).toEqual(warningClass);
            });

            it('should get the info class for parameter is >20', function(){
                var infoClass = 'bg-info';
                expect(scope.getClassTechDebt('>20')).toEqual(infoClass);
            });

            it('should get the info class for parameter is 15', function(){
                var infoClass = 'bg-info';
                expect(scope.getClassTechDebt('15')).toEqual(infoClass);
            });

            it('should get the info class for parameter is 10', function(){
                var infoClass = 'bg-info';
                expect(scope.getClassTechDebt('10')).toEqual(infoClass);
            });

            it('should get the info class for parameter is 5', function(){
                var infoClass = 'bg-info';
                expect(scope.getClassTechDebt('5')).toEqual(infoClass);
            });

            it('should get the info class for parameter is 2', function(){
                var infoClass = 'bg-info';
                expect(scope.getClassTechDebt('2')).toEqual(infoClass);
            });
        });

    });
});