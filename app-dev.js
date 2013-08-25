

//start the Node Mirror Server
var nodeMirror = require('node-mirror');
nodeMirror.startServer({
  dir:"."
});

//Start the main app
var appfork = require('child_process').fork;
var mainapp = appfork(__dirname + '/app.js');

