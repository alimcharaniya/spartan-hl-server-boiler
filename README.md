# Spartan Hyperloop - Mission Control Station

## Spartan Hyperloop at San Jose State University
Collegiate engineering team competing in international SpaceX Hyperloop competition.

Technologies: HTML/Bootstrap, jQuery, NodeJS, RPi, Raspbian, WebSockets, Python

## Deploying the web application

- Verify you have the latest version of NodeJS installed
- Clone the application and cd into the root
- Run `npm install`  
- You may need to npm install socket-io and node-gyp as independent dependencies
- After all dependencies have installed, run `npm start`
- This will run the server and host the application on localhost port 8080.

## Understanding communication

Read up on NodeJs and its non blocking nature. You need to have a solid understanding of async call backs.

Understand TCP/IP sockets, then look into [Socket IO](https://socket.io/)

SocketIO is a javascript framework that enables bi directional real time communication between a server and a client.
Bindings are also available for Python to be ran on the pod Rpi.

**Possible improvement could be moving away from SocketIO and looking into a distributed messaging framework such as 0MQ or MQTT**

## Server

A server is instantiated using Express, a server framework for NodeJS as part of the MEAN stack.
Server code is in `server/bin/www`

**If server will be running in cloud, verify environment variables (port # and IP address) are correctly set inside of Node application**

## Front end

The control station GUI is built with HTML and Bootstrap for responsive UI features.
Refer to bootstrap documentation for pre built ui component classes.
Modify views in server/views/index.html
