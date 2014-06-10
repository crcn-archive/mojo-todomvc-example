/**
 * function which are accessible from anywhere in the application. 
 */

module.exports = function (app) {
  app.use(require("./load/todos"));
  app.use(require("./load/mainView"));
};
