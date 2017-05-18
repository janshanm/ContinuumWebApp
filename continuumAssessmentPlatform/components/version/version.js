'use strict';

angular.module('continuumAssessmentPlatform.version', [
  'continuumAssessmentPlatform.version.interpolate-filter',
  'continuumAssessmentPlatform.version.version-directive'
])

.value('version', '0.1');
