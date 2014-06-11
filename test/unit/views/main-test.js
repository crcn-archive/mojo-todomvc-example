var expect  = require("expect.js"),
views       = require("mojo-views"),
Application = require("../../../"+process.env.APP_DIR+"/js"),
MainView    = require("../../../"+process.env.APP_DIR+"/js/views/main"),
sinon       = require("sinon");

describe("unit/views/header#", function () {

  var app;

  beforeEach(function () {
    app = new Application();
  });

  describe("template", function () {
    it("can render a new main view", function () {
      var todos = app.models.create("todos");
      var mainView = new MainView({ todos: todos }, app);
      mainView.render();
    })
  });


});
