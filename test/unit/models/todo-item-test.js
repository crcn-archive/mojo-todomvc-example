var expect  = require("expect.js"),
views       = require("mojo-views"),
Application = require("../../../app/js"),
sinon       = require("sinon");

describe("unit/models/todos#", function () {

  var app;

  beforeEach(function () {
    app = new Application();
  });

  it("can create a new todo item", function () {
    app.models.create("todos").create();
  });

  it("properly deserializes a todo item", function () {
    var todo = app.models.create("todos").create({ data: { text: "abba", _id: "baab" }});
    expect(todo.completed).to.be(false)
    expect(todo.text).to.be("abba");
    expect(todo._id).to.be("baab");
  });

  it("properly serializes a todo item", function () {
    var todo = app.models.create("todos").create();
    expect(todo.serialize().completed).to.be(false);
    expect(todo.serialize().text).to.be(void 0);
  });

  it("can toggle the todo completion", function () {
    var todo = app.models.create("todos").create();
    var saveStub = sinon.stub(todo, "save");
    todo.toggleCompleted();
    expect(todo.completed).to.be(true);
    expect(saveStub.callCount).to.be(1);
  });

  it("can set the completion state", function () {
    var todo = app.models.create("todos").create();
    var saveStub = sinon.stub(todo, "save");
    todo.toggleCompleted(true);
    expect(todo.completed).to.be(true);
    expect(saveStub.callCount).to.be(1);
    todo.toggleCompleted(true);
    expect(todo.completed).to.be(true);
    expect(saveStub.callCount).to.be(2);
  });
});
