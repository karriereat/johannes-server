// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const { id, app } = context;
    const slides = await app.service('slides').find({
      query: {
        parent: id
      }
    });
    context.result.slides = slides.data;
    return context;
  };
};
