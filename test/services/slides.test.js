const app = require('../../src/app');

describe('\'slides\' service', () => {
  it('registered the service', () => {
    const service = app.service('slides');
    expect(service).toBeTruthy();
  });
});
