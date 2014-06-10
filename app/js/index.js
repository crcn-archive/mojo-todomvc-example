var Application = require("mojo-application");

module.exports = Application.extend({
  registerPlugins: function () {

    // globally accessible functions
    this.use(require("mojo-mediator"));
    this.use(require("mojo-bootstrap"))

    // models
    this.use(require("mojo-models"))

    // view controller
    this.use(require("mojo-views"))

    // templates
    this.use(require("mojo-paperclip"));

    // HTTP router
    this.use(require("mojo-router"));

    this.use(require("./commands"));
    this.use(require("./models"));
    this.use(require("./views"));
    this.use(require("./templates"));
    this.use(require("./routes"));
  }
});
