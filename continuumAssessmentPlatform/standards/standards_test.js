'use strict';

describe('continuumAssessmentPlatform.standards module', function() {

    beforeEach(module('continuumAssessmentPlatform.standards'));

    describe('standards controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('StandardsCtrl', {'$scope': scope, '$rootScope': rootScope});
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
            expect(scope.artisan3).toBeDefined();
            expect(scope.artisan4).toBeDefined();
            expect(scope.artisan5).toBeDefined();
            expect(scope.artisan6).toBeDefined();
            expect(scope.artisan7).toBeDefined();

            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.artisan6).toBeFalsy();
            expect(scope.artisan7).toBeFalsy();
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
            expect(scope.expert12).toBeDefined();

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
            expect(scope.expert12).toBeFalsy();
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
            expect(scope.master2).toBeDefined();
            expect(scope.master3).toBeDefined();
            expect(scope.master4).toBeDefined();
            expect(scope.master5).toBeDefined();
            expect(scope.master6).toBeDefined();
            expect(scope.master7).toBeDefined();
            expect(scope.master8).toBeDefined();
            expect(scope.master9).toBeDefined();

            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
            expect(scope.master6).toBeFalsy();
            expect(scope.master7).toBeFalsy();
            expect(scope.master8).toBeFalsy();
            expect(scope.master9).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsQa': {'standards': {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true,
                'artisan1': true, 'artisan2': true, 'artisan3': true, 'artisan4': true, 'artisan5': true, 'artisan6': true, 'artisan7': true,
                'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false, 'expert7': false, 'expert8': false, 'expert9': false, 'expert10': false, 'expert11': false, 'expert12': false,
                'professional1': false, 'professional2': true, 'professional3': true, 'professional4': true, 'professional5': true, 'professional6': true, 'professional7': true, 'professional8': true, 'professional9': true, 'professional10': true,
                'master1': true, 'master2': true, 'master3': true, 'master4': true, 'master5': true, 'master6': true, 'master7': true, 'master8': true, 'master9': true}}};

            controller = $controller('StandardsCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
            expect(scope.traveller3).toBeTruthy();
            expect(scope.traveller4).toBeTruthy();
            expect(scope.traveller5).toBeTruthy();
            expect(scope.traveller6).toBeTruthy();
            expect(scope.artisan1).toBeTruthy();
            expect(scope.artisan2).toBeTruthy();
            expect(scope.artisan3).toBeTruthy();
            expect(scope.artisan4).toBeTruthy();
            expect(scope.artisan5).toBeTruthy();
            expect(scope.artisan6).toBeTruthy();
            expect(scope.artisan7).toBeTruthy();
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
            expect(scope.expert12).toBeFalsy();
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
            expect(scope.master2).toBeTruthy();
            expect(scope.master3).toBeTruthy();
            expect(scope.master4).toBeTruthy();
            expect(scope.master5).toBeTruthy();
            expect(scope.master6).toBeTruthy();
            expect(scope.master7).toBeTruthy();
            expect(scope.master8).toBeTruthy();
            expect(scope.master9).toBeTruthy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('StandardsCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.traveller6).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.artisan6).toBeFalsy();
            expect(scope.artisan7).toBeFalsy();
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
            expect(scope.expert12).toBeFalsy();
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
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
            expect(scope.master6).toBeFalsy();
            expect(scope.master7).toBeFalsy();
            expect(scope.master8).toBeFalsy();
            expect(scope.master9).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessmentsQa': {'assessmentsQa': {}}};

            controller = $controller('StandardsCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.traveller6).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.artisan6).toBeFalsy();
            expect(scope.artisan7).toBeFalsy();
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
            expect(scope.expert12).toBeFalsy();
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
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
            expect(scope.master6).toBeFalsy();
            expect(scope.master7).toBeFalsy();
            expect(scope.master8).toBeFalsy();
            expect(scope.master9).toBeFalsy();
        }));

        it('should save the values for the assessment results for standards', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.artisan5 = true;
            scope.artisan6 = true;
            scope.artisan7 = true;
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
            scope.expert12 = true;
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
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;
            scope.master7 = false;
            scope.master8 = false;
            scope.master9 = false;

            var expectedStandards = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true,
                'artisan1': true, 'artisan2': true, 'artisan3': true, 'artisan4': true, 'artisan5': true, 'artisan6': true, 'artisan7': true,
                'expert1': true, 'expert2': true, 'expert3': true, 'expert4': true, 'expert5': true, 'expert6': true, 'expert7': true, 'expert8': true, 'expert9': true, 'expert10': true, 'expert11': true, 'expert12': true,
                'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false, 'professional7': false, 'professional8': false, 'professional9': false, 'professional10': false,
                'master1': false, 'master2': false, 'master3': false, 'master4': false, 'master5': false, 'master6': false, 'master7': false, 'master8': false, 'master9': false};

            scope.saveAssessments();
            var standards = rootScope.assessmentsQa['standards'];

            expect(standards['traveller1']).toEqual(expectedStandards[['traveller1']]);
            expect(standards['traveller2']).toEqual(expectedStandards[['traveller2']]);
            expect(standards['traveller3']).toEqual(expectedStandards[['traveller3']]);
            expect(standards['traveller4']).toEqual(expectedStandards[['traveller4']]);
            expect(standards['traveller5']).toEqual(expectedStandards[['traveller5']]);
            expect(standards['traveller6']).toEqual(expectedStandards[['traveller6']]);
            expect(standards['artisan1']).toEqual(expectedStandards[['artisan1']]);
            expect(standards['artisan2']).toEqual(expectedStandards[['artisan2']]);
            expect(standards['artisan3']).toEqual(expectedStandards[['artisan3']]);
            expect(standards['artisan4']).toEqual(expectedStandards[['artisan4']]);
            expect(standards['artisan5']).toEqual(expectedStandards[['artisan5']]);
            expect(standards['artisan6']).toEqual(expectedStandards[['artisan6']]);
            expect(standards['artisan7']).toEqual(expectedStandards[['artisan7']]);
            expect(standards['expert1']).toEqual(expectedStandards[['expert1']]);
            expect(standards['expert2']).toEqual(expectedStandards[['expert2']]);
            expect(standards['expert3']).toEqual(expectedStandards[['expert3']]);
            expect(standards['expert4']).toEqual(expectedStandards[['expert4']]);
            expect(standards['expert5']).toEqual(expectedStandards[['expert5']]);
            expect(standards['expert6']).toEqual(expectedStandards[['expert6']]);
            expect(standards['expert7']).toEqual(expectedStandards[['expert7']]);
            expect(standards['expert8']).toEqual(expectedStandards[['expert8']]);
            expect(standards['expert9']).toEqual(expectedStandards[['expert9']]);
            expect(standards['expert10']).toEqual(expectedStandards[['expert10']]);
            expect(standards['expert11']).toEqual(expectedStandards[['expert11']]);
            expect(standards['expert12']).toEqual(expectedStandards[['expert12']]);
            expect(standards['professional1']).toEqual(expectedStandards[['professional1']]);
            expect(standards['professional2']).toEqual(expectedStandards[['professional2']]);
            expect(standards['professional3']).toEqual(expectedStandards[['professional3']]);
            expect(standards['professional4']).toEqual(expectedStandards[['professional4']]);
            expect(standards['professional5']).toEqual(expectedStandards[['professional5']]);
            expect(standards['professional6']).toEqual(expectedStandards[['professional6']]);
            expect(standards['professional7']).toEqual(expectedStandards[['professional7']]);
            expect(standards['professional8']).toEqual(expectedStandards[['professional8']]);
            expect(standards['professional9']).toEqual(expectedStandards[['professional9']]);
            expect(standards['professional10']).toEqual(expectedStandards[['professional10']]);
            expect(standards['master1']).toEqual(expectedStandards[['master1']]);
            expect(standards['master2']).toEqual(expectedStandards[['master2']]);
            expect(standards['master3']).toEqual(expectedStandards[['master3']]);
            expect(standards['master4']).toEqual(expectedStandards[['master4']]);
            expect(standards['master5']).toEqual(expectedStandards[['master5']]);
            expect(standards['master6']).toEqual(expectedStandards[['master6']]);
            expect(standards['master7']).toEqual(expectedStandards[['master7']]);
            expect(standards['master8']).toEqual(expectedStandards[['master8']]);
            expect(standards['master9']).toEqual(expectedStandards[['master9']]);
        });

        it('should save the values for the assessment results for standards when rootScope empty', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.artisan5 = true;
            scope.artisan6 = true;
            scope.artisan7 = true;
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
            scope.expert12 = true;
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
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;
            scope.master7 = false;
            scope.master8 = false;
            scope.master9 = false;

            var expectedStandards = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true,
                'artisan1': true, 'artisan2': true, 'artisan3': true, 'artisan4': true, 'artisan5': true, 'artisan6': true, 'artisan7': true,
                'expert1': true, 'expert2': true, 'expert3': true, 'expert4': true, 'expert5': true, 'expert6': true, 'expert7': true, 'expert8': true, 'expert9': true, 'expert10': true, 'expert11': true, 'expert12': true,
                'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false, 'professional7': false, 'professional8': false, 'professional9': false, 'professional10': false,
                'master1': false, 'master2': false, 'master3': false, 'master4': false, 'master5': false, 'master6': false, 'master7': false, 'master8': false, 'master9': false};

            rootScope.assessmentsQa = {};

            scope.saveAssessments();
            var standards = rootScope.assessmentsQa['standards'];

            expect(standards['traveller1']).toEqual(expectedStandards[['traveller1']]);
            expect(standards['traveller2']).toEqual(expectedStandards[['traveller2']]);
            expect(standards['traveller3']).toEqual(expectedStandards[['traveller3']]);
            expect(standards['traveller4']).toEqual(expectedStandards[['traveller4']]);
            expect(standards['traveller5']).toEqual(expectedStandards[['traveller5']]);
            expect(standards['traveller6']).toEqual(expectedStandards[['traveller6']]);
            expect(standards['artisan1']).toEqual(expectedStandards[['artisan1']]);
            expect(standards['artisan2']).toEqual(expectedStandards[['artisan2']]);
            expect(standards['artisan3']).toEqual(expectedStandards[['artisan3']]);
            expect(standards['artisan4']).toEqual(expectedStandards[['artisan4']]);
            expect(standards['artisan5']).toEqual(expectedStandards[['artisan5']]);
            expect(standards['artisan6']).toEqual(expectedStandards[['artisan6']]);
            expect(standards['artisan7']).toEqual(expectedStandards[['artisan7']]);
            expect(standards['expert1']).toEqual(expectedStandards[['expert1']]);
            expect(standards['expert2']).toEqual(expectedStandards[['expert2']]);
            expect(standards['expert3']).toEqual(expectedStandards[['expert3']]);
            expect(standards['expert4']).toEqual(expectedStandards[['expert4']]);
            expect(standards['expert5']).toEqual(expectedStandards[['expert5']]);
            expect(standards['expert6']).toEqual(expectedStandards[['expert6']]);
            expect(standards['expert7']).toEqual(expectedStandards[['expert7']]);
            expect(standards['expert8']).toEqual(expectedStandards[['expert8']]);
            expect(standards['expert9']).toEqual(expectedStandards[['expert9']]);
            expect(standards['expert10']).toEqual(expectedStandards[['expert10']]);
            expect(standards['expert11']).toEqual(expectedStandards[['expert11']]);
            expect(standards['expert12']).toEqual(expectedStandards[['expert12']]);
            expect(standards['professional1']).toEqual(expectedStandards[['professional1']]);
            expect(standards['professional2']).toEqual(expectedStandards[['professional2']]);
            expect(standards['professional3']).toEqual(expectedStandards[['professional3']]);
            expect(standards['professional4']).toEqual(expectedStandards[['professional4']]);
            expect(standards['professional5']).toEqual(expectedStandards[['professional5']]);
            expect(standards['professional6']).toEqual(expectedStandards[['professional6']]);
            expect(standards['professional7']).toEqual(expectedStandards[['professional7']]);
            expect(standards['professional8']).toEqual(expectedStandards[['professional8']]);
            expect(standards['professional9']).toEqual(expectedStandards[['professional9']]);
            expect(standards['professional10']).toEqual(expectedStandards[['professional10']]);
            expect(standards['master1']).toEqual(expectedStandards[['master1']]);
            expect(standards['master2']).toEqual(expectedStandards[['master2']]);
            expect(standards['master3']).toEqual(expectedStandards[['master3']]);
            expect(standards['master4']).toEqual(expectedStandards[['master4']]);
            expect(standards['master5']).toEqual(expectedStandards[['master5']]);
            expect(standards['master6']).toEqual(expectedStandards[['master6']]);
            expect(standards['master7']).toEqual(expectedStandards[['master7']]);
            expect(standards['master8']).toEqual(expectedStandards[['master8']]);
            expect(standards['master9']).toEqual(expectedStandards[['master9']]);
        });

        it('should save the score for standards as 1 if no question is answered', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
            scope.artisan7 = false;
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
            scope.expert12 = false;
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
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;
            scope.master7 = false;
            scope.master8 = false;
            scope.master9 = false;

            var expectedStandardsScore = 1;

            scope.saveAssessments();
            var standards = rootScope.assessmentsQa['standards'];

            expect(standards['score']).toEqual(expectedStandardsScore);

        });

        it('should save the score for standards as 1 if traveller question is answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
            scope.artisan7 = false;
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
            scope.expert12 = false;
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
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;
            scope.master7 = false;
            scope.master8 = false;
            scope.master9 = false;

            var expectedStandardsScore = 1;

            scope.saveAssessments();
            var standards = rootScope.assessmentsQa['standards'];

            expect(standards['score']).toEqual(expectedStandardsScore);

        });

        it('should save the score for standards as 2 if traveller question is answered as no and all the artisan questions answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.artisan5 = true;
            scope.artisan6 = true;
            scope.artisan7 = true;
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
            scope.expert12 = false;
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
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;
            scope.master7 = false;
            scope.master8 = false;
            scope.master9 = false;

            var expectedStandardsScore = 2;

            scope.saveAssessments();
            var standards = rootScope.assessmentsQa['standards'];

            expect(standards['score']).toEqual(expectedStandardsScore);

        });

        it('should save the score for standards as 3 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = true;
            scope.artisan4 = false;
            scope.artisan5 = true;
            scope.artisan6 = true;
            scope.artisan7 = false;
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
            scope.expert12 = true;
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
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;
            scope.master7 = false;
            scope.master8 = false;
            scope.master9 = false;

            var expectedStandardsScore = 3;

            scope.saveAssessments();
            var standards = rootScope.assessmentsQa['standards'];

            expect(standards['score']).toEqual(expectedStandardsScore);

        });

        it('should save the score for standards as 4 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = true;
            scope.artisan4 = false;
            scope.artisan5 = true;
            scope.artisan6 = true;
            scope.artisan7 = false;
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
            scope.expert12 = true;
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
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;
            scope.master7 = false;
            scope.master8 = false;
            scope.master9 = false;

            var expectedStandardsScore = 4;

            scope.saveAssessments();
            var standards = rootScope.assessmentsQa['standards'];

            expect(standards['score']).toEqual(expectedStandardsScore);

        });

        it('should save the score for standards as 5 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes and master questions' +
            'are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = true;
            scope.artisan4 = false;
            scope.artisan5 = true;
            scope.artisan6 = true;
            scope.artisan7 = false;
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
            scope.expert12 = true;
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
            scope.master2 = true;
            scope.master3 = true;
            scope.master4 = true;
            scope.master5 = true;
            scope.master6 = true;
            scope.master7 = true;
            scope.master8 = true;
            scope.master9 = true;

            var expectedStandardsScore = 5;

            scope.saveAssessments();
            var standards = rootScope.assessmentsQa['standards'];

            expect(standards['score']).toEqual(expectedStandardsScore);

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