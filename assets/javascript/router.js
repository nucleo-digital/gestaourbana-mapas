var _ = require('underscore');
var L = require('../bower_components/leaflet/dist/leaflet');

var map = L.map('map').setView([-23.445080344117105, -46.78013442158101], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var L_layer_group = L.layerGroup().addTo(map);

var Backbone = window.Backbone;

var router = Backbone.Router.extend({
  routes: {
      '': 'index',
      'show/:id': 'show',
      'download/*random': 'download',
      'search/:query': 'search',
      '*default': 'default'
  },

  index: function(){

    var Layer = Backbone.Model.extend({
        attributes : {
            'name': 'Empty Layer',
            'features': {},
            'created_at': Date.now
        },
        idAttribute: "_id",
        urlRoot: '/layer'
    });

    var LayerCollection = Backbone.Collection.extend({
        model: Layer
    });

    var GroupLayer = Backbone.Model.extend({
        attributes : {
            'name': 'Empty Group',
            'layers': new LayerCollection(),
            'created_at':  Date.now
        },
        idAttribute: "_id",
        url: '/groups'
    });

    var groups = new GroupLayer();

    var AccordionView = Backbone.View.extend({
        tagName: 'div',
        el: '.accordion-group',
        template:  _.template( jQuery('#accordion-group-layers').html()),
        events: {
            'click a.layer': "loadLayer"
        },
        loadLayer : function (e) {
            e.preventDefault();
            var link = jQuery(e.currentTarget);

            var layer_id = link.data('layer-id');
            var layer = new Layer({'_id':layer_id});

            layer.fetch({ success : function (model, response, options) {
                var colors = [ '#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'];
                var current_color = _.sample(colors, 1);
                var myStyle = {
                    "color": current_color,
                    "weight": 3,
                    "opacity": 0.9
                };



                if (L_layer_group.hasLayer(layer_id)) {
                    L_layer_group.removeLayer(layer_id);
                    link.css({'background-color':'#fff'});
                } else {
                    link.css({'background-color':current_color});
                    var myLayer = L.geoJson(response[0].features, {
                        style: myStyle
                    });
                    myLayer._leaflet_id = layer_id;

                    L_layer_group.addLayer(myLayer);

                    map.fitBounds(myLayer.getBounds());
                }
            }});
        },
        initialize: function() {
            this.render();
        },
        render: function() {
            this.$el.html(this.template({groups: this.model.toJSON()}));
            return this;
        }
    });

    groups.fetch({ success : function (model, response, options) {
            var s = new AccordionView({model:groups});
        }
    });
  },

  show: function(id){
      $(document.body).append("Show route has been called.. with id equals : " + id);
  },

  download: function(random){
      $(document.body).append("download route has been called.. with random equals : " + random);
  },

  search: function(query){
      $(document.body).append("Search route has been called.. with query equals : " + query);
  },

  default: function(defaultt){
      $(document.body).append("This route is not hanled.. you tried to access: " + defaultt);

  }

});

module.exports = router;
