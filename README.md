## Mojo TodoMVC [![Build Status](https://travis-ci.org/classdojo/mojo-todomvc-example.svg)](https://travis-ci.org/classdojo/mojo-todomvc-example)

http://mojo-todomvc-example.herokuapp.com/

## Requirements

- [Node.js](http://nodejs.org/) - needed for unit testing and [browserify](http://browserify.org/)

## Project Structure

```
app/
  js/
    entry.js - initializes the application and adds to the body of the DOM
    index.js - main application class
    views/ - all view controllers & templates displayed to the user
    routes/ - all HTTP routes. controls the view state of the application
    models/ - all data models for the application. Controls all information.
    commands/ - global commands for the application.
build/ - output folder where app is built to
test/
  unit/ - unit test files. These run in node.
```


## Installation

```
git clone git@github.com:classdojo/mojo-todomvc-example.git && cd mojo-todomvc-example && npm install;
```

## Building

To build your application, simply run:

```
npm run build
```

## Debugging

The easiest way to debug your application is run:

```
npm start
```

This will open up an http server `http://localhost:8080` which you can visit in your browser.

You can also use the built-in hotswap script which will automatically refresh all resources if they change:

```
npm run hotswap
```

Note that the above command assumes that you're already running `npm start`.

## Testing

```
npm test
```
