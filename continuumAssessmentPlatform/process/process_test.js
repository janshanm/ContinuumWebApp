'use strict';

describe('continuumAssessmentPlatform.process module', function() {

    beforeEach(module('continuumAssessmentPlatform.process'));

    describe('Process controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('ProcessCtrl', {'$scope': scope, '$rootScope': rootScope});
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
            expect(scope.artisan1).toBeFalsy();
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

        it('should have defaults as false for the master questions', function(){
            expect(scope.master1).toBeDefined();
            expect(scope.master2).toBeDefined();
            expect(scope.master3).toBeDefined();

            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsQa': {'process': {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true,
                'artisan1': true,
                'expert1': true, 'expert2': false, 'expert3': false,
                'professional1': false, 'professional2': true, 'professional3': true,
                'master1': true, 'master2': true, 'master3': true}}};

            controller = $controller('ProcessCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
            expect(scope.traveller3).toBeTruthy();
            expect(scope.traveller4).toBeTruthy();
            expect(scope.artisan1).toBeTruthy();
            expect(scope.expert1).toBeTruthy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeTruthy();
            expect(scope.professional3).toBeTruthy();
            expect(scope.master1).toBeTruthy();
            expect(scope.master2).toBeTruthy();
            expect(scope.master3).toBeTruthy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('ProcessCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessmentsQa': {'assessmentsQa': {}}};

            controller = $controller('ProcessCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
        }));

        it('should save the values for the assessment results for process', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.artisan1 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedProcess = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true,
                'artisan1': true,
                'expert1': true, 'expert2': true, 'expert3': true,
                'professional1': false, 'professional2': false, 'professional3': false,
                'master1': false, 'master2': false, 'master3': false};

            scope.saveAssessments();
            var process = rootScope.assessmentsQa['process'];

            expect(process['traveller1']).toEqual(expectedProcess[['traveller1']]);
            expect(process['traveller2']).toEqual(expectedProcess[['traveller2']]);
            expect(process['traveller3']).toEqual(expectedProcess[['traveller3']]);
            expect(process['traveller4']).toEqual(expectedProcess[['traveller4']]);
            expect(process['artisan1']).toEqual(expectedProcess[['artisan1']]);
            expect(process['expert1']).toEqual(expectedProcess[['expert1']]);
            expect(process['expert2']).toEqual(expectedProcess[['expert2']]);
            expect(process['expert3']).toEqual(expectedProcess[['expert3']]);
            expect(process['professional1']).toEqual(expectedProcess[['professional1']]);
            expect(process['professional2']).toEqual(expectedProcess[['professional2']]);
            expect(process['professional3']).toEqual(expectedProcess[['professional3']]);
            expect(process['master1']).toEqual(expectedProcess[['master1']]);
            expect(process['master2']).toEqual(expectedProcess[['master2']]);
            expect(process['master3']).toEqual(expectedProcess[['master3']]);
        });

        it('should save the values for the assessment results for process when rootScope empty', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.artisan1 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedProcess = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true,
                'artisan1': true,
                'expert1': true, 'expert2': true, 'expert3': true,
                'professional1': false, 'professional2': false, 'professional3': false,
                'master1': false, 'master2': false, 'master3': false};

            rootScope.assessmentsQa = {};

            scope.saveAssessments();
            var process = rootScope.assessmentsQa['process'];

            expect(process['traveller1']).toEqual(expectedProcess[['traveller1']]);
            expect(process['traveller2']).toEqual(expectedProcess[['traveller2']]);
            expect(process['traveller3']).toEqual(expectedProcess[['traveller3']]);
            expect(process['traveller4']).toEqual(expectedProcess[['traveller4']]);
            expect(process['artisan1']).toEqual(expectedProcess[['artisan1']]);
            expect(process['expert1']).toEqual(expectedProcess[['expert1']]);
            expect(process['expert2']).toEqual(expectedProcess[['expert2']]);
            expect(process['expert3']).toEqual(expectedProcess[['expert3']]);
            expect(process['professional1']).toEqual(expectedProcess[['professional1']]);
            expect(process['professional2']).toEqual(expectedProcess[['professional2']]);
            expect(process['professional3']).toEqual(expectedProcess[['professional3']]);
            expect(process['master1']).toEqual(expectedProcess[['master1']]);
            expect(process['master2']).toEqual(expectedProcess[['master2']]);
            expect(process['master3']).toEqual(expectedProcess[['master3']]);
        });

        it('should save the score for process as 1 if no question is answered', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedProcessScore = 1;

            scope.saveAssessments();
            var process = rootScope.assessmentsQa['process'];

            expect(process['score']).toEqual(expectedProcessScore);

        });

        it('should save the score for process as 1 if traveller question is answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.artisan1 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedProcessScore = 1;

            scope.saveAssessments();
            var process = rootScope.assessmentsQa['process'];

            expect(process['score']).toEqual(expectedProcessScore);

        });

        it('should save the score for process as 2 if traveller question is answered as no and all the artisan questions answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = true;
            scope.expert1 = true;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedProcessScore = 2;

            scope.saveAssessments();
            var process = rootScope.assessmentsQa['process'];

            expect(process['score']).toEqual(expectedProcessScore);

        });

        it('should save the score for process as 3 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedProcessScore = 3;

            scope.saveAssessments();
            var process = rootScope.assessmentsQa['process'];

            expect(process['score']).toEqual(expectedProcessScore);

        });

        it('should save the score for process as 4 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.master1 = true;
            scope.master2 = false;
            scope.master3 = false;

            var expectedProcessScore = 4;

            scope.saveAssessments();
            var process = rootScope.assessmentsQa['process'];

            expect(process['score']).toEqual(expectedProcessScore);

        });

        it('should save the score for process as 5 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes and master questions' +
            'are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.artisan1 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.master1 = true;
            scope.master2 = true;
            scope.master3 = true;

            var expectedProcessScore = 5;

            scope.saveAssessments();
            var process = rootScope.assessmentsQa['process'];

            expect(process['score']).toEqual(expectedProcessScore);

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