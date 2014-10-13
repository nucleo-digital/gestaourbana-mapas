var jQuery = window.jQuery;
window.Backbone = require('../bower_components/backbone/backbone');
window.Backbone.$ = jQuery;

require('../bower_components/responsive/build/responsive.min');
var Sharrre = require('../bower_components/Sharrre/jquery.sharrre.min');

jQuery('#compartilhar').sharrre({
    share: {
        twitter: true,
        facebook: true,
        googlePlus: true
    },
    template: '<span class="show-for-medium-up">Compartilhe</span><a href="#" class="facebook"><i class="fa fa-facebook"></i></a><a href="#" class="twitter"><i class="fa fa-twitter"></i></a><a href="#" class="googleplus"><i class="fa fa-google-plus"></i></a>',
    enableHover: false,
    enableTracking: true,
    urlCurl: '',
    render: function(api, options){
        jQuery(api.element).on('click', '.twitter', function() {
            api.openPopup('twitter');
        });
        jQuery(api.element).on('click', '.facebook', function() {
            api.openPopup('facebook');
        });
        jQuery(api.element).on('click', '.googleplus', function() {
            api.openPopup('googlePlus');
        });
    }
});

// set height of sidebar and map area to fit screen
function adjustWorkingArea () {
    var h_header = jQuery('.header').height();
    var h_footer = jQuery('.footer').height();
    var h_window = jQuery(window).height();
    var padding = 10;
    ['#sidebar', '#map'].forEach(function (panels) {
        jQuery(panels).css({'height': h_window - h_footer - h_header - padding});
    });
}
adjustWorkingArea();
jQuery(window).on('resize', adjustWorkingArea);

// enable menu transition on mobile format
jQuery('.mobile-sidebar').on('click', function (evt) {
    var el = jQuery('#sidebar');

    if (el.hasClass('desativado')) {
        el.addClass('animated fadeInLeft');
        jQuery('#sidebar').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            el.removeClass('animated fadeInLeft desativado');
        });
    } else {
        el.addClass('animated fadeOutLeft');
        jQuery('#sidebar').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            el.addClass('desativado');
            el.removeClass('animated fadeOutLeft');
        });
    }
});

var Router = require('./router');

var App = {
      Models: {},
      Collections: {},
      Views: {},
      Router: Router
  };

new App.Router;
Backbone.history.start();
