var views = require("mojo-views");


module.exports = views.Base.extend({

  /**
   */

  paper: require("./index.pc"),


  /**
   */

  bindings: {
    "todos.@each.completed": {
      "numCompleted": {
        "map": function (completed) {
          return completed.filter(function (v) {
            return !!v;
          }).length;
        }
      }
    }
  },

  /**
   */

  clearCompleted: function () {

    // TODO - remove to collection method
    var todos = this.get("todos").source();
    for (var i = todos.length; i--;) {
      if (todos[i].get("completed")) {
        this.get("todos").remove(todos[i]);
      }
    }
  }
});
