'use strict';

describe('continuumAssessmentPlatform.research module', function() {

    beforeEach(module('continuumAssessmentPlatform.research'));

    describe('Research controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('ResearchCtrl', {'$scope': scope, '$rootScope': rootScope});
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
            expect(scope.artisan1).toBeFalsy();
        });

        it('should have defaults as false for the expert questions', function(){
            expect(scope.expert1).toBeDefined();
            expect(scope.expert2).toBeDefined();
            expect(scope.expert3).toBeDefined();
            expect(scope.expert4).toBeDefined();
            expect(scope.expert5).toBeDefined();

            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
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

            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsQa': {'research': {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true, 'traveller7': true,
                'artisan1': true,
                'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false,
                'professional1': false, 'professional2': true, 'professional3': true,
                'master1': true, 'master2': true}}};

            controller = $controller('ResearchCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
            expect(scope.traveller3).toBeTruthy();
            expect(scope.traveller4).toBeTruthy();
            expect(scope.traveller5).toBeTruthy();
            expect(scope.traveller6).toBeTruthy();
            expect(scope.traveller7).toBeTruthy();
            expect(scope.artisan1).toBeTruthy();
            expect(scope.expert1).toBeTruthy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeTruthy();
            expect(scope.professional3).toBeTruthy();
            expect(scope.master1).toBeTruthy();
            expect(scope.master2).toBeTruthy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('ResearchCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.traveller6).toBeFalsy();
            expect(scope.traveller7).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessmentsQa': {'assessmentsQa': {}}};

            controller = $controller('ResearchCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.traveller6).toBeFalsy();
            expect(scope.traveller7).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
        }));

        it('should save the values for the assessment results for research', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.traveller7 = true;
            scope.artisan1 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedResearch = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true, 'traveller7': true,
                'artisan1': true,
                'expert1': true, 'expert2': true, 'expert3': true, 'expert4': true, 'expert5': true,
                'professional1': false, 'professional2': false, 'professional3': false,
                'master1': false, 'master2': false};

            scope.saveAssessments();
            var research = rootScope.assessmentsQa['research'];

            expect(research['traveller1']).toEqual(expectedResearch[['traveller1']]);
            expect(research['traveller2']).toEqual(expectedResearch[['traveller2']]);
            expect(research['traveller3']).toEqual(expectedResearch[['traveller3']]);
            expect(research['traveller4']).toEqual(expectedResearch[['traveller4']]);
            expect(research['traveller5']).toEqual(expectedResearch[['traveller5']]);
            expect(research['traveller6']).toEqual(expectedResearch[['traveller6']]);
            expect(research['traveller7']).toEqual(expectedResearch[['traveller7']]);
            expect(research['artisan1']).toEqual(expectedResearch[['artisan1']]);
            expect(research['expert1']).toEqual(expectedResearch[['expert1']]);
            expect(research['expert2']).toEqual(expectedResearch[['expert2']]);
            expect(research['expert3']).toEqual(expectedResearch[['expert3']]);
            expect(research['expert4']).toEqual(expectedResearch[['expert4']]);
            expect(research['expert5']).toEqual(expectedResearch[['expert5']]);
            expect(research['professional1']).toEqual(expectedResearch[['professional1']]);
            expect(research['professional2']).toEqual(expectedResearch[['professional2']]);
            expect(research['professional3']).toEqual(expectedResearch[['professional3']]);
            expect(research['master1']).toEqual(expectedResearch[['master1']]);
            expect(research['master2']).toEqual(expectedResearch[['master2']]);
        });

        it('should save the values for the assessment results for research when rootScope empty', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.traveller7 = true;
            scope.artisan1 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedResearch = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true, 'traveller7': true,
                'artisan1': true,
                'expert1': true, 'expert2': true, 'expert3': true, 'expert4': true, 'expert5': true,
                'professional1': false, 'professional2': false, 'professional3': false,
                'master1': false, 'master2': false};


            rootScope.assessmentsQa = {};

            scope.saveAssessments();
            var research = rootScope.assessmentsQa['research'];

            expect(research['traveller1']).toEqual(expectedResearch[['traveller1']]);
            expect(research['traveller2']).toEqual(expectedResearch[['traveller2']]);
            expect(research['traveller3']).toEqual(expectedResearch[['traveller3']]);
            expect(research['traveller4']).toEqual(expectedResearch[['traveller4']]);
            expect(research['traveller5']).toEqual(expectedResearch[['traveller5']]);
            expect(research['traveller6']).toEqual(expectedResearch[['traveller6']]);
            expect(research['traveller7']).toEqual(expectedResearch[['traveller7']]);
            expect(research['artisan1']).toEqual(expectedResearch[['artisan1']]);
            expect(research['expert1']).toEqual(expectedResearch[['expert1']]);
            expect(research['expert2']).toEqual(expectedResearch[['expert2']]);
            expect(research['expert3']).toEqual(expectedResearch[['expert3']]);
            expect(research['expert4']).toEqual(expectedResearch[['expert4']]);
            expect(research['expert5']).toEqual(expectedResearch[['expert5']]);
            expect(research['professional1']).toEqual(expectedResearch[['professional1']]);
            expect(research['professional2']).toEqual(expectedResearch[['professional2']]);
            expect(research['professional3']).toEqual(expectedResearch[['professional3']]);
            expect(research['master1']).toEqual(expectedResearch[['master1']]);
            expect(research['master2']).toEqual(expectedResearch[['master2']]);
        });

        it('should save the score for research as 1 if no question is answered', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.traveller7 = false;
            scope.artisan1 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedResearchScore = 1;

            scope.saveAssessments();
            var research = rootScope.assessmentsQa['research'];

            expect(research['score']).toEqual(expectedResearchScore);

        });

        it('should save the score for research as 1 if traveller question is answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.traveller7 = true;
            scope.artisan1 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedResearchScore = 1;

            scope.saveAssessments();
            var research = rootScope.assessmentsQa['research'];

            expect(research['score']).toEqual(expectedResearchScore);

        });

        it('should save the score for research as 2 if traveller question is answered as no and all the artisan questions answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = false;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.traveller7 = true;
            scope.artisan1 = true;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedResearchScore = 2;

            scope.saveAssessments();
            var research = rootScope.assessmentsQa['research'];

            expect(research['score']).toEqual(expectedResearchScore);

        });

        it('should save the score for research as 3 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.traveller7 = false;
            scope.artisan1 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.professional1 = true;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedResearchScore = 3;

            scope.saveAssessments();
            var research = rootScope.assessmentsQa['research'];

            expect(research['score']).toEqual(expectedResearchScore);

        });

        it('should save the score for research as 4 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.traveller7 = false;
            scope.artisan1 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.master1 = true;
            scope.master2 = false;

            var expectedResearchScore = 4;

            scope.saveAssessments();
            var research = rootScope.assessmentsQa['research'];

            expect(research['score']).toEqual(expectedResearchScore);

        });

        it('should save the score for research as 5 if traveller question is answered as no and all the artisan questions answered as yes' +
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
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.master1 = true;
            scope.master2 = true;

            var expectedResearchScore = 5;

            scope.saveAssessments();
            var research = rootScope.assessmentsQa['research'];

            expect(research['score']).toEqual(expectedResearchScore);

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