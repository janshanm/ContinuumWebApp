'use strict';

describe('continuumAssessmentPlatform.metrics module', function() {

    beforeEach(module('continuumAssessmentPlatform.metrics'));

    describe('Metrics controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('MetricsCtrl', {'$scope': scope, '$rootScope': rootScope});
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

            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.professional5).toBeFalsy();
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
            rootScope = {'assessmentsQa': {'metrics': {
                'traveller1': true, 'traveller2': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false, 'artisan6': false,
                'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false, 'expert7': false, 'expert8': false,
                'professional1': false, 'professional2': true, 'professional3': true, 'professional4': true, 'professional5': true,
                'master1': true, 'master2': true, 'master3': true,  'master4': true,  'master5': true,  'master6': true}}};

            controller = $controller('MetricsCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
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
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeTruthy();
            expect(scope.professional3).toBeTruthy();
            expect(scope.professional4).toBeTruthy();
            expect(scope.professional5).toBeTruthy();
            expect(scope.master1).toBeTruthy();
            expect(scope.master2).toBeTruthy();
            expect(scope.master3).toBeTruthy();
            expect(scope.master4).toBeTruthy();
            expect(scope.master5).toBeTruthy();
            expect(scope.master6).toBeTruthy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('MetricsCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
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
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.professional5).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
            expect(scope.master6).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessmentsQa': {'assessmentsQa': {}}};

            controller = $controller('MetricsCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
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
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.professional5).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
            expect(scope.master6).toBeFalsy();
        }));

        it('should save the values for the assessment results for metrics', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
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
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;

            var expectedMetrics = {
                'traveller1': true, 'traveller2': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false, 'artisan6': false,
                'expert1': true, 'expert2': true, 'expert3': true, 'expert4': true, 'expert5': true, 'expert6': true, 'expert7': true, 'expert8': true,
                'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false, 'professional5': false,
                'master1': false, 'master2': false, 'master3': false,  'master4': false,  'master5': false,  'master6': false};

            scope.saveAssessments();
            var metrics = rootScope.assessmentsQa['metrics'];

            expect(metrics['traveller1']).toEqual(expectedMetrics[['traveller1']]);
            expect(metrics['traveller2']).toEqual(expectedMetrics[['traveller2']]);
            expect(metrics['artisan1']).toEqual(expectedMetrics[['artisan1']]);
            expect(metrics['artisan2']).toEqual(expectedMetrics[['artisan2']]);
            expect(metrics['artisan3']).toEqual(expectedMetrics[['artisan3']]);
            expect(metrics['artisan4']).toEqual(expectedMetrics[['artisan4']]);
            expect(metrics['artisan5']).toEqual(expectedMetrics[['artisan5']]);
            expect(metrics['artisan6']).toEqual(expectedMetrics[['artisan6']]);
            expect(metrics['expert1']).toEqual(expectedMetrics[['expert1']]);
            expect(metrics['expert2']).toEqual(expectedMetrics[['expert2']]);
            expect(metrics['expert3']).toEqual(expectedMetrics[['expert3']]);
            expect(metrics['expert4']).toEqual(expectedMetrics[['expert4']]);
            expect(metrics['expert5']).toEqual(expectedMetrics[['expert5']]);
            expect(metrics['expert6']).toEqual(expectedMetrics[['expert6']]);
            expect(metrics['expert7']).toEqual(expectedMetrics[['expert7']]);
            expect(metrics['expert8']).toEqual(expectedMetrics[['expert8']]);
            expect(metrics['professional1']).toEqual(expectedMetrics[['professional1']]);
            expect(metrics['professional2']).toEqual(expectedMetrics[['professional2']]);
            expect(metrics['professional3']).toEqual(expectedMetrics[['professional3']]);
            expect(metrics['professional4']).toEqual(expectedMetrics[['professional4']]);
            expect(metrics['professional5']).toEqual(expectedMetrics[['professional5']]);
            expect(metrics['master1']).toEqual(expectedMetrics[['master1']]);
            expect(metrics['master2']).toEqual(expectedMetrics[['master2']]);
            expect(metrics['master3']).toEqual(expectedMetrics[['master3']]);
            expect(metrics['master4']).toEqual(expectedMetrics[['master4']]);
            expect(metrics['master5']).toEqual(expectedMetrics[['master5']]);
            expect(metrics['master6']).toEqual(expectedMetrics[['master6']]);
        });

        it('should save the values for the assessment results for metrics when rootScope empty', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
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
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;

            var expectedMetrics = {
                'traveller1': true, 'traveller2': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false, 'artisan6': false,
                'expert1': true, 'expert2': true, 'expert3': true, 'expert4': true, 'expert5': true, 'expert6': true, 'expert7': true, 'expert8': true,
                'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false, 'professional5': false,
                'master1': false, 'master2': false, 'master3': false,  'master4': false,  'master5': false,  'master6': false};

            rootScope.assessmentsQa = {};

            scope.saveAssessments();
            var metrics = rootScope.assessmentsQa['metrics'];

            expect(metrics['traveller1']).toEqual(expectedMetrics[['traveller1']]);
            expect(metrics['traveller2']).toEqual(expectedMetrics[['traveller2']]);
            expect(metrics['artisan1']).toEqual(expectedMetrics[['artisan1']]);
            expect(metrics['artisan2']).toEqual(expectedMetrics[['artisan2']]);
            expect(metrics['artisan3']).toEqual(expectedMetrics[['artisan3']]);
            expect(metrics['artisan4']).toEqual(expectedMetrics[['artisan4']]);
            expect(metrics['artisan5']).toEqual(expectedMetrics[['artisan5']]);
            expect(metrics['artisan6']).toEqual(expectedMetrics[['artisan6']]);
            expect(metrics['expert1']).toEqual(expectedMetrics[['expert1']]);
            expect(metrics['expert2']).toEqual(expectedMetrics[['expert2']]);
            expect(metrics['expert3']).toEqual(expectedMetrics[['expert3']]);
            expect(metrics['expert4']).toEqual(expectedMetrics[['expert4']]);
            expect(metrics['expert5']).toEqual(expectedMetrics[['expert5']]);
            expect(metrics['expert6']).toEqual(expectedMetrics[['expert6']]);
            expect(metrics['expert7']).toEqual(expectedMetrics[['expert7']]);
            expect(metrics['expert8']).toEqual(expectedMetrics[['expert8']]);
            expect(metrics['professional1']).toEqual(expectedMetrics[['professional1']]);
            expect(metrics['professional2']).toEqual(expectedMetrics[['professional2']]);
            expect(metrics['professional3']).toEqual(expectedMetrics[['professional3']]);
            expect(metrics['professional4']).toEqual(expectedMetrics[['professional4']]);
            expect(metrics['professional5']).toEqual(expectedMetrics[['professional5']]);
            expect(metrics['master1']).toEqual(expectedMetrics[['master1']]);
            expect(metrics['master2']).toEqual(expectedMetrics[['master2']]);
            expect(metrics['master3']).toEqual(expectedMetrics[['master3']]);
            expect(metrics['master4']).toEqual(expectedMetrics[['master4']]);
            expect(metrics['master5']).toEqual(expectedMetrics[['master5']]);
            expect(metrics['master6']).toEqual(expectedMetrics[['master6']]);
        });

        it('should save the score for metrics as 1 if no question is answered', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
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
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;

            var expectedMetricsScore = 1;

            scope.saveAssessments();
            var metrics = rootScope.assessmentsQa['metrics'];

            expect(metrics['score']).toEqual(expectedMetricsScore);

        });

        it('should save the score for metrics as 1 if traveller question is answered as yes', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
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
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;

            var expectedMetricsScore = 1;

            scope.saveAssessments();
            var metrics = rootScope.assessmentsQa['metrics'];

            expect(metrics['score']).toEqual(expectedMetricsScore);

        });

        it('should save the score for metrics as 2 if traveller question is answered as no and all the artisan questions answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
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
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;

            var expectedMetricsScore = 2;

            scope.saveAssessments();
            var metrics = rootScope.assessmentsQa['metrics'];

            expect(metrics['score']).toEqual(expectedMetricsScore);

        });

        it('should save the score for metrics as 3 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = false;
            scope.artisan4 = true;
            scope.artisan5 = false;
            scope.artisan6 = true;
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
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;

            var expectedMetricsScore = 3;

            scope.saveAssessments();
            var metrics = rootScope.assessmentsQa['metrics'];

            expect(metrics['score']).toEqual(expectedMetricsScore);

        });

        it('should save the score for metrics as 4 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = false;
            scope.artisan4 = true;
            scope.artisan5 = false;
            scope.artisan6 = true;
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
            scope.master1 = true;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;
            scope.master6 = false;

            var expectedMetricsScore = 4;

            scope.saveAssessments();
            var metrics = rootScope.assessmentsQa['metrics'];

            expect(metrics['score']).toEqual(expectedMetricsScore);

        });

        it('should save the score for metrics as 5 if traveller question is answered as no and all the artisan questions answered as yes' +
            'and the expert questions are answered as yes and the professional questions are answered as yes and master questions' +
            'are answered as yes', function(){
            scope.traveller1 = false;
            scope.traveller2 = false;
            scope.artisan1 = true;
            scope.artisan2 = true;
            scope.artisan3 = false;
            scope.artisan4 = true;
            scope.artisan5 = false;
            scope.artisan6 = true;
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
            scope.master1 = true;
            scope.master2 = true;
            scope.master3 = true;
            scope.master4 = true;
            scope.master5 = true;
            scope.master6 = true;

            var expectedMetricsScore = 5;

            scope.saveAssessments();
            var metrics = rootScope.assessmentsQa['metrics'];

            expect(metrics['score']).toEqual(expectedMetricsScore);

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