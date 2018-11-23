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

const getSlide = async (id) => {
  return await client.service('slides').get(id);
};

client.service('decks').on('created', async () => {
  const decks = await findDecks();
  console.log(decks.data);
});

console.log(Object.keys({ findDecks, createDeck, getDeck, createSlide, getSlide }));
