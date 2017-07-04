'use strict';

describe('continuumAssessmentPlatform.teaming module', function() {

  beforeEach(module('continuumAssessmentPlatform.teaming'));

  describe('teaming controller', function(){

      var controller;
      var scope, rootScope;

      beforeEach(inject(function($controller, $rootScope){
          rootScope = $rootScope;
          scope = rootScope.$new();
          controller = $controller('TeamingCtrl', {'$scope': scope, '$rootScope': rootScope});
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

          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
      });

      it('should have defaults as false for the master questions', function(){
          expect(scope.master1).toBeDefined();
          expect(scope.master2).toBeDefined();
          expect(scope.master3).toBeDefined();

          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
      });

      it('should set the default values based on the rootScope if they are present', inject(function($controller){
          rootScope = {'assessments': {'teaming': {
              'traveller1': true, 'traveller2': true, 'traveller3': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false,
              'expert1': true, 'expert2': false, 'expert3': false,
              'professional1': false, 'professional2': true,
              'master1': true, 'master2': false, 'master3': false}}};

          controller = $controller('TeamingCtrl', {'$scope': scope, '$rootScope': rootScope});
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
          expect(scope.master1).toBeTruthy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
          rootScope = {};

          controller = $controller('TeamingCtrl', {'$scope': scope, '$rootScope': rootScope});
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
          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set with assessments', inject(function($controller){
          rootScope = {'assessments': {'ci': {}}};

          controller = $controller('TeamingCtrl', {'$scope': scope, '$rootScope': rootScope});
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
          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
      }));

      it('should save the values for the assessment results for teaming', function(){
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
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;

          var expectedTeaming = {
              'traveller1': true, 'traveller2': true, 'traveller3': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false,
              'expert1': true, 'expert2': true, 'expert3': false,
              'professional1': false, 'professional2': false,
              'master1': false, 'master2': false, 'master3': false};

          scope.saveAssessments();
          var teaming = rootScope.assessments['teaming'];

          expect(teaming['traveller1']).toEqual(expectedTeaming[['traveller1']]);
          expect(teaming['traveller2']).toEqual(expectedTeaming[['traveller2']]);
          expect(teaming['traveller3']).toEqual(expectedTeaming[['traveller3']]);
          expect(teaming['artisan1']).toEqual(expectedTeaming[['artisan1']]);
          expect(teaming['artisan2']).toEqual(expectedTeaming[['artisan2']]);
          expect(teaming['artisan3']).toEqual(expectedTeaming[['artisan3']]);
          expect(teaming['expert1']).toEqual(expectedTeaming[['expert1']]);
          expect(teaming['expert2']).toEqual(expectedTeaming[['expert2']]);
          expect(teaming['expert3']).toEqual(expectedTeaming[['expert3']]);
          expect(teaming['professional1']).toEqual(expectedTeaming[['professional1']]);
          expect(teaming['professional2']).toEqual(expectedTeaming[['professional2']]);
          expect(teaming['master1']).toEqual(expectedTeaming[['master1']]);
          expect(teaming['master2']).toEqual(expectedTeaming[['master2']]);
          expect(teaming['master3']).toEqual(expectedTeaming[['master3']]);
      });

      it('should save the score for teaming as 1 if no question is answered', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.artisan1 = false;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.expert1 = false;
          scope.expert2 = false;
          scope.expert3 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;

          var expectedTeamingScore = 1;

          scope.saveAssessments();
          var teaming = rootScope.assessments['teaming'];

          expect(teaming['score']).toEqual(expectedTeamingScore);
      });

      it('should save the score for teaming as 1 if traveller questions answered', function(){
          scope.traveller1 = true;
          scope.traveller2 = true;
          scope.traveller3 = true;
          scope.artisan1 = false;
          scope.artisan2 = true;
          scope.artisan3 = false;
          scope.expert1 = false;
          scope.expert2 = false;
          scope.expert3 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;

          var expectedTeamingScore = 1;

          scope.saveAssessments();
          var teaming = rootScope.assessments['teaming'];

          expect(teaming['score']).toEqual(expectedTeamingScore);
      });

      it('should save the score for teaming as 2 if appropriate traveller questions not answered and artisan questions answered', function(){
          scope.traveller1 = true;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;

          var expectedTeamingScore = 2;

          scope.saveAssessments();
          var teaming = rootScope.assessments['teaming'];

          expect(teaming['score']).toEqual(expectedTeamingScore);
      });

      it('should save the score for teaming as 3 if expert questions answered and other questions answered accordingly', function(){
          scope.traveller1 = true;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.professional1 = true;
          scope.professional2 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;

          var expectedTeamingScore = 3;

          scope.saveAssessments();
          var teaming = rootScope.assessments['teaming'];

          expect(teaming['score']).toEqual(expectedTeamingScore);
      });

      it('should save the score for teaming as 4 if professional questions answered and other questions answered accordingly', function(){
          scope.traveller1 = true;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.master1 = true;
          scope.master2 = false;
          scope.master3 = false;

          var expectedTeamingScore = 4;

          scope.saveAssessments();
          var teaming = rootScope.assessments['teaming'];

          expect(teaming['score']).toEqual(expectedTeamingScore);
      });

      it('should save the score for teaming as 5 if master questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.master1 = true;
          scope.master2 = true;
          scope.master3 = true;

          var expectedTeamingScore = 5;

          scope.saveAssessments();
          var teaming = rootScope.assessments['teaming'];

          expect(teaming['score']).toEqual(expectedTeamingScore);
      });

      it('should save the score for teaming as 5 if master questions answered and other questions answered accordingly with assessments', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.master1 = true;
          scope.master2 = true;
          scope.master3 = true;

          var expectedTeamingScore = 5;
          rootScope.assessments = {'coding': {}};

          scope.saveAssessments();
          var teaming = rootScope.assessments['teaming'];

          expect(teaming['score']).toEqual(expectedTeamingScore);
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