'use strict';

describe('continuumAssessmentPlatform.practice-innovation module', function() {

    beforeEach(module('continuumAssessmentPlatform.practice-innovation'));

    describe('Practice Innovation controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('PracticeInnovationCtrl', {'$scope': scope, '$rootScope': rootScope});
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
            expect(scope.traveller8).toBeDefined();
            expect(scope.traveller9).toBeDefined();
            expect(scope.traveller10).toBeDefined();
            expect(scope.traveller11).toBeDefined();

            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.traveller6).toBeFalsy();
            expect(scope.traveller7).toBeFalsy();
            expect(scope.traveller8).toBeFalsy();
            expect(scope.traveller9).toBeFalsy();
            expect(scope.traveller10).toBeFalsy();
            expect(scope.traveller11).toBeFalsy();
        });

        it('should have defaults as false for the artisan questions', function(){
            expect(scope.artisan1).toBeDefined();
            expect(scope.artisan2).toBeDefined();
            expect(scope.artisan3).toBeDefined();
            expect(scope.artisan4).toBeDefined();
            expect(scope.artisan5).toBeDefined();

            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
        });

        it('should have defaults as false for the expert questions', function(){
            expect(scope.expert1).toBeDefined();
            expect(scope.expert2).toBeDefined();
            expect(scope.expert3).toBeDefined();
            expect(scope.expert4).toBeDefined();
            expect(scope.expert5).toBeDefined();
            expect(scope.expert6).toBeDefined();
            expect(scope.expert7).toBeDefined();
            expect(scope.expert8).toBeDefined();
            expect(scope.expert9).toBeDefined();
            expect(scope.expert10).toBeDefined();
            expect(scope.expert11).toBeDefined();

            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
            expect(scope.expert8).toBeFalsy();
            expect(scope.expert9).toBeFalsy();
            expect(scope.expert10).toBeFalsy();
            expect(scope.expert11).toBeFalsy();
        });

        it('should have defaults as false for the professional questions', function(){
            expect(scope.professional1).toBeDefined();
            expect(scope.professional2).toBeDefined();
            expect(scope.professional3).toBeDefined();
            expect(scope.professional4).toBeDefined();
            expect(scope.professional5).toBeDefined();
            expect(scope.professional6).toBeDefined();
            expect(scope.professional7).toBeDefined();
            expect(scope.professional8).toBeDefined();
            expect(scope.professional9).toBeDefined();
            expect(scope.professional10).toBeDefined();

            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.professional5).toBeFalsy();
            expect(scope.professional6).toBeFalsy();
            expect(scope.professional7).toBeFalsy();
            expect(scope.professional8).toBeFalsy();
            expect(scope.professional9).toBeFalsy();
            expect(scope.professional10).toBeFalsy();
        });

        it('should have defaults as false for the master questions', function(){
            expect(scope.master1).toBeDefined();
            expect(scope.master1).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsQaMaM': {'practice-innovation': {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true, 'traveller7': true, 'traveller8': true, 'traveller9': true, 'traveller10': true, 'traveller11': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false,
                'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false, 'expert7': false, 'expert8': false, 'expert9': false, 'expert10': false, 'expert11': false,
                'professional1': false, 'professional2': true, 'professional3': true, 'professional4': true, 'professional5': true, 'professional6': true, 'professional7': true, 'professional8': true, 'professional9': true, 'professional10': true,
                'master1': true}}};

            controller = $controller('PracticeInnovationCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
            expect(scope.traveller3).toBeTruthy();
            expect(scope.traveller4).toBeTruthy();
            expect(scope.traveller5).toBeTruthy();
            expect(scope.traveller6).toBeTruthy();
            expect(scope.traveller7).toBeTruthy();
            expect(scope.traveller8).toBeTruthy();
            expect(scope.traveller9).toBeTruthy();
            expect(scope.traveller10).toBeTruthy();
            expect(scope.traveller11).toBeTruthy();
            expect(scope.artisan1).toBeTruthy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.expert1).toBeTruthy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
            expect(scope.expert8).toBeFalsy();
            expect(scope.expert9).toBeFalsy();
            expect(scope.expert10).toBeFalsy();
            expect(scope.expert11).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeTruthy();
            expect(scope.professional3).toBeTruthy();
            expect(scope.professional4).toBeTruthy();
            expect(scope.professional5).toBeTruthy();
            expect(scope.professional6).toBeTruthy();
            expect(scope.professional7).toBeTruthy();
            expect(scope.professional8).toBeTruthy();
            expect(scope.professional9).toBeTruthy();
            expect(scope.professional10).toBeTruthy();
            expect(scope.master1).toBeTruthy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('PracticeInnovationCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.traveller6).toBeFalsy();
            expect(scope.traveller7).toBeFalsy();
            expect(scope.traveller8).toBeFalsy();
            expect(scope.traveller9).toBeFalsy();
            expect(scope.traveller10).toBeFalsy();
            expect(scope.traveller11).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
            expect(scope.expert8).toBeFalsy();
            expect(scope.expert9).toBeFalsy();
            expect(scope.expert10).toBeFalsy();
            expect(scope.expert11).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.professional5).toBeFalsy();
            expect(scope.professional6).toBeFalsy();
            expect(scope.professional7).toBeFalsy();
            expect(scope.professional8).toBeFalsy();
            expect(scope.professional9).toBeFalsy();
            expect(scope.professional10).toBeFalsy();
            expect(scope.master1).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessmentsQaMaM': {'assessmentsQaMaM': {}}};

            controller = $controller('PracticeInnovationCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.traveller6).toBeFalsy();
            expect(scope.traveller7).toBeFalsy();
            expect(scope.traveller8).toBeFalsy();
            expect(scope.traveller9).toBeFalsy();
            expect(scope.traveller10).toBeFalsy();
            expect(scope.traveller11).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
            expect(scope.expert8).toBeFalsy();
            expect(scope.expert9).toBeFalsy();
            expect(scope.expert10).toBeFalsy();
            expect(scope.expert11).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.professional5).toBeFalsy();
            expect(scope.professional6).toBeFalsy();
            expect(scope.professional7).toBeFalsy();
            expect(scope.professional8).toBeFalsy();
            expect(scope.professional9).toBeFalsy();
            expect(scope.professional10).toBeFalsy();
            expect(scope.master1).toBeFalsy();
        }));

        it('should save the values for the assessment results for practice-innovation', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.traveller7 = true;
            scope.traveller8 = true;
            scope.traveller9 = true;
            scope.traveller10 = true;
            scope.traveller11 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.expert6 = true;
            scope.expert7 = true;
            scope.expert8 = true;
            scope.expert9 = true;
            scope.expert10 = true;
            scope.expert11 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.professional6 = false;
            scope.professional7 = false;
            scope.professional8 = false;
            scope.professional9 = false;
            scope.professional10 = false;
            scope.master1 = false;

            var expectedPracticeInnovation = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true, 'traveller7': true, 'traveller8': true, 'traveller9': true, 'traveller10': true, 'traveller11': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false,
                'expert1': true, 'expert2': true, 'expert3': true, 'expert4': true, 'expert5': true, 'expert6': true, 'expert7': true, 'expert8': true, 'expert9': true, 'expert10': true, 'expert11': true,
                'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false, 'professional7': false, 'professional8': false, 'professional9': false, 'professional10': false,
                'master1': false};

            scope.saveAssessments();
            var practiceInnovation = rootScope.assessmentsQaMaM['practice-innovation'];

            expect(practiceInnovation['traveller1']).toEqual(expectedPracticeInnovation[['traveller1']]);
            expect(practiceInnovation['traveller2']).toEqual(expectedPracticeInnovation[['traveller2']]);
            expect(practiceInnovation['traveller3']).toEqual(expectedPracticeInnovation[['traveller3']]);
            expect(practiceInnovation['traveller4']).toEqual(expectedPracticeInnovation[['traveller4']]);
            expect(practiceInnovation['traveller5']).toEqual(expectedPracticeInnovation[['traveller5']]);
            expect(practiceInnovation['traveller6']).toEqual(expectedPracticeInnovation[['traveller6']]);
            expect(practiceInnovation['traveller7']).toEqual(expectedPracticeInnovation[['traveller7']]);
            expect(practiceInnovation['traveller8']).toEqual(expectedPracticeInnovation[['traveller8']]);
            expect(practiceInnovation['traveller9']).toEqual(expectedPracticeInnovation[['traveller9']]);
            expect(practiceInnovation['traveller10']).toEqual(expectedPracticeInnovation[['traveller10']]);
            expect(practiceInnovation['traveller11']).toEqual(expectedPracticeInnovation[['traveller11']]);
            expect(practiceInnovation['artisan1']).toEqual(expectedPracticeInnovation[['artisan1']]);
            expect(practiceInnovation['artisan2']).toEqual(expectedPracticeInnovation[['artisan2']]);
            expect(practiceInnovation['artisan3']).toEqual(expectedPracticeInnovation[['artisan3']]);
            expect(practiceInnovation['artisan4']).toEqual(expectedPracticeInnovation[['artisan4']]);
            expect(practiceInnovation['artisan5']).toEqual(expectedPracticeInnovation[['artisan5']]);
            expect(practiceInnovation['expert1']).toEqual(expectedPracticeInnovation[['expert1']]);
            expect(practiceInnovation['expert2']).toEqual(expectedPracticeInnovation[['expert2']]);
            expect(practiceInnovation['expert3']).toEqual(expectedPracticeInnovation[['expert3']]);
            expect(practiceInnovation['expert4']).toEqual(expectedPracticeInnovation[['expert4']]);
            expect(practiceInnovation['expert5']).toEqual(expectedPracticeInnovation[['expert5']]);
            expect(practiceInnovation['expert6']).toEqual(expectedPracticeInnovation[['expert6']]);
            expect(practiceInnovation['expert7']).toEqual(expectedPracticeInnovation[['expert7']]);
            expect(practiceInnovation['expert8']).toEqual(expectedPracticeInnovation[['expert8']]);
            expect(practiceInnovation['expert9']).toEqual(expectedPracticeInnovation[['expert9']]);
            expect(practiceInnovation['expert10']).toEqual(expectedPracticeInnovation[['expert10']]);
            expect(practiceInnovation['expert11']).toEqual(expectedPracticeInnovation[['expert11']]);
            expect(practiceInnovation['professional1']).toEqual(expectedPracticeInnovation[['professional1']]);
            expect(practiceInnovation['professional2']).toEqual(expectedPracticeInnovation[['professional2']]);
            expect(practiceInnovation['professional3']).toEqual(expectedPracticeInnovation[['professional3']]);
            expect(practiceInnovation['professional4']).toEqual(expectedPracticeInnovation[['professional4']]);
            expect(practiceInnovation['professional5']).toEqual(expectedPracticeInnovation[['professional5']]);
            expect(practiceInnovation['professional6']).toEqual(expectedPracticeInnovation[['professional6']]);
            expect(practiceInnovation['professional7']).toEqual(expectedPracticeInnovation[['professional7']]);
            expect(practiceInnovation['professional8']).toEqual(expectedPracticeInnovation[['professional8']]);
            expect(practiceInnovation['professional9']).toEqual(expectedPracticeInnovation[['professional9']]);
            expect(practiceInnovation['professional10']).toEqual(expectedPracticeInnovation[['professional10']]);
            expect(practiceInnovation['master1']).toEqual(expectedPracticeInnovation[['master1']]);
        });

        it('should save the values for the assessment results for practice innovation when rootScope empty', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.traveller7 = true;
            scope.traveller8 = true;
            scope.traveller9 = true;
            scope.traveller10 = true;
            scope.traveller11 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.expert6 = true;
            scope.expert7 = true;
            scope.expert8 = true;
            scope.expert9 = true;
            scope.expert10 = true;
            scope.expert11 = true;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.professional6 = false;
            scope.professional7 = false;
            scope.professional8 = false;
            scope.professional9 = false;
            scope.professional10 = false;
            scope.master1 = false;

            var expectedPracticeInnovation = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true, 'traveller7': true, 'traveller8': true, 'traveller9': true, 'traveller10': true, 'traveller11': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false,
                'expert1': true, 'expert2': true, 'expert3': true, 'expert4': true, 'expert5': true, 'expert6': true, 'expert7': true, 'expert8': true, 'expert9': true, 'expert10': true, 'expert11': true,
                'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false, 'professional7': false, 'professional8': false, 'professional9': false, 'professional10': false,
                'master1': false};

            rootScope.assessmentsQaMaM = {};

            scope.saveAssessments();
            var practiceInnovation = rootScope.assessmentsQaMaM['practice-innovation'];

            expect(practiceInnovation['traveller1']).toEqual(expectedPracticeInnovation[['traveller1']]);
            expect(practiceInnovation['traveller2']).toEqual(expectedPracticeInnovation[['traveller2']]);
            expect(practiceInnovation['traveller3']).toEqual(expectedPracticeInnovation[['traveller3']]);
            expect(practiceInnovation['traveller4']).toEqual(expectedPracticeInnovation[['traveller4']]);
            expect(practiceInnovation['traveller5']).toEqual(expectedPracticeInnovation[['traveller5']]);
            expect(practiceInnovation['traveller6']).toEqual(expectedPracticeInnovation[['traveller6']]);
            expect(practiceInnovation['traveller7']).toEqual(expectedPracticeInnovation[['traveller7']]);
            expect(practiceInnovation['traveller8']).toEqual(expectedPracticeInnovation[['traveller8']]);
            expect(practiceInnovation['traveller9']).toEqual(expectedPracticeInnovation[['traveller9']]);
            expect(practiceInnovation['traveller10']).toEqual(expectedPracticeInnovation[['traveller10']]);
            expect(practiceInnovation['traveller11']).toEqual(expectedPracticeInnovation[['traveller11']]);
            expect(practiceInnovation['artisan1']).toEqual(expectedPracticeInnovation[['artisan1']]);
            expect(practiceInnovation['artisan2']).toEqual(expectedPracticeInnovation[['artisan2']]);
            expect(practiceInnovation['artisan3']).toEqual(expectedPracticeInnovation[['artisan3']]);
            expect(practiceInnovation['artisan4']).toEqual(expectedPracticeInnovation[['artisan4']]);
            expect(practiceInnovation['artisan5']).toEqual(expectedPracticeInnovation[['artisan5']]);
            expect(practiceInnovation['expert1']).toEqual(expectedPracticeInnovation[['expert1']]);
            expect(practiceInnovation['expert2']).toEqual(expectedPracticeInnovation[['expert2']]);
            expect(practiceInnovation['expert3']).toEqual(expectedPracticeInnovation[['expert3']]);
            expect(practiceInnovation['expert4']).toEqual(expectedPracticeInnovation[['expert4']]);
            expect(practiceInnovation['expert5']).toEqual(expectedPracticeInnovation[['expert5']]);
            expect(practiceInnovation['expert6']).toEqual(expectedPracticeInnovation[['expert6']]);
            expect(practiceInnovation['expert7']).toEqual(expectedPracticeInnovation[['expert7']]);
            expect(practiceInnovation['expert8']).toEqual(expectedPracticeInnovation[['expert8']]);
            expect(practiceInnovation['expert9']).toEqual(expectedPracticeInnovation[['expert9']]);
            expect(practiceInnovation['expert10']).toEqual(expectedPracticeInnovation[['expert10']]);
            expect(practiceInnovation['expert11']).toEqual(expectedPracticeInnovation[['expert11']]);
            expect(practiceInnovation['professional1']).toEqual(expectedPracticeInnovation[['professional1']]);
            expect(practiceInnovation['professional2']).toEqual(expectedPracticeInnovation[['professional2']]);
            expect(practiceInnovation['professional3']).toEqual(expectedPracticeInnovation[['professional3']]);
            expect(practiceInnovation['professional4']).toEqual(expectedPracticeInnovation[['professional4']]);
            expect(practiceInnovation['professional5']).toEqual(expectedPracticeInnovation[['professional5']]);
            expect(practiceInnovation['professional6']).toEqual(expectedPracticeInnovation[['professional6']]);
            expect(practiceInnovation['professional7']).toEqual(expectedPracticeInnovation[['professional7']]);
            expect(practiceInnovation['professional8']).toEqual(expectedPracticeInnovation[['professional8']]);
            expect(practiceInnovation['professional9']).toEqual(expectedPracticeInnovation[['professional9']]);
            expect(practiceInnovation['professional10']).toEqual(expectedPracticeInnovation[['professional10']]);
            expect(practiceInnovation['master1']).toEqual(expectedPracticeInnovation[['master1']]);
        });

        it('should save the score for practice innovation as 1 if no question is answered', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.traveller7 = false;
            scope.traveller8 = false;
            scope.traveller9 = false;
            scope.traveller10 = false;
            scope.traveller11 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.expert6 = false;
            scope.expert7 = false;
            scope.expert8 = false;
            scope.expert9 = false;
            scope.expert10 = false;
            scope.expert11 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.professional6 = false;
            scope.professional7 = false;
            scope.professional8 = false;
            scope.professional9 = false;
            scope.professional10 = false;
            scope.master1 = false;

            var expectedPracticeInnovationScore = 1;

            scope.saveAssessments();
            var practiceInnovation = rootScope.assessmentsQaMaM['practice-innovation'];

            expect(practiceInnovation['score']).toEqual(expectedPracticeInnovationScore);

        });

        it('should save the score for practice innovation as 1 if traveller question is answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.traveller7 = true;
            scope.traveller8 = true;
            scope.traveller9 = true;
            scope.traveller10 = true;
            scope.traveller11 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.expert6 = false;
            scope.expert7 = false;
            scope.expert8 = false;
            scope.expert9 = false;
            scope.expert10 = false;
            scope.expert11 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.professional6 = false;
            scope.professional7 = false;
            scope.professional8 = false;
            scope.professional9 = false;
            scope.professional10 = false;
            scope.master1 = false;

            var expectedPracticeInnovationScore = 1;

            scope.saveAssessments();
            var practiceInnovation = rootScope.assessmentsQaMaM['practice-innovation'];

            expect(practiceInnovation['score']).toEqual(expectedPracticeInnovationScore);

        });

        it('should save the score for practice innovation as 2 if traveller question is answered as no and all the artisan questions answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = true;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.traveller7 = true;
            scope.traveller8 = true;
            scope.traveller9 = true;
            scope.traveller10 = true;
            scope.traveller11 = true;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.artisan5 = true;
            scope.expert1 = true;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.expert6 = false;
            scope.expert7 = false;
            scope.expert8 = false;
            scope.expert9 = false;
            scope.expert10 = false;
            scope.expert11 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.professional6 = false;
            scope.professional7 = false;
            scope.professional8 = false;
            scope.professional9 = false;
            scope.professional10 = false;
            scope.master1 = false;

            var expectedPracticeInnovationScore = 2;

            scope.saveAssessments();
            var practiceInnovation = rootScope.assessmentsQaMaM['practice-innovation'];

            expect(practiceInnovation['score']).toEqual(expectedPracticeInnovationScore);

        });

        it('should save the score for metrics as 3 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.traveller7 = false;
            scope.traveller8 = false;
            scope.traveller9 = true;
            scope.traveller10 = false;
            scope.traveller11 = true;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = false;
            scope.artisan4 = true;
            scope.artisan5 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.expert6 = true;
            scope.expert7 = true;
            scope.expert8 = true;
            scope.expert9 = true;
            scope.expert10 = true;
            scope.expert11 = true;
            scope.professional1 = true;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.professional6 = false;
            scope.professional7 = false;
            scope.professional8 = false;
            scope.professional9 = false;
            scope.professional10 = false;
            scope.master1 = false;

            var expectedPracticeInnovationScore = 3;

            scope.saveAssessments();
            var practiceInnovation = rootScope.assessmentsQaMaM['practice-innovation'];

            expect(practiceInnovation['score']).toEqual(expectedPracticeInnovationScore);

        });

        it('should save the score for metrics as 4 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.traveller7 = false;
            scope.traveller8 = false;
            scope.traveller9 = false;
            scope.traveller10 = false;
            scope.traveller11 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = false;
            scope.artisan4 = true;
            scope.artisan5 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.expert6 = true;
            scope.expert7 = true;
            scope.expert8 = true;
            scope.expert9 = true;
            scope.expert10 = true;
            scope.expert11 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.professional4 = true;
            scope.professional5 = true;
            scope.professional6 = true;
            scope.professional7 = true;
            scope.professional8 = true;
            scope.professional9 = true;
            scope.professional10 = true;
            scope.master1 = false;

            var expectedPracticeInnovationScore = 4;

            scope.saveAssessments();
            var practiceInnovation = rootScope.assessmentsQaMaM['practice-innovation'];

            expect(practiceInnovation['score']).toEqual(expectedPracticeInnovationScore);

        });

        it('should save the score for metrics as 5 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes and master questions' +
            'are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.traveller7 = false;
            scope.traveller8 = false;
            scope.traveller9 = false;
            scope.traveller10 = false;
            scope.traveller11 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = false;
            scope.artisan4 = true;
            scope.artisan5 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.expert6 = true;
            scope.expert7 = true;
            scope.expert8 = true;
            scope.expert9 = true;
            scope.expert10 = true;
            scope.expert11 = true;
            scope.professional1 = true;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.professional4 = true;
            scope.professional5 = true;
            scope.professional6 = true;
            scope.professional7 = true;
            scope.professional8 = true;
            scope.professional9 = true;
            scope.professional10 = true;
            scope.master1 = true;

            var expectedPracticeInnovationScore = 5;

            scope.saveAssessments();
            var practiceInnovation = rootScope.assessmentsQaMaM['practice-innovation'];

            expect(practiceInnovation['score']).toEqual(expectedPracticeInnovationScore);

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