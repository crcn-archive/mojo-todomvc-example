var views = require("mojo-views");

var TodoView = require("./todo");

module.exports = views.Base.extend({

  /**
   */

  paper: require("./index.pc"),

  /**
   */

  sections: {
    items: {
      type: "list",
      source: "todos",
      filter: "models.todosFilter",
      modelViewClass: require("./todo")
    }
  }
});
