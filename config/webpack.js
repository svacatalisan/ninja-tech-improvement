/**
 * Created by alexcatalisan on 06.11.2017.
 */

'use strict';
/**
 * Webpack custom configuration and environment injection
 */

let ENVIRONMENT = process.env.NODE_ENV || 'development';
if (!ENVIRONMENT) {
  for (let i = 0; i < process.argv.length; i++) {
    if (process.argv[i].indexOf('--env') === 0) {
      ENVIRONMENT = process.argv[i].split('--env=')[1];
      break;
    }
  }
}

process.env.NODE_ENV = (process.argv.indexOf('-p') === -1 ? ENVIRONMENT : 'production');
/*
 * Settings that we export here will be available the "appConfig" global variable
 * */
module.exports = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  NODE_ENV: JSON.stringify(ENVIRONMENT),
  appConfig: {
    // application-specific configuration that requires process.env access or dynamic variables.
  }
};
