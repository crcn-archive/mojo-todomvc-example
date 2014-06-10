var expect  = require("expect.js"),
views       = require("mojo-views"),
Application = require("../../../app/js"),
TodosView   = require("../../../app/js/views/main/todos/todo"),
sinon       = require("sinon");

describe("unit/views/todos#", function () {

  var app;

  beforeEach(function () {
    app = new Application();
  });

  describe("template", function () {
    // TODO
    xit("properly shows a list of todo items", function () {
      var todos = app.models.create("todos");
      todos.create();
      todos.create();

      var todosView = new TodosView({ todos: todos }, app);

      console.log(todosView.render().toString())
    });
  });

  describe("controller", function () {
    xit("binds models.todosFilter to the list filter", function () {
      var todos = app.models.create("todos");
      todos.create();
      todos.create();
      var filter;
      var todosView = new TodosView({ todos: todos }, app);
      app.models.set("todosFilter", filter = function () {

      });
      expect(todosView.get("sections.items.filter")).to.be(filter);
    });
  });

});