var expect  = require("expect.js"),
views       = require("mojo-views"),
Application = require("../../../"+process.env.APP_DIR+"/js"),
TodoView    = require("../../../"+process.env.APP_DIR+"/js/views/main/todos/todo"),
sinon       = require("sinon");
noselector = require("noselector");

describe("unit/views/todo#", function () {

  var app;

  beforeEach(function () {
    app = new Application();
  });

  describe("template", function () {
    // TODO
    it("shows the correct edit state", function () {
        var todo = app.models.create("todos").create({ text: "ab" });
        var todoView = new TodoView({ model: todo }, app);
        todoView.set("edit", true);
        todoView.render();
        expect(todoView.$("li").attr("class")).to.contain("editing");
        expect(todoView.$("button").length).to.be(0);
        todoView.set("edit", false);
        expect(todoView.$("li").attr("class")).not.to.contain("editing");
        expect(todoView.$("button").length).to.be(1);
    });

    it("adds a 'completed' class when model.completed is true", function () {
        var todo = app.models.create("todos").create({ text: "ab" });
        var todoView = new TodoView({ model: todo }, app);
        todoView.render();
        todo.set("completed", true);
        expect(todoView.$("li").attr("class")).to.contain("completed");
        todo.set("completed", false);
        expect(todoView.$("li").attr("class")).not.to.contain("completed");
    });

    it("can destroy a todo item", function () {
        var todo = app.models.create("todos").create({ text: "ab" });
        var removeStub = sinon.stub(todo, "remove");
        var todoView = new TodoView({ model: todo }, app);
        todoView.render();
        todoView.$("button").click();
        expect(removeStub.callCount).to.be(1);
    });

    it("can toggle the todo completion", function () {
        var todo = app.models.create("todos").create({ text: "ab" });
        var toggleCompletedStub = sinon.stub(todo, "toggleCompleted");
        var todoView = new TodoView({ model: todo }, app);
        todoView.render();
        todoView.$(".toggle").click();
        expect(toggleCompletedStub.callCount).to.be(1);
    });
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
