var expect  = require("expect.js"),
views       = require("mojo-views"),
Application = require("../../../app/js"),
HeaderView  = require("../../../app/js/views/main/header"),
sinon       = require("sinon");

describe("unit/views/header#", function () {

  var app;

  beforeEach(function () {
    app = new Application();
  });

  describe("template", function () {
    // TODO
  });

  describe("controller", function () {

    it("doesn't create a new todo if there is no text", function () {
      var todos = app.models.create("todos");

      var header = new HeaderView({ todos: todos }, app);
      header.addNewTodo();
      expect(todos.length).to.be(0);
    });

    it("creates a new todo if there is text", function () {
      var todos = app.models.create("todos");
      var createStub = sinon.stub(todos, "create").returns({ save: function(){} })

      var header = new HeaderView({ todos: todos }, app);
      header.newTodoText = "hello";
      header.addNewTodo();
      expect(createStub.callCount).to.be(1);
    });

    it("resets the todo text when a new todo is added", function (next) {
      var todos = app.models.create("todos");

      var header = new HeaderView({ todos: todos }, app);
      header.newTodoText = "hello";
      header.bind("newTodoText", function (value) {
        expect(value).to.be(void 0);
        next();
      });

      header.addNewTodo();
    });

    it("inherits 'todos' property from a parent view", function () {

      var todos = app.models.create("todos");

      var parent = new views.Base({ todos: todos }, app),
      header     = new HeaderView(null, app);

      parent.setChild("header", header);


      var createStub = sinon.stub(todos, "create").returns({ save: function(){} });

      header.newTodoText = "hello";
      header.addNewTodo();

      expect(createStub.callCount).to.be(1);

    });
  });

});