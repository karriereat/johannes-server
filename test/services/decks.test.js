const app = require('../../src/app');

describe('\'decks\' service', () => {
  it('registered the service', () => {
    const service = app.service('decks');
    expect(service).toBeTruthy();
  });
});
