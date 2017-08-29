'use strict';

describe('continuumAssessmentPlatform.quality-alignment module', function() {

    beforeEach(module('continuumAssessmentPlatform.quality-alignment'));

    describe('Quality Alignment controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('QualityAlignmentCtrl', {'$scope': scope, '$rootScope': rootScope});
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

            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.traveller6).toBeFalsy();
            expect(scope.traveller7).toBeFalsy();
            expect(scope.traveller8).toBeFalsy();
            expect(scope.traveller9).toBeFalsy();
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
            expect(scope.expert5).toBeDefined();
            expect(scope.expert6).toBeDefined();
            expect(scope.expert7).toBeDefined();
            expect(scope.expert8).toBeDefined();
            expect(scope.expert9).toBeDefined();
            expect(scope.expert10).toBeDefined();

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
            expect(scope.professional11).toBeDefined();

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
            expect(scope.professional11).toBeFalsy();
        });

        it('should have defaults as false for the master questions', function(){
            expect(scope.master1).toBeDefined();
            expect(scope.master2).toBeDefined();
            expect(scope.master3).toBeDefined();
            expect(scope.master4).toBeDefined();
            expect(scope.master5).toBeDefined();
            expect(scope.master6).toBeDefined();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
            expect(scope.master6).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsQaMaM': {'quality-alignment': {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true, 'traveller7': true, 'traveller8': true, 'traveller9': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false, 'artisan6': false,
                'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false, 'expert7': false, 'expert8': false, 'expert9': false, 'expert10': false,
                'professional1': false, 'professional2': true, 'professional3': true, 'professional4': true, 'professional5': true, 'professional6': true, 'professional7': true, 'professional8': true, 'professional9': true, 'professional10': true, 'professional11': true,
                'master1': true, 'master2': true, 'master3': true, 'master4': true, 'master5': true, 'master6': true}}};

            controller = $controller('QualityAlignmentCtrl', {'$scope': scope, '$rootScope': rootScope});
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
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
            expect(scope.expert8).toBeFalsy();
            expect(scope.expert9).toBeFalsy();
            expect(scope.expert10).toBeFalsy();
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
            expect(scope.professional11).toBeTruthy();
            expect(scope.master1).toBeTruthy();
            expect(scope.master2).toBeTruthy();
            expect(scope.master3).toBeTruthy();
            expect(scope.master4).toBeTruthy();
            expect(scope.master5).toBeTruthy();
            expect(scope.master6).toBeTruthy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('QualityAlignmentCtrl', {'$scope': scope, '$rootScope': rootScope});
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
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
            expect(scope.expert8).toBeFalsy();
            expect(scope.expert9).toBeFalsy();
            expect(scope.expert10).toBeFalsy();
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
            expect(scope.professional11).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
            expect(scope.master6).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessmentsQaMaM': {'assessmentsQaMaM': {}}};

            controller = $controller('QualityAlignmentCtrl', {'$scope': scope, '$rootScope': rootScope});
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
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
            expect(scope.expert8).toBeFalsy();
            expect(scope.expert9).toBeFalsy();
            expect(scope.expert10).toBeFalsy();
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
            expect(scope.professional11).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
            expect(scope.master6).toBeFalsy();
        }));

        it('should save the values for the assessment results for quality-alignment', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.traveller7 = true;
            scope.traveller8 = true;
            scope.traveller9 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
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
            scope.professional1 = false;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.professional4 = true;
            scope.professional5 = true;
            scope.professional6 = true;
            scope.professional7 = true;
            scope.professional8 = true;
            scope.professional9 = true;
            scope.professional10 = true;
            scope.professional11 = true;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;

            var expectedQualityAlignment = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true, 'traveller7': true, 'traveller8': true, 'traveller9': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false, 'artisan6': false,
                'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false, 'expert7': false, 'expert8': false, 'expert9': false, 'expert10': false,
                'professional1': false, 'professional2': true, 'professional3': true, 'professional4': true, 'professional5': true, 'professional6': true, 'professional7': true, 'professional8': true, 'professional9': true, 'professional10': true, 'professional11': true,
                'master1': false, 'master2': false, 'master3': false, 'master4': false, 'master5': false, 'master6': false};

            scope.saveAssessments();
            var qualityAlignment = rootScope.assessmentsQaMaM['quality-alignment'];

            expect(qualityAlignment['traveller1']).toEqual(expectedQualityAlignment[['traveller1']]);
            expect(qualityAlignment['traveller2']).toEqual(expectedQualityAlignment[['traveller2']]);
            expect(qualityAlignment['traveller3']).toEqual(expectedQualityAlignment[['traveller3']]);
            expect(qualityAlignment['traveller4']).toEqual(expectedQualityAlignment[['traveller4']]);
            expect(qualityAlignment['traveller5']).toEqual(expectedQualityAlignment[['traveller5']]);
            expect(qualityAlignment['traveller6']).toEqual(expectedQualityAlignment[['traveller6']]);
            expect(qualityAlignment['traveller7']).toEqual(expectedQualityAlignment[['traveller7']]);
            expect(qualityAlignment['traveller8']).toEqual(expectedQualityAlignment[['traveller8']]);
            expect(qualityAlignment['traveller9']).toEqual(expectedQualityAlignment[['traveller9']]);
            expect(qualityAlignment['artisan1']).toEqual(expectedQualityAlignment[['artisan1']]);
            expect(qualityAlignment['artisan2']).toEqual(expectedQualityAlignment[['artisan2']]);
            expect(qualityAlignment['artisan3']).toEqual(expectedQualityAlignment[['artisan3']]);
            expect(qualityAlignment['artisan4']).toEqual(expectedQualityAlignment[['artisan4']]);
            expect(qualityAlignment['artisan5']).toEqual(expectedQualityAlignment[['artisan5']]);
            expect(qualityAlignment['artisan6']).toEqual(expectedQualityAlignment[['artisan6']]);
            expect(qualityAlignment['expert1']).toEqual(expectedQualityAlignment[['expert1']]);
            expect(qualityAlignment['expert2']).toEqual(expectedQualityAlignment[['expert2']]);
            expect(qualityAlignment['expert3']).toEqual(expectedQualityAlignment[['expert3']]);
            expect(qualityAlignment['expert4']).toEqual(expectedQualityAlignment[['expert4']]);
            expect(qualityAlignment['expert5']).toEqual(expectedQualityAlignment[['expert5']]);
            expect(qualityAlignment['expert6']).toEqual(expectedQualityAlignment[['expert6']]);
            expect(qualityAlignment['expert7']).toEqual(expectedQualityAlignment[['expert7']]);
            expect(qualityAlignment['expert8']).toEqual(expectedQualityAlignment[['expert8']]);
            expect(qualityAlignment['expert9']).toEqual(expectedQualityAlignment[['expert9']]);
            expect(qualityAlignment['expert10']).toEqual(expectedQualityAlignment[['expert10']]);
            expect(qualityAlignment['professional1']).toEqual(expectedQualityAlignment[['professional1']]);
            expect(qualityAlignment['professional2']).toEqual(expectedQualityAlignment[['professional2']]);
            expect(qualityAlignment['professional3']).toEqual(expectedQualityAlignment[['professional3']]);
            expect(qualityAlignment['professional4']).toEqual(expectedQualityAlignment[['professional4']]);
            expect(qualityAlignment['professional5']).toEqual(expectedQualityAlignment[['professional5']]);
            expect(qualityAlignment['professional6']).toEqual(expectedQualityAlignment[['professional6']]);
            expect(qualityAlignment['professional7']).toEqual(expectedQualityAlignment[['professional7']]);
            expect(qualityAlignment['professional8']).toEqual(expectedQualityAlignment[['professional8']]);
            expect(qualityAlignment['professional9']).toEqual(expectedQualityAlignment[['professional9']]);
            expect(qualityAlignment['professional10']).toEqual(expectedQualityAlignment[['professional10']]);
            expect(qualityAlignment['professional11']).toEqual(expectedQualityAlignment[['professional11']]);
            expect(qualityAlignment['master1']).toEqual(expectedQualityAlignment[['master1']]);
            expect(qualityAlignment['master2']).toEqual(expectedQualityAlignment[['master2']]);
            expect(qualityAlignment['master3']).toEqual(expectedQualityAlignment[['master3']]);
            expect(qualityAlignment['master4']).toEqual(expectedQualityAlignment[['master4']]);
            expect(qualityAlignment['master5']).toEqual(expectedQualityAlignment[['master5']]);
            expect(qualityAlignment['master6']).toEqual(expectedQualityAlignment[['master6']]);
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
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
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
            scope.professional1 = false;
            scope.professional2 = true;
            scope.professional3 = true;
            scope.professional4 = true;
            scope.professional5 = true;
            scope.professional6 = true;
            scope.professional7 = true;
            scope.professional8 = true;
            scope.professional9 = true;
            scope.professional10 = true;
            scope.professional11 = true;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;

            var expectedQualityAlignment = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true, 'traveller7': true, 'traveller8': true, 'traveller9': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false, 'artisan6': false,
                'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false, 'expert7': false, 'expert8': false, 'expert9': false, 'expert10': false,
                'professional1': false, 'professional2': true, 'professional3': true, 'professional4': true, 'professional5': true, 'professional6': true, 'professional7': true, 'professional8': true, 'professional9': true, 'professional10': true, 'professional11': true,
                'master1': false, 'master2': false, 'master3': false, 'master4': false, 'master5': false, 'master6': false};

            rootScope.assessmentsQaMaM = {};

            scope.saveAssessments();
            var qualityAlignment = rootScope.assessmentsQaMaM['quality-alignment'];

            expect(qualityAlignment['traveller1']).toEqual(expectedQualityAlignment[['traveller1']]);
            expect(qualityAlignment['traveller2']).toEqual(expectedQualityAlignment[['traveller2']]);
            expect(qualityAlignment['traveller3']).toEqual(expectedQualityAlignment[['traveller3']]);
            expect(qualityAlignment['traveller4']).toEqual(expectedQualityAlignment[['traveller4']]);
            expect(qualityAlignment['traveller5']).toEqual(expectedQualityAlignment[['traveller5']]);
            expect(qualityAlignment['traveller6']).toEqual(expectedQualityAlignment[['traveller6']]);
            expect(qualityAlignment['traveller7']).toEqual(expectedQualityAlignment[['traveller7']]);
            expect(qualityAlignment['traveller8']).toEqual(expectedQualityAlignment[['traveller8']]);
            expect(qualityAlignment['traveller9']).toEqual(expectedQualityAlignment[['traveller9']]);
            expect(qualityAlignment['artisan1']).toEqual(expectedQualityAlignment[['artisan1']]);
            expect(qualityAlignment['artisan2']).toEqual(expectedQualityAlignment[['artisan2']]);
            expect(qualityAlignment['artisan3']).toEqual(expectedQualityAlignment[['artisan3']]);
            expect(qualityAlignment['artisan4']).toEqual(expectedQualityAlignment[['artisan4']]);
            expect(qualityAlignment['artisan5']).toEqual(expectedQualityAlignment[['artisan5']]);
            expect(qualityAlignment['artisan6']).toEqual(expectedQualityAlignment[['artisan6']]);
            expect(qualityAlignment['expert1']).toEqual(expectedQualityAlignment[['expert1']]);
            expect(qualityAlignment['expert2']).toEqual(expectedQualityAlignment[['expert2']]);
            expect(qualityAlignment['expert3']).toEqual(expectedQualityAlignment[['expert3']]);
            expect(qualityAlignment['expert4']).toEqual(expectedQualityAlignment[['expert4']]);
            expect(qualityAlignment['expert5']).toEqual(expectedQualityAlignment[['expert5']]);
            expect(qualityAlignment['expert6']).toEqual(expectedQualityAlignment[['expert6']]);
            expect(qualityAlignment['expert7']).toEqual(expectedQualityAlignment[['expert7']]);
            expect(qualityAlignment['expert8']).toEqual(expectedQualityAlignment[['expert8']]);
            expect(qualityAlignment['expert9']).toEqual(expectedQualityAlignment[['expert9']]);
            expect(qualityAlignment['expert10']).toEqual(expectedQualityAlignment[['expert10']]);
            expect(qualityAlignment['professional1']).toEqual(expectedQualityAlignment[['professional1']]);
            expect(qualityAlignment['professional2']).toEqual(expectedQualityAlignment[['professional2']]);
            expect(qualityAlignment['professional3']).toEqual(expectedQualityAlignment[['professional3']]);
            expect(qualityAlignment['professional4']).toEqual(expectedQualityAlignment[['professional4']]);
            expect(qualityAlignment['professional5']).toEqual(expectedQualityAlignment[['professional5']]);
            expect(qualityAlignment['professional6']).toEqual(expectedQualityAlignment[['professional6']]);
            expect(qualityAlignment['professional7']).toEqual(expectedQualityAlignment[['professional7']]);
            expect(qualityAlignment['professional8']).toEqual(expectedQualityAlignment[['professional8']]);
            expect(qualityAlignment['professional9']).toEqual(expectedQualityAlignment[['professional9']]);
            expect(qualityAlignment['professional10']).toEqual(expectedQualityAlignment[['professional10']]);
            expect(qualityAlignment['professional11']).toEqual(expectedQualityAlignment[['professional11']]);
            expect(qualityAlignment['master1']).toEqual(expectedQualityAlignment[['master1']]);
            expect(qualityAlignment['master2']).toEqual(expectedQualityAlignment[['master2']]);
            expect(qualityAlignment['master3']).toEqual(expectedQualityAlignment[['master3']]);
            expect(qualityAlignment['master4']).toEqual(expectedQualityAlignment[['master4']]);
            expect(qualityAlignment['master5']).toEqual(expectedQualityAlignment[['master5']]);
            expect(qualityAlignment['master6']).toEqual(expectedQualityAlignment[['master6']]);
        });

        it('should save the score for quality alignment as 1 if no question is answered', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.traveller7 = false;
            scope.traveller8 = false;
            scope.traveller9 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
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
            scope.professional11 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;

            var expectedQualityAlignmentScore = 1;

            scope.saveAssessments();
            var qualityAlignment = rootScope.assessmentsQaMaM['quality-alignment'];

            expect(qualityAlignment['score']).toEqual(expectedQualityAlignmentScore);

        });

        it('should save the score for quality alignment as 1 if traveller question is answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.traveller6 = true;
            scope.traveller7 = true;
            scope.traveller8 = true;
            scope.traveller9 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
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
            scope.professional11 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;

            var expectedQualityAlignmentScore = 1;

            scope.saveAssessments();
            var qualityAlignment = rootScope.assessmentsQaMaM['quality-alignment'];

            expect(qualityAlignment['score']).toEqual(expectedQualityAlignmentScore);

        });

        it('should save the score for quality alignment as 2 if traveller question is answered as no and all the artisan questions answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.traveller7 = false;
            scope.traveller8 = false;
            scope.traveller9 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.artisan5 = true;
            scope.artisan6 = true;
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
            scope.professional11 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;

            var expectedQualityAlignmentScore = 2;

            scope.saveAssessments();
            var qualityAlignment = rootScope.assessmentsQaMaM['quality-alignment'];

            expect(qualityAlignment['score']).toEqual(expectedQualityAlignmentScore);

        });

        it('should save the score for quality alignment as 3 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.traveller6 = false;
            scope.traveller7 = false;
            scope.traveller8 = false;
            scope.traveller9 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = false;
            scope.artisan4 = true;
            scope.artisan5 = false;
            scope.artisan6 = false;
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
            scope.professional11 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;

            var expectedQualityAlignmentScore = 3;

            scope.saveAssessments();
            var qualityAlignment = rootScope.assessmentsQaMaM['quality-alignment'];

            expect(qualityAlignment['score']).toEqual(expectedQualityAlignmentScore);

        });

        it('should save the score for quality alignment as 4 if traveller question is answered as no and all the artisan questions answered as yes' +
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
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.expert6 = true;
            scope.expert7 = true;
            scope.expert8 = true;
            scope.expert9 = false;
            scope.expert10 = true;
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
            scope.professional11 = true;
            scope.master1 = true;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;

            var expectedQualityAlignmentScore = 4;

            scope.saveAssessments();
            var qualityAlignment = rootScope.assessmentsQaMaM['quality-alignment'];

            expect(qualityAlignment['score']).toEqual(expectedQualityAlignmentScore);

        });

        it('should save the score for quality alignment as 5 if traveller question is answered as no and all the artisan questions answered as yes' +
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
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.expert6 = true;
            scope.expert7 = true;
            scope.expert8 = true;
            scope.expert9 = false;
            scope.expert10 = true;
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
            scope.professional11 = true;
            scope.master1 = true;
            scope.master2 = true;
            scope.master3 = true;
            scope.master4 = true;
            scope.master5 = true;
            scope.master6 = true;

            var expectedQualityAlignmentScore = 5;

            scope.saveAssessments();
            var qualityAlignment = rootScope.assessmentsQaMaM['quality-alignment'];

            expect(qualityAlignment['score']).toEqual(expectedQualityAlignmentScore);

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