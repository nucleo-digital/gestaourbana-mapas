var _ = require('underscore');
var L = require('../bower_components/leaflet/dist/leaflet');

var LayerModel = require('./model/Layer');
var ThemeModel = require('./model/Theme');
var GroupLayerModel = require('./model/GroupLayer')

var router = Backbone.Router.extend({
  routes: {
      '': 'index',
      'show/:id': 'show',
      'download/*random': 'download',
      'search/:query': 'search',
      '*default': 'default'
  },

  index: function(){

    // setup map config
    var map = L.map('map').setView([-23.55, -46.633333], 13);
    L.Icon.Default.imagePath = '/images/leaflet';
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var GroupLayerView = require('./view/GroupLayer')(map);
    var ThemeView = require('./view/Theme')(map);


    var groups = new GroupLayerModel();

    groups.fetch({ success : function (model, response, options) {
            var s = new GroupLayerView({model:groups});
        }
    });

    var theme_active = new ThemeModel();

    theme_active.fetch({ success : function (model, response, options) {
            var t = new ThemeView({model:theme_active});
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
