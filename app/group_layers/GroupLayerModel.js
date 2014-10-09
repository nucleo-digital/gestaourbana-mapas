'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GroupLayerSchema = new Schema({
  name: { type: String, index: true },
  layers: [{type: 'ObjectId', ref: 'Layer'}],
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GroupLayer', GroupLayerSchema);
