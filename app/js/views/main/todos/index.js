var views = require("mojo-views")

module.exports = views.Base.extend({

  /**
   */

  paper: require("./index.pc"),

  /**
   */

  bindings: {
    "todos.@each.completed": {
      "allSelected": {
        "map": function (completed) {
          return completed.filter(function (v) {
            return !!v;
          }).length === completed.length;
        }
      }
    }
  },

  /**
   */

  toggleSelected: function () {
    var self = this;
    this.get("todos").each(function (todo) {
      todo.set("completed", !self.get("allSelected"));
    })
  },

  /**
   */

  sections: {
    items: {
      type: "list",
      source: "todos",
      modelViewClass: require("./todo")
    }
  }
});
