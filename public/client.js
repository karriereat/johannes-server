const socket = io('http://localhost:3030');
const client = feathers();

client.configure(feathers.socketio(socket));

const findDecks = async () => {
  return await client.service('decks').find({
    query: {
      $limit: Number.MAX_SAFE_INTEGER,
      $sort: {
        createdAt: -1
      }
    }
  });
};

const createDeck = async (name) => {
  return await client.service('decks').create({
    name: name || 'Slideshow'
  });
};

const getDeck = async (id) => {
  return await client.service('decks').get(id);
};

const createSlide = async (parent, title, text) => {
  return await client.service('slides').create({
    parent,
    title,
    text
  });
};

const patchSlide = async (id, data) => {
  return await client.service('slides').patch(id, data);
};

const getSlide = async (id) => {
  return await client.service('slides').get(id);
};

client.service('decks').on('created', async (deck) => {
  console.log('created', deck);
});

client.service('slides').on('created', async (slide) => {
  console.log('created', slide);
});

console.log(Object.keys({ findDecks, createDeck, getDeck }));
console.log(Object.keys({ createSlide, getSlide, patchSlide }));
