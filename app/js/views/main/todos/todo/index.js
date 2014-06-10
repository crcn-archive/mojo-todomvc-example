var views = require("mojo-views");

module.exports = views.Base.extend({

  /**
   */

  paper: require("./index.pc"),

  /**
   */
   
  save: function () {
    this.toggleEdit(false);
    this.get("model").save();
  },

  /**
   */

  toggleEdit: function (value) {
    this.set("edit", arguments.length ? value : !this.edit);
  }
});
