var views = require("mojo-views");

module.exports = views.Base.extend({

  /**
   */

  paper: require("./index.pc"),

  /**
   */
   
  save: function () {
    this.toggleEdit();
    this.get("model").save();
  },

  /**
   */

  toggleEdit: function () {
    this.set("edit", !this.edit);
  }
});
