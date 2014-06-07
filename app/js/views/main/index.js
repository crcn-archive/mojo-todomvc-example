var views = require("mojo-views"),
bindable  = require("bindable");


module.exports = views.Base.extend({

  /**
   */

  todos: new bindable.Collection([
      new bindable.Object({ text: "Clean Car", _id: "ab1" }),
      new bindable.Object({ text: "Walk Dog", _id: "ab2" }),
  ]),

  /**
   */

  paper: require("./index.pc"),

  /**
   */

  sections: {
    header : require("./header"),
    todos  : require("./todos"),
    footer : require("./footer")
  }
});
