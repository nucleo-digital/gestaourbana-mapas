var _ = require('underscore');

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
        }
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
        url: '/groups'
    });

    var GroupLayerCollection = Backbone.Collection.extend({
        model: GroupLayer,
    });

    var groups = new GroupLayer();

    var SidebarView = Backbone.View.extend({
        tagName: 'div',
        el: '.sidebar',
        model : GroupLayer,
        template: '#accordions',
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

// _.template('<div class="accordion-group">
//     <div class="accordion">
//         <div class="accordion-head">
//             <a data-dropdown-target="#cllps1" data-dropdown-parent=".accordion-group" href="#">Accordion Header Trigger</a>
//         </div>
//         <div id="cllps1" class="accordion-body dropdown-group"><p>Lorem ipsum dolor sit amet...</p></div>
//     </div>
//     <div class="accordion">
//         <div class="accordion-head">
//             <a  data-dropdown-target="#cllps2" data-dropdown-parent=".accordion-group" href="#">Accordion Header Trigger</a>
//         </div>
//         <div id="cllps2" class="accordion-body collapse dropdown-group"><p>Lorem ipsum dolor sit amet...</p></div>
//     </div>
// </div>')



    groups.fetch({ success : function (model, response, options) {
            console.log(response);
            // (groups.toJSON());
                var s = new SidebarView({el:document.getElementById('#sidebar')});
                console.log(s);
        }
    });






    $(document.body).append("Index route has been called..");
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
