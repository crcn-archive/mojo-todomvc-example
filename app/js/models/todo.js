var models = require("mojo-models"),
ls         = require("./persist").localStorage;

module.exports = models.Base.extend({

  /**
   */

  toggleCompleted: function (value) {
    this.set("completed", arguments.length ? !!value : !this.completed);
    this.save();
  },

  /**
   */

  deserialize: function (data) {
    return {
      _id: data._id,
      text: data.text,
      completed: !!data.completed
    }
  },

  /**
   */

  serialize: function () {
    return {
      _id: this._id,
      text: this.text,
      completed: !!this.completed
    }
  },

  /**
   */

  persist: ls.model()
});
