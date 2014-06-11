var expect  = require("expect.js"),
views       = require("mojo-views"),
Application = require("../../../"+process.env.APP_DIR+"/js"),
TodosView   = require("../../../"+process.env.APP_DIR+"/js/views/main/todos"),
sinon       = require("sinon");

describe("unit/views/todos#", function () {

  var app;

  beforeEach(function () {
    app = new Application();
  });

  describe("template", function () {
    it("properly shows a list of todo items", function () {
      var todos = app.models.create("todos", {
        data: [
          { text: "abba" },
          { text: "baab" }
        ]
      });

      var todosView = new TodosView({ todos: todos }, app);

      var tpl = todosView.render();
      expect(todosView.$("li").length).to.be(2);
      expect(todosView.$("li").eq(0).find("label").text()).to.be("abba");
      expect(todosView.$("li").eq(1).find("label").text()).to.be("baab");
    });
  });

  describe("controller", function () {
    it("binds models.todosFilter to the list filter", function () {
      var todos = app.models.create("todos");
      todos.create();
      todos.create();
      var filter;
      var todosView = new TodosView({ todos: todos }, app);
      todosView.render();
      app.models.set("todosFilter", filter = function () {

      });
      expect(todosView.get("sections.items._filter")).to.be(filter);
    });
  });
});
