'use strict';

describe('continuumAssessmentPlatform.release module', function() {

  beforeEach(module('continuumAssessmentPlatform.release'));

  describe('release controller', function(){

      var controller;
      var scope, rootScope;

      beforeEach(inject(function($controller, $rootScope){
          rootScope = $rootScope;
          scope = rootScope.$new();
          controller = $controller('ReleaseCtrl', {'$scope': scope, '$rootScope': rootScope});
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
          expect(scope.artisan4).toBeDefined();

          expect(scope.artisan1).toBeFalsy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
          expect(scope.artisan4).toBeFalsy();
      });

      it('should have defaults as false for the expert questions', function(){
          expect(scope.expert1).toBeDefined();
          expect(scope.expert2).toBeDefined();

          expect(scope.expert1).toBeFalsy();
          expect(scope.expert2).toBeFalsy();
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
          rootScope = {'assessments': {'release': {
              'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false,
              'expert1': true, 'expert2': false,
              'professional1': false, 'professional2': true, 'professional3': true, 'professional4': true,
              'master1': true, 'master2': false, 'master3': false, 'master4': false, 'master5': false, 'master6': false}}};

          controller = $controller('ReleaseCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeTruthy();
          expect(scope.traveller2).toBeTruthy();
          expect(scope.traveller3).toBeTruthy();
          expect(scope.traveller4).toBeTruthy();
          expect(scope.artisan1).toBeTruthy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
          expect(scope.artisan4).toBeFalsy();
          expect(scope.expert1).toBeTruthy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeTruthy();
          expect(scope.professional3).toBeTruthy();
          expect(scope.professional4).toBeTruthy();
          expect(scope.master1).toBeTruthy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
          expect(scope.master5).toBeFalsy();
          expect(scope.master6).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set', inject(function($controller){
          rootScope = {};

          controller = $controller('ReleaseCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.traveller3).toBeFalsy();
          expect(scope.traveller4).toBeFalsy();
          expect(scope.artisan1).toBeFalsy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
          expect(scope.artisan4).toBeFalsy();
          expect(scope.expert1).toBeFalsy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.professional4).toBeFalsy();
          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
          expect(scope.master5).toBeFalsy();
          expect(scope.master6).toBeFalsy();
      }));

      it('should set the default values based on the initial values if rootScope not set with assessments', inject(function($controller){
          rootScope = {'assessments': {'ci': {}}};

          controller = $controller('ReleaseCtrl', {'$scope': scope, '$rootScope': rootScope});
          scope.init();
          expect(scope.traveller1).toBeFalsy();
          expect(scope.traveller2).toBeFalsy();
          expect(scope.traveller3).toBeFalsy();
          expect(scope.traveller4).toBeFalsy();
          expect(scope.artisan1).toBeFalsy();
          expect(scope.artisan2).toBeFalsy();
          expect(scope.artisan3).toBeFalsy();
          expect(scope.artisan4).toBeFalsy();
          expect(scope.expert1).toBeFalsy();
          expect(scope.expert2).toBeFalsy();
          expect(scope.professional1).toBeFalsy();
          expect(scope.professional2).toBeFalsy();
          expect(scope.professional3).toBeFalsy();
          expect(scope.professional4).toBeFalsy();
          expect(scope.master1).toBeFalsy();
          expect(scope.master2).toBeFalsy();
          expect(scope.master3).toBeFalsy();
          expect(scope.master4).toBeFalsy();
          expect(scope.master5).toBeFalsy();
          expect(scope.master6).toBeFalsy();
      }));

      it('should save the values for the assessment results for release management', function(){
          scope.traveller1 = true;
          scope.traveller2 = true;
          scope.traveller3 = true;
          scope.traveller4 = true;
          scope.artisan1 = true;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.artisan4 = false;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;
          scope.master5 = false;
          scope.master6 = false;

          var expectedRelease = {
              'traveller1': true, 'traveller2': true, 'traveller3': true, 'traveller4': true,
              'artisan1': true, 'artisan2': false, 'artisan3': false, 'artisan4': false,
              'expert1': true, 'expert2': true,
              'professional1': false, 'professional2': false, 'professional3': false, 'professional4': false,
              'master1': false, 'master2': false, 'master3': false, 'master4': false, 'master5': false, 'master6': false};

          scope.saveAssessments();
          var release = rootScope.assessments['release'];

          expect(release['traveller1']).toEqual(expectedRelease[['traveller1']]);
          expect(release['traveller2']).toEqual(expectedRelease[['traveller2']]);
          expect(release['traveller3']).toEqual(expectedRelease[['traveller3']]);
          expect(release['traveller4']).toEqual(expectedRelease[['traveller4']]);
          expect(release['artisan1']).toEqual(expectedRelease[['artisan1']]);
          expect(release['artisan2']).toEqual(expectedRelease[['artisan2']]);
          expect(release['artisan3']).toEqual(expectedRelease[['artisan3']]);
          expect(release['artisan4']).toEqual(expectedRelease[['artisan4']]);
          expect(release['expert1']).toEqual(expectedRelease[['expert1']]);
          expect(release['expert2']).toEqual(expectedRelease[['expert2']]);
          expect(release['professional1']).toEqual(expectedRelease[['professional1']]);
          expect(release['professional2']).toEqual(expectedRelease[['professional2']]);
          expect(release['professional3']).toEqual(expectedRelease[['professional3']]);
          expect(release['professional4']).toEqual(expectedRelease[['professional4']]);
          expect(release['master1']).toEqual(expectedRelease[['master1']]);
          expect(release['master2']).toEqual(expectedRelease[['master2']]);
          expect(release['master3']).toEqual(expectedRelease[['master3']]);
          expect(release['master4']).toEqual(expectedRelease[['master4']]);
          expect(release['master5']).toEqual(expectedRelease[['master5']]);
          expect(release['master6']).toEqual(expectedRelease[['master6']]);
      });

      it('should save the score for release management as 1 if no question is answered', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.artisan1 = false;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.artisan4 = false;
          scope.expert1 = false;
          scope.expert2 = false;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;
          scope.master5 = false;
          scope.master6 = false;

          var expectedReleaseScore = 1;

          scope.saveAssessments();
          var release = rootScope.assessments['release'];

          expect(release['score']).toEqual(expectedReleaseScore);
      });

      it('should save the score for release management as 1 if traveller questions answered', function(){
          scope.traveller1 = true;
          scope.traveller2 = true;
          scope.traveller3 = true;
          scope.traveller4 = true;
          scope.artisan1 = true;
          scope.artisan2 = false;
          scope.artisan3 = false;
          scope.artisan4 = false;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;
          scope.master5 = false;
          scope.master6 = false;

          var expectedReleaseScore = 1;

          scope.saveAssessments();
          var release = rootScope.assessments['release'];

          expect(release['score']).toEqual(expectedReleaseScore);
      });

      it('should save the score for release management as 2 if appropriate traveller questions not answered and artisan questions answered', function(){
          scope.traveller1 = false;
          scope.traveller2 = true;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.artisan4 = true;
          scope.expert1 = false;
          scope.expert2 = true;
          scope.professional1 = false;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;
          scope.master5 = false;
          scope.master6 = false;

          var expectedReleaseScore = 2;

          scope.saveAssessments();
          var release = rootScope.assessments['release'];

          expect(release['score']).toEqual(expectedReleaseScore);
      });

      it('should save the score for release management as 3 if expert questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.artisan4 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.professional1 = true;
          scope.professional2 = false;
          scope.professional3 = false;
          scope.professional4 = false;
          scope.master1 = false;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;
          scope.master5 = false;
          scope.master6 = false;

          var expectedReleaseScore = 3;

          scope.saveAssessments();
          var release = rootScope.assessments['release'];

          expect(release['score']).toEqual(expectedReleaseScore);
      });

      it('should save the score for release management as 4 if professional questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.artisan4 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = true;
          scope.professional4 = true;
          scope.master1 = true;
          scope.master2 = false;
          scope.master3 = false;
          scope.master4 = false;
          scope.master5 = false;
          scope.master6 = false;

          var expectedReleaseScore = 4;

          scope.saveAssessments();
          var release = rootScope.assessments['release'];

          expect(release['score']).toEqual(expectedReleaseScore);
      });

      it('should save the score for release management as 5 if master questions answered and other questions answered accordingly', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.artisan4 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = false;
          scope.professional4 = true;
          scope.master1 = true;
          scope.master2 = true;
          scope.master3 = true;
          scope.master4 = true;
          scope.master5 = true;
          scope.master6 = true;

          var expectedReleaseScore = 5;

          scope.saveAssessments();
          var release = rootScope.assessments['release'];

          expect(release['score']).toEqual(expectedReleaseScore);
      });

      it('should save the score for release management as 5 if master questions answered and other questions answered accordingly with assessments', function(){
          scope.traveller1 = false;
          scope.traveller2 = false;
          scope.traveller3 = false;
          scope.traveller4 = false;
          scope.artisan1 = true;
          scope.artisan2 = true;
          scope.artisan3 = true;
          scope.artisan4 = true;
          scope.expert1 = true;
          scope.expert2 = true;
          scope.professional1 = true;
          scope.professional2 = true;
          scope.professional3 = false;
          scope.professional4 = true;
          scope.master1 = true;
          scope.master2 = true;
          scope.master3 = true;
          scope.master4 = true;
          scope.master5 = true;
          scope.master6 = true;

          var expectedReleaseScore = 5;
          rootScope.assessments = {'coding': {}};

          scope.saveAssessments();
          var release = rootScope.assessments['release'];

          expect(release['score']).toEqual(expectedReleaseScore);
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