
var nodeMirror = require("node-mirror");
var argv = require("optimist").argv;

if (argv.makemodules){
  nodeMirror._makeModules();
  return;
};

nodeMirror.startServer({
  dir: argv.dir ? argv.dir : process.cwd()
});

/*
var nodeMirror = require('node-mirror');
nodeMirror.startServer({
  dir:"."
});
*/

/*
 node app-dev-tool-ide.js --port 2000 --dir . --username matt --password matt
 nodeMirror.set('port', process.env.PORT || 3001);

require("restartable")(function(parRestartableObj){
  console.log("this code is restartable");
  setTimeout(function(){
    parRestartableObj.restart();
  }, 2000);
}, function(parRestartableObj){
  console.log("this code is not restartable");
  setTimeout(function(){
    parRestartableObj.restart();
  }, 8000);
});

*/

