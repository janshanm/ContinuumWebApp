'use strict';

describe('continuumAssessmentPlatform.execution module', function() {

    beforeEach(module('continuumAssessmentPlatform.execution'));

    describe('Execution controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('ExecutionCtrl', {'$scope': scope, '$rootScope': rootScope});
        }));

        it('should be defined', function() {
            expect(controller).toBeDefined();
        });

        it('should have defaults as false for the traveller questions', function(){
            expect(scope.traveller1).toBeDefined();
            expect(scope.traveller2).toBeDefined();
            expect(scope.traveller3).toBeDefined();
            expect(scope.traveller4).toBeDefined();
            expect(scope.traveller5).toBeDefined();
            expect(scope.traveller6).toBeDefined();

            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.traveller6).toBeFalsy();
        });

        it('should have defaults as false for the artisan questions', function(){
            expect(scope.artisan1).toBeDefined();
            expect(scope.artisan2).toBeDefined();

            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
        });

        it('should have defaults as false for the expert questions', function(){
            expect(scope.expert1).toBeDefined();
            expect(scope.expert2).toBeDefined();
            expect(scope.expert3).toBeDefined();

            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
        });

        it('should have defaults as false for the professional questions', function(){
            expect(scope.professional1).toBeDefined();
            expect(scope.professional2).toBeDefined();

            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
        });

        it('should have defaults as false for the master questions', function(){
            expect(scope.master1).toBeDefined();
            expect(scope.master2).toBeDefined();

            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsQa': {'execution': {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true,
                'artisan1': true, 'artisan2': false,
                'expert1': true, 'expert2': false, 'expert3': false,
                'professional1': false, 'professional2': true,
                'master1': true, 'master2': false}}};

            controller = $controller('ExecutionCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
            expect(scope.traveller3).toBeTruthy();
            expect(scope.traveller4).toBeTruthy();
            expect(scope.traveller5).toBeTruthy();
            expect(scope.traveller6).toBeTruthy();
            expect(scope.artisan1).toBeTruthy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.expert1).toBeTruthy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeTruthy();
            expect(scope.master1).toBeTruthy();
            expect(scope.master2).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('ExecutionCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.traveller6).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessmentsQa': {'assessmentsQa': {}}};

            controller = $controller('ExecutionCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.traveller6).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
        }));

        it('should save the values for the assessment results for execution', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedExecution = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true,
                'artisan1': true, 'artisan2': false,
                'expert1': true, 'expert2': true, 'expert3': false,
                'professional1': false, 'professional2': false,
                'master1': false, 'master2': false};

            scope.saveAssessments();
            var execution = rootScope.assessmentsQa['execution'];

            expect(execution['traveller1']).toEqual(expectedExecution[['traveller1']]);
            expect(execution['traveller2']).toEqual(expectedExecution[['traveller2']]);
            expect(execution['traveller3']).toEqual(expectedExecution[['traveller3']]);
            expect(execution['traveller4']).toEqual(expectedExecution[['traveller4']]);
            expect(execution['traveller5']).toEqual(expectedExecution[['traveller5']]);
            expect(execution['traveller6']).toEqual(expectedExecution[['traveller6']]);
            expect(execution['artisan1']).toEqual(expectedExecution[['artisan1']]);
            expect(execution['artisan2']).toEqual(expectedExecution[['artisan2']]);
            expect(execution['expert1']).toEqual(expectedExecution[['expert1']]);
            expect(execution['expert2']).toEqual(expectedExecution[['expert2']]);
            expect(execution['expert3']).toEqual(expectedExecution[['expert3']]);
            expect(execution['professional1']).toEqual(expectedExecution[['professional1']]);
            expect(execution['professional2']).toEqual(expectedExecution[['professional2']]);
            expect(execution['master1']).toEqual(expectedExecution[['master1']]);
            expect(execution['master2']).toEqual(expectedExecution[['master2']]);

        });

        it('should save the values for the assessment results for execution when rootScope empty', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedExecution = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true,
                'artisan1': true, 'artisan2': false,
                'expert1': true, 'expert2': true, 'expert3': false,
                'professional1': false, 'professional2': false,
                'master1': false, 'master2': false};

            rootScope.assessmentsQa = {};

            scope.saveAssessments();
            var execution = rootScope.assessmentsQa['execution'];

            expect(execution['traveller1']).toEqual(expectedExecution[['traveller1']]);
            expect(execution['traveller2']).toEqual(expectedExecution[['traveller2']]);
            expect(execution['traveller3']).toEqual(expectedExecution[['traveller3']]);
            expect(execution['traveller4']).toEqual(expectedExecution[['traveller4']]);
            expect(execution['traveller5']).toEqual(expectedExecution[['traveller5']]);
            expect(execution['traveller6']).toEqual(expectedExecution[['traveller6']]);
            expect(execution['artisan1']).toEqual(expectedExecution[['artisan1']]);
            expect(execution['artisan2']).toEqual(expectedExecution[['artisan2']]);
            expect(execution['expert1']).toEqual(expectedExecution[['expert1']]);
            expect(execution['expert2']).toEqual(expectedExecution[['expert2']]);
            expect(execution['expert3']).toEqual(expectedExecution[['expert3']]);
            expect(execution['professional1']).toEqual(expectedExecution[['professional1']]);
            expect(execution['professional2']).toEqual(expectedExecution[['professional2']]);
            expect(execution['master1']).toEqual(expectedExecution[['master1']]);
            expect(execution['master2']).toEqual(expectedExecution[['master2']]);

        });

        it('should save the score for execution as 1 if no question is answered', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedExecutionScore = 1;

            scope.saveAssessments();
            var execution = rootScope.assessmentsQa['execution'];

            expect(execution['score']).toEqual(expectedExecutionScore);

        });

        it('should save the score for execution as 1 if traveller question is answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedExecutionScore = 1;

            scope.saveAssessments();
            var execution = rootScope.assessmentsQa['execution'];

            expect(execution['score']).toEqual(expectedExecutionScore);

        });

        it('should save the score for execution as 2 if traveller question is answered as no and all the artisan questions answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedExecutionScore = 2;

            scope.saveAssessments();
            var execution = rootScope.assessmentsQa['execution'];

            expect(execution['score']).toEqual(expectedExecutionScore);

        });

        it('should save the score for execution as 3 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedExecutionScore = 3;

            scope.saveAssessments();
            var execution = rootScope.assessmentsQa['execution'];

            expect(execution['score']).toEqual(expectedExecutionScore);

        });

        it('should save the score for execution as 4 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.master1 = false;
            scope.master2 = false;

            var expectedExecutionScore = 4;

            scope.saveAssessments();
            var execution = rootScope.assessmentsQa['execution'];

            expect(execution['score']).toEqual(expectedExecutionScore);

        });

        it('should save the score for execution as 5 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes and master questions' +
            'are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.master1 = true;
            scope.master2 = true;

            var expectedExecutionScore = 5;

            scope.saveAssessments();
            var execution = rootScope.assessmentsQa['execution'];

            expect(execution['score']).toEqual(expectedExecutionScore);

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