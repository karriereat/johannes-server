

const processDeck = require('../../hooks/process-deck');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [processDeck()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
