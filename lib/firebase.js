'use strict';

const assert = require('assert');
const admin = require('firebase-admin');

let count = 0;

module.exports = app => {
  app.addSingleton('firebase', createOneClient);
};

function createOneClient(cfg, app) {

  // service-account-key.json path and database url are required.
  assert(
    cfg.credential && cfg.database && cfg.collection,
    `[egg-firebase]: credential: ${cfg.credential}, database: ${cfg.database}, collection: ${cfg.collection},  are required on config`
  );
  app.coreLogger.info('[egg-firebase] connecting %s/%s', cfg.database, cfg.collection);

  const admin = initFireBaseAdmin(cfg);

  app.coreLogger.info('[egg-firebase] admin initialized');

  // valid the firestore is connected successfully
  app.beforeStart(async () => {
    app.coreLogger.info('[egg-firebase] starting query data...');
    await admin.firestore().collection(cfg.collection).get();
    const index = count++;
    app.coreLogger.info(`[egg-firebase] instance[${index}] status OK`);
  });

  return admin;
}

function initFireBaseAdmin(config) {
  const { credential, database } = config;

  admin.initializeApp({
    credential: admin.credential.cert(credential),
    databaseURL: database,
  });

  return admin;
}
