var Application = require("mojo-application");

require("paperclip");

module.exports = Application.extend({
  plugins: [

    // globally accessible functions
    require("mojo-mediator"),
    require("mojo-bootstrap"),

    // models
    require("mojo-models"),

    // view controller
    require("mojo-views"),

    // template engine
    require("mojo-paperclip"),

    // HTTP Router - maintains application state
    require("mojo-router"),

    // app specific stuff
    require("./commands"),
    require("./models"),
    require("./views"),
    require("./routes")
  ]
});
