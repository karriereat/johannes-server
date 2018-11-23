

const processSlide = require('../../hooks/process-slide');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [processSlide()],
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
