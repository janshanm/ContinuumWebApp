//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './continuumAssessmentPlatform',

    files: [
      '../bower_components/angular/angular.js',
      '../bower_components/angular-route/angular-route.js',
      '../bower_components/angular-mocks/angular-mocks.js',
        'vendor/jquery-3.2.1.min.js',
        'vendor/Chart.js',
        'vendor/excellentexport/excellentexport.min.js',
        'vendor/jsencrypt/bin/jsencrypt.min.js',
        'continuumAssessmentPlatform.js',
        // 'login/login.js',
        'strategy/strategy.js',
        'planning/planning.js',
        'coding/coding.js',
        'coding/coding_test.js',
        'continuousintegration/ci.js',
        'continuousintegration/ci_test.js',
        'incident/incident.js',
        'incident/incident_test.js',
        'risk/risk.js',
        'risk/risk_test.js',
        'design/design.js',
        'design/design_test.js',
        'teaming/teaming.js',
        'teaming/teaming_test.js',
        'release/release.js',
        'release/release_test.js',
        'quality/quality.js',
        'quality/quality_test.js',
        'environments/environments.js',
        'environments/environments_test.js',
        'featureteams/featureteams.js',
        'featureteams/featureteams_test.js',
        'review/review.js',
        'review/review_test.js',
        'results/results.js',
        'results/results_test.js',
        'resultsqa/resultsqa.js',
        'welcome/welcome.js',
        // 'teamselection/teamselection.js',
        // 'teamselectionqa/teamselectionqa.js',
        // 'teamselectionqamam/teamselection-qamam.js',
        'standards/standards.js',
        'standards/standards_test.js',
        'metrics/metrics.js',
        'metrics/metrics_test.js',
        'integration/integration.js',
        'integration/integration_test.js',
        'stakeholder-management/stakeholder-management.js',
        'stakeholder-management/stakeholder-management_test.js',
        'team-management/team-management.js',
        'documentation/documentation.js',
        'documentation/documentation_test.js',
        'assessment-process/assessment-process.js',
        'assessment-process/assessment-process_test.js',
        'research/research.js',
        'research/research_test.js',
        'involvement/involvement.js',
        'involvement/involvement_test.js',
        'repository/repository.js',
        'repository/repository_test.js',
        'execution/execution.js',
        'execution/execution_test.js',
        'process/process.js',
        'process/process_test.js',
        'test-criteria/test-criteria.js',
        'test-criteria/test-criteria_test.js',
        'defect-and-exploratory/defect-and-exploratory.js',
        'defect-and-exploratory/defect-and-exploratory_test.js',
        'automation-testing/automation-testing.js',
        'automation-testing/automation-testing_test.js',
        'test-metrics/test-metrics.js',
        'quality-alignment/quality-alignment.js',
        'quality-alignment/quality-alignment_test.js',
        'practice-innovation/practice-innovation.js',
        'practice-innovation/practice-innovation_test.js',
        'tools-artefacts/tools-artefacts.js',
        // 'qamam-results/qamam-results.js',
        'previous-assessments/previous-assessments.js',
        // 'previous-assessments-qa/previous-assessments-qa.js',
        'complete-survey/complete-survey.js',
        'complete-survey/complete-survey_test.js',
        // 'practice-management/practice-management.js',
        // 'survey-results/survey-results.js',
        // 'configure-survey/configure-survey.js',
        'components/version/version.js',
        'components/version/version_test.js',
        'components/version/version-directive.js',
        'components/version/version-directive_test.js',
        'components/version/interpolate-filter.js',
        'components/version/interpolate-filter_test.js'
    ],

    preprocessors: {
        '**/!(vendor)/*.js': ['coverage', 'coveralls']
    },

    coverageReporter: {
        type: 'lcov',
        dir: '../coverage/'
    },

    reporters: ['progress', 'coverage'],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
        'karma-browserify',
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-jasmine',
        'karma-junit-reporter',
        'karma-phantomjs-launcher',
        'karma-coverage'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
