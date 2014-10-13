var _ = require('underscore');
var L = require('../bower_components/leaflet/dist/leaflet');

var map = L.map('map').setView([-23.55, -46.633333], 13);
L.Icon.Default.imagePath = '/images/leaflet';
// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var L_layer_group = L.layerGroup().addTo(map);
var L_layer_theme = L.featureGroup().addTo(map);

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

            link.prepend('<i class="fa fa-circle-o-notch fa-spin"></i>');
            layer.fetch({ success : function (model, response, options) {
                var colors = [ '#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'];
                var current_color = _.sample(colors, 1);
                var myStyle = {
                    "color": current_color,
                    "weight": 3,
                    "opacity": 1
                };

                var el_icon = link.find('i');

                if (L_layer_group.hasLayer(layer_id)) {
                    L_layer_group.removeLayer(layer_id);

                    // el_icon.toggleClass('fa-square-o');
                    // el_icon.toggleClass('fa-square');
                    link.css({'border-color':'#eee'});
                    link.css({'background-color':'#fff'});
                    link.toggleClass('active');
                } else {
                    link.css({'border-color':current_color});
                    // el_icon.toggleClass('fa-square-o');
                    // el_icon.toggleClass('fa-square');
                    link.css({'background-color':current_color});
                    link.toggleClass('active');

                    var myLayer = L.geoJson(response[0].features, {
                        style: myStyle,
                        onEachFeature: onEachFeature
                    });
                    myLayer._leaflet_id = layer_id;

                    L_layer_group.addLayer(myLayer);

                    map.fitBounds(myLayer.getBounds());
                }

                link.find('i').remove();
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

    var Theme = Backbone.Model.extend({
        attributes : {
            'name': 'Empty Theme',
            'layers': new LayerCollection(),
            'created_at':  Date.now
        },
        idAttribute: "_id",
        url: '/themes/active'
    });

    var theme_active = new Theme();

    var toggleIconAccordion = function () {
        jQuery(".accordion-group").on("show.r.dropdown", function(event) {
            var el = jQuery(event.target).find('i.fa-angle-down');
            el.addClass('fa-angle-up');
            el.removeClass('fa-angle-down');
        });

        jQuery(".accordion-group").on("hide.r.dropdown", function(event) {
            console.log(event);
            var el = jQuery(event.target).find('i.fa-angle-up');
            el.addClass('fa-angle-down');
            el.removeClass('fa-angle-up');
        });
    };

    var onEachFeature = function (feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            var featurePopup = _.template(jQuery('#feature-popup').html());
            layer.bindPopup(featurePopup({'feature':feature}));
        }
    }

    var ThemeView = Backbone.View.extend({
        tagName: 'div',
        el: '.theme',
        template:  _.template( jQuery('#theme-active').html()),
        events: {
            'click a.layer': "zoom"
        },
        zoom : function (e) {
            e.preventDefault();
            var link = jQuery(e.currentTarget);

            var layer_id = link.data('layer-id');
            var myLayer = L_layer_theme.getLayer(layer_id);
            map.fitBounds(myLayer.getBounds());
        },
        initialize: function() {
            // this.listenTo(this.model, "change", this.render);
            this.render();
        },
        render: function() {
            this.$el.html(this.template({theme: this.model.toJSON()}));
            var layer_themes = [];
            var colors = [ '#4daf4a', '#377eb8', '#e41a1c'];

            jQuery('.theme').find('.layer').each(function (k,v) {
                var link = jQuery(v);
                var layer_id = link.data('layer-id');

                var current_color = colors[k];
                var myStyle = {
                    "color": current_color,
                    "weight": 3,
                    "opacity": 0.9
                };
                $("<style type='text/css'> .L_"+layer_id+" { color: "+current_color+"; } </style>").appendTo("head");
                link.css({'border-color':current_color});
                // el_icon.toggleClass('fa-square-o');
                // el_icon.toggleClass('fa-square');
                // link.css({'background-color':current_color});

                var layer = new Layer({'_id':layer_id});
                // layer.set('color', current_color);
                layer.set('myStyle', myStyle);
                layer_themes.push(layer);
            });

            _.each(layer_themes, function(v, k) {
                v.fetch({ success : function (model, response, options) {
                    var myLayer = L.geoJson(response[0].features, {
                        style: model.myStyle,
                        pointToLayer: function ( featureData, latlng ) {
                            var myIcon = L.divIcon({className: 'icon-theme fa fa-map-marker fa-3x L_'+model.id});
                            return L.marker(latlng, {icon: myIcon});
                            // L.circleMarker(latlng, geojsonMarkerOptions);
                        }
                    });
                    myLayer._leaflet_id = model.id;

                    L_layer_theme.addLayer(myLayer);
                    map.fitBounds(L_layer_theme.getBounds());
                }});
            });

            toggleIconAccordion();

            return this;
        }
    });

    theme_active.on('change', function(model) {
        // console.log($('#sidebar').html(), model);
        // $('#theme').find('.layer').trigger('click');

    });

    theme_active.fetch({ success : function (model, response, options) {
            var t = new ThemeView({model:theme_active});
            // t.on('change', function(model) {
            //     console.log($('#theme').html());
            //     $('#theme').find('.layer').trigger('click');
            // });
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
