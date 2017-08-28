'use strict';

describe('continuumAssessmentPlatform.test-criteria module', function() {

    beforeEach(module('continuumAssessmentPlatform.test-criteria'));

    describe('Test Criteria controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('TestCriteriaCtrl', {'$scope': scope, '$rootScope': rootScope});
        }));

        it('should be defined', function() {
            expect(controller).toBeDefined();
        });

        it('should have defaults as false for the traveller questions', function(){
            expect(scope.traveller1).toBeDefined();
            expect(scope.traveller2).toBeDefined();
            expect(scope.traveller3).toBeDefined();

            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
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

            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.expert4).toBeFalsy();
            expect(scope.expert5).toBeFalsy();
            expect(scope.expert6).toBeFalsy();
        });

        it('should have defaults as false for the professional questions', function(){
            expect(scope.professional1).toBeDefined();
            expect(scope.professional2).toBeDefined();
            expect(scope.professional3).toBeDefined();
            expect(scope.professional4).toBeDefined();
            expect(scope.professional5).toBeDefined();
            expect(scope.professional6).toBeDefined();

            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.professional5).toBeFalsy();
            expect(scope.professional6).toBeFalsy();
        });

        it('should have defaults as false for the master questions', function(){
            expect(scope.master1).toBeDefined();
            expect(scope.master2).toBeDefined();

            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsQaMaM': {'test-criteria': {
                'traveller1': true, 'traveller2': true, 'traveller3': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false,
                'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false,
                'professional1': false, 'professional2': true, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false,
                'master1': true, 'master2': false}}};

            controller = $controller('TestCriteriaCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
            expect(scope.traveller3).toBeTruthy();
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
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeTruthy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.professional5).toBeFalsy();
            expect(scope.professional6).toBeFalsy();
            expect(scope.master1).toBeTruthy();
            expect(scope.master2).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('TestCriteriaCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
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
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.professional5).toBeFalsy();
            expect(scope.professional6).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessments': {'assessmentsQaMaM': {}}};

            controller = $controller('TestCriteriaCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
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
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.professional5).toBeFalsy();
            expect(scope.professional6).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
        }));

        it('should save the values for the assessment results for test criteria', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.expert6 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.professional6 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedTestCriteria = {
                'traveller1': true, 'traveller2': true, 'traveller3': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false,
                'expert1': true, 'expert2': true, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false,
                'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false,
                'master1': false, 'master2': false};

            scope.saveAssessments();
            var testCriteria = rootScope.assessmentsQaMaM['test-criteria'];

            expect(testCriteria['traveller1']).toEqual(expectedTestCriteria[['traveller1']]);
            expect(testCriteria['traveller2']).toEqual(expectedTestCriteria[['traveller2']]);
            expect(testCriteria['traveller3']).toEqual(expectedTestCriteria[['traveller3']]);
            expect(testCriteria['artisan1']).toEqual(expectedTestCriteria[['artisan1']]);
            expect(testCriteria['artisan2']).toEqual(expectedTestCriteria[['artisan2']]);
            expect(testCriteria['artisan3']).toEqual(expectedTestCriteria[['artisan3']]);
            expect(testCriteria['artisan4']).toEqual(expectedTestCriteria[['artisan4']]);
            expect(testCriteria['artisan5']).toEqual(expectedTestCriteria[['artisan5']]);
            expect(testCriteria['expert1']).toEqual(expectedTestCriteria[['expert1']]);
            expect(testCriteria['expert2']).toEqual(expectedTestCriteria[['expert2']]);
            expect(testCriteria['expert3']).toEqual(expectedTestCriteria[['expert3']]);
            expect(testCriteria['expert4']).toEqual(expectedTestCriteria[['expert4']]);
            expect(testCriteria['expert5']).toEqual(expectedTestCriteria[['expert5']]);
            expect(testCriteria['expert6']).toEqual(expectedTestCriteria[['expert6']]);
            expect(testCriteria['professional1']).toEqual(expectedTestCriteria[['professional1']]);
            expect(testCriteria['professional2']).toEqual(expectedTestCriteria[['professional2']]);
            expect(testCriteria['professional3']).toEqual(expectedTestCriteria[['professional3']]);
            expect(testCriteria['professional4']).toEqual(expectedTestCriteria[['professional4']]);
            expect(testCriteria['professional5']).toEqual(expectedTestCriteria[['professional5']]);
            expect(testCriteria['professional6']).toEqual(expectedTestCriteria[['professional6']]);
            expect(testCriteria['master1']).toEqual(expectedTestCriteria[['master1']]);
            expect(testCriteria['master2']).toEqual(expectedTestCriteria[['master2']]);

        });

        it('should save the values for the assessment results for test criteria when rootScope empty', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.artisan4 = false;
            scope.artisan5 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = false;
            scope.expert4 = false;
            scope.expert5 = false;
            scope.expert6 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.professional6 = false;
            scope.master1 = false;
            scope.master2 = false;

            var expectedTestCriteria = {
                'traveller1': true, 'traveller2': true, 'traveller3': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false,
                'expert1': true, 'expert2': true, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false,
                'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false,
                'master1': false, 'master2': false};

            rootScope.assessmentsQaMaM = {};

            scope.saveAssessments();
            var testCriteria = rootScope.assessmentsQaMaM['test-criteria'];

            expect(testCriteria['traveller1']).toEqual(expectedTestCriteria[['traveller1']]);
            expect(testCriteria['traveller2']).toEqual(expectedTestCriteria[['traveller2']]);
            expect(testCriteria['traveller3']).toEqual(expectedTestCriteria[['traveller3']]);
            expect(testCriteria['artisan1']).toEqual(expectedTestCriteria[['artisan1']]);
            expect(testCriteria['artisan2']).toEqual(expectedTestCriteria[['artisan2']]);
            expect(testCriteria['artisan3']).toEqual(expectedTestCriteria[['artisan3']]);
            expect(testCriteria['artisan4']).toEqual(expectedTestCriteria[['artisan4']]);
            expect(testCriteria['artisan5']).toEqual(expectedTestCriteria[['artisan5']]);
            expect(testCriteria['expert1']).toEqual(expectedTestCriteria[['expert1']]);
            expect(testCriteria['expert2']).toEqual(expectedTestCriteria[['expert2']]);
            expect(testCriteria['expert3']).toEqual(expectedTestCriteria[['expert3']]);
            expect(testCriteria['expert4']).toEqual(expectedTestCriteria[['expert4']]);
            expect(testCriteria['expert5']).toEqual(expectedTestCriteria[['expert5']]);
            expect(testCriteria['expert6']).toEqual(expectedTestCriteria[['expert6']]);
            expect(testCriteria['professional1']).toEqual(expectedTestCriteria[['professional1']]);
            expect(testCriteria['professional2']).toEqual(expectedTestCriteria[['professional2']]);
            expect(testCriteria['professional3']).toEqual(expectedTestCriteria[['professional3']]);
            expect(testCriteria['professional4']).toEqual(expectedTestCriteria[['professional4']]);
            expect(testCriteria['professional5']).toEqual(expectedTestCriteria[['professional5']]);
            expect(testCriteria['professional6']).toEqual(expectedTestCriteria[['professional6']]);
            expect(testCriteria['master1']).toEqual(expectedTestCriteria[['master1']]);
            expect(testCriteria['master2']).toEqual(expectedTestCriteria[['master2']]);

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