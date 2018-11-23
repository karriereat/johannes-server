const socket = io('http://localhost:3030');
const client = feathers();

client.configure(feathers.socketio(socket));

const loadDecks = async () => {
  return await client.service('decks').find({
    query: {
      $sort: { createdAt: -1 }
    }
  });
};

const addDeck = async () => {
  return await client.service('decks').create({
    name: 'Slideshow'
  });
};

client.service('decks').on('created', async () => {
  const decks = await loadDecks();
  console.log(decks.data);
});

console.log(Object.keys({ loadDecks, addDeck }));
