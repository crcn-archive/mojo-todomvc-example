var views = require("mojo-views");

module.exports = views.Base.extend({

  /**
   */

  paper: require("./index.pc"),

  /**
   */

  addNewTodo: function () {

    // if there is no text, then don't add a new todo
    if (!this.newTodoText) return;

    // create a new todo, and save it immediately
    this.get("todos").create({ text: this.newTodoText }).save();

    // set the new todo text to undefined - clear out the input field.
    this.set("newTodoText", void 0);
  }
});
