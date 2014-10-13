var Backbone = window.Backbone;
var LayerModel = require('../model/Layer');

module.exports = Backbone.Collection.extend({
    model: LayerModel
});
