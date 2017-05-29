'use strict';

describe('continuumAssessmentPlatform.environments module', function() {

  beforeEach(module('continuumAssessmentPlatform.environments'));

  describe('environments controller', function(){

      var controller;
      var scope, rootScope;

      beforeEach(inject(function($controller, $rootScope){
          rootScope = $rootScope;
          scope = rootScope.$new();
          controller = $controller('EnvironmentsCtrl', {'$scope': scope, '$rootScope': rootScope});
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

          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.traveller3).toBeFalsy();
          expect(scope.traveller4).toBeFalsy();
          expect(scope.traveller5).toBeFalsy();
          expect(scope.traveller6).toBeFalsy();
          expect(scope.traveller7).toBeFalsy();
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

          expect(scope.expert1).toBeFalsy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert3).toBeFalsy();
          expect(scope.expert4).toBeFalsy();
          expect(scope.expert5).toBeFalsy();
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
          rootScope = {'assessments': {'environments': {
              'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true, 'traveller7': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false, 'artisan6': false, 'artisan7': false,
              'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false,
              'professional1': false, 'professional2': true, 'professional3': true, 'professional4': true, 'professional5': true, 'professional6': true,
              'master1': true, 'master2': false, 'master3': false, 'master4': false, 'master5': false, 'master6': false, 'master7': false, 'master8': false, 'master9': false}}};

          controller = $controller('EnvironmentsCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeTruthy();
          expect(scope.traveller2).toBeTruthy();
          expect(scope.traveller3).toBeTruthy();
          expect(scope.traveller4).toBeTruthy();
          expect(scope.traveller5).toBeTruthy();
          expect(scope.traveller6).toBeTruthy();
          expect(scope.traveller7).toBeTruthy();
          expect(scope.artisan1).toBeTruthy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
          expect(scope.artisan4).toBeFalsy();
          expect(scope.artisan5).toBeFalsy();
          expect(scope.artisan6).toBeFalsy();
          expect(scope.artisan7).toBeFalsy();
          expect(scope.expert1).toBeTruthy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert3).toBeFalsy();
          expect(scope.expert4).toBeFalsy();
          expect(scope.expert5).toBeFalsy();
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeTruthy();
          expect(scope.professional3).toBeTruthy();
          expect(scope.professional4).toBeTruthy();
          expect(scope.professional5).toBeTruthy();
          expect(scope.professional6).toBeTruthy();
          expect(scope.master1).toBeTruthy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
          expect(scope.master5).toBeFalsy();
          expect(scope.master6).toBeFalsy();
          expect(scope.master7).toBeFalsy();
          expect(scope.master8).toBeFalsy();
          expect(scope.master9).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
          rootScope = {};

          controller = $controller('EnvironmentsCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.traveller3).toBeFalsy();
          expect(scope.traveller4).toBeFalsy();
          expect(scope.traveller5).toBeFalsy();
          expect(scope.traveller6).toBeFalsy();
          expect(scope.traveller7).toBeFalsy();
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
          expect(scope.master6).toBeFalsy();
          expect(scope.master7).toBeFalsy();
          expect(scope.master8).toBeFalsy();
          expect(scope.master9).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set with assessments', inject(function($controller){
          rootScope = {'assessments': {'ci': {}}};

          controller = $controller('EnvironmentsCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.traveller3).toBeFalsy();
          expect(scope.traveller4).toBeFalsy();
          expect(scope.traveller5).toBeFalsy();
          expect(scope.traveller6).toBeFalsy();
          expect(scope.traveller7).toBeFalsy();
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
          expect(scope.master6).toBeFalsy();
          expect(scope.master7).toBeFalsy();
          expect(scope.master8).toBeFalsy();
          expect(scope.master9).toBeFalsy();
      }));

      it('should save the values for the assessment results for quality assurance', function(){
          scope.traveller1 = true;
          scope.traveller2 = true;
          scope.traveller3 = true;
          scope.traveller4 = true;
          scope.traveller5 = true;
          scope.traveller6 = true;
          scope.traveller7 = true;
          scope.artisan1 = true;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.artisan4 = false;
          scope.artisan5 = false;
          scope.artisan6 = false;
          scope.artisan7 = false;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
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
          scope.master6 = false;
          scope.master7 = false;
          scope.master8 = false;
          scope.master9 = false;

          var expectedEnvironments = {
              'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true, 'traveller5': true, 'traveller6': true, 'traveller7': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false, 'artisan5': false, 'artisan6': false, 'artisan7': false,
              'expert1': true, 'expert2': true, 'expert3': true, 'expert4': true, 'expert5': true,
              'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false, 'professional5': false, 'professional6': false,
              'master1': false, 'master2': false, 'master3': false, 'master4': false, 'master5': false, 'master6': false, 'master7': false, 'master8': false, 'master9': false};

          scope.saveAssessments();
          var environments = rootScope.assessments['environments'];

          expect(environments['traveller1']).toEqual(expectedEnvironments[['traveller1']]);
          expect(environments['traveller2']).toEqual(expectedEnvironments[['traveller2']]);
          expect(environments['traveller3']).toEqual(expectedEnvironments[['traveller3']]);
          expect(environments['traveller4']).toEqual(expectedEnvironments[['traveller4']]);
          expect(environments['traveller5']).toEqual(expectedEnvironments[['traveller5']]);
          expect(environments['traveller6']).toEqual(expectedEnvironments[['traveller6']]);
          expect(environments['traveller7']).toEqual(expectedEnvironments[['traveller7']]);
          expect(environments['artisan1']).toEqual(expectedEnvironments[['artisan1']]);
          expect(environments['artisan2']).toEqual(expectedEnvironments[['artisan2']]);
          expect(environments['artisan3']).toEqual(expectedEnvironments[['artisan3']]);
          expect(environments['artisan4']).toEqual(expectedEnvironments[['artisan4']]);
          expect(environments['artisan5']).toEqual(expectedEnvironments[['artisan5']]);
          expect(environments['artisan6']).toEqual(expectedEnvironments[['artisan6']]);
          expect(environments['artisan7']).toEqual(expectedEnvironments[['artisan7']]);
          expect(environments['expert1']).toEqual(expectedEnvironments[['expert1']]);
          expect(environments['expert2']).toEqual(expectedEnvironments[['expert2']]);
          expect(environments['expert3']).toEqual(expectedEnvironments[['expert3']]);
          expect(environments['expert4']).toEqual(expectedEnvironments[['expert4']]);
          expect(environments['expert5']).toEqual(expectedEnvironments[['expert5']]);
          expect(environments['professional1']).toEqual(expectedEnvironments[['professional1']]);
          expect(environments['professional2']).toEqual(expectedEnvironments[['professional2']]);
          expect(environments['professional3']).toEqual(expectedEnvironments[['professional3']]);
          expect(environments['professional4']).toEqual(expectedEnvironments[['professional4']]);
          expect(environments['professional5']).toEqual(expectedEnvironments[['professional5']]);
          expect(environments['professional6']).toEqual(expectedEnvironments[['professional6']]);
          expect(environments['master1']).toEqual(expectedEnvironments[['master1']]);
          expect(environments['master2']).toEqual(expectedEnvironments[['master2']]);
          expect(environments['master3']).toEqual(expectedEnvironments[['master3']]);
          expect(environments['master4']).toEqual(expectedEnvironments[['master4']]);
          expect(environments['master5']).toEqual(expectedEnvironments[['master5']]);
          expect(environments['master6']).toEqual(expectedEnvironments[['master6']]);
          expect(environments['master7']).toEqual(expectedEnvironments[['master7']]);
          expect(environments['master8']).toEqual(expectedEnvironments[['master8']]);
          expect(environments['master9']).toEqual(expectedEnvironments[['master9']]);
      });

      it('should save the score for environments as 0 if no question is answered', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.traveller5 = false;
          scope.traveller6 = false;
          scope.traveller7 = false;
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
          scope.master6 = false;
          scope.master7 = false;
          scope.master8 = false;
          scope.master9 = false;

          var expectedEnvironmentsScore = 0;

          scope.saveAssessments();
          var environments = rootScope.assessments['environments'];

          expect(environments['score']).toEqual(expectedEnvironmentsScore);
      });

      it('should save the score for environments as 1 if traveller questions answered', function(){
          scope.traveller1 = true;
          scope.traveller2 = true;
          scope.traveller3 = true;
          scope.traveller4 = true;
          scope.traveller5 = true;
          scope.traveller6 = true;
          scope.traveller7 = true;
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
          scope.master6 = false;
          scope.master7 = false;
          scope.master8 = false;
          scope.master9 = false;

          var expectedEnvironmentsScore = 1;

          scope.saveAssessments();
          var environments = rootScope.assessments['environments'];

          expect(environments['score']).toEqual(expectedEnvironmentsScore);
      });

      it('should save the score for environments as 2 if appropriate traveller questions not answered and artisan questions answered', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.traveller5 = false;
          scope.traveller6 = false;
          scope.traveller7 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.artisan4 = true;
          scope.artisan5 = true;
          scope.artisan6 = true;
          scope.artisan7 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = false;
          scope.expert4 = false;
          scope.expert5 = false;
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
          scope.master6 = false;
          scope.master7 = false;
          scope.master8 = false;
          scope.master9 = false;

          var expectedEnvironmentsScore = 2;

          scope.saveAssessments();
          var environments = rootScope.assessments['environments'];

          expect(environments['score']).toEqual(expectedEnvironmentsScore);
      });

      it('should save the score for environments as 3 if expert questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.traveller5 = false;
          scope.traveller6 = false;
          scope.traveller7 = false;
          scope.artisan1 = false;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.artisan4 = true;
          scope.artisan5 = false;
          scope.artisan6 = true;
          scope.artisan7 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.professional1 = true;
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
          scope.master6 = false;
          scope.master7 = false;
          scope.master8 = false;
          scope.master9 = false;

          var expectedEnvironmentsScore = 3;

          scope.saveAssessments();
          var environments = rootScope.assessments['environments'];

          expect(environments['score']).toEqual(expectedEnvironmentsScore);
      });

      it('should save the score for environments as 4 if professional questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.traveller5 = false;
          scope.traveller6 = false;
          scope.traveller7 = false;
          scope.artisan1 = false;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.artisan4 = true;
          scope.artisan5 = false;
          scope.artisan6 = true;
          scope.artisan7 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.professional4 = true;
          scope.professional5 = true;
          scope.professional6 = true;
          scope.master1 = true;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;
          scope.master5 = false;
          scope.master6 = false;
          scope.master7 = false;
          scope.master8 = false;
          scope.master9 = false;

          var expectedEnvironmentsScore = 4;

          scope.saveAssessments();
          var environments = rootScope.assessments['environments'];

          expect(environments['score']).toEqual(expectedEnvironmentsScore);
      });

      it('should save the score for environments as 5 if master questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.traveller5 = false;
          scope.traveller6 = false;
          scope.traveller7 = false;
          scope.artisan1 = false;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.artisan4 = true;
          scope.artisan5 = false;
          scope.artisan6 = true;
          scope.artisan7 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.professional4 = true;
          scope.professional5 = true;
          scope.professional6 = true;
          scope.master1 = true;
          scope.master2 = true;
          scope.master3 = true;
          scope.master4 = true;
          scope.master5 = true;
          scope.master6 = true;
          scope.master7 = true;
          scope.master8 = true;
          scope.master9 = true;

          var expectedEnvironmentsScore = 5;

          scope.saveAssessments();
          var environments = rootScope.assessments['environments'];

          expect(environments['score']).toEqual(expectedEnvironmentsScore);
      });

      it('should save the score for environments as 5 if master questions answered and other questions answered accordingly with assessments', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.traveller5 = false;
          scope.traveller6 = false;
          scope.traveller7 = false;
          scope.artisan1 = false;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.artisan4 = true;
          scope.artisan5 = false;
          scope.artisan6 = true;
          scope.artisan7 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.professional4 = true;
          scope.professional5 = true;
          scope.professional6 = true;
          scope.master1 = true;
          scope.master2 = true;
          scope.master3 = true;
          scope.master4 = true;
          scope.master5 = true;
          scope.master6 = true;
          scope.master7 = true;
          scope.master8 = true;
          scope.master9 = true;

          var expectedEnvironmentsScore = 5;
          rootScope.assessments = {'coding': {}};

          scope.saveAssessments();
          var environments = rootScope.assessments['environments'];

          expect(environments['score']).toEqual(expectedEnvironmentsScore);
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