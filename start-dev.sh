
#kill any node procs that may be hanging around
killall node

#start node-inspector
slnode debug app.js &

#start the node-mirror IDE
node app-ide.js --port 3001 --username matt --password matt &

#open broswer windows
#open a window to strong ops console
open http://nodefly.com/ops/dashboard

#open a window to the IDE
open http://localhost:3001

#open the main App
open http://localhost:3000

echo "running ... debugger, ide, strong-ops console, and the app.js "

