var views = require("mojo-views");
module.exports = views.Base.extend({
  paper: require("./index.pc"),
  destroy: function () {
    this.get("model").remove();
  }
});
