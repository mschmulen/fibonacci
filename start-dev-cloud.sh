
#kill any node procs that may be hanging around
killall node

#start node-inspector
slnode debug app.js &

#start the node-mirror IDE
node app-ide.js --port 3001 --username matt --password matt &

#open broswer windows
echo "open your browser window to"
echo "App http://ec2-54-215-94-59.us-west-1.compute.amazonaws.com:3000"
echo "IDE http://ec2-54-215-94-59.us-west-1.compute.amazonaws.com:3001"
echo "Debugger http://ec2-54-215-94-59.us-west-1.compute.amazonaws.com:3000"
echo "Ops Console http://nodefly.com/ops/dashboard"
