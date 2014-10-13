var App = window.App || {};

var _ = require('underscore');
var L = require('../bower_components/leaflet/dist/leaflet');

var LayerModel = require('./model/Layer');
var ThemeModel = require('./model/Theme');
var GroupLayerModel = require('./model/GroupLayer');

var Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'ponto-de-interesse/:id': 'show',
        'download/*random': 'download',
        'search/:query': 'search',
        '*default': 'default'
    },

    index: function() {

        var groups = new GroupLayerModel();

        groups.fetch({
            success: function(model, response, options) {
                var s = new App.GroupLayerView({
                    model: groups
                });
            }
        });

        var theme_active = new ThemeModel();

        theme_active.fetch({
            success: function(model, response, options) {
                var t = new App.ThemeView({
                    model: theme_active
                });
            }
        });

    },

    show: function(id) {
        // $(document.body).append("Show route has been called.. with id equals : " + id);

        console.log("Router: "+ id);
    },

    download: function(random) {
        $(document.body).append("download route has been called.. with random equals : " + random);
    },

    search: function(query) {
        $(document.body).append("Search route has been called.. with query equals : " + query);
    },

    default: function(defaultt) {
        $(document.body).append("This route is not hanled.. you tried to access: " + defaultt);

    }

});


module.exports = Router;
