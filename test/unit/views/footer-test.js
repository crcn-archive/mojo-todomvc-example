var expect  = require("expect.js"),
views       = require("mojo-views"),
Application = require("../../../"+process.env.APP_DIR+"/js"),
FooterView    = require("../../../"+process.env.APP_DIR+"/js/views/main/footer"),
sinon       = require("sinon");

describe("unit/views/footer#", function () {

  var app;

  beforeEach(function () {
    app = new Application();
  });

  describe("template", function () {

    it("shows if there are todo items", function () {
      var todos = app.models.create("todos");
      todos.create();
      var footer = new FooterView({todos: todos}, app);
      expect(footer.render().toString()).to.contain("Completed");
    });

    it("doesn't show if there are no todos", function () {
      var footer = new FooterView(null, app);
      expect(footer.render().toString()).to.be("");
    });

    it("can click the clear completed", function () {
      var todos = app.models.create("todos");
      todos.create({ completed: true });
      var footer = new FooterView({ todos: todos}, app);
      footer.render();
      var clearCompletedStub = sinon.stub(todos, "clearCompleted");
      footer.$("#clear-completed").click();
      expect(clearCompletedStub.callCount).to.be(1);
    });

    "allTodos activeTodos completedTodos".split(" ").forEach(function(dataHref) {
      it("can navigate to " + dataHref + " when selected", function () {
        var todos = app.models.create("todos");
        todos.create({ completed: true });
        var footer = new FooterView({ todos: todos }, app);
        footer.render();
        footer.$("a[data-href='"+dataHref+"']").click();
        expect(app.router.get("_location.route.options.name")).to.be(dataHref);
      });
    });

    it("shows the 'clear completed' button when there are completed items", function () {
      var todos = app.models.create("todos");
      todos.create({ completed: true });
      var footer = new FooterView({todos: todos}, app);
      expect(footer.render().toString()).to.contain("Clear completed (1)");
    });

    it("shows the correct number of todos left", function () {
      var todos = app.models.create("todos");
      todos.create({ completed: true });
      todos.create({ completed: false });
      todos.create({ completed: false });
      var footer = new FooterView({todos: todos}, app);
      expect(footer.render().toString()).to.contain("<strong>2</strong> todos left");
    });

  });
});
