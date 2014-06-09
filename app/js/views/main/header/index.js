var views = require("mojo-views");
module.exports = views.Base.extend({
  paper: require("./index.pc"),
  addNewTodo: function () {
    if (!this.newTodoText) return;
    this.get("todos").create({ text: this.newTodoText }).save();
    this.set("newTodoText", void 0);
  }
});
