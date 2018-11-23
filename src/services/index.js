const decks = require('./decks/decks.service.js');
const slides = require('./slides/slides.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(decks);
  app.configure(slides);
};
