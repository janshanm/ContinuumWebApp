'use strict';

describe('continuumAssessmentPlatform.documentation module', function() {

    beforeEach(module('continuumAssessmentPlatform.documentation'));

    describe('Documentation controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('DocumentationCtrl', {'$scope': scope, '$rootScope': rootScope});
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
            expect(scope.traveller7).toBeDefined();

            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.traveller6).toBeFalsy();
            expect(scope.traveller7).toBeFalsy();
        });

        it('should have defaults as false for the artisan questions', function(){
            expect(scope.artisan1).toBeDefined();
            expect(scope.artisan2).toBeDefined();
            expect(scope.artisan3).toBeDefined();
            expect(scope.artisan4).toBeDefined();
            expect(scope.artisan5).toBeDefined();
            expect(scope.artisan6).toBeDefined();

            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.artisan6).toBeFalsy();
        });

        it('should have defaults as false for the expert questions', function(){
            expect(scope.expert1).toBeDefined();
            expect(scope.expert2).toBeDefined();
            expect(scope.expert3).toBeDefined();
            expect(scope.expert4).toBeDefined();

            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
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
            rootScope = {'assessmentsQa': {'documentation': {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true, 'traveller7': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false, 'artisan6': false,
                'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false,
                'professional1': false, 'professional2': true, 'professional3': false,
                'master1': true, 'master2': false, 'master3': false}}};

            controller = $controller('DocumentationCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
            expect(scope.traveller3).toBeTruthy();
            expect(scope.traveller4).toBeTruthy();
            expect(scope.traveller5).toBeTruthy();
            expect(scope.traveller6).toBeTruthy();
            expect(scope.traveller7).toBeTruthy();
            expect(scope.artisan1).toBeTruthy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.artisan6).toBeFalsy();
            expect(scope.expert1).toBeTruthy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeTruthy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.master1).toBeTruthy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('DocumentationCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.traveller6).toBeFalsy();
            expect(scope.traveller7).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.artisan6).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessmentsQa': {'assessmentsQa': {}}};

            controller = $controller('DocumentationCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.traveller6).toBeFalsy();
            expect(scope.traveller7).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.artisan6).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
        }));

        it('should save the values for the assessment results for documentation', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.traveller7 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedDocumentation = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true, 'traveller7': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false, 'artisan6': false,
                'expert1': true, 'expert2': true, 'expert3': false, 'expert4': false,
                'professional1': false, 'professional2': false, 'professional3': false,
                'master1': false, 'master2': false, 'master3': false};

            scope.saveAssessments();
            var documentation = rootScope.assessmentsQa['documentation'];

            expect(documentation['traveller1']).toEqual(expectedDocumentation[['traveller1']]);
            expect(documentation['traveller2']).toEqual(expectedDocumentation[['traveller2']]);
            expect(documentation['traveller3']).toEqual(expectedDocumentation[['traveller3']]);
            expect(documentation['traveller4']).toEqual(expectedDocumentation[['traveller4']]);
            expect(documentation['traveller5']).toEqual(expectedDocumentation[['traveller5']]);
            expect(documentation['traveller6']).toEqual(expectedDocumentation[['traveller6']]);
            expect(documentation['traveller7']).toEqual(expectedDocumentation[['traveller7']]);
            expect(documentation['artisan1']).toEqual(expectedDocumentation[['artisan1']]);
            expect(documentation['artisan2']).toEqual(expectedDocumentation[['artisan2']]);
            expect(documentation['artisan3']).toEqual(expectedDocumentation[['artisan3']]);
            expect(documentation['artisan4']).toEqual(expectedDocumentation[['artisan4']]);
            expect(documentation['artisan5']).toEqual(expectedDocumentation[['artisan5']]);
            expect(documentation['artisan6']).toEqual(expectedDocumentation[['artisan6']]);
            expect(documentation['expert1']).toEqual(expectedDocumentation[['expert1']]);
            expect(documentation['expert2']).toEqual(expectedDocumentation[['expert2']]);
            expect(documentation['expert3']).toEqual(expectedDocumentation[['expert3']]);
            expect(documentation['expert4']).toEqual(expectedDocumentation[['expert4']]);
            expect(documentation['professional1']).toEqual(expectedDocumentation[['professional1']]);
            expect(documentation['professional2']).toEqual(expectedDocumentation[['professional2']]);
            expect(documentation['professional3']).toEqual(expectedDocumentation[['professional3']]);
            expect(documentation['master1']).toEqual(expectedDocumentation[['master1']]);
            expect(documentation['master2']).toEqual(expectedDocumentation[['master2']]);
            expect(documentation['master3']).toEqual(expectedDocumentation[['master3']]);

        });

        it('should save the values for the assessment results for documentation when rootScope empty', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.traveller7 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedDocumentation = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true, 'traveller7': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false, 'artisan6': false,
                'expert1': true, 'expert2': true, 'expert3': false, 'expert4': false,
                'professional1': false, 'professional2': false, 'professional3': false,
                'master1': false, 'master2': false, 'master3': false};

            rootScope.assessmentsQa = {};

            scope.saveAssessments();
            var documentation = rootScope.assessmentsQa['documentation'];

            expect(documentation['traveller1']).toEqual(expectedDocumentation[['traveller1']]);
            expect(documentation['traveller2']).toEqual(expectedDocumentation[['traveller2']]);
            expect(documentation['traveller3']).toEqual(expectedDocumentation[['traveller3']]);
            expect(documentation['traveller4']).toEqual(expectedDocumentation[['traveller4']]);
            expect(documentation['traveller5']).toEqual(expectedDocumentation[['traveller5']]);
            expect(documentation['traveller6']).toEqual(expectedDocumentation[['traveller6']]);
            expect(documentation['traveller7']).toEqual(expectedDocumentation[['traveller7']]);
            expect(documentation['artisan1']).toEqual(expectedDocumentation[['artisan1']]);
            expect(documentation['artisan2']).toEqual(expectedDocumentation[['artisan2']]);
            expect(documentation['artisan3']).toEqual(expectedDocumentation[['artisan3']]);
            expect(documentation['artisan4']).toEqual(expectedDocumentation[['artisan4']]);
            expect(documentation['artisan5']).toEqual(expectedDocumentation[['artisan5']]);
            expect(documentation['artisan6']).toEqual(expectedDocumentation[['artisan6']]);
            expect(documentation['expert1']).toEqual(expectedDocumentation[['expert1']]);
            expect(documentation['expert2']).toEqual(expectedDocumentation[['expert2']]);
            expect(documentation['expert3']).toEqual(expectedDocumentation[['expert3']]);
            expect(documentation['expert4']).toEqual(expectedDocumentation[['expert4']]);
            expect(documentation['professional1']).toEqual(expectedDocumentation[['professional1']]);
            expect(documentation['professional2']).toEqual(expectedDocumentation[['professional2']]);
            expect(documentation['professional3']).toEqual(expectedDocumentation[['professional3']]);
            expect(documentation['master1']).toEqual(expectedDocumentation[['master1']]);
            expect(documentation['master2']).toEqual(expectedDocumentation[['master2']]);
            expect(documentation['master3']).toEqual(expectedDocumentation[['master3']]);

        });

        it('should save the score for documentation as 1 if no question is answered', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.traveller7 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedDocumentationScore = 1;

            scope.saveAssessments();
            var documentation = rootScope.assessmentsQa['documentation'];

            expect(documentation['score']).toEqual(expectedDocumentationScore);

        });

        it('should save the score for documentation as 1 if traveller question is answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.traveller7 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedDocumentationScore = 1;

            scope.saveAssessments();
            var documentation = rootScope.assessmentsQa['documentation'];

            expect(documentation['score']).toEqual(expectedDocumentationScore);

        });

        it('should save the score for documentation as 2 if traveller question is answered as no and all the artisan questions answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.traveller7 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.artisan5 = true;
            scope.artisan6 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedDocumentationScore = 2;

            scope.saveAssessments();
            var documentation = rootScope.assessmentsQa['documentation'];

            expect(documentation['score']).toEqual(expectedDocumentationScore);

        });

        it('should save the score for documentation as 3 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = true;
            scope.traveller3 = false;
            scope.traveller4 = true;
            scope.traveller5 = false;
            scope.traveller6 = true;
            scope.traveller7 = false;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = true;
            scope.artisan6 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedDocumentationScore = 3;

            scope.saveAssessments();
            var documentation = rootScope.assessmentsQa['documentation'];

            expect(documentation['score']).toEqual(expectedDocumentationScore);

        });

        it('should save the score for documentation as 4 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.traveller7 = false;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = true;
            scope.artisan6 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;

            var expectedDocumentationScore = 4;

            scope.saveAssessments();
            var documentation = rootScope.assessmentsQa['documentation'];

            expect(documentation['score']).toEqual(expectedDocumentationScore);

        });

        it('should save the score for documentation as 5 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes and master questions' +
            'are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.traveller7 = false;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = true;
            scope.artisan6 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.master1 = true;
            scope.master2 = true;
            scope.master3 = true;

            var expectedDocumentationScore = 5;

            scope.saveAssessments();
            var documentation = rootScope.assessmentsQa['documentation'];

            expect(documentation['score']).toEqual(expectedDocumentationScore);

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