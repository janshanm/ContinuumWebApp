'use strict';

describe('continuumAssessmentPlatform.test-metrics module', function() {

    beforeEach(module('continuumAssessmentPlatform.test-metrics'));

    describe('Test Metrics controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('TestMetricsCtrl', {'$scope': scope, '$rootScope': rootScope});
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
            expect(scope.artisan4).toBeDefined();
            expect(scope.artisan5).toBeDefined();
            expect(scope.artisan6).toBeDefined();
            expect(scope.artisan7).toBeDefined();
            expect(scope.artisan8).toBeDefined();

            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.artisan6).toBeFalsy();
            expect(scope.artisan7).toBeFalsy();
            expect(scope.artisan8).toBeFalsy();
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

            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
            expect(scope.expert8).toBeFalsy();
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
            expect(scope.professional12).toBeDefined();

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
            expect(scope.professional12).toBeFalsy();
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
            expect(scope.master11).toBeDefined();
            expect(scope.master12).toBeDefined();
            expect(scope.master13).toBeDefined();

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
            expect(scope.master11).toBeFalsy();
            expect(scope.master12).toBeFalsy();
            expect(scope.master13).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsQaMaM': {'test-metrics': {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false, 'artisan6': false, 'artisan7': false, 'artisan8': false,
                'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false, 'expert7': false, 'expert8': false,
                'professional1': false, 'professional2': true, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false, 'professional7': false, 'professional8': false, 'professional9': false, 'professional10': false, 'professional11': false, 'professional12': false,
                'master1': false, 'master2': false, 'master3': true, 'master4': false, 'master5': false, 'master6': false, 'master7': false, 'master8': false, 'master9': false, 'master10': false, 'master11': false, 'master12': false, 'master13': false}}};

            controller = $controller('TestMetricsCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
            expect(scope.traveller3).toBeTruthy();
            expect(scope.traveller4).toBeTruthy();
            expect(scope.traveller5).toBeTruthy();
            expect(scope.artisan1).toBeTruthy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.artisan6).toBeFalsy();
            expect(scope.artisan7).toBeFalsy();
            expect(scope.artisan8).toBeFalsy();
            expect(scope.expert1).toBeTruthy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
            expect(scope.expert8).toBeFalsy();
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
            expect(scope.professional11).toBeFalsy();
            expect(scope.professional12).toBeFalsy();
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
            expect(scope.master11).toBeFalsy();
            expect(scope.master12).toBeFalsy();
            expect(scope.master13).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('TestMetricsCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.artisan6).toBeFalsy();
            expect(scope.artisan7).toBeFalsy();
            expect(scope.artisan8).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
            expect(scope.expert8).toBeFalsy();
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
            expect(scope.professional12).toBeFalsy();
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
            expect(scope.master11).toBeFalsy();
            expect(scope.master12).toBeFalsy();
            expect(scope.master13).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessmentsQaMaM': {'ci': {}}};

            controller = $controller('TestMetricsCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.traveller4).toBeFalsy();
            expect(scope.traveller5).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.artisan4).toBeFalsy();
            expect(scope.artisan5).toBeFalsy();
            expect(scope.artisan6).toBeFalsy();
            expect(scope.artisan7).toBeFalsy();
            expect(scope.artisan8).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
            expect(scope.expert7).toBeFalsy();
            expect(scope.expert8).toBeFalsy();
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
            expect(scope.professional12).toBeFalsy();
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
            expect(scope.master11).toBeFalsy();
            expect(scope.master12).toBeFalsy();
            expect(scope.master13).toBeFalsy();
        }));

        it('should save the values for the assessment results for test metrics', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
            scope.artisan7 = false;
            scope.artisan8 = false;
            scope.expert1 = true;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.expert6 = false;
            scope.expert7 = false;
            scope.expert8 = false;
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
            scope.professional12 = false;
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
            scope.master11 = false;
            scope.master12 = false;
            scope.master13 = false;

            var expectedTestMetrics = {
                'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false, 'artisan6': false, 'artisan7': false, 'artisan8': false,
                'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false, 'expert7': false, 'expert8': false,
                'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false, 'professional7': false, 'professional8': false, 'professional9': false, 'professional10': false, 'professional11': false, 'professional12': false,
                'master1': false, 'master2': false, 'master3': false, 'master4': false, 'master5': false, 'master6': false, 'master7': false, 'master8': false, 'master9': false, 'master10': false, 'master11': false, 'master12': false, 'master13': false};

            scope.saveAssessments();
            var testMetrics = rootScope.assessmentsQaMaM['test-metrics'];

            expect(testMetrics['traveller1']).toEqual(expectedTestMetrics[['traveller1']]);
            expect(testMetrics['traveller2']).toEqual(expectedTestMetrics[['traveller2']]);
            expect(testMetrics['traveller3']).toEqual(expectedTestMetrics[['traveller3']]);
            expect(testMetrics['traveller4']).toEqual(expectedTestMetrics[['traveller4']]);
            expect(testMetrics['traveller5']).toEqual(expectedTestMetrics[['traveller5']]);
            expect(testMetrics['artisan1']).toEqual(expectedTestMetrics[['artisan1']]);
            expect(testMetrics['artisan2']).toEqual(expectedTestMetrics[['artisan2']]);
            expect(testMetrics['artisan3']).toEqual(expectedTestMetrics[['artisan3']]);
            expect(testMetrics['artisan4']).toEqual(expectedTestMetrics[['artisan4']]);
            expect(testMetrics['artisan5']).toEqual(expectedTestMetrics[['artisan5']]);
            expect(testMetrics['artisan6']).toEqual(expectedTestMetrics[['artisan6']]);
            expect(testMetrics['artisan7']).toEqual(expectedTestMetrics[['artisan7']]);
            expect(testMetrics['artisan8']).toEqual(expectedTestMetrics[['artisan8']]);
            expect(testMetrics['expert1']).toEqual(expectedTestMetrics[['expert1']]);
            expect(testMetrics['expert2']).toEqual(expectedTestMetrics[['expert2']]);
            expect(testMetrics['expert3']).toEqual(expectedTestMetrics[['expert3']]);
            expect(testMetrics['expert4']).toEqual(expectedTestMetrics[['expert4']]);
            expect(testMetrics['expert5']).toEqual(expectedTestMetrics[['expert5']]);
            expect(testMetrics['expert6']).toEqual(expectedTestMetrics[['expert6']]);
            expect(testMetrics['expert7']).toEqual(expectedTestMetrics[['expert7']]);
            expect(testMetrics['expert8']).toEqual(expectedTestMetrics[['expert8']]);
            expect(testMetrics['professional1']).toEqual(expectedTestMetrics[['professional1']]);
            expect(testMetrics['professional2']).toEqual(expectedTestMetrics[['professional2']]);
            expect(testMetrics['professional3']).toEqual(expectedTestMetrics[['professional3']]);
            expect(testMetrics['professional4']).toEqual(expectedTestMetrics[['professional4']]);
            expect(testMetrics['professional5']).toEqual(expectedTestMetrics[['professional5']]);
            expect(testMetrics['professional6']).toEqual(expectedTestMetrics[['professional6']]);
            expect(testMetrics['professional7']).toEqual(expectedTestMetrics[['professional7']]);
            expect(testMetrics['professional8']).toEqual(expectedTestMetrics[['professional8']]);
            expect(testMetrics['professional9']).toEqual(expectedTestMetrics[['professional9']]);
            expect(testMetrics['professional10']).toEqual(expectedTestMetrics[['professional10']]);
            expect(testMetrics['professional11']).toEqual(expectedTestMetrics[['professional11']]);
            expect(testMetrics['professional12']).toEqual(expectedTestMetrics[['professional12']]);
            expect(testMetrics['master1']).toEqual(expectedTestMetrics[['master1']]);
            expect(testMetrics['master2']).toEqual(expectedTestMetrics[['master2']]);
            expect(testMetrics['master3']).toEqual(expectedTestMetrics[['master3']]);
            expect(testMetrics['master4']).toEqual(expectedTestMetrics[['master4']]);
            expect(testMetrics['master5']).toEqual(expectedTestMetrics[['master5']]);
            expect(testMetrics['master6']).toEqual(expectedTestMetrics[['master6']]);
            expect(testMetrics['master7']).toEqual(expectedTestMetrics[['master7']]);
            expect(testMetrics['master8']).toEqual(expectedTestMetrics[['master8']]);
            expect(testMetrics['master9']).toEqual(expectedTestMetrics[['master9']]);
            expect(testMetrics['master10']).toEqual(expectedTestMetrics[['master10']]);
            expect(testMetrics['master11']).toEqual(expectedTestMetrics[['master11']]);
            expect(testMetrics['master12']).toEqual(expectedTestMetrics[['master12']]);
            expect(testMetrics['master13']).toEqual(expectedTestMetrics[['master13']]);
        });

        it('should save the score for test metrics as 1 if no question is answered', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
            scope.artisan7 = false;
            scope.artisan8 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.expert6 = false;
            scope.expert7 = false;
            scope.expert8 = false;
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
            scope.professional12 = false;
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
            scope.master11 = false;
            scope.master12 = false;
            scope.master13 = false;

            var expectedTestMetricsScore = 1;

            scope.saveAssessments();
            var testMetrics = rootScope.assessmentsQaMaM['test-metrics'];

            expect(testMetrics['score']).toEqual(expectedTestMetricsScore);

        });

        it('should save the score for test metrics as 1 if traveller question is answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.traveller4 = true;
            scope.traveller5 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
            scope.artisan7 = false;
            scope.artisan8 = false;
            scope.expert1 = false;
            scope.expert2 = false;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.expert6 = false;
            scope.expert7 = false;
            scope.expert8 = false;
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
            scope.professional12 = false;
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
            scope.master11 = false;
            scope.master12 = false;
            scope.master13 = false;

            var expectedTestMetricsScore = 1;

            scope.saveAssessments();
            var testMetrics = rootScope.assessmentsQaMaM['test-metrics'];

            expect(testMetrics['score']).toEqual(expectedTestMetricsScore);

        });

        it('should save the score for test metrics as 2 if traveller question is answered as no and all the artisan questions answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = true;
            scope.artisan4 = true;
            scope.artisan5 = true;
            scope.artisan6 = true;
            scope.artisan7 = true;
            scope.artisan8 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.expert6 = false;
            scope.expert7 = false;
            scope.expert8 = false;
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
            scope.professional12 = false;
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
            scope.master11 = false;
            scope.master12 = false;
            scope.master13 = false;

            var expectedTestMetricsScore = 2;

            scope.saveAssessments();
            var testMetrics = rootScope.assessmentsQaMaM['test-metrics'];

            expect(testMetrics['score']).toEqual(expectedTestMetricsScore);

        });

        it('should save the score for test metrics as 3 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = true;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
            scope.artisan7 = false;
            scope.artisan8 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.expert6 = true;
            scope.expert7 = true;
            scope.expert8 = true;
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
            scope.professional12 = false;
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
            scope.master11 = false;
            scope.master12 = false;
            scope.master13 = false;

            var expectedTestMetricsScore = 3;

            scope.saveAssessments();
            var testMetrics = rootScope.assessmentsQaMaM['test-metrics'];

            expect(testMetrics['score']).toEqual(expectedTestMetricsScore);

        });

        it('should save the score for test metrics as 4 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = true;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
            scope.artisan7 = false;
            scope.artisan8 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.expert6 = true;
            scope.expert7 = true;
            scope.expert8 = true;
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
            scope.professional12 = true;
            scope.master1 = true;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;
            scope.master7 = false;
            scope.master8 = false;
            scope.master9 = false;
            scope.master10 = false;
            scope.master11 = false;
            scope.master12 = false;
            scope.master13 = false;

            var expectedTestMetricsScore = 4;

            scope.saveAssessments();
            var testMetrics = rootScope.assessmentsQaMaM['test-metrics'];

            expect(testMetrics['score']).toEqual(expectedTestMetricsScore);

        });

        it('should save the score for test metrics as 5 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes, professional questions answered as yes and the master questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.traveller3 = false;
            scope.traveller4 = false;
            scope.traveller5 = false;
            scope.artisan1 = false;
            scope.artisan2 = false;
            scope.artisan3 = true;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.artisan6 = false;
            scope.artisan7 = false;
            scope.artisan8 = true;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = true;
            scope.expert4 = true;
            scope.expert5 = true;
            scope.expert6 = true;
            scope.expert7 = true;
            scope.expert8 = true;
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
            scope.professional12 = true;
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
            scope.master11 = true;
            scope.master12 = true;
            scope.master13 = true;

            var expectedTestMetricsScore = 5;

            scope.saveAssessments();
            var testMetrics = rootScope.assessmentsQaMaM['test-metrics'];

            expect(testMetrics['score']).toEqual(expectedTestMetricsScore);

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