const decks = require('./decks/decks.service.js');
const slides = require('./slides/slides.service.js');
const users = require('./users/users.service.js');

module.exports = function (app) {
  app.configure(decks);
  app.configure(slides);
  app.configure(users);
};
