'use strict';

describe('continuumAssessmentPlatform.design module', function() {

  beforeEach(module('continuumAssessmentPlatform.design'));

  describe('design controller', function(){

      var controller;
      var scope, rootScope;

      beforeEach(inject(function($controller, $rootScope){
          rootScope = $rootScope;
          scope = rootScope.$new();
          controller = $controller('DesignCtrl', {'$scope': scope, '$rootScope': rootScope});
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

          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
      });

      it('should set the default values based on the rootScope if they are present', inject(function($controller){
          rootScope = {'assessments': {'design': {
              'traveller1': true, 'traveller2': true, 'traveller3': true,
              'artisan1': true, 'artisan2': false,
              'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false,
              'professional1': false, 'professional2': true, 'professional3': false, 'professional4': false, 'professional5': false,
              'master1': true, 'master2': false}}};

          controller = $controller('DesignCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeTruthy();
          expect(scope.traveller2).toBeTruthy();
          expect(scope.traveller3).toBeTruthy();
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
          expect(scope.professional5).toBeFalsy();
          expect(scope.master1).toBeTruthy();
          expect(scope.master2).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
          rootScope = {};

          controller = $controller('DesignCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.traveller3).toBeFalsy();
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
          expect(scope.professional5).toBeFalsy();
          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set with other assessments', inject(function($controller){
          rootScope.assessments = {'coding': {}};

          controller = $controller('DesignCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.traveller3).toBeFalsy();
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
          expect(scope.professional5).toBeFalsy();
          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
      }));

      it('should save the values for the assessment results for software design', function(){
          scope.traveller1 = true;
          scope.traveller2 = true;
          scope.traveller3 = true;
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
          scope.professional5 = false;
          scope.master1 = false;
          scope.master2 = false;

          var expectedDesign = {
              'traveller1': true, 'traveller2': true, 'traveller3': true,
              'artisan1': true, 'artisan2': false,
              'expert1': true, 'expert2': true, 'expert3': false, 'expert4': false,
              'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false, 'professional5': false,
              'master1': false, 'master2': false};

          scope.saveAssessments();
          var design = rootScope.assessments['design'];

          expect(design['traveller1']).toEqual(expectedDesign[['traveller1']]);
          expect(design['traveller2']).toEqual(expectedDesign[['traveller2']]);
          expect(design['traveller3']).toEqual(expectedDesign[['traveller3']]);
          expect(design['artisan1']).toEqual(expectedDesign[['artisan1']]);
          expect(design['artisan2']).toEqual(expectedDesign[['artisan2']]);
          expect(design['expert1']).toEqual(expectedDesign[['expert1']]);
          expect(design['expert2']).toEqual(expectedDesign[['expert2']]);
          expect(design['expert3']).toEqual(expectedDesign[['expert3']]);
          expect(design['expert4']).toEqual(expectedDesign[['expert4']]);
          expect(design['professional1']).toEqual(expectedDesign[['professional1']]);
          expect(design['professional2']).toEqual(expectedDesign[['professional2']]);
          expect(design['professional3']).toEqual(expectedDesign[['professional3']]);
          expect(design['professional4']).toEqual(expectedDesign[['professional4']]);
          expect(design['professional5']).toEqual(expectedDesign[['professional5']]);
          expect(design['master1']).toEqual(expectedDesign[['master1']]);
          expect(design['master2']).toEqual(expectedDesign[['master2']]);
      });

      it('should save the score for software design as 1 if no question is answered', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.artisan1 = false;
          scope.artisan2 = false;
          scope.expert1 = false;
          scope.expert2 = false;
          scope.expert3 = false;
          scope.expert4 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.professional5 = false;
          scope.master1 = false;
          scope.master2 = false;

          var expectedDesignScore = 1;

          scope.saveAssessments();
          var design = rootScope.assessments['design'];

          expect(design['score']).toEqual(expectedDesignScore);
      });

      it('should save the score for software design as 1 if traveller questions answered', function(){
          scope.traveller1 = true;
          scope.traveller2 = true;
          scope.traveller3 = true;
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
          scope.professional5 = false;
          scope.master1 = false;
          scope.master2 = false;

          var expectedDesignScore = 1;

          scope.saveAssessments();
          var design = rootScope.assessments['design'];

          expect(design['score']).toEqual(expectedDesignScore);
      });

      it('should save the score for software design as 2 if appropriate traveller questions not answered and artisan questions answered', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = true;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = false;
          scope.expert4 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.professional5 = false;
          scope.master1 = false;
          scope.master2 = false;

          var expectedDesignScore = 2;

          scope.saveAssessments();
          var design = rootScope.assessments['design'];

          expect(design['score']).toEqual(expectedDesignScore);
      });

      it('should save the score for software design as 3 if expert questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.professional1 = true;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.professional5 = false;
          scope.master1 = false;
          scope.master2 = false;

          var expectedDesignScore = 3;

          scope.saveAssessments();
          var design = rootScope.assessments['design'];

          expect(design['score']).toEqual(expectedDesignScore);
      });

      it('should save the score for software design as 4 if professional questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.professional4 = true;
          scope.professional5 = true;
          scope.master1 = true;
          scope.master2 = false;

          var expectedDesignScore = 4;

          scope.saveAssessments();
          var design = rootScope.assessments['design'];

          expect(design['score']).toEqual(expectedDesignScore);
      });

      it('should save the score for software design as 5 if master questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.professional1 = false;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.professional4 = true;
          scope.professional5 = true;
          scope.master1 = true;
          scope.master2 = true;

          var expectedDesignScore = 5;

          scope.saveAssessments();
          var design = rootScope.assessments['design'];

          expect(design['score']).toEqual(expectedDesignScore);
      });

      it('should save the score for software design as 5 if master questions answered and other questions answered accordingly with other assessments', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.professional1 = false;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.professional4 = true;
          scope.professional5 = true;
          scope.master1 = true;
          scope.master2 = true;

          var expectedDesignScore = 5;
          rootScope.assessments = {'coding': {}};

          scope.saveAssessments();
          var design = rootScope.assessments['design'];

          expect(design['score']).toEqual(expectedDesignScore);
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