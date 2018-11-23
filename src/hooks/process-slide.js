// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    const { data } = context;

    // Throw an error if we didn't get a text
    if(!data.parent) {
      throw new Error('A slide must have a deck as it’s parent');
    }

    // Override the original data (so that people can't submit additional stuff)
    context.data = {
      title: data.title || '',
      text: data.text || '',
      parent: data.parent,
      createdAt: new Date().getTime()
    };

    // Best practice: hooks should always return the context
    return context;
  };
};
