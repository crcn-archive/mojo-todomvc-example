var models = require("mojo-models");

module.exports = models.Base.extend({
  persist: {
    del: function(complete) {
      complete();
    }
  },
  deserialize: function (data) {
    return {
      text: data.text,
      completed: !!data.completed
    }
  }
});