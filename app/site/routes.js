//Here's a set of routes for the full HTML pages on our site
var express = require('express');
var path = require('path');

function home(req, res) {
  res.render("site/home");
}

function sobre(req, res) {
  res.render("site/sobre");
}

function como_usar(req, res) {
  res.render("site/como-usar");
}

function setup(app) {
  // app.use(express.static(__dirname + "../publicc"));
  app.use(express.static(path.join(__dirname, '../../public')));

  app.get('/', home);
  app.get('/sobre', sobre);
  app.get('/como-usar', como_usar);
}

module.exports = setup;
