var Layer = require('./LayerModel');
// var router = require('express').Router();

function getLayer(req, res) {
    // var id = req.params.id;
    Layer.find({_id:req.params.id}).populate('layers', 'name').exec(function(err, results) {
        res.json(results);
    })
}

function setup(app) {
    // app.param('id', /^\d+$/);

    // app.post('/customers', createCustomer);
    app.get('/layer/:id', getLayer);
}

module.exports = setup;
