var Application = require("mojo-application");

require("paperclip");

module.exports = Application.extend({

  /**
   */

  plugins: [
    require("mojo-bootstrap"), // initializes the application, and calls didBootstrap
    require("mojo-models"),    // model data
    require("mojo-views"),     // view controllers - maintains application view structure
    require("mojo-paperclip"), // template engine
    require("mojo-router"),    // HTTP router - maintains application state
    require("./models"),    
    require("./views"),
    require("./routes")
  ],

  /**
   */

  didBootstrap: function (options) {
    $(options.element).append(this.views.create("main", {
      todos: app.todos = this.models.create("todos").load()
    }).render());
  }
});
