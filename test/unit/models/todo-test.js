var expect  = require("expect.js"),
views       = require("mojo-views"),
Application = require("../../../app/js"),
sinon       = require("sinon");

describe("unit/models/todo#", function () {

  var app;

  beforeEach(function () {
    app = new Application();
  });

  it("can create a new todo item", function () {
    app.models.create("todos").create();
  });

  xit("properly computes each todo completion property into numCompleted");
  xit("properly computes each todo completion property to allCompleted bool property");
  xit("toggles to all completion if not all todos are completed");
  xit("toggles all completion to false if all todos are completed");
  xit("remove all todo items");
});