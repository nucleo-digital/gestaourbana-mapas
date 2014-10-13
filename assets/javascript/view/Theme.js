var App = window.App || {};
var Backbone = window.Backbone;
var _ = require('underscore');
var L = require('../../bower_components/leaflet/dist/leaflet');
var LayerModel = require('../model/Layer');

module.exports = function (map) {
    var L_layer_theme = L.featureGroup().addTo(map);

    // helper functions to render current view
    var toggleIconAccordion = function () {
        jQuery(".accordion-group").on("show.r.dropdown", function(event) {
            var el = jQuery(event.target).find('i.fa-angle-down');
            el.addClass('fa-angle-up');
            el.removeClass('fa-angle-down');
        });

        jQuery(".accordion-group").on("hide.r.dropdown", function(event) {
            var el = jQuery(event.target).find('i.fa-angle-up');
            el.addClass('fa-angle-down');
            el.removeClass('fa-angle-up');
        });
    };

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

            if ($.support.currentGrid().grid == 'xs') {
                jQuery('.mobile-sidebar').trigger('click');
            }
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

                jQuery("<style type='text/css'> .L_"+layer_id+" { color: "+current_color+"; } </style>").appendTo("head");
                link.css({'border-color':current_color});

                var layer = new LayerModel({'_id':layer_id});
                layer.set('myStyle', myStyle);

                layer_themes.push(layer);
            });

            _.each(layer_themes, function(v, k) {
                v.fetch({ success : function (model, response, options) {
                    var myLayer = L.geoJson(response[0].features, {
                        style: model.myStyle,
                        pointToLayer: function ( featureData, latlng ) {
                            var myIcon = L.divIcon({className: 'icon-theme fa fa-map-marker fa-3x L_'+model.id});
                            return L.marker(latlng, {icon: myIcon}).on('click', function (e) {
                                App.Router.navigate('ponto-de-interesse/'+featureData._id, {trigger: true})
                            });;
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

    return ThemeView;
};
