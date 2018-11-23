// Initializes the `decks` service on path `/decks`
const createService = require('feathers-nedb');
const createModel = require('../../models/decks.model');
const hooks = require('./decks.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/decks', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('decks');

  service.hooks(hooks);
};
