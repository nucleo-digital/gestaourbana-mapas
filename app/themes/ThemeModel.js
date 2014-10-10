'use strict';

var LayerModel = require('../layers/LayerModel');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ThemeSchema = new Schema({
  name: { type: String, index: true },
  layers: [{type: 'ObjectId', ref: 'Layer'}],
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Theme', ThemeSchema);
