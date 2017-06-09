'use strict';

describe('continuumAssessmentPlatform.featureteams module', function() {

  beforeEach(module('continuumAssessmentPlatform.featureteams'));

  describe('featureTeams controller', function(){

      var controller;
      var scope, rootScope;

      beforeEach(inject(function($controller, $rootScope){
          rootScope = $rootScope;
          scope = rootScope.$new();
          controller = $controller('FeatureTeamsCtrl', {'$scope': scope, '$rootScope': rootScope});
      }));

      it('should be defined', function() {
          expect(controller).toBeDefined();
      });

      it('should have defaults as false for the traveller questions', function(){
          expect(scope.traveller1).toBeDefined();
          expect(scope.traveller2).toBeDefined();
          expect(scope.traveller3).toBeDefined();
          expect(scope.traveller4).toBeDefined();

          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.traveller3).toBeFalsy();
          expect(scope.traveller4).toBeFalsy();
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

          expect(scope.expert1).toBeFalsy();
          expect(scope.expert2).toBeFalsy();
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

          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
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
          rootScope = {'assessments': {'featureTeams': {
              'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false,
              'expert1': true, 'expert2': false, 'expert3': false, 'expert4': false, 'expert5': false, 'expert6': false,
              'professional1': false, 'professional2': true, 'professional3': true,
              'master1': true, 'master2': false, 'master3': false, 'master4': false}}};

          controller = $controller('FeatureTeamsCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeTruthy();
          expect(scope.traveller2).toBeTruthy();
          expect(scope.traveller3).toBeTruthy();
          expect(scope.traveller4).toBeTruthy();
          expect(scope.artisan1).toBeTruthy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
          expect(scope.expert1).toBeTruthy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert3).toBeFalsy();
          expect(scope.expert4).toBeFalsy();
          expect(scope.expert5).toBeFalsy();
          expect(scope.expert6).toBeFalsy();
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeTruthy();
          expect(scope.professional3).toBeTruthy();
          expect(scope.master1).toBeTruthy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
          rootScope = {};

          controller = $controller('FeatureTeamsCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.traveller3).toBeFalsy();
          expect(scope.traveller4).toBeFalsy();
          expect(scope.artisan1).toBeFalsy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
          expect(scope.expert1).toBeFalsy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert3).toBeFalsy();
          expect(scope.expert4).toBeFalsy();
          expect(scope.expert5).toBeFalsy();
          expect(scope.expert6).toBeFalsy();
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set with assessments', inject(function($controller){
          rootScope = {'assessments': {'ci': {}}};

          controller = $controller('FeatureTeamsCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.traveller3).toBeFalsy();
          expect(scope.traveller4).toBeFalsy();
          expect(scope.artisan1).toBeFalsy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
          expect(scope.expert1).toBeFalsy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.expert3).toBeFalsy();
          expect(scope.expert4).toBeFalsy();
          expect(scope.expert5).toBeFalsy();
          expect(scope.expert6).toBeFalsy();
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
      }));

      it('should save the values for the assessment results for quality assurance', function(){
          scope.traveller1 = true;
          scope.traveller2 = true;
          scope.traveller3 = true;
          scope.traveller4 = true;
          scope.artisan1 = true;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.expert6 = true;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedFeatureTeams = {
              'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false,
              'expert1': true, 'expert2': true, 'expert3': true, 'expert4': true, 'expert5': true, 'expert6': true,
              'professional1': false, 'professional2': false, 'professional3': false,
              'master1': false, 'master2': false, 'master3': false, 'master4': false};

          scope.saveAssessments();
          var featureTeams = rootScope.assessments['featureTeams'];

          expect(featureTeams['traveller1']).toEqual(expectedFeatureTeams[['traveller1']]);
          expect(featureTeams['traveller2']).toEqual(expectedFeatureTeams[['traveller2']]);
          expect(featureTeams['traveller3']).toEqual(expectedFeatureTeams[['traveller3']]);
          expect(featureTeams['traveller4']).toEqual(expectedFeatureTeams[['traveller4']]);
          expect(featureTeams['artisan1']).toEqual(expectedFeatureTeams[['artisan1']]);
          expect(featureTeams['artisan2']).toEqual(expectedFeatureTeams[['artisan2']]);
          expect(featureTeams['artisan3']).toEqual(expectedFeatureTeams[['artisan3']]);
          expect(featureTeams['expert1']).toEqual(expectedFeatureTeams[['expert1']]);
          expect(featureTeams['expert2']).toEqual(expectedFeatureTeams[['expert2']]);
          expect(featureTeams['expert3']).toEqual(expectedFeatureTeams[['expert3']]);
          expect(featureTeams['expert4']).toEqual(expectedFeatureTeams[['expert4']]);
          expect(featureTeams['expert5']).toEqual(expectedFeatureTeams[['expert5']]);
          expect(featureTeams['expert6']).toEqual(expectedFeatureTeams[['expert6']]);
          expect(featureTeams['professional1']).toEqual(expectedFeatureTeams[['professional1']]);
          expect(featureTeams['professional2']).toEqual(expectedFeatureTeams[['professional2']]);
          expect(featureTeams['professional3']).toEqual(expectedFeatureTeams[['professional3']]);
          expect(featureTeams['master1']).toEqual(expectedFeatureTeams[['master1']]);
          expect(featureTeams['master2']).toEqual(expectedFeatureTeams[['master2']]);
          expect(featureTeams['master3']).toEqual(expectedFeatureTeams[['master3']]);
          expect(featureTeams['master4']).toEqual(expectedFeatureTeams[['master4']]);
      });

      it('should save the score for feature teams as 0 if no question is answered', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.artisan1 = false;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.expert1 = false;
          scope.expert2 = false;
          scope.expert3 = false;
          scope.expert4 = false;
          scope.expert5 = false;
          scope.expert6 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedFeatureTeamsScore = 0;

          scope.saveAssessments();
          var featureTeams = rootScope.assessments['featureTeams'];

          expect(featureTeams['score']).toEqual(expectedFeatureTeamsScore);
      });

      it('should save the score for feature teams as 1 if traveller questions answered', function(){
          scope.traveller1 = true;
          scope.traveller2 = true;
          scope.traveller3 = true;
          scope.traveller4 = true;
          scope.artisan1 = true;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.expert1 = false;
          scope.expert2 = false;
          scope.expert3 = false;
          scope.expert4 = false;
          scope.expert5 = false;
          scope.expert6 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedFeatureTeamsScore = 1;

          scope.saveAssessments();
          var featureTeams = rootScope.assessments['featureTeams'];

          expect(featureTeams['score']).toEqual(expectedFeatureTeamsScore);
      });

      it('should save the score for feature teams as 2 if appropriate traveller questions not answered and artisan questions answered', function(){
          scope.traveller1 = true;
          scope.traveller2 = true;
          scope.traveller3 = true;
          scope.traveller4 = true;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = false;
          scope.expert3 = false;
          scope.expert4 = false;
          scope.expert5 = false;
          scope.expert6 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedFeatureTeamsScore = 2;

          scope.saveAssessments();
          var featureTeams = rootScope.assessments['featureTeams'];

          expect(featureTeams['score']).toEqual(expectedFeatureTeamsScore);
      });

      it('should save the score for feature teams as 3 if expert questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.artisan1 = false;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.expert6 = true;
          scope.professional1 = true;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedFeatureTeamsScore = 3;

          scope.saveAssessments();
          var featureTeams = rootScope.assessments['featureTeams'];

          expect(featureTeams['score']).toEqual(expectedFeatureTeamsScore);
      });

      it('should save the score for feature teams as 4 if professional questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.artisan1 = false;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.expert6 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.master1 = true;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;

          var expectedFeatureTeamsScore = 4;

          scope.saveAssessments();
          var featureTeams = rootScope.assessments['featureTeams'];

          expect(featureTeams['score']).toEqual(expectedFeatureTeamsScore);
      });

      it('should save the score for environments as 5 if master questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.artisan1 = false;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.expert6 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.master1 = true;
          scope.master2 = true;
          scope.master3 = true;
          scope.master4 = true;

          var expectedFeatureTeamsScore = 5;

          scope.saveAssessments();
          var featureTeams = rootScope.assessments['featureTeams'];

          expect(featureTeams['score']).toEqual(expectedFeatureTeamsScore);
      });

      it('should save the score for environments as 5 if master questions answered and other questions answered accordingly with assessments', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.artisan1 = false;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.expert3 = true;
          scope.expert4 = true;
          scope.expert5 = true;
          scope.expert6 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.master1 = true;
          scope.master2 = true;
          scope.master3 = true;
          scope.master4 = true;

          var expectedFeatureTeamsScore = 5;
          rootScope.assessments = {'coding': {}};

          scope.saveAssessments();
          var featureTeams = rootScope.assessments['featureTeams'];

          expect(featureTeams['score']).toEqual(expectedFeatureTeamsScore);
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