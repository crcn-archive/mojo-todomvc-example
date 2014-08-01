module.exports = function (app) {
  app.mediator.on("pre bootstrap", function (message, next) {
    var todos = app.models.create("todos");
    app.models.set("todos", todos);
    console.log("LOAD");
    todos.load(next);
  });
}