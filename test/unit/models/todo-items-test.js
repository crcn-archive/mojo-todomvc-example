var expect  = require("expect.js"),
views       = require("mojo-views"),
Application = require("../../../app/js"),
sinon       = require("sinon");

// monkeypatch
require("bindable").options.computedDelay = -1;

describe("unit/models/todo#", function () {

  var app;

  beforeEach(function () {
    app = new Application();
  });

  it("can create a new todos collection", function () {
    app.models.create("todos");
  });

  it("properly computes each todo completion property into numCompleted", function () {
    var todos = app.models.create("todos");
    todos.create({ completed: true });
    todos.create({ completed: true });
    todos.create({ completed: false });
    expect(todos.numCompleted).to.be(2);
    expect(todos.length).to.be(3);
  });

  it("properly computes each todo completion property to allCompleted bool property", function () {

    var todos = app.models.create("todos");
    todos.create({ completed: true });
    todos.create({ completed: true });
    var td1 = todos.create({ completed: false });
    expect(todos.allCompleted).to.be(false);
    td1.set("completed", true);
    expect(todos.allCompleted).to.be(true);
  });

  it("properly toggles all todos", function () {
    var todos = app.models.create("todos");
    todos.create({ completed: true });
    todos.create({ completed: true });
    var td1 = todos.create({ completed: false });
    expect(todos.allCompleted).to.be(false);
    todos.toggleCompleted();
    expect(td1.completed).to.be(true);
    expect(todos.allCompleted).to.be(true);
    todos.toggleCompleted();
    expect(td1.completed).to.be(false);
  });


  it("can clear all completed", function () {
    var todos = app.models.create("todos");
    var todo = todos.create({ completed: true });
    todos.create({ completed: false });
    var removeStub = sinon.stub(todo, "remove");
    todos.clearCompleted();
    expect(removeStub.callCount).to.be(1);
  });
});
