var App = window.App || {};
var Backbone = window.Backbone;
var _ = require('underscore');

var Quill = require('../../bower_components/quill/dist/quill.min');

module.exports = function () {

    var NewsView = Backbone.View.extend({
        tagName: 'div',
        el: '.news-container',

        template:  _.template( jQuery('#criar-noticia-modal').html()),
        events: {
            'click .submit': "salvarNoticia"
        },
        salvarNoticia : function (e) {
            var form = jQuery('form#criar-noticia');


            // console.log(e.currentTarget.href);
            // App.Router.navigate(e.currentTarget.href, {trigger: true})
            // var link = jQuery(e.currentTarget);

            // var layer_id = link.data('layer-id');
            // var myLayer = L_layer_theme.getLayer(layer_id);
            // map.fitBounds(myLayer.getBounds());

            // if ($.support.currentGrid().grid == 'xs') {
            //     jQuery('.mobile-sidebar').trigger('click');
            // }
        },
        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template({poi: this.model.toJSON()}));
            var quill = new Quill('#editor', {
                modules: {
                  'toolbar': { container: '#toolbar' },
                  'image-tooltip': true,
                  'link-tooltip': true
                },
                theme: 'snow'
            });
            jQuery('.modal-noticia-criar').trigger('click');
            return this;
        }
    });

    return NewsView;
};
