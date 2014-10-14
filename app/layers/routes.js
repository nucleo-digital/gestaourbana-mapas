var Layer = require('./LayerModel');
var _ = require('underscore');

function getLayer(req, res) {
    var id = req.params.id;
    Layer.find({_id:id}).exec(function(err, results) {
        res.json(results);
    });
}

function getPoi(req, res) {
    var id = req.params.id;
    Layer.findOne({'features.features._id':id}).exec(function(err, results) {

        var poi = [];

        // paying the price of not separate feature documents from geoJSON structure
        _.each(results.toObject().features.features, function (v,k) {
            if (v._id == id) {
                poi.push(v)
            }
        });

        res.json(poi[0]);
    })
}

function setup(app) {
    app.get('/poi/:id', getPoi);
    app.get('/layer/:id', getLayer);
}

module.exports = setup;
