module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'node_modules/angular-loading-bar/build/loading-bar.min.js',
      // 'node_modules/firebase/firebase.js',
      // 'node_modules/angularfire/dist/angularfire.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'mocks/firebase.mock.js',
      'src/app/**/*.spec.js',
      'dist/js/bundle.js',
    ],
    exclude: [
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-spec-reporter')
    ],
    preprocessors: {
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
