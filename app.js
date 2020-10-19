'use strict';

const firebase = require('./lib/firebase');

module.exports = app => {
  if (app.config.firebase.app) firebase(app);
};
