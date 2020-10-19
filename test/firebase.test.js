'use strict';

const mock = require('egg-mock');

describe('test/firebase.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/firebase-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, firebase')
      .expect(200);
  });
});
