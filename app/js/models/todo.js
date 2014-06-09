var models = require("mojo-models");

module.exports = models.Base.extend({
  persist: {
    del: function(complete) {
      complete();
    }
  }
});