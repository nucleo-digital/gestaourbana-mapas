var App = window.App || {};
var Backbone = window.Backbone;
var _ = require('underscore');

module.exports = function () {

    var PoiView = Backbone.View.extend({
        tagName: 'div',
        el: '.ponto-de-interesse',
        template:  _.template( jQuery('#ponto-de-interesse-info').html()),
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
            this.render();
        },
        render: function() {
            this.$el.html(this.template({theme: this.model.toJSON()}));

            return this;
        }
    });

    return PoiView;
};
