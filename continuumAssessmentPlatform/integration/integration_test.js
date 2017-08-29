'use strict';

describe('continuumAssessmentPlatform.integration module', function() {

    beforeEach(module('continuumAssessmentPlatform.integration'));

    describe('Integration controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('IntegrationCtrl', {'$scope': scope, '$rootScope': rootScope});
        }));

        it('should be defined', function() {
            expect(controller).toBeDefined();
        });

        it('should have defaults as false for the traveller questions', function(){
            expect(scope.traveller1).toBeDefined();
            expect(scope.traveller2).toBeDefined();

            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
        });

        it('should have defaults as false for the artisan questions', function(){
            expect(scope.artisan1).toBeDefined();
            expect(scope.artisan2).toBeDefined();
            expect(scope.artisan3).toBeDefined();

            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
        });

        it('should have defaults as false for the expert questions', function(){
            expect(scope.expert1).toBeDefined();
            expect(scope.expert2).toBeDefined();

            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
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

            expect(scope.master1).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsQa': {'integration': {
                'traveller1': true, 'traveller2': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false,
                'expert1': true, 'expert2': false,
                'professional1': false, 'professional2': true, 'professional3': true,
                'master1': true}}};

            controller = $controller('IntegrationCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
            expect(scope.artisan1).toBeTruthy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.expert1).toBeTruthy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeTruthy();
            expect(scope.professional3).toBeTruthy();
            expect(scope.master1).toBeTruthy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('IntegrationCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.master1).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessmentsQa': {'assessmentsQa': {}}};

            controller = $controller('IntegrationCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.master1).toBeFalsy();
        }));

        it('should save the values for the assessment results for integration', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;

            var expectedIntegration = {
                'traveller1': true, 'traveller2': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false,
                'expert1': true, 'expert2': true,
                'professional1': false, 'professional2': false, 'professional3': false,
                'master1': false};

            scope.saveAssessments();
            var integration = rootScope.assessmentsQa['integration'];

            expect(integration['traveller1']).toEqual(expectedIntegration[['traveller1']]);
            expect(integration['traveller2']).toEqual(expectedIntegration[['traveller2']]);
            expect(integration['artisan1']).toEqual(expectedIntegration[['artisan1']]);
            expect(integration['artisan2']).toEqual(expectedIntegration[['artisan2']]);
            expect(integration['artisan3']).toEqual(expectedIntegration[['artisan3']]);
            expect(integration['expert1']).toEqual(expectedIntegration[['expert1']]);
            expect(integration['expert2']).toEqual(expectedIntegration[['expert2']]);
            expect(integration['professional1']).toEqual(expectedIntegration[['professional1']]);
            expect(integration['professional2']).toEqual(expectedIntegration[['professional2']]);
            expect(integration['professional3']).toEqual(expectedIntegration[['professional3']]);
            expect(integration['master1']).toEqual(expectedIntegration[['master1']]);
        });

        it('should save the values for the assessment results for integration when rootScope empty', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;

            var expectedIntegration = {
                'traveller1': true, 'traveller2': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false,
                'expert1': true, 'expert2': true,
                'professional1': false, 'professional2': false, 'professional3': false,
                'master1': false};

            rootScope.assessmentsQa = {};

            scope.saveAssessments();
            var integration = rootScope.assessmentsQa['integration'];

            expect(integration['traveller1']).toEqual(expectedIntegration[['traveller1']]);
            expect(integration['traveller2']).toEqual(expectedIntegration[['traveller2']]);
            expect(integration['artisan1']).toEqual(expectedIntegration[['artisan1']]);
            expect(integration['artisan2']).toEqual(expectedIntegration[['artisan2']]);
            expect(integration['artisan3']).toEqual(expectedIntegration[['artisan3']]);
            expect(integration['expert1']).toEqual(expectedIntegration[['expert1']]);
            expect(integration['expert2']).toEqual(expectedIntegration[['expert2']]);
            expect(integration['professional1']).toEqual(expectedIntegration[['professional1']]);
            expect(integration['professional2']).toEqual(expectedIntegration[['professional2']]);
            expect(integration['professional3']).toEqual(expectedIntegration[['professional3']]);
            expect(integration['master1']).toEqual(expectedIntegration[['master1']]);
        });

        it('should save the score for integration as 1 if no question is answered', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;

            var expectedIntegrationScore = 1;

            scope.saveAssessments();
            var integration = rootScope.assessmentsQa['integration'];

            expect(integration['score']).toEqual(expectedIntegrationScore);

        });

        it('should save the score for integration as 1 if traveller question is answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;

            var expectedIntegrationScore = 1;

            scope.saveAssessments();
            var integration = rootScope.assessmentsQa['integration'];

            expect(integration['score']).toEqual(expectedIntegrationScore);

        });

        it('should save the score for integration as 2 if traveller question is answered as no and all the artisan questions answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = true;
            scope.expert1 = true;
            scope.expert2 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;

            var expectedIntegrationScore = 2;

            scope.saveAssessments();
            var integration = rootScope.assessmentsQa['integration'];

            expect(integration['score']).toEqual(expectedIntegrationScore);

        });

        it('should save the score for integration as 3 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.professional1 = true;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;

            var expectedIntegrationScore = 3;

            scope.saveAssessments();
            var integration = rootScope.assessmentsQa['integration'];

            expect(integration['score']).toEqual(expectedIntegrationScore);

        });

        it('should save the score for integration as 4 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.master1 = false;

            var expectedIntegrationScore = 4;

            scope.saveAssessments();
            var integration = rootScope.assessmentsQa['integration'];

            expect(integration['score']).toEqual(expectedIntegrationScore);

        });

        it('should save the score for integration as 5 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes and master questions' +
            'are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.master1 = true;

            var expectedIntegrationScore = 5;

            scope.saveAssessments();
            var integration = rootScope.assessmentsQa['integration'];

            expect(integration['score']).toEqual(expectedIntegrationScore);

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