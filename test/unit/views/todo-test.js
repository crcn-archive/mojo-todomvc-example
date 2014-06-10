var expect  = require("expect.js"),
views       = require("mojo-views"),
Application = require("../../../app/js"),
TodoView    = require("../../../app/js/views/main/todos/todo"),
sinon       = require("sinon");

describe("unit/views/todo#", function () {

  var app;

  beforeEach(function () {
    app = new Application();
  });

  describe("template", function () {
    // TODO
    xit("shows the correct edit state");
    xit("focuses in the input field on edit state");
    xit("adds a 'completed' class when model.completed is true");
    xit("can destroy a todo item");
    xit("can toggle the todo completion");
  });

  describe("controller", function () {

    it("calls save on the model", function () {
      var todo = app.models.create("todos").create(),
      saveStub = sinon.stub(todo, "save");

      var todoView = new TodoView({ model: todo }, app);
      todoView.save();

      expect(saveStub.callCount).to.be(1);
    });

    it("sets 'edit' to false everytime .save() is called", function () {

      var todo = app.models.create("todos").create(),
      saveStub = sinon.stub(todo, "save");

      var todoView = new TodoView({ model: todo }, app);
      todoView.edit = true;
      todoView.save();
      expect(todoView.edit).to.be(false);
      todoView.save();
      expect(todoView.edit).to.be(false);
    });

    it("can toggle edit mode", function () {

      var todoView = new TodoView(null, app);
      todoView.toggleEdit();
      expect(todoView.edit).to.be(true);
      todoView.toggleEdit();
      expect(todoView.edit).to.be(false);
      todoView.toggleEdit();
      expect(todoView.edit).to.be(true);
    });
  });

});