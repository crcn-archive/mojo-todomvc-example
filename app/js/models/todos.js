var models = require("mojo-models");

module.exports = models.Collection.extend({
  modelType: require("./todo"),
  bindings: {
    "@each.completed": {
      "numCompleted": {
        "map": function (completed) {
          return completed.filter(function (v) {
            return !!v;
          }).length;
        }
      }
    },
    "numCompleted, length": {
      "allCompleted": {
        "map": function (numCompleted, length) {
          return numCompleted === length;
        }
      }
    }
  },
  toggleCompleted: function () {
    var self = this;
    this.each(function (todo) {
      todo.set("completed", !self.allCompleted);
    });
  },
  clearCompleted: function () { 
    for (var i = this.length; i--;) {
      var todo = this.at(i);
      if (todo.completed) {
        todo.remove();
      }
    }
  }
});
