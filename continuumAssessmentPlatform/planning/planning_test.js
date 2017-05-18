'use strict';

describe('continuumAssessmentPlatform.planning module', function() {

  beforeEach(module('continuumAssessmentPlatform.planning'));

  describe('planning controller', function(){

    it('should be defined', inject(function($controller) {
      //spec body
      var planningCtrl = $controller('PlanningCtrl');
      expect(planningCtrl).toBeDefined();
    }));

  });
});