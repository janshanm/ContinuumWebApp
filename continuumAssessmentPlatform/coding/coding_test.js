'use strict';

describe('continuumAssessmentPlatform.coding module', function() {

  beforeEach(module('continuumAssessmentPlatform.coding'));

  describe('coding controller', function(){

      var controller;
      var scope, rootScope;

      beforeEach(inject(function($controller, $rootScope){
          rootScope = $rootScope;
          scope = rootScope.$new();
          controller = $controller('CodingCtrl', {'$scope': scope, '$rootScope': rootScope});
      }));

      it('should be defined', function() {
          expect(controller).toBeDefined();
      });

      it('should have defaults as false for the traveller questions', function(){
          expect(scope.traveller1).toBeDefined();
          expect(scope.traveller1).toBeFalsy();
      });

      it('should have defaults as false for the artisan questions', function(){
          expect(scope.artisan1).toBeDefined();
          expect(scope.artisan2).toBeDefined();

          expect(scope.artisan1).toBeFalsy();
          expect(scope.artisan2).toBeFalsy();
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
          expect(scope.professional4).toBeDefined();

          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.professional4).toBeFalsy();
      });

      it('should have defaults as false for the master questions', function(){
          expect(scope.master1).toBeDefined();
          expect(scope.master2).toBeDefined();
          expect(scope.master3).toBeDefined();
          expect(scope.master4).toBeDefined();

          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
      });

      it('should set the default values based on the rootScope if they are present', inject(function($controller){
          rootScope = {'assessments': {'coding': {
              'traveller1': true,
              'artisan1': true, 'artisan2': false,
              'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false,
              'professional1': false, 'professional2': true, 'professional3': false, 'professional4': false,
              'master1': true, 'master2': false, 'master3': false, 'master4': false}}};

          controller = $controller('CodingCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeTruthy();
          expect(scope.artisan1).toBeTruthy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.expert1).toBeTruthy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert3).toBeFalsy();
          expect(scope.expert4).toBeFalsy();
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeTruthy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.professional4).toBeFalsy();
          expect(scope.master1).toBeTruthy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
          rootScope = {};

          controller = $controller('CodingCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeFalsy();
          expect(scope.artisan1).toBeFalsy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.expert1).toBeFalsy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert3).toBeFalsy();
          expect(scope.expert4).toBeFalsy();
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.professional4).toBeFalsy();
          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
      }));



      it('should save the values for the assessment results for coding', function(){
          scope.traveller1 = true;
          scope.artisan1 = true;
          scope.artisan2 = false;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = false;
          scope.expert4 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedCoding = {
              'traveller1': true,
              'artisan1': true, 'artisan2': false,
              'expert1': true, 'expert2': true, 'expert3': false, 'expert4': false,
              'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false,
              'master1': false, 'master2': false, 'master3': false, 'master4': false};

          scope.saveAssessments();
          var coding = rootScope.assessments['coding'];

          expect(coding['traveller1']).toEqual(expectedCoding[['traveller1']]);
          expect(coding['artisan1']).toEqual(expectedCoding[['artisan1']]);
          expect(coding['artisan2']).toEqual(expectedCoding[['artisan2']]);
          expect(coding['expert1']).toEqual(expectedCoding[['expert1']]);
          expect(coding['expert2']).toEqual(expectedCoding[['expert2']]);
          expect(coding['expert3']).toEqual(expectedCoding[['expert3']]);
          expect(coding['expert4']).toEqual(expectedCoding[['expert4']]);
          expect(coding['professional1']).toEqual(expectedCoding[['professional1']]);
          expect(coding['professional2']).toEqual(expectedCoding[['professional2']]);
          expect(coding['professional3']).toEqual(expectedCoding[['professional3']]);
          expect(coding['professional4']).toEqual(expectedCoding[['professional4']]);
          expect(coding['master1']).toEqual(expectedCoding[['master1']]);
          expect(coding['master2']).toEqual(expectedCoding[['master2']]);
          expect(coding['master3']).toEqual(expectedCoding[['master3']]);
          expect(coding['master4']).toEqual(expectedCoding[['master4']]);

      });

  });
});