var LayerModel = require('../layers/LayerModel');
var GroupLayer = require('./GroupLayerModel');

function getGroups(req, res) {
    var opts = {
        path: 'layers',
        select: 'name'
        //  features.features.geometry.type
        // options: {
        //     limit: 1
        // }
    };
    GroupLayer.find({}).populate(opts).exec(function(err, results) {
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
