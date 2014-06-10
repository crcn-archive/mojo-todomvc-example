module.exports = function (app) {
  app.mediator.on("post bootstrap", function (message, next) {

    var app = message.mediator.application;

    var element = message.data.element;
    $(element).append(app.views.create("main", {
      todos: app.get("models.todos")
    }).render());
  });
}