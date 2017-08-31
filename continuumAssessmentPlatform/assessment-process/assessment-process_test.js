'use strict';

describe('continuumAssessmentPlatform.assessment-process module', function() {

    beforeEach(module('continuumAssessmentPlatform.assessment-process'));

    describe('assessment process controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('AssessmentProcessCtrl', {'$scope': scope, '$rootScope': rootScope});
        }));

        it('should be defined', function() {
            expect(controller).toBeDefined();
        });

        it('should have defaults as false for the traveller questions', function(){
            expect(scope.traveller1).toBeDefined();
            expect(scope.traveller2).toBeDefined();
            expect(scope.traveller3).toBeDefined();
            expect(scope.traveller4).toBeDefined();

            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
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
            expect(scope.professional3).toBeDefined();

            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsQa': {'assessment-process': {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true,
                'artisan1': true, 'artisan2': false,
                'expert1': true, 'expert2': false, 'expert3': false,
                'professional1': false, 'professional2': true, 'professional3': false}}};

            controller = $controller('AssessmentProcessCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
            expect(scope.traveller3).toBeTruthy();
            expect(scope.traveller4).toBeTruthy();
            expect(scope.artisan1).toBeTruthy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.expert1).toBeTruthy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeTruthy();
            expect(scope.professional3).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('AssessmentProcessCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessmentsQa': {'ci': {}}};

            controller = $controller('AssessmentProcessCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
        }));

        it('should save the values for the assessment results for assessment process', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;

            var expectedAssessmentProcess = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true,
                'artisan1': true, 'artisan2': false,
                'expert1': true, 'expert2': true, 'expert3': false,
                'professional1': false, 'professional2': false, 'professional3': false};

            scope.saveAssessments();
            var assessmentProcess = rootScope.assessmentsQa['assessment-process'];

            expect(assessmentProcess['traveller1']).toEqual(expectedAssessmentProcess[['traveller1']]);
            expect(assessmentProcess['traveller2']).toEqual(expectedAssessmentProcess[['traveller2']]);
            expect(assessmentProcess['traveller3']).toEqual(expectedAssessmentProcess[['traveller3']]);
            expect(assessmentProcess['traveller4']).toEqual(expectedAssessmentProcess[['traveller4']]);
            expect(assessmentProcess['artisan1']).toEqual(expectedAssessmentProcess[['artisan1']]);
            expect(assessmentProcess['artisan2']).toEqual(expectedAssessmentProcess[['artisan2']]);
            expect(assessmentProcess['expert1']).toEqual(expectedAssessmentProcess[['expert1']]);
            expect(assessmentProcess['expert2']).toEqual(expectedAssessmentProcess[['expert2']]);
            expect(assessmentProcess['expert3']).toEqual(expectedAssessmentProcess[['expert3']]);
            expect(assessmentProcess['professional1']).toEqual(expectedAssessmentProcess[['professional1']]);
            expect(assessmentProcess['professional2']).toEqual(expectedAssessmentProcess[['professional2']]);
            expect(assessmentProcess['professional3']).toEqual(expectedAssessmentProcess[['professional3']]);
        });

        it('should save the score for assessment process as 1 if no question is answered', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;

            var expectedAssessmentProcessScore = 1;

            scope.saveAssessments();
            var assessmentProcess = rootScope.assessmentsQa['assessment-process'];

            expect(assessmentProcess['score']).toEqual(expectedAssessmentProcessScore);

        });

        it('should save the score for assessment process as 1 if traveller question is answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;

            var expectedAssessmentProcessScore = 1;

            scope.saveAssessments();
            var assessmentProcess = rootScope.assessmentsQa['assessment-process'];

            expect(assessmentProcess['score']).toEqual(expectedAssessmentProcessScore);

        });

        it('should save the score for assessment process as 3 if traveller question is answered as no and all the artisan questions answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = true;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.expert1 = true;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;

            var expectedAssessmentProcessScore = 3;

            scope.saveAssessments();
            var assessmentProcess = rootScope.assessmentsQa['assessment-process'];

            expect(assessmentProcess['score']).toEqual(expectedAssessmentProcessScore);

        });

        it('should save the score for assessment process as 4 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = false;
            scope.professional3 = false;

            var expectedAssessmentProcessScore = 4;

            scope.saveAssessments();
            var assessmentProcess = rootScope.assessmentsQa['assessment-process'];

            expect(assessmentProcess['score']).toEqual(expectedAssessmentProcessScore);

        });

        it('should save the score for assessment process as 5 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;

            var expectedAssessmentProcessScore = 5;

            scope.saveAssessments();
            var assessmentProcess = rootScope.assessmentsQa['assessment-process'];

            expect(assessmentProcess['score']).toEqual(expectedAssessmentProcessScore);

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