'use strict';

describe('continuumAssessmentPlatform.defect-and-exploratory module', function() {

    beforeEach(module('continuumAssessmentPlatform.defect-and-exploratory'));

    describe('Defect and Exploratory controller', function(){

        var controller;
        var scope, rootScope;

        beforeEach(inject(function($controller, $rootScope){
            rootScope = $rootScope;
            scope = rootScope.$new();
            controller = $controller('DefectAndExploratoryCtrl', {'$scope': scope, '$rootScope': rootScope});
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

            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
        });

        it('should have defaults as false for the expert questions', function(){
            expect(scope.expert1).toBeDefined();
            expect(scope.expert2).toBeDefined();
            expect(scope.expert3).toBeDefined();

            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
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
            expect(scope.master3).toBeDefined();
            expect(scope.master4).toBeDefined();
            expect(scope.master5).toBeDefined();

            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
        });

        it('should set the default values based on the rootScope if they are present', inject(function($controller){
            rootScope = {'assessmentsQaMaM': {'defect-and-exploratory': {
                'traveller1': true, 'traveller2': true, 'traveller3': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false,
                'expert1': true, 'expert2': false, 'expert3': false,
                'professional1': false, 'professional2': true, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false,
                'master1': true, 'master2': false, 'master3': false, 'master4': false,  'master5': false}}};

            controller = $controller('DefectAndExploratoryCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeTruthy();
            expect(scope.traveller2).toBeTruthy();
            expect(scope.traveller3).toBeTruthy();
            expect(scope.artisan1).toBeTruthy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.expert1).toBeTruthy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeTruthy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.professional5).toBeFalsy();
            expect(scope.professional6).toBeFalsy();
            expect(scope.master1).toBeTruthy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
            rootScope = {};

            controller = $controller('DefectAndExploratoryCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.professional5).toBeFalsy();
            expect(scope.professional6).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
        }));

        it('should set the default values based on the initial values if rootScope not set even though there are assessments', inject(function($controller){
            rootScope = {'assessments': {'assessmentsQaMaM': {}}};

            controller = $controller('DefectAndExploratoryCtrl', {'$scope': scope, '$rootScope': rootScope});
            scope.init();
            expect(scope.traveller1).toBeFalsy();
            expect(scope.traveller2).toBeFalsy();
            expect(scope.traveller3).toBeFalsy();
            expect(scope.artisan1).toBeFalsy();
            expect(scope.artisan2).toBeFalsy();
            expect(scope.artisan3).toBeFalsy();
            expect(scope.expert1).toBeFalsy();
            expect(scope.expert2).toBeFalsy();
            expect(scope.expert3).toBeFalsy();
            expect(scope.professional1).toBeFalsy();
            expect(scope.professional2).toBeFalsy();
            expect(scope.professional3).toBeFalsy();
            expect(scope.professional4).toBeFalsy();
            expect(scope.professional5).toBeFalsy();
            expect(scope.professional6).toBeFalsy();
            expect(scope.master1).toBeFalsy();
            expect(scope.master2).toBeFalsy();
            expect(scope.master3).toBeFalsy();
            expect(scope.master4).toBeFalsy();
            expect(scope.master5).toBeFalsy();
        }));

        it('should save the values for the assessment results for defect and exploratory', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.professional6 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;

            var expectedDefectAndExploratory = {
                'traveller1': true, 'traveller2': true, 'traveller3': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false,
                'expert1': true, 'expert2': true, 'expert3': false,
                'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false,
                'master1': false, 'master2': false, 'master3': false, 'master4': false,  'master5': false};

            scope.saveAssessments();
            var defectAndExploratory = rootScope.assessmentsQaMaM['defect-and-exploratory'];

            expect(defectAndExploratory['traveller1']).toEqual(expectedDefectAndExploratory[['traveller1']]);
            expect(defectAndExploratory['artisan1']).toEqual(expectedDefectAndExploratory[['artisan1']]);
            expect(defectAndExploratory['artisan2']).toEqual(expectedDefectAndExploratory[['artisan2']]);
            expect(defectAndExploratory['expert1']).toEqual(expectedDefectAndExploratory[['expert1']]);
            expect(defectAndExploratory['expert2']).toEqual(expectedDefectAndExploratory[['expert2']]);
            expect(defectAndExploratory['expert3']).toEqual(expectedDefectAndExploratory[['expert3']]);
            expect(defectAndExploratory['expert4']).toEqual(expectedDefectAndExploratory[['expert4']]);
            expect(defectAndExploratory['professional1']).toEqual(expectedDefectAndExploratory[['professional1']]);
            expect(defectAndExploratory['professional2']).toEqual(expectedDefectAndExploratory[['professional2']]);
            expect(defectAndExploratory['professional3']).toEqual(expectedDefectAndExploratory[['professional3']]);
            expect(defectAndExploratory['professional4']).toEqual(expectedDefectAndExploratory[['professional4']]);
            expect(defectAndExploratory['master1']).toEqual(expectedDefectAndExploratory[['master1']]);
            expect(defectAndExploratory['master2']).toEqual(expectedDefectAndExploratory[['master2']]);
            expect(defectAndExploratory['master3']).toEqual(expectedDefectAndExploratory[['master3']]);
            expect(defectAndExploratory['master4']).toEqual(expectedDefectAndExploratory[['master4']]);

        });

        it('should save the values for the assessment results for defect and exploratory', function(){
            scope.traveller1 = true;
            scope.traveller2 = true;
            scope.traveller3 = true;
            scope.artisan1 = true;
            scope.artisan2 = false;
            scope.artisan3 = false;
            scope.expert1 = true;
            scope.expert2 = true;
            scope.expert3 = false;
            scope.professional1 = false;
            scope.professional2 = false;
            scope.professional3 = false;
            scope.professional4 = false;
            scope.professional5 = false;
            scope.professional6 = false;
            scope.master1 = false;
            scope.master2 = false;
            scope.master3 = false;
            scope.master4 = false;
            scope.master5 = false;

            var expectedDefectAndExploratory = {
                'traveller1': true, 'traveller2': true, 'traveller3': true,
                'artisan1': true, 'artisan2': false, 'artisan3': false,
                'expert1': true, 'expert2': true, 'expert3': false,
                'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false,
                'master1': false, 'master2': false, 'master3': false, 'master4': false,  'master5': false};

            rootScope.assessmentsQaMaM = {};

            scope.saveAssessments();
            var defectAndExploratory = rootScope.assessmentsQaMaM['defect-and-exploratory'];

            expect(defectAndExploratory['traveller1']).toEqual(expectedDefectAndExploratory[['traveller1']]);
            expect(defectAndExploratory['artisan1']).toEqual(expectedDefectAndExploratory[['artisan1']]);
            expect(defectAndExploratory['artisan2']).toEqual(expectedDefectAndExploratory[['artisan2']]);
            expect(defectAndExploratory['expert1']).toEqual(expectedDefectAndExploratory[['expert1']]);
            expect(defectAndExploratory['expert2']).toEqual(expectedDefectAndExploratory[['expert2']]);
            expect(defectAndExploratory['expert3']).toEqual(expectedDefectAndExploratory[['expert3']]);
            expect(defectAndExploratory['expert4']).toEqual(expectedDefectAndExploratory[['expert4']]);
            expect(defectAndExploratory['professional1']).toEqual(expectedDefectAndExploratory[['professional1']]);
            expect(defectAndExploratory['professional2']).toEqual(expectedDefectAndExploratory[['professional2']]);
            expect(defectAndExploratory['professional3']).toEqual(expectedDefectAndExploratory[['professional3']]);
            expect(defectAndExploratory['professional4']).toEqual(expectedDefectAndExploratory[['professional4']]);
            expect(defectAndExploratory['master1']).toEqual(expectedDefectAndExploratory[['master1']]);
            expect(defectAndExploratory['master2']).toEqual(expectedDefectAndExploratory[['master2']]);
            expect(defectAndExploratory['master3']).toEqual(expectedDefectAndExploratory[['master3']]);
            expect(defectAndExploratory['master4']).toEqual(expectedDefectAndExploratory[['master4']]);

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