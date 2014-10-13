var Backbone = window.Backbone;
var LayerCollection = require('../collection/Layer');

module.exports = Backbone.Model.extend({
        attributes : {
            'name': 'Empty Theme',
            'layers': new LayerCollection(),
            'created_at':  Date.now
        },
        idAttribute: "_id",
        url: '/themes/active'
    });
