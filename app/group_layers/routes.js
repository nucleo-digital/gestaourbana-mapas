var LayerModel = require('../layers/LayerModel');
var GroupLayer = require('./GroupLayerModel');

function getGroups(req, res) {
    GroupLayer.find({}).populate('layers', 'name').exec(function(err, results) {
        res.json(results);
    })
}

function createVehicle(req, res) {
  //...
}

function setup(app) {
  app.post('/vehicles', createVehicle);
  app.get('/groups', getGroups);
}

module.exports = setup;
