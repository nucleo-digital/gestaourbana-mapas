var jQuery = window.jQuery;

var L = require('../bower_components/leaflet/dist/leaflet-src');

var map = L.map('map').setView([51.505, -0.09], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup. <br> Easily customizable.')
//     .openPopup();


window.Backbone = require('../bower_components/backbone/backbone');
window.Backbone.$ = jQuery;

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

var Router = require('./router');

var App = {
      Models: {},
      Collections: {},
      Views: {},
      Router: Router
  };

new App.Router;
Backbone.history.start();
