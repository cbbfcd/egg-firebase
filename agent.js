'use strict';

const firebase = require('./lib/firebase');

module.exports = agent => {
  if (agent.config.firebase.agent) firebase(agent);
};
