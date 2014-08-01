var Application = require("./index");

var app = global.app = new Application();

app.initialize({ 
  element: document.body 
});
