
/**
 * represents data for the front-end.
 */

module.exports = function (app) {
  app.models.register({
    todos : require("./todos")
  });
};
