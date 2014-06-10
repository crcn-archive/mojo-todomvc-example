var views = require("mojo-views");
module.exports = views.Base.extend({
  paper: require("./index.pc"),
  save: function () {
    this.set("edit", false);
    this.get("model").save();
  }
});
