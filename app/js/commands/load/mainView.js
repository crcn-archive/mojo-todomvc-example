module.exports = function (app) {
  app.mediator.on("post bootstrap", function (message, next) {

    next();

    var app = message.mediator.application;

    var element = message.data.element;

    if (!element) return;
    
    $(element).append(app.views.create("main", {
      todos: app.get("models.todos")
    }).render());
  });
}