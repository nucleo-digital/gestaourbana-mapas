var Backbone = window.Backbone;

module.exports = Backbone.Model.extend({
    attributes : {
        'name': 'Empty Layer',
        'features': {},
        'created_at': Date.now
    },
    idAttribute: "_id",
    urlRoot: '/layer'
});