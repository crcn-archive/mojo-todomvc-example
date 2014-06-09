var sift = require("sift");

/**
 * controls the browser state of the application, and reflects the state in the URL.
 */

module.exports = function (app) {

  app.router.add({
    "/": {
      name: "allTodos",
      enter: function () {
        app.models.set("todosFilter", function () { return true; });
      },
      states: {
        page: "all"
      }
    },
    "/active": {
      name: "activeTodos",
      enter: function () {
        app.models.set("todosFilter", sift({ completed: false }).test);
      },
      states: {
        page: "active"
      }
    },
    "/completed": {
      name: "completedTodos",
      enter: function () {
        app.models.set("todosFilter", sift({ completed: true }).test);
      },
      states: {
        page: "completed"
      }
    }
  });

};
