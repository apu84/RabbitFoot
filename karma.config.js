const configuration = require('./config');
const webpackKarmaConfig = require('./webpack.config.js');

module.exports = (config) => {
  config.set({
    files:
        [
          `${configuration.src.ts}`,
          './node_modules/angular-mocks/angular-mocks.js',
          './test/**/*.spec.ts'
        ],
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    reporters: ['dots'],
    singleRun: true,
    plugins : [
      'karma-webpack',
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ],
    preprocessors: {
      './src/app.module.ts': ['webpack'],
      './test/**/*.spec.ts': ['webpack']
    },
    webpack: webpackKarmaConfig
  })
};