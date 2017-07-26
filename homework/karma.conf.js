// Karma configuration
// Generated on Wed Jan 04 2017 11:46:53 GMT-0800 (Pacific Standard Time)

module.exports = function(config) {
 // 'use strict';
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      //{pattern:'node_modules/@angular/**/*.js', included: false},
      //{pattern:'node_modules/@angular/**/*.js.map', included: false},
      {pattern:'src/**/*.spec.js'} 
    ],

    // list of files to exclude
    exclude: [
    ],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      "karma-phantomjs-launcher",
      "karma-jasmine",
      "karma-requirejs",
      "karma-browserify"
    ],    

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
            'src/**/*.spec.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform: [ 'stringify' ]
    },
    

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
               'Chrome'
               //'PhantomJS'
              ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}