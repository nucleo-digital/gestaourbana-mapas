var _ = require('underscore');
var Backbone = window.Backbone;
var LayerModel = require('../model/Layer');
var L = require('../../bower_components/leaflet/dist/leaflet');

module.exports = function (map) {

    var onEachFeature = function (feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties) {
            var featurePopup = _.template(jQuery('#feature-popup').html());
            layer.bindPopup(featurePopup({'feature':feature}));
        }
    }

    var L_layer_group = L.layerGroup().addTo(map);

    var GroupLayerView = Backbone.View.extend({
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
            var layer = new LayerModel({'_id':layer_id});

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
                        onEachFeature: onEachFeature,
                        filter: function(feature, layer) {
                            if ( (feature.geometry.coordinates[0] == 0) &&
                                 (feature.geometry.coordinates[1] == 0) ) {
                                return false;
                            }

                            return true;
                        }
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

    return GroupLayerView;
}
