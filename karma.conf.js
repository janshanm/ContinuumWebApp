//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './continuumAssessmentPlatform',

    files: [
      '../bower_components/angular/angular.js',
      '../bower_components/angular-route/angular-route.js',
      '../bower_components/angular-mocks/angular-mocks.js',
        'vendor/jsencrypt/bin/jsencrypt.js',
      '**/**/**/*.js',
      '**/**/*.js'
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
