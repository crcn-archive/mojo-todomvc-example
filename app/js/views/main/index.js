var views = require("mojo-views"),
bindable  = require("bindable");

module.exports = views.Base.extend({
  paper: require("./index.pc"),
  todos: new bindable.Collection([
    new bindable.Object({ text: "Cat" })
  ]),
  sections: {
    header: require("./header"),
    todos: require("./todos"),
    footer: require("./footer")
  }
});
