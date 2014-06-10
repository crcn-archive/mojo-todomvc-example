var expect  = require("expect.js"),
views       = require("mojo-views"),
Application = require("../../../app/js"),
FooterView    = require("../../../app/js/views/main/footer"),
sinon       = require("sinon");

describe("unit/views/footer#", function () {

  var app;

  beforeEach(function (next) {
    app = new Application();
    app.didBootstrap = next;
    app.initialize();
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

    "allTodos activeTodos completedTodos".split(" ").forEach(function(dataHref) {

      // navigate, and 
      xit("can navigate to " + dataHref + " when selected");
    });

    xit("shows the 'clear completed' button when there are completed items", function () {
      var todos = app.models.create("todos");
      todos.create({ completed: true });
      var footer = new FooterView({todos: todos}, app);
      expect(footer.render().toString()).to.contain("Clear Completed (1)");
    });

    xit("shows the correct number of todos left");

  });

  describe("controller", function () {
    // TODO
    xit("inherits todos from the a parent view");
  });

});