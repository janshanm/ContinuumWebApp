'use strict';

describe('continuumAssessmentPlatform.automation-testing module', function() {

    beforeEach(module('continuumAssessmentPlatform.automation-testing'));

    describe('assessment process controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('AutomationTestingCtrl', {'$scope': scope, '$rootScope': rootScope});
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

            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
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
            expect(scope.expert3).toBeDefined();
            expect(scope.expert4).toBeDefined();
            expect(scope.expert5).toBeDefined();
            expect(scope.expert6).toBeDefined();
            expect(scope.expert7).toBeDefined();

            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
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
            expect(scope.master10).toBeDefined();

            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
            expect(scope.master6).toBeFalsy();
            expect(scope.master7).toBeFalsy();
            expect(scope.master8).toBeFalsy();
            expect(scope.master9).toBeFalsy();
            expect(scope.master10).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsQaMaM': {'automation-testing': {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false,
                'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false, 'expert7': false,
                'professional1': false, 'professional2': true, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false, 'professional7': false, 'professional8': false, 'professional9': false, 'professional10': false,
                'master1': false, 'master2': false, 'master3': true, 'master4': false, 'master5': false, 'master6': false, 'master7': false, 'master8': false, 'master9': false, 'master10': false}}};

            controller = $controller('AutomationTestingCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
            expect(scope.traveller3).toBeTruthy();
            expect(scope.traveller4).toBeTruthy();
            expect(scope.traveller5).toBeTruthy();
            expect(scope.artisan1).toBeTruthy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.expert1).toBeTruthy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeTruthy();
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
            expect(scope.master3).toBeTruthy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
            expect(scope.master6).toBeFalsy();
            expect(scope.master7).toBeFalsy();
            expect(scope.master8).toBeFalsy();
            expect(scope.master9).toBeFalsy();
            expect(scope.master10).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('AutomationTestingCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
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
            expect(scope.master10).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessmentsQaMaM': {'ci': {}}};

            controller = $controller('AutomationTestingCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
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
            expect(scope.master10).toBeFalsy();
        }));

        it('should save the values for the assessment results for assessment process', function(){
            rootScope.assessmentsQaMaM = {
                'test-criteria': {'traveller1': false, 'traveller2': false, 'traveller3': false},
                'defect-and-exploratory': {'traveller1': false, 'traveller2': false, 'traveller3': false}
            };
            
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.expert6 = false;
            scope.expert7 = false;
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
            scope.master10 = false;

            var expectedAutomationTesting = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false,
                'expert1': true, 'expert2': true, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false, 'expert7': false,
                'professional1': false, 'professional2': false, 'professional3': false,  'professional4': false,  'professional5': false,  'professional6': false,  'professional7': false,  'professional8': false,  'professional9': false,  'professional10': false,
                'master1': false, 'master2': false, 'master3': false, 'master4': false, 'master5': false, 'master6': false, 'master7': false, 'master8': false, 'master9': false, 'master10': false};

            scope.saveAssessments();
            var automationTesting = rootScope.assessmentsQaMaM['automation-testing'];

            expect(automationTesting['traveller1']).toEqual(expectedAutomationTesting[['traveller1']]);
            expect(automationTesting['traveller2']).toEqual(expectedAutomationTesting[['traveller2']]);
            expect(automationTesting['traveller3']).toEqual(expectedAutomationTesting[['traveller3']]);
            expect(automationTesting['traveller4']).toEqual(expectedAutomationTesting[['traveller4']]);
            expect(automationTesting['traveller5']).toEqual(expectedAutomationTesting[['traveller5']]);
            expect(automationTesting['artisan1']).toEqual(expectedAutomationTesting[['artisan1']]);
            expect(automationTesting['artisan2']).toEqual(expectedAutomationTesting[['artisan2']]);
            expect(automationTesting['artisan3']).toEqual(expectedAutomationTesting[['artisan3']]);
            expect(automationTesting['expert1']).toEqual(expectedAutomationTesting[['expert1']]);
            expect(automationTesting['expert2']).toEqual(expectedAutomationTesting[['expert2']]);
            expect(automationTesting['expert3']).toEqual(expectedAutomationTesting[['expert3']]);
            expect(automationTesting['expert4']).toEqual(expectedAutomationTesting[['expert4']]);
            expect(automationTesting['expert5']).toEqual(expectedAutomationTesting[['expert5']]);
            expect(automationTesting['expert6']).toEqual(expectedAutomationTesting[['expert6']]);
            expect(automationTesting['expert7']).toEqual(expectedAutomationTesting[['expert7']]);
            expect(automationTesting['professional1']).toEqual(expectedAutomationTesting[['professional1']]);
            expect(automationTesting['professional2']).toEqual(expectedAutomationTesting[['professional2']]);
            expect(automationTesting['professional3']).toEqual(expectedAutomationTesting[['professional3']]);
            expect(automationTesting['professional4']).toEqual(expectedAutomationTesting[['professional4']]);
            expect(automationTesting['professional5']).toEqual(expectedAutomationTesting[['professional5']]);
            expect(automationTesting['professional6']).toEqual(expectedAutomationTesting[['professional6']]);
            expect(automationTesting['professional7']).toEqual(expectedAutomationTesting[['professional7']]);
            expect(automationTesting['professional8']).toEqual(expectedAutomationTesting[['professional8']]);
            expect(automationTesting['professional9']).toEqual(expectedAutomationTesting[['professional9']]);
            expect(automationTesting['professional10']).toEqual(expectedAutomationTesting[['professional10']]);
            expect(automationTesting['master1']).toEqual(expectedAutomationTesting[['master1']]);
            expect(automationTesting['master2']).toEqual(expectedAutomationTesting[['master2']]);
            expect(automationTesting['master3']).toEqual(expectedAutomationTesting[['master3']]);
            expect(automationTesting['master4']).toEqual(expectedAutomationTesting[['master4']]);
            expect(automationTesting['master5']).toEqual(expectedAutomationTesting[['master5']]);
            expect(automationTesting['master6']).toEqual(expectedAutomationTesting[['master6']]);
            expect(automationTesting['master7']).toEqual(expectedAutomationTesting[['master7']]);
            expect(automationTesting['master8']).toEqual(expectedAutomationTesting[['master8']]);
            expect(automationTesting['master9']).toEqual(expectedAutomationTesting[['master9']]);
            expect(automationTesting['master10']).toEqual(expectedAutomationTesting[['master10']]);
        });

        it('should save the score for automation testing as 1 if no question is answered', function(){
            rootScope.assessmentsQaMaM = {
                'test-criteria': {'traveller1': false, 'traveller2': false, 'traveller3': false},
                'defect-and-exploratory': {'traveller1': false, 'traveller2': false, 'traveller3': false}
            };
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.expert6 = false;
            scope.expert7 = false;
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
            scope.master10 = false;

            var expectedAutomationTestingScore = 1;

            scope.saveAssessments();
            var automationTesting = rootScope.assessmentsQaMaM['testing'];

            expect(automationTesting['score']).toEqual(expectedAutomationTestingScore);

        });

        it('should save the score for automation testing as 1 if traveller question is answered as yes', function(){
            rootScope.assessmentsQaMaM = {
                'test-criteria': {'traveller1': true, 'traveller2': true, 'traveller3': true},
                'defect-and-exploratory': {'traveller1': true, 'traveller2': true, 'traveller3': true}
            };
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.expert6 = false;
            scope.expert7 = false;
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
            scope.master10 = false;

            var expectedAutomationTestingScore = 1;

            scope.saveAssessments();
            var automationTesting = rootScope.assessmentsQaMaM['testing'];

            expect(automationTesting['score']).toEqual(expectedAutomationTestingScore);

        });

        it('should save the score for automation testing as 2 if traveller question is answered as no and all the artisan questions answered as yes', function(){
            rootScope.assessmentsQaMaM = {
                'test-criteria': {
                    'traveller1': false, 'traveller2': false, 'traveller3': false,
                    'artisan1': true, 'artisan2': true, 'artisan3': true, 'artisan4': true, 'artisan5': true
                },
                'defect-and-exploratory': {
                    'traveller1': false, 'traveller2': false, 'traveller3': false,
                    'artisan1': true, 'artisan2': true, 'artisan3': true
                }
            };

            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = true;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.expert6 = false;
            scope.expert7 = false;
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
            scope.master10 = false;

            var expectedAutomationTestingScore = 2;

            scope.saveAssessments();
            var automationTesting = rootScope.assessmentsQaMaM['testing'];

            expect(automationTesting['score']).toEqual(expectedAutomationTestingScore);

        });

        it('should save the score for automation testing as 3 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes', function(){
            rootScope.assessmentsQaMaM = {
                'test-criteria': {
                    'traveller1': false, 'traveller2': false, 'traveller3': false,
                    'artisan1': false, 'artisan2': true, 'artisan3': true, 'artisan4': true, 'artisan5': false,
                    'expert1': true, 'expert2': true, 'expert3': true, 'expert4': true, 'expert5': true, 'expert6': true
                },
                'defect-and-exploratory': {
                    'traveller1': false,
                    'traveller2': false,
                    'traveller3': false,
                    'artisan1': false,
                    'artisan2': false,
                    'artisan3': false,
                    'expert1': true,
                    'expert2': true,
                    'expert3': true
                }
            };


            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.expert6 = true;
            scope.expert7 = true;
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
            scope.master10 = false;

            var expectedAutomationTestingScore = 3;

            scope.saveAssessments();
            var automationTesting = rootScope.assessmentsQaMaM['testing'];

            expect(automationTesting['score']).toEqual(expectedAutomationTestingScore);

        });

        it('should save the score for assessment process as 4 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes', function(){
            rootScope.assessmentsQaMaM = {
                'test-criteria': {
                    'traveller1': false,
                    'traveller2': false,
                    'traveller3': false,
                    'artisan1': false,
                    'artisan2': true,
                    'artisan3': true,
                    'artisan4': true,
                    'artisan5': false,
                    'expert1': true,
                    'expert2': true,
                    'expert3': true,
                    'expert4': true,
                    'expert5': true,
                    'expert6': true,
                    'professional1': true,
                    'professional2': true,
                    'professional3': true,
                    'professional4': true,
                    'professional5': true,
                    'professional6': true
                },
                'defect-and-exploratory': {
                    'traveller1': false,
                    'traveller2': false,
                    'traveller3': false,
                    'artisan1': false,
                    'artisan2': false,
                    'artisan3': false,
                    'expert1': true,
                    'expert2': true,
                    'expert3': true,
                    'professional1': true,
                    'professional2': true,
                    'professional3': true,
                    'professional4': true,
                    'professional5': true,
                    'professional6': true
                }
            };

            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.expert6 = true;
            scope.expert7 = true;
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
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;
            scope.master7 = false;
            scope.master8 = false;
            scope.master9 = false;
            scope.master10 = false;

            var expectedAutomationTestingScore = 4;

            scope.saveAssessments();
            var automationTesting = rootScope.assessmentsQaMaM['testing'];

            expect(automationTesting['score']).toEqual(expectedAutomationTestingScore);

        });

        it('should save the score for assessment process as 5 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes, professional questions answered as yes and the master questions are answered as yes', function(){

            rootScope.assessmentsQaMaM = {
                'test-criteria': {
                    'traveller1': false,
                    'traveller2': false,
                    'traveller3': false,
                    'artisan1': false,
                    'artisan2': true,
                    'artisan3': true,
                    'artisan4': true,
                    'artisan5': false,
                    'expert1': true,
                    'expert2': true,
                    'expert3': true,
                    'expert4': true,
                    'expert5': true,
                    'expert6': true,
                    'professional1': true,
                    'professional2': true,
                    'professional3': true,
                    'professional4': true,
                    'professional5': true,
                    'professional6': true,
                    'master1': true,
                    'master2': true
                },
                'defect-and-exploratory': {
                    'traveller1': false,
                    'traveller2': false,
                    'traveller3': false,
                    'artisan1': false,
                    'artisan2': false,
                    'artisan3': false,
                    'expert1': true,
                    'expert2': true,
                    'expert3': true,
                    'professional1': true,
                    'professional2': true,
                    'professional3': true,
                    'professional4': true,
                    'professional5': true,
                    'professional6': true,
                    'master1': true,
                    'master2': true,
                    'master3': true,
                    'master4': true,
                    'master5': true
                }
            };

            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.expert6 = true;
            scope.expert7 = true;
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
            scope.master10 = true;

            var expectedAutomationTestingScore = 5;

            scope.saveAssessments();
            var automationTesting = rootScope.assessmentsQaMaM['testing'];

            expect(automationTesting['score']).toEqual(expectedAutomationTestingScore);

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