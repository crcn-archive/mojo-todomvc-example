var views = require("mojo-views"),
bindable  = require("bindable");


module.exports = views.Base.extend({

  /**
   */

  paper: require("./index.pc"),

  /**
   */

  destroy: function () {
    this.get("todos").remove(this.get("model"));
  }
});
