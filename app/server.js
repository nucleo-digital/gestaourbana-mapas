#!/usr/bin/env node
var config = require("./config");
var express = require("express");
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('./db');
var app = express();

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

//Use whichever logging system you prefer.
//Doesn't have to be winston, I just wanted something more or less realistic
var log = require("winston").loggers.get("app:server");

app.set("views", __dirname);
//use whatever templating system(s) you like
app.set("view engine", "jade");

//See the README about ordering of middleware
//Load the routes ("controllers" -ish)
[
  "./users/routes",
  "./group_layers/routes",
  "./layers/routes",
  "./themes/routes",
  "./site/routes"
].forEach(function (routePath) {
    require(routePath)(app);
});

//FINALLY, use any error handlers
app.use(require("app/middleware").notFound);

//Note that there's not much logic in this file.
//The server should be mostly "glue" code to set things up and
//then start listening


app.listen(config.express.port, config.express.ip, function (error) {
  if (error) {
    log.error("Unable to listen for connections", error);
    process.exit(10);
  }
  log.info("express is listening on http://" +
    config.express.ip + ":" + config.express.port);
});
