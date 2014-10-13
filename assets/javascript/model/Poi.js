var Backbone = window.Backbone;

module.exports = Backbone.Model.extend({
    attributes : {
        'name': 'Empty Poi',
        'features': {},
        'created_at': Date.now
    },
    idAttribute: "_id",
    urlRoot: '/poi'
});
