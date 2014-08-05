var views = require("mojo-views"),
poolparty = require("poolparty");

var TodoView = require("./todo");

var pool = poolparty({
  max: 1000,
  create: function (options) {
    var view = new TodoView(options);
    view.on("dispose", function () {
      pool.add(view);
    });
    return view;
  }, 
  recycle: function (view, options) {
    view.setProperties(options);
  }
});

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
      modelViewFactory: pool
    }
  }
});
