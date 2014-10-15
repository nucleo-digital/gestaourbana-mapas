var App = window.App || {};
var Backbone = window.Backbone;
var _ = require('underscore');

module.exports = function () {

    var PoiView = Backbone.View.extend({
        tagName: 'div',
        el: '.ponto-de-interesse',
        template:  _.template( jQuery('#ponto-de-interesse-info').html()),
        initialize: function() {
            this.render();
        },
        render: function() {
            this.$el.html(this.template({poi: this.model.toJSON()}));

            return this;
        }
    });

    return PoiView;
};
