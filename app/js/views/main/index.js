var views = require("mojo-views"),
bindable  = require("bindable");

module.exports = views.Base.extend({
  paper: require("./index.pc"),
  sections: {
    header: require("./header"),
    todos: require("./todos"),
    footer: require("./footer")
  }
});
