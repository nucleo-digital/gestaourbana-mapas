(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 *  Sharrre.com - Make your sharing widget!
 *  Version: beta 1.3.5
 *  Author: Julien Hany
 *  License: MIT http://en.wikipedia.org/wiki/MIT_License or GPLv2 http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
;(function(g,i,j,b){var h="sharrre",f={className:"sharrre",share:{googlePlus:false,facebook:false,twitter:false,digg:false,delicious:false,stumbleupon:false,linkedin:false,pinterest:false},shareTotal:0,template:"",title:"",url:j.location.href,text:j.title,urlCurl:"sharrre.php",count:{},total:0,shorterTotal:true,enableHover:true,enableCounter:true,enableTracking:false,hover:function(){},hide:function(){},click:function(){},render:function(){},buttons:{googlePlus:{url:"",urlCount:false,size:"medium",lang:"en-US",annotation:""},facebook:{url:"",urlCount:false,action:"like",layout:"button_count",width:"",send:"false",faces:"false",colorscheme:"",font:"",lang:"en_US"},twitter:{url:"",urlCount:false,count:"horizontal",hashtags:"",via:"",related:"",lang:"en"},digg:{url:"",urlCount:false,type:"DiggCompact"},delicious:{url:"",urlCount:false,size:"medium"},stumbleupon:{url:"",urlCount:false,layout:"1"},linkedin:{url:"",urlCount:false,counter:""},pinterest:{url:"",media:"",description:"",layout:"horizontal"}}},c={googlePlus:"",facebook:"https://graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url=%27{url}%27&callback=?",twitter:"http://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",digg:"http://services.digg.com/2.0/story.getInfo?links={url}&type=javascript&callback=?",delicious:"http://feeds.delicious.com/v2/json/urlinfo/data?url={url}&callback=?",stumbleupon:"",linkedin:"http://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",pinterest:"http://api.pinterest.com/v1/urls/count.json?url={url}&callback=?"},l={googlePlus:function(m){var n=m.options.buttons.googlePlus;g(m.element).find(".buttons").append('<div class="button googleplus"><div class="g-plusone" data-size="'+n.size+'" data-href="'+(n.url!==""?n.url:m.options.url)+'" data-annotation="'+n.annotation+'"></div></div>');i.___gcfg={lang:m.options.buttons.googlePlus.lang};var o=0;if(typeof gapi==="undefined"&&o==0){o=1;(function(){var p=j.createElement("script");p.type="text/javascript";p.async=true;p.src="//apis.google.com/js/plusone.js";var q=j.getElementsByTagName("script")[0];q.parentNode.insertBefore(p,q)})()}else{gapi.plusone.go()}},facebook:function(m){var n=m.options.buttons.facebook;g(m.element).find(".buttons").append('<div class="button facebook"><div id="fb-root"></div><div class="fb-like" data-href="'+(n.url!==""?n.url:m.options.url)+'" data-send="'+n.send+'" data-layout="'+n.layout+'" data-width="'+n.width+'" data-show-faces="'+n.faces+'" data-action="'+n.action+'" data-colorscheme="'+n.colorscheme+'" data-font="'+n.font+'" data-via="'+n.via+'"></div></div>');var o=0;if(typeof FB==="undefined"&&o==0){o=1;(function(t,p,u){var r,q=t.getElementsByTagName(p)[0];if(t.getElementById(u)){return}r=t.createElement(p);r.id=u;r.src="//connect.facebook.net/"+n.lang+"/all.js#xfbml=1";q.parentNode.insertBefore(r,q)}(j,"script","facebook-jssdk"))}else{FB.XFBML.parse()}},twitter:function(m){var n=m.options.buttons.twitter;g(m.element).find(".buttons").append('<div class="button twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="'+(n.url!==""?n.url:m.options.url)+'" data-count="'+n.count+'" data-text="'+m.options.text+'" data-via="'+n.via+'" data-hashtags="'+n.hashtags+'" data-related="'+n.related+'" data-lang="'+n.lang+'">Tweet</a></div>');var o=0;if(typeof twttr==="undefined"&&o==0){o=1;(function(){var q=j.createElement("script");q.type="text/javascript";q.async=true;q.src="//platform.twitter.com/widgets.js";var p=j.getElementsByTagName("script")[0];p.parentNode.insertBefore(q,p)})()}else{g.ajax({url:"//platform.twitter.com/widgets.js",dataType:"script",cache:true})}},digg:function(m){var n=m.options.buttons.digg;g(m.element).find(".buttons").append('<div class="button digg"><a class="DiggThisButton '+n.type+'" rel="nofollow external" href="http://digg.com/submit?url='+encodeURIComponent((n.url!==""?n.url:m.options.url))+'"></a></div>');var o=0;if(typeof __DBW==="undefined"&&o==0){o=1;(function(){var q=j.createElement("SCRIPT"),p=j.getElementsByTagName("SCRIPT")[0];q.type="text/javascript";q.async=true;q.src="//widgets.digg.com/buttons.js";p.parentNode.insertBefore(q,p)})()}},delicious:function(o){if(o.options.buttons.delicious.size=="tall"){var p="width:50px;",n="height:35px;width:50px;font-size:15px;line-height:35px;",m="height:18px;line-height:18px;margin-top:3px;"}else{var p="width:93px;",n="float:right;padding:0 3px;height:20px;width:26px;line-height:20px;",m="float:left;height:20px;line-height:20px;"}var q=o.shorterTotal(o.options.count.delicious);if(typeof q==="undefined"){q=0}g(o.element).find(".buttons").append('<div class="button delicious"><div style="'+p+'font:12px Arial,Helvetica,sans-serif;cursor:pointer;color:#666666;display:inline-block;float:none;height:20px;line-height:normal;margin:0;padding:0;text-indent:0;vertical-align:baseline;"><div style="'+n+'background-color:#fff;margin-bottom:5px;overflow:hidden;text-align:center;border:1px solid #ccc;border-radius:3px;">'+q+'</div><div style="'+m+'display:block;padding:0;text-align:center;text-decoration:none;width:50px;background-color:#7EACEE;border:1px solid #40679C;border-radius:3px;color:#fff;"><img src="http://www.delicious.com/static/img/delicious.small.gif" height="10" width="10" alt="Delicious" /> Add</div></div></div>');g(o.element).find(".delicious").on("click",function(){o.openPopup("delicious")})},stumbleupon:function(m){var n=m.options.buttons.stumbleupon;g(m.element).find(".buttons").append('<div class="button stumbleupon"><su:badge layout="'+n.layout+'" location="'+(n.url!==""?n.url:m.options.url)+'"></su:badge></div>');var o=0;if(typeof STMBLPN==="undefined"&&o==0){o=1;(function(){var p=j.createElement("script");p.type="text/javascript";p.async=true;p.src="//platform.stumbleupon.com/1/widgets.js";var q=j.getElementsByTagName("script")[0];q.parentNode.insertBefore(p,q)})();s=i.setTimeout(function(){if(typeof STMBLPN!=="undefined"){STMBLPN.processWidgets();clearInterval(s)}},500)}else{STMBLPN.processWidgets()}},linkedin:function(m){var n=m.options.buttons.linkedin;g(m.element).find(".buttons").append('<div class="button linkedin"><script type="in/share" data-url="'+(n.url!==""?n.url:m.options.url)+'" data-counter="'+n.counter+'"><\/script></div>');var o=0;if(typeof i.IN==="undefined"&&o==0){o=1;(function(){var p=j.createElement("script");p.type="text/javascript";p.async=true;p.src="//platform.linkedin.com/in.js";var q=j.getElementsByTagName("script")[0];q.parentNode.insertBefore(p,q)})()}else{i.IN.init()}},pinterest:function(m){var n=m.options.buttons.pinterest;g(m.element).find(".buttons").append('<div class="button pinterest"><a href="http://pinterest.com/pin/create/button/?url='+(n.url!==""?n.url:m.options.url)+"&media="+n.media+"&description="+n.description+'" class="pin-it-button" count-layout="'+n.layout+'">Pin It</a></div>');(function(){var o=j.createElement("script");o.type="text/javascript";o.async=true;o.src="//assets.pinterest.com/js/pinit.js";var p=j.getElementsByTagName("script")[0];p.parentNode.insertBefore(o,p)})()}},d={googlePlus:function(){},facebook:function(){fb=i.setInterval(function(){if(typeof FB!=="undefined"){FB.Event.subscribe("edge.create",function(m){_gaq.push(["_trackSocial","facebook","like",m])});FB.Event.subscribe("edge.remove",function(m){_gaq.push(["_trackSocial","facebook","unlike",m])});FB.Event.subscribe("message.send",function(m){_gaq.push(["_trackSocial","facebook","send",m])});clearInterval(fb)}},1000)},twitter:function(){tw=i.setInterval(function(){if(typeof twttr!=="undefined"){twttr.events.bind("tweet",function(m){if(m){_gaq.push(["_trackSocial","twitter","tweet"])}});clearInterval(tw)}},1000)},digg:function(){},delicious:function(){},stumbleupon:function(){},linkedin:function(){function m(){_gaq.push(["_trackSocial","linkedin","share"])}},pinterest:function(){}},a={googlePlus:function(m){i.open("https://plus.google.com/share?hl="+m.buttons.googlePlus.lang+"&url="+encodeURIComponent((m.buttons.googlePlus.url!==""?m.buttons.googlePlus.url:m.url)),"","toolbar=0, status=0, width=900, height=500")},facebook:function(m){i.open("http://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent((m.buttons.facebook.url!==""?m.buttons.facebook.url:m.url))+"&t="+m.text+"","","toolbar=0, status=0, width=900, height=500")},twitter:function(m){i.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(m.text)+"&url="+encodeURIComponent((m.buttons.twitter.url!==""?m.buttons.twitter.url:m.url))+(m.buttons.twitter.via!==""?"&via="+m.buttons.twitter.via:""),"","toolbar=0, status=0, width=650, height=360")},digg:function(m){i.open("http://digg.com/tools/diggthis/submit?url="+encodeURIComponent((m.buttons.digg.url!==""?m.buttons.digg.url:m.url))+"&title="+m.text+"&related=true&style=true","","toolbar=0, status=0, width=650, height=360")},delicious:function(m){i.open("http://www.delicious.com/save?v=5&noui&jump=close&url="+encodeURIComponent((m.buttons.delicious.url!==""?m.buttons.delicious.url:m.url))+"&title="+m.text,"delicious","toolbar=no,width=550,height=550")},stumbleupon:function(m){i.open("http://www.stumbleupon.com/badge/?url="+encodeURIComponent((m.buttons.delicious.url!==""?m.buttons.delicious.url:m.url)),"stumbleupon","toolbar=no,width=550,height=550")},linkedin:function(m){i.open("https://www.linkedin.com/cws/share?url="+encodeURIComponent((m.buttons.delicious.url!==""?m.buttons.delicious.url:m.url))+"&token=&isFramed=true","linkedin","toolbar=no,width=550,height=550")},pinterest:function(m){i.open("http://pinterest.com/pin/create/button/?url="+encodeURIComponent((m.buttons.pinterest.url!==""?m.buttons.pinterest.url:m.url))+"&media="+encodeURIComponent(m.buttons.pinterest.media)+"&description="+m.buttons.pinterest.description,"pinterest","toolbar=no,width=700,height=300")}};function k(n,m){this.element=n;this.options=g.extend(true,{},f,m);this.options.share=m.share;this._defaults=f;this._name=h;this.init()}k.prototype.init=function(){var m=this;if(this.options.urlCurl!==""){c.googlePlus=this.options.urlCurl+"?url={url}&type=googlePlus";c.stumbleupon=this.options.urlCurl+"?url={url}&type=stumbleupon"}g(this.element).addClass(this.options.className);if(typeof g(this.element).data("title")!=="undefined"){this.options.title=g(this.element).attr("data-title")}if(typeof g(this.element).data("url")!=="undefined"){this.options.url=g(this.element).data("url")}if(typeof g(this.element).data("text")!=="undefined"){this.options.text=g(this.element).data("text")}g.each(this.options.share,function(n,o){if(o===true){m.options.shareTotal++}});if(m.options.enableCounter===true){g.each(this.options.share,function(n,p){if(p===true){try{m.getSocialJson(n)}catch(o){}}})}else{if(m.options.template!==""){this.options.render(this,this.options)}else{this.loadButtons()}}g(this.element).hover(function(){if(g(this).find(".buttons").length===0&&m.options.enableHover===true){m.loadButtons()}m.options.hover(m,m.options)},function(){m.options.hide(m,m.options)});g(this.element).click(function(){m.options.click(m,m.options);return false})};k.prototype.loadButtons=function(){var m=this;g(this.element).append('<div class="buttons"></div>');g.each(m.options.share,function(n,o){if(o==true){l[n](m);if(m.options.enableTracking===true){d[n]()}}})};k.prototype.getSocialJson=function(o){var m=this,p=0,n=c[o].replace("{url}",encodeURIComponent(this.options.url));if(this.options.buttons[o].urlCount===true&&this.options.buttons[o].url!==""){n=c[o].replace("{url}",this.options.buttons[o].url)}if(n!=""&&m.options.urlCurl!==""){g.getJSON(n,function(r){if(typeof r.count!=="undefined"){var q=r.count+"";q=q.replace("\u00c2\u00a0","");p+=parseInt(q,10)}else{if(r.data&&r.data.length>0&&typeof r.data[0].total_count!=="undefined"){p+=parseInt(r.data[0].total_count,10)}else{if(typeof r[0]!=="undefined"){p+=parseInt(r[0].total_posts,10)}else{if(typeof r[0]!=="undefined"){}}}}m.options.count[o]=p;m.options.total+=p;m.renderer();m.rendererPerso()}).error(function(){m.options.count[o]=0;m.rendererPerso()})}else{m.renderer();m.options.count[o]=0;m.rendererPerso()}};k.prototype.rendererPerso=function(){var m=0;for(e in this.options.count){m++}if(m===this.options.shareTotal){this.options.render(this,this.options)}};k.prototype.renderer=function(){var n=this.options.total,m=this.options.template;if(this.options.shorterTotal===true){n=this.shorterTotal(n)}if(m!==""){m=m.replace("{total}",n);g(this.element).html(m)}else{g(this.element).html('<div class="box"><a class="count" href="#">'+n+"</a>"+(this.options.title!==""?'<a class="share" href="#">'+this.options.title+"</a>":"")+"</div>")}};k.prototype.shorterTotal=function(m){if(m>=1000000){m=(m/1000000).toFixed(2)+"M"}else{if(m>=1000){m=(m/1000).toFixed(1)+"k"}}return m};k.prototype.openPopup=function(m){a[m](this.options);if(this.options.enableTracking===true){var n={googlePlus:{site:"Google",action:"+1"},facebook:{site:"facebook",action:"like"},twitter:{site:"twitter",action:"tweet"},digg:{site:"digg",action:"add"},delicious:{site:"delicious",action:"add"},stumbleupon:{site:"stumbleupon",action:"add"},linkedin:{site:"linkedin",action:"share"},pinterest:{site:"pinterest",action:"pin"}};_gaq.push(["_trackSocial",n[m].site,n[m].action])}};k.prototype.simulateClick=function(){var m=g(this.element).html();g(this.element).html(m.replace(this.options.total,this.options.total+1))};k.prototype.update=function(m,n){if(m!==""){this.options.url=m}if(n!==""){this.options.text=n}};g.fn[h]=function(n){var m=arguments;if(n===b||typeof n==="object"){return this.each(function(){if(!g.data(this,"plugin_"+h)){g.data(this,"plugin_"+h,new k(this,n))}})}else{if(typeof n==="string"&&n[0]!=="_"&&n!=="init"){return this.each(function(){var o=g.data(this,"plugin_"+h);if(o instanceof k&&typeof o[n]==="function"){o[n].apply(o,Array.prototype.slice.call(m,1))}})}}}})(jQuery,window,document);

},{}],2:[function(require,module,exports){
//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.1.2';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = void 0;
        return this;
      }
      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo) return this;
      var remove = !name && !callback;
      if (!callback && typeof name === 'object') callback = this;
      if (obj) (listeningTo = {})[obj._listenId] = obj;
      for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback, this);
        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      listeningTo[id] = obj;
      if (!callback && typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true}, options);

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !options.wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = models[i] = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model, options);
      }
      return singular ? models[0] : models;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : _.clone(models);
      var i, l, id, model, attrs, existing, sort;
      var at = options.at;
      var targetModel = this.model;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        attrs = models[i] || {};
        if (attrs instanceof Model) {
          id = model = attrs;
        } else {
          id = attrs[targetModel.prototype.idAttribute || 'id'];
        }

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(id)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge) {
            attrs = attrs === model ? model.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
        modelMap[model.id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || (order && order.length)) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (i = 0, l = toAdd.length; i < l; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (i = 0, l = orderedModels.length; i < l; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0, l = toAdd.length; i < l; i++) {
          (model = toAdd[i]).trigger('add', model, this, options);
        }
        if (sort || (order && order.length)) this.trigger('sort', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) return attrs;
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      if (model.id != null) this._byId[model.id] = model;
      if (!model.collection) model.collection = this;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && noXhrPatch) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        router.execute(callback, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = decodeURI(this.location.pathname + this.location.search);
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot() && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));

},{"underscore":18}],3:[function(require,module,exports){
/*
 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
 (c) 2010-2013, Vladimir Agafonkin
 (c) 2010-2011, CloudMade
*/
!function(t,e,i){var n=t.L,o={};o.version="0.7.3","object"==typeof module&&"object"==typeof module.exports?module.exports=o:"function"==typeof define&&define.amd&&define(o),o.noConflict=function(){return t.L=n,this},t.L=o,o.Util={extend:function(t){var e,i,n,o,s=Array.prototype.slice.call(arguments,1);for(i=0,n=s.length;n>i;i++){o=s[i]||{};for(e in o)o.hasOwnProperty(e)&&(t[e]=o[e])}return t},bind:function(t,e){var i=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return t.apply(e,i||arguments)}},stamp:function(){var t=0,e="_leaflet_id";return function(i){return i[e]=i[e]||++t,i[e]}}(),invokeEach:function(t,e,i){var n,o;if("object"==typeof t){o=Array.prototype.slice.call(arguments,3);for(n in t)e.apply(i,[n,t[n]].concat(o));return!0}return!1},limitExecByInterval:function(t,e,i){var n,o;return function s(){var a=arguments;return n?void(o=!0):(n=!0,setTimeout(function(){n=!1,o&&(s.apply(i,a),o=!1)},e),void t.apply(i,a))}},falseFn:function(){return!1},formatNum:function(t,e){var i=Math.pow(10,e||5);return Math.round(t*i)/i},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},splitWords:function(t){return o.Util.trim(t).split(/\s+/)},setOptions:function(t,e){return t.options=o.extend({},t.options,e),t.options},getParamString:function(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(e&&-1!==e.indexOf("?")?"&":"?")+n.join("&")},template:function(t,e){return t.replace(/\{ *([\w_]+) *\}/g,function(t,n){var o=e[n];if(o===i)throw new Error("No value provided for variable "+t);return"function"==typeof o&&(o=o(e)),o})},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function e(e){var i,n,o=["webkit","moz","o","ms"];for(i=0;i<o.length&&!n;i++)n=t[o[i]+e];return n}function i(e){var i=+new Date,o=Math.max(0,16-(i-n));return n=i+o,t.setTimeout(e,o)}var n=0,s=t.requestAnimationFrame||e("RequestAnimationFrame")||i,a=t.cancelAnimationFrame||e("CancelAnimationFrame")||e("CancelRequestAnimationFrame")||function(e){t.clearTimeout(e)};o.Util.requestAnimFrame=function(e,n,a,r){return e=o.bind(e,n),a&&s===i?void e():s.call(t,e,r)},o.Util.cancelAnimFrame=function(e){e&&a.call(t,e)}}(),o.extend=o.Util.extend,o.bind=o.Util.bind,o.stamp=o.Util.stamp,o.setOptions=o.Util.setOptions,o.Class=function(){},o.Class.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this._initHooks&&this.callInitHooks()},i=function(){};i.prototype=this.prototype;var n=new i;n.constructor=e,e.prototype=n;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&(e[s]=this[s]);t.statics&&(o.extend(e,t.statics),delete t.statics),t.includes&&(o.Util.extend.apply(null,[n].concat(t.includes)),delete t.includes),t.options&&n.options&&(t.options=o.extend({},n.options,t.options)),o.extend(n,t),n._initHooks=[];var a=this;return e.__super__=a.prototype,n.callInitHooks=function(){if(!this._initHooksCalled){a.prototype.callInitHooks&&a.prototype.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=n._initHooks.length;e>t;t++)n._initHooks[t].call(this)}},e},o.Class.include=function(t){o.extend(this.prototype,t)},o.Class.mergeOptions=function(t){o.extend(this.prototype.options,t)},o.Class.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i)};var s="_leaflet_events";o.Mixin={},o.Mixin.Events={addEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d=this[s]=this[s]||{},p=i&&i!==this&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)r={action:e,context:i||this},h=t[n],p?(l=h+"_idx",u=l+"_len",c=d[l]=d[l]||{},c[p]||(c[p]=[],d[u]=(d[u]||0)+1),c[p].push(r)):(d[h]=d[h]||[],d[h].push(r));return this},hasEventListeners:function(t){var e=this[s];return!!e&&(t in e&&e[t].length>0||t+"_idx"in e&&e[t+"_idx_len"]>0)},removeEventListener:function(t,e,i){if(!this[s])return this;if(!t)return this.clearAllEventListeners();if(o.Util.invokeEach(t,this.removeEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d,p,_=this[s],m=i&&i!==this&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)if(r=t[n],u=r+"_idx",c=u+"_len",d=_[u],e){if(h=m&&d?d[m]:_[r]){for(l=h.length-1;l>=0;l--)h[l].action!==e||i&&h[l].context!==i||(p=h.splice(l,1),p[0].action=o.Util.falseFn);i&&d&&0===h.length&&(delete d[m],_[c]--)}}else delete _[r],delete _[u],delete _[c];return this},clearAllEventListeners:function(){return delete this[s],this},fireEvent:function(t,e){if(!this.hasEventListeners(t))return this;var i,n,a,r,h,l=o.Util.extend({},e,{type:t,target:this}),u=this[s];if(u[t])for(i=u[t].slice(),n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context,l);r=u[t+"_idx"];for(h in r)if(i=r[h].slice())for(n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context,l);return this},addOneTimeEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addOneTimeEventListener,this,e,i))return this;var n=o.bind(function(){this.removeEventListener(t,e,i).removeEventListener(t,n,i)},this);return this.addEventListener(t,e,i).addEventListener(t,n,i)}},o.Mixin.Events.on=o.Mixin.Events.addEventListener,o.Mixin.Events.off=o.Mixin.Events.removeEventListener,o.Mixin.Events.once=o.Mixin.Events.addOneTimeEventListener,o.Mixin.Events.fire=o.Mixin.Events.fireEvent,function(){var n="ActiveXObject"in t,s=n&&!e.addEventListener,a=navigator.userAgent.toLowerCase(),r=-1!==a.indexOf("webkit"),h=-1!==a.indexOf("chrome"),l=-1!==a.indexOf("phantom"),u=-1!==a.indexOf("android"),c=-1!==a.search("android [23]"),d=-1!==a.indexOf("gecko"),p=typeof orientation!=i+"",_=t.navigator&&t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints&&!t.PointerEvent,m=t.PointerEvent&&t.navigator.pointerEnabled&&t.navigator.maxTouchPoints||_,f="devicePixelRatio"in t&&t.devicePixelRatio>1||"matchMedia"in t&&t.matchMedia("(min-resolution:144dpi)")&&t.matchMedia("(min-resolution:144dpi)").matches,g=e.documentElement,v=n&&"transition"in g.style,y="WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix&&!c,P="MozPerspective"in g.style,L="OTransition"in g.style,x=!t.L_DISABLE_3D&&(v||y||P||L)&&!l,w=!t.L_NO_TOUCH&&!l&&function(){var t="ontouchstart";if(m||t in g)return!0;var i=e.createElement("div"),n=!1;return i.setAttribute?(i.setAttribute(t,"return;"),"function"==typeof i[t]&&(n=!0),i.removeAttribute(t),i=null,n):!1}();o.Browser={ie:n,ielt9:s,webkit:r,gecko:d&&!r&&!t.opera&&!n,android:u,android23:c,chrome:h,ie3d:v,webkit3d:y,gecko3d:P,opera3d:L,any3d:x,mobile:p,mobileWebkit:p&&r,mobileWebkit3d:p&&y,mobileOpera:p&&t.opera,touch:w,msPointer:_,pointer:m,retina:f}}(),o.Point=function(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e},o.Point.prototype={clone:function(){return new o.Point(this.x,this.y)},add:function(t){return this.clone()._add(o.point(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(o.point(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},distanceTo:function(t){t=o.point(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=o.point(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=o.point(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+o.Util.formatNum(this.x)+", "+o.Util.formatNum(this.y)+")"}},o.point=function(t,e,n){return t instanceof o.Point?t:o.Util.isArray(t)?new o.Point(t[0],t[1]):t===i||null===t?t:new o.Point(t,e,n)},o.Bounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.Bounds.prototype={extend:function(t){return t=o.point(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new o.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new o.Point(this.min.x,this.max.y)},getTopRight:function(){return new o.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return t="number"==typeof t[0]||t instanceof o.Point?o.point(t):o.bounds(t),t instanceof o.Bounds?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=o.bounds(t);var e=this.min,i=this.max,n=t.min,s=t.max,a=s.x>=e.x&&n.x<=i.x,r=s.y>=e.y&&n.y<=i.y;return a&&r},isValid:function(){return!(!this.min||!this.max)}},o.bounds=function(t,e){return!t||t instanceof o.Bounds?t:new o.Bounds(t,e)},o.Transformation=function(t,e,i,n){this._a=t,this._b=e,this._c=i,this._d=n},o.Transformation.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new o.Point((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}},o.DomUtil={get:function(t){return"string"==typeof t?e.getElementById(t):t},getStyle:function(t,i){var n=t.style[i];if(!n&&t.currentStyle&&(n=t.currentStyle[i]),(!n||"auto"===n)&&e.defaultView){var o=e.defaultView.getComputedStyle(t,null);n=o?o[i]:null}return"auto"===n?null:n},getViewportOffset:function(t){var i,n=0,s=0,a=t,r=e.body,h=e.documentElement;do{if(n+=a.offsetTop||0,s+=a.offsetLeft||0,n+=parseInt(o.DomUtil.getStyle(a,"borderTopWidth"),10)||0,s+=parseInt(o.DomUtil.getStyle(a,"borderLeftWidth"),10)||0,i=o.DomUtil.getStyle(a,"position"),a.offsetParent===r&&"absolute"===i)break;if("fixed"===i){n+=r.scrollTop||h.scrollTop||0,s+=r.scrollLeft||h.scrollLeft||0;break}if("relative"===i&&!a.offsetLeft){var l=o.DomUtil.getStyle(a,"width"),u=o.DomUtil.getStyle(a,"max-width"),c=a.getBoundingClientRect();("none"!==l||"none"!==u)&&(s+=c.left+a.clientLeft),n+=c.top+(r.scrollTop||h.scrollTop||0);break}a=a.offsetParent}while(a);a=t;do{if(a===r)break;n-=a.scrollTop||0,s-=a.scrollLeft||0,a=a.parentNode}while(a);return new o.Point(s,n)},documentIsLtr:function(){return o.DomUtil._docIsLtrCached||(o.DomUtil._docIsLtrCached=!0,o.DomUtil._docIsLtr="ltr"===o.DomUtil.getStyle(e.body,"direction")),o.DomUtil._docIsLtr},create:function(t,i,n){var o=e.createElement(t);return o.className=i,n&&n.appendChild(o),o},hasClass:function(t,e){if(t.classList!==i)return t.classList.contains(e);var n=o.DomUtil._getClass(t);return n.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(n)},addClass:function(t,e){if(t.classList!==i)for(var n=o.Util.splitWords(e),s=0,a=n.length;a>s;s++)t.classList.add(n[s]);else if(!o.DomUtil.hasClass(t,e)){var r=o.DomUtil._getClass(t);o.DomUtil._setClass(t,(r?r+" ":"")+e)}},removeClass:function(t,e){t.classList!==i?t.classList.remove(e):o.DomUtil._setClass(t,o.Util.trim((" "+o.DomUtil._getClass(t)+" ").replace(" "+e+" "," ")))},_setClass:function(t,e){t.className.baseVal===i?t.className=e:t.className.baseVal=e},_getClass:function(t){return t.className.baseVal===i?t.className:t.className.baseVal},setOpacity:function(t,e){if("opacity"in t.style)t.style.opacity=e;else if("filter"in t.style){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(o){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}},testProp:function(t){for(var i=e.documentElement.style,n=0;n<t.length;n++)if(t[n]in i)return t[n];return!1},getTranslateString:function(t){var e=o.Browser.webkit3d,i="translate"+(e?"3d":"")+"(",n=(e?",0":"")+")";return i+t.x+"px,"+t.y+"px"+n},getScaleString:function(t,e){var i=o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1*t))),n=" scale("+t+") ";return i+n},setPosition:function(t,e,i){t._leaflet_pos=e,!i&&o.Browser.any3d?t.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(e):(t.style.left=e.x+"px",t.style.top=e.y+"px")},getPosition:function(t){return t._leaflet_pos}},o.DomUtil.TRANSFORM=o.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),o.DomUtil.TRANSITION=o.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),o.DomUtil.TRANSITION_END="webkitTransition"===o.DomUtil.TRANSITION||"OTransition"===o.DomUtil.TRANSITION?o.DomUtil.TRANSITION+"End":"transitionend",function(){if("onselectstart"in e)o.extend(o.DomUtil,{disableTextSelection:function(){o.DomEvent.on(t,"selectstart",o.DomEvent.preventDefault)},enableTextSelection:function(){o.DomEvent.off(t,"selectstart",o.DomEvent.preventDefault)}});else{var i=o.DomUtil.testProp(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);o.extend(o.DomUtil,{disableTextSelection:function(){if(i){var t=e.documentElement.style;this._userSelect=t[i],t[i]="none"}},enableTextSelection:function(){i&&(e.documentElement.style[i]=this._userSelect,delete this._userSelect)}})}o.extend(o.DomUtil,{disableImageDrag:function(){o.DomEvent.on(t,"dragstart",o.DomEvent.preventDefault)},enableImageDrag:function(){o.DomEvent.off(t,"dragstart",o.DomEvent.preventDefault)}})}(),o.LatLng=function(t,e,n){if(t=parseFloat(t),e=parseFloat(e),isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=t,this.lng=e,n!==i&&(this.alt=parseFloat(n))},o.extend(o.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),o.LatLng.prototype={equals:function(t){if(!t)return!1;t=o.latLng(t);var e=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return e<=o.LatLng.MAX_MARGIN},toString:function(t){return"LatLng("+o.Util.formatNum(this.lat,t)+", "+o.Util.formatNum(this.lng,t)+")"},distanceTo:function(t){t=o.latLng(t);var e=6378137,i=o.LatLng.DEG_TO_RAD,n=(t.lat-this.lat)*i,s=(t.lng-this.lng)*i,a=this.lat*i,r=t.lat*i,h=Math.sin(n/2),l=Math.sin(s/2),u=h*h+l*l*Math.cos(a)*Math.cos(r);return 2*e*Math.atan2(Math.sqrt(u),Math.sqrt(1-u))},wrap:function(t,e){var i=this.lng;return t=t||-180,e=e||180,i=(i+e)%(e-t)+(t>i||i===e?e:t),new o.LatLng(this.lat,i)}},o.latLng=function(t,e){return t instanceof o.LatLng?t:o.Util.isArray(t)?"number"==typeof t[0]||"string"==typeof t[0]?new o.LatLng(t[0],t[1],t[2]):null:t===i||null===t?t:"object"==typeof t&&"lat"in t?new o.LatLng(t.lat,"lng"in t?t.lng:t.lon):e===i?null:new o.LatLng(t,e)},o.LatLngBounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.LatLngBounds.prototype={extend:function(t){if(!t)return this;var e=o.latLng(t);return t=null!==e?e:o.latLngBounds(t),t instanceof o.LatLng?this._southWest||this._northEast?(this._southWest.lat=Math.min(t.lat,this._southWest.lat),this._southWest.lng=Math.min(t.lng,this._southWest.lng),this._northEast.lat=Math.max(t.lat,this._northEast.lat),this._northEast.lng=Math.max(t.lng,this._northEast.lng)):(this._southWest=new o.LatLng(t.lat,t.lng),this._northEast=new o.LatLng(t.lat,t.lng)):t instanceof o.LatLngBounds&&(this.extend(t._southWest),this.extend(t._northEast)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new o.LatLngBounds(new o.LatLng(e.lat-n,e.lng-s),new o.LatLng(i.lat+n,i.lng+s))},getCenter:function(){return new o.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new o.LatLng(this.getNorth(),this.getWest())},getSouthEast:function(){return new o.LatLng(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof o.LatLng?o.latLng(t):o.latLngBounds(t);var e,i,n=this._southWest,s=this._northEast;return t instanceof o.LatLngBounds?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=s.lat&&e.lng>=n.lng&&i.lng<=s.lng},intersects:function(t){t=o.latLngBounds(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),a=s.lat>=e.lat&&n.lat<=i.lat,r=s.lng>=e.lng&&n.lng<=i.lng;return a&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t){return t?(t=o.latLngBounds(t),this._southWest.equals(t.getSouthWest())&&this._northEast.equals(t.getNorthEast())):!1},isValid:function(){return!(!this._southWest||!this._northEast)}},o.latLngBounds=function(t,e){return!t||t instanceof o.LatLngBounds?t:new o.LatLngBounds(t,e)},o.Projection={},o.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=t.lng*e,a=n*e;return a=Math.log(Math.tan(Math.PI/4+a/2)),new o.Point(s,a)},unproject:function(t){var e=o.LatLng.RAD_TO_DEG,i=t.x*e,n=(2*Math.atan(Math.exp(t.y))-Math.PI/2)*e;return new o.LatLng(n,i)}},o.Projection.LonLat={project:function(t){return new o.Point(t.lng,t.lat)},unproject:function(t){return new o.LatLng(t.y,t.x)}},o.CRS={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},scale:function(t){return 256*Math.pow(2,t)},getSize:function(t){var e=this.scale(t);return o.point(e,e)}},o.CRS.Simple=o.extend({},o.CRS,{projection:o.Projection.LonLat,transformation:new o.Transformation(1,0,-1,0),scale:function(t){return Math.pow(2,t)}}),o.CRS.EPSG3857=o.extend({},o.CRS,{code:"EPSG:3857",projection:o.Projection.SphericalMercator,transformation:new o.Transformation(.5/Math.PI,.5,-.5/Math.PI,.5),project:function(t){var e=this.projection.project(t),i=6378137;return e.multiplyBy(i)}}),o.CRS.EPSG900913=o.extend({},o.CRS.EPSG3857,{code:"EPSG:900913"}),o.CRS.EPSG4326=o.extend({},o.CRS,{code:"EPSG:4326",projection:o.Projection.LonLat,transformation:new o.Transformation(1/360,.5,-1/360,.5)}),o.Map=o.Class.extend({includes:o.Mixin.Events,options:{crs:o.CRS.EPSG3857,fadeAnimation:o.DomUtil.TRANSITION&&!o.Browser.android23,trackResize:!0,markerZoomAnimation:o.DomUtil.TRANSITION&&o.Browser.any3d},initialize:function(t,e){e=o.setOptions(this,e),this._initContainer(t),this._initLayout(),this._onResize=o.bind(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.center&&e.zoom!==i&&this.setView(o.latLng(e.center),e.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._tileLayersNum=0,this.callInitHooks(),this._addLayers(e.layers)},setView:function(t,e){return e=e===i?this.getZoom():e,this._resetView(o.latLng(t),this._limitZoom(e)),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=this._limitZoom(t),this)},zoomIn:function(t,e){return this.setZoom(this._zoom+(t||1),e)},zoomOut:function(t,e){return this.setZoom(this._zoom-(t||1),e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),a=t instanceof o.Point?t:this.latLngToContainerPoint(t),r=a.subtract(s).multiplyBy(1-1/n),h=this.containerPointToLatLng(s.add(r));return this.setView(h,e,{zoom:i})},fitBounds:function(t,e){e=e||{},t=t.getBounds?t.getBounds():o.latLngBounds(t);var i=o.point(e.paddingTopLeft||e.padding||[0,0]),n=o.point(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n)),a=n.subtract(i).divideBy(2),r=this.project(t.getSouthWest(),s),h=this.project(t.getNorthEast(),s),l=this.unproject(r.add(h).divideBy(2).add(a),s);return s=e&&e.maxZoom?Math.min(e.maxZoom,s):s,this.setView(l,s,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t){return this.fire("movestart"),this._rawPanBy(o.point(t)),this.fire("move"),this.fire("moveend")},setMaxBounds:function(t){return t=o.latLngBounds(t),this.options.maxBounds=t,t?(this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds,this)):this.off("moveend",this._panInsideMaxBounds,this)},panInsideBounds:function(t,e){var i=this.getCenter(),n=this._limitCenter(i,this._zoom,t);return i.equals(n)?this:this.panTo(n,e)},addLayer:function(t){var e=o.stamp(t);return this._layers[e]?this:(this._layers[e]=t,!t.options||isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[e]=t,this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum++,this._tileLayersToLoad++,t.on("load",this._onTileLayerLoad,this)),this._loaded&&this._layerAdd(t),this)},removeLayer:function(t){var e=o.stamp(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&this.fire("layerremove",{layer:t}),this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum--,this._tileLayersToLoad--,t.off("load",this._onTileLayerLoad,this)),this):this},hasLayer:function(t){return t?o.stamp(t)in this._layers:!1},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},invalidateSize:function(t){if(!this._loaded)return this;t=o.extend({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._initialCenter=null;var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),a=n.subtract(s);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o.bind(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i})):this},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){this._loaded&&this.fire("unload"),this._initEvents("off");try{delete this._container._leaflet}catch(t){this._container._leaflet=i}return this._clearPanes(),this._clearControlPos&&this._clearControlPos(),this._clearHandlers(),this},getCenter:function(){return this._checkIfLoaded(),this._initialCenter&&!this._moved()?this._initialCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new o.LatLngBounds(e,i)},getMinZoom:function(){return this.options.minZoom===i?this._layersMinZoom===i?0:this._layersMinZoom:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===i?this._layersMaxZoom===i?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=o.latLngBounds(t);var n,s=this.getMinZoom()-(e?1:0),a=this.getMaxZoom(),r=this.getSize(),h=t.getNorthWest(),l=t.getSouthEast(),u=!0;i=o.point(i||[0,0]);do s++,n=this.project(l,s).subtract(this.project(h,s)).add(i),u=e?n.x<r.x||n.y<r.y:r.contains(n);while(u&&a>=s);return u&&e?null:e?s:s-1},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new o.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(){var t=this._getTopLeftPoint();return new o.Bounds(t,t.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._initialTopLeftPoint},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t){var e=this.options.crs;return e.scale(t)/e.scale(this._zoom)},getScaleZoom:function(t){return this._zoom+Math.log(t)/Math.LN2},project:function(t,e){return e=e===i?this._zoom:e,this.options.crs.latLngToPoint(o.latLng(t),e)},unproject:function(t,e){return e=e===i?this._zoom:e,this.options.crs.pointToLatLng(o.point(t),e)},layerPointToLatLng:function(t){var e=o.point(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(o.latLng(t))._round();return e._subtract(this.getPixelOrigin())},containerPointToLayerPoint:function(t){return o.point(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return o.point(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(o.point(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))},mouseEventToContainerPoint:function(t){return o.DomEvent.getMousePosition(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=o.DomUtil.get(t);if(!e)throw new Error("Map container not found.");if(e._leaflet)throw new Error("Map container is already initialized.");e._leaflet=!0},_initLayout:function(){var t=this._container;o.DomUtil.addClass(t,"leaflet-container"+(o.Browser.touch?" leaflet-touch":"")+(o.Browser.retina?" leaflet-retina":"")+(o.Browser.ielt9?" leaflet-oldie":"")+(this.options.fadeAnimation?" leaflet-fade-anim":""));var e=o.DomUtil.getStyle(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._mapPane=t.mapPane=this._createPane("leaflet-map-pane",this._container),this._tilePane=t.tilePane=this._createPane("leaflet-tile-pane",this._mapPane),t.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane),t.shadowPane=this._createPane("leaflet-shadow-pane"),t.overlayPane=this._createPane("leaflet-overlay-pane"),t.markerPane=this._createPane("leaflet-marker-pane"),t.popupPane=this._createPane("leaflet-popup-pane");var e=" leaflet-zoom-hide";this.options.markerZoomAnimation||(o.DomUtil.addClass(t.markerPane,e),o.DomUtil.addClass(t.shadowPane,e),o.DomUtil.addClass(t.popupPane,e))},_createPane:function(t,e){return o.DomUtil.create("div",t,e||this._panes.objectsPane)},_clearPanes:function(){this._container.removeChild(this._mapPane)},_addLayers:function(t){t=t?o.Util.isArray(t)?t:[t]:[];for(var e=0,i=t.length;i>e;e++)this.addLayer(t[e])},_resetView:function(t,e,i,n){var s=this._zoom!==e;n||(this.fire("movestart"),s&&this.fire("zoomstart")),this._zoom=e,this._initialCenter=t,this._initialTopLeftPoint=this._getNewTopLeftPoint(t),i?this._initialTopLeftPoint._add(this._getMapPanePos()):o.DomUtil.setPosition(this._mapPane,new o.Point(0,0)),this._tileLayersToLoad=this._tileLayersNum;var a=!this._loaded;this._loaded=!0,this.fire("viewreset",{hard:!i}),a&&(this.fire("load"),this.eachLayer(this._layerAdd,this)),this.fire("move"),(s||n)&&this.fire("zoomend"),this.fire("moveend",{hard:!i})},_rawPanBy:function(t){o.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_updateZoomLevels:function(){var t,e=1/0,n=-1/0,o=this._getZoomSpan();for(t in this._zoomBoundLayers){var s=this._zoomBoundLayers[t];isNaN(s.options.minZoom)||(e=Math.min(e,s.options.minZoom)),isNaN(s.options.maxZoom)||(n=Math.max(n,s.options.maxZoom))}t===i?this._layersMaxZoom=this._layersMinZoom=i:(this._layersMaxZoom=n,this._layersMinZoom=e),o!==this._getZoomSpan()&&this.fire("zoomlevelschange")},_panInsideMaxBounds:function(){this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(e){if(o.DomEvent){e=e||"on",o.DomEvent[e](this._container,"click",this._onMouseClick,this);var i,n,s=["dblclick","mousedown","mouseup","mouseenter","mouseleave","mousemove","contextmenu"];for(i=0,n=s.length;n>i;i++)o.DomEvent[e](this._container,s[i],this._fireMouseEvent,this);this.options.trackResize&&o.DomEvent[e](t,"resize",this._onResize,this)}},_onResize:function(){o.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=o.Util.requestAnimFrame(function(){this.invalidateSize({debounceMoveend:!0})},this,!1,this._container)},_onMouseClick:function(t){!this._loaded||!t._simulated&&(this.dragging&&this.dragging.moved()||this.boxZoom&&this.boxZoom.moved())||o.DomEvent._skipped(t)||(this.fire("preclick"),this._fireMouseEvent(t))},_fireMouseEvent:function(t){if(this._loaded&&!o.DomEvent._skipped(t)){var e=t.type;if(e="mouseenter"===e?"mouseover":"mouseleave"===e?"mouseout":e,this.hasEventListeners(e)){"contextmenu"===e&&o.DomEvent.preventDefault(t);var i=this.mouseEventToContainerPoint(t),n=this.containerPointToLayerPoint(i),s=this.layerPointToLatLng(n);this.fire(e,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t})}}},_onTileLayerLoad:function(){this._tileLayersToLoad--,this._tileLayersNum&&!this._tileLayersToLoad&&this.fire("tilelayersload")},_clearHandlers:function(){for(var t=0,e=this._handlers.length;e>t;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,this):this.on("load",t,e),this},_layerAdd:function(t){t.onAdd(this),this.fire("layeradd",{layer:t})},_getMapPanePos:function(){return o.DomUtil.getPosition(this._mapPane)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(){return this.getPixelOrigin().subtract(this._getMapPanePos())},_getNewTopLeftPoint:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewTopLeftPoint(i,e).add(this._getMapPanePos());return this.project(t,e)._subtract(n)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var n=this.project(t,e),s=this.getSize().divideBy(2),a=new o.Bounds(n.subtract(s),n.add(s)),r=this._getBoundsOffset(a,i,e);return this.unproject(n.add(r),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),n=new o.Bounds(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=this.project(e.getNorthWest(),i).subtract(t.min),s=this.project(e.getSouthEast(),i).subtract(t.max),a=this._rebound(n.x,-s.x),r=this._rebound(n.y,-s.y);return new o.Point(a,r)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom();return Math.max(e,Math.min(i,t))}}),o.map=function(t,e){return new o.Map(t,e)},o.Projection.Mercator={MAX_LATITUDE:85.0840591556,R_MINOR:6356752.314245179,R_MAJOR:6378137,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=this.R_MAJOR,a=this.R_MINOR,r=t.lng*e*s,h=n*e,l=a/s,u=Math.sqrt(1-l*l),c=u*Math.sin(h);c=Math.pow((1-c)/(1+c),.5*u);var d=Math.tan(.5*(.5*Math.PI-h))/c;return h=-s*Math.log(d),new o.Point(r,h)},unproject:function(t){for(var e,i=o.LatLng.RAD_TO_DEG,n=this.R_MAJOR,s=this.R_MINOR,a=t.x*i/n,r=s/n,h=Math.sqrt(1-r*r),l=Math.exp(-t.y/n),u=Math.PI/2-2*Math.atan(l),c=15,d=1e-7,p=c,_=.1;Math.abs(_)>d&&--p>0;)e=h*Math.sin(u),_=Math.PI/2-2*Math.atan(l*Math.pow((1-e)/(1+e),.5*h))-u,u+=_;
return new o.LatLng(u*i,a)}},o.CRS.EPSG3395=o.extend({},o.CRS,{code:"EPSG:3395",projection:o.Projection.Mercator,transformation:function(){var t=o.Projection.Mercator,e=t.R_MAJOR,i=.5/(Math.PI*e);return new o.Transformation(i,.5,-i,.5)}()}),o.TileLayer=o.Class.extend({includes:o.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",zoomOffset:0,opacity:1,unloadInvisibleTiles:o.Browser.mobile,updateWhenIdle:o.Browser.mobile},initialize:function(t,e){e=o.setOptions(this,e),e.detectRetina&&o.Browser.retina&&e.maxZoom>0&&(e.tileSize=Math.floor(e.tileSize/2),e.zoomOffset++,e.minZoom>0&&e.minZoom--,this.options.maxZoom--),e.bounds&&(e.bounds=o.latLngBounds(e.bounds)),this._url=t;var i=this.options.subdomains;"string"==typeof i&&(this.options.subdomains=i.split(""))},onAdd:function(t){this._map=t,this._animated=t._zoomAnimated,this._initContainer(),t.on({viewreset:this._reset,moveend:this._update},this),this._animated&&t.on({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||(this._limitedUpdate=o.Util.limitExecByInterval(this._update,150,this),t.on("move",this._limitedUpdate,this)),this._reset(),this._update()},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this._container.parentNode.removeChild(this._container),t.off({viewreset:this._reset,moveend:this._update},this),this._animated&&t.off({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||t.off("move",this._limitedUpdate,this),this._container=null,this._map=null},bringToFront:function(){var t=this._map._panes.tilePane;return this._container&&(t.appendChild(this._container),this._setAutoZIndex(t,Math.max)),this},bringToBack:function(){var t=this._map._panes.tilePane;return this._container&&(t.insertBefore(this._container,t.firstChild),this._setAutoZIndex(t,Math.min)),this},getAttribution:function(){return this.options.attribution},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},setUrl:function(t,e){return this._url=t,e||this.redraw(),this},redraw:function(){return this._map&&(this._reset({hard:!0}),this._update()),this},_updateZIndex:function(){this._container&&this.options.zIndex!==i&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t,e){var i,n,o,s=t.children,a=-e(1/0,-1/0);for(n=0,o=s.length;o>n;n++)s[n]!==this._container&&(i=parseInt(s[n].style.zIndex,10),isNaN(i)||(a=e(a,i)));this.options.zIndex=this._container.style.zIndex=(isFinite(a)?a:0)+e(1,-1)},_updateOpacity:function(){var t,e=this._tiles;if(o.Browser.ielt9)for(t in e)o.DomUtil.setOpacity(e[t],this.options.opacity);else o.DomUtil.setOpacity(this._container,this.options.opacity)},_initContainer:function(){var t=this._map._panes.tilePane;if(!this._container){if(this._container=o.DomUtil.create("div","leaflet-layer"),this._updateZIndex(),this._animated){var e="leaflet-tile-container";this._bgBuffer=o.DomUtil.create("div",e,this._container),this._tileContainer=o.DomUtil.create("div",e,this._container)}else this._tileContainer=this._container;t.appendChild(this._container),this.options.opacity<1&&this._updateOpacity()}},_reset:function(t){for(var e in this._tiles)this.fire("tileunload",{tile:this._tiles[e]});this._tiles={},this._tilesToLoad=0,this.options.reuseTiles&&(this._unusedTiles=[]),this._tileContainer.innerHTML="",this._animated&&t&&t.hard&&this._clearBgBuffer(),this._initContainer()},_getTileSize:function(){var t=this._map,e=t.getZoom()+this.options.zoomOffset,i=this.options.maxNativeZoom,n=this.options.tileSize;return i&&e>i&&(n=Math.round(t.getZoomScale(e)/t.getZoomScale(i)*n)),n},_update:function(){if(this._map){var t=this._map,e=t.getPixelBounds(),i=t.getZoom(),n=this._getTileSize();if(!(i>this.options.maxZoom||i<this.options.minZoom)){var s=o.bounds(e.min.divideBy(n)._floor(),e.max.divideBy(n)._floor());this._addTilesFromCenterOut(s),(this.options.unloadInvisibleTiles||this.options.reuseTiles)&&this._removeOtherTiles(s)}}},_addTilesFromCenterOut:function(t){var i,n,s,a=[],r=t.getCenter();for(i=t.min.y;i<=t.max.y;i++)for(n=t.min.x;n<=t.max.x;n++)s=new o.Point(n,i),this._tileShouldBeLoaded(s)&&a.push(s);var h=a.length;if(0!==h){a.sort(function(t,e){return t.distanceTo(r)-e.distanceTo(r)});var l=e.createDocumentFragment();for(this._tilesToLoad||this.fire("loading"),this._tilesToLoad+=h,n=0;h>n;n++)this._addTile(a[n],l);this._tileContainer.appendChild(l)}},_tileShouldBeLoaded:function(t){if(t.x+":"+t.y in this._tiles)return!1;var e=this.options;if(!e.continuousWorld){var i=this._getWrapTileNum();if(e.noWrap&&(t.x<0||t.x>=i.x)||t.y<0||t.y>=i.y)return!1}if(e.bounds){var n=e.tileSize,o=t.multiplyBy(n),s=o.add([n,n]),a=this._map.unproject(o),r=this._map.unproject(s);if(e.continuousWorld||e.noWrap||(a=a.wrap(),r=r.wrap()),!e.bounds.intersects([a,r]))return!1}return!0},_removeOtherTiles:function(t){var e,i,n,o;for(o in this._tiles)e=o.split(":"),i=parseInt(e[0],10),n=parseInt(e[1],10),(i<t.min.x||i>t.max.x||n<t.min.y||n>t.max.y)&&this._removeTile(o)},_removeTile:function(t){var e=this._tiles[t];this.fire("tileunload",{tile:e,url:e.src}),this.options.reuseTiles?(o.DomUtil.removeClass(e,"leaflet-tile-loaded"),this._unusedTiles.push(e)):e.parentNode===this._tileContainer&&this._tileContainer.removeChild(e),o.Browser.android||(e.onload=null,e.src=o.Util.emptyImageUrl),delete this._tiles[t]},_addTile:function(t,e){var i=this._getTilePos(t),n=this._getTile();o.DomUtil.setPosition(n,i,o.Browser.chrome),this._tiles[t.x+":"+t.y]=n,this._loadTile(n,t),n.parentNode!==this._tileContainer&&e.appendChild(n)},_getZoomForUrl:function(){var t=this.options,e=this._map.getZoom();return t.zoomReverse&&(e=t.maxZoom-e),e+=t.zoomOffset,t.maxNativeZoom?Math.min(e,t.maxNativeZoom):e},_getTilePos:function(t){var e=this._map.getPixelOrigin(),i=this._getTileSize();return t.multiplyBy(i).subtract(e)},getTileUrl:function(t){return o.Util.template(this._url,o.extend({s:this._getSubdomain(t),z:t.z,x:t.x,y:t.y},this.options))},_getWrapTileNum:function(){var t=this._map.options.crs,e=t.getSize(this._map.getZoom());return e.divideBy(this._getTileSize())._floor()},_adjustTilePoint:function(t){var e=this._getWrapTileNum();this.options.continuousWorld||this.options.noWrap||(t.x=(t.x%e.x+e.x)%e.x),this.options.tms&&(t.y=e.y-t.y-1),t.z=this._getZoomForUrl()},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_getTile:function(){if(this.options.reuseTiles&&this._unusedTiles.length>0){var t=this._unusedTiles.pop();return this._resetTile(t),t}return this._createTile()},_resetTile:function(){},_createTile:function(){var t=o.DomUtil.create("img","leaflet-tile");return t.style.width=t.style.height=this._getTileSize()+"px",t.galleryimg="no",t.onselectstart=t.onmousemove=o.Util.falseFn,o.Browser.ielt9&&this.options.opacity!==i&&o.DomUtil.setOpacity(t,this.options.opacity),o.Browser.mobileWebkit3d&&(t.style.WebkitBackfaceVisibility="hidden"),t},_loadTile:function(t,e){t._layer=this,t.onload=this._tileOnLoad,t.onerror=this._tileOnError,this._adjustTilePoint(e),t.src=this.getTileUrl(e),this.fire("tileloadstart",{tile:t,url:t.src})},_tileLoaded:function(){this._tilesToLoad--,this._animated&&o.DomUtil.addClass(this._tileContainer,"leaflet-zoom-animated"),this._tilesToLoad||(this.fire("load"),this._animated&&(clearTimeout(this._clearBgBufferTimer),this._clearBgBufferTimer=setTimeout(o.bind(this._clearBgBuffer,this),500)))},_tileOnLoad:function(){var t=this._layer;this.src!==o.Util.emptyImageUrl&&(o.DomUtil.addClass(this,"leaflet-tile-loaded"),t.fire("tileload",{tile:this,url:this.src})),t._tileLoaded()},_tileOnError:function(){var t=this._layer;t.fire("tileerror",{tile:this,url:this.src});var e=t.options.errorTileUrl;e&&(this.src=e),t._tileLoaded()}}),o.tileLayer=function(t,e){return new o.TileLayer(t,e)},o.TileLayer.WMS=o.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1},initialize:function(t,e){this._url=t;var i=o.extend({},this.defaultWmsParams),n=e.tileSize||this.options.tileSize;i.width=i.height=e.detectRetina&&o.Browser.retina?2*n:n;for(var s in e)this.options.hasOwnProperty(s)||"crs"===s||(i[s]=e[s]);this.wmsParams=i,o.setOptions(this,e)},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,o.TileLayer.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._map,i=this.options.tileSize,n=t.multiplyBy(i),s=n.add([i,i]),a=this._crs.project(e.unproject(n,t.z)),r=this._crs.project(e.unproject(s,t.z)),h=this._wmsVersion>=1.3&&this._crs===o.CRS.EPSG4326?[r.y,a.x,a.y,r.x].join(","):[a.x,r.y,r.x,a.y].join(","),l=o.Util.template(this._url,{s:this._getSubdomain(t)});return l+o.Util.getParamString(this.wmsParams,l,!0)+"&BBOX="+h},setParams:function(t,e){return o.extend(this.wmsParams,t),e||this.redraw(),this}}),o.tileLayer.wms=function(t,e){return new o.TileLayer.WMS(t,e)},o.TileLayer.Canvas=o.TileLayer.extend({options:{async:!1},initialize:function(t){o.setOptions(this,t)},redraw:function(){this._map&&(this._reset({hard:!0}),this._update());for(var t in this._tiles)this._redrawTile(this._tiles[t]);return this},_redrawTile:function(t){this.drawTile(t,t._tilePoint,this._map._zoom)},_createTile:function(){var t=o.DomUtil.create("canvas","leaflet-tile");return t.width=t.height=this.options.tileSize,t.onselectstart=t.onmousemove=o.Util.falseFn,t},_loadTile:function(t,e){t._layer=this,t._tilePoint=e,this._redrawTile(t),this.options.async||this.tileDrawn(t)},drawTile:function(){},tileDrawn:function(t){this._tileOnLoad.call(t)}}),o.tileLayer.canvas=function(t){return new o.TileLayer.Canvas(t)},o.ImageOverlay=o.Class.extend({includes:o.Mixin.Events,options:{opacity:1},initialize:function(t,e,i){this._url=t,this._bounds=o.latLngBounds(e),o.setOptions(this,i)},onAdd:function(t){this._map=t,this._image||this._initImage(),t._panes.overlayPane.appendChild(this._image),t.on("viewreset",this._reset,this),t.options.zoomAnimation&&o.Browser.any3d&&t.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(t){t.getPanes().overlayPane.removeChild(this._image),t.off("viewreset",this._reset,this),t.options.zoomAnimation&&t.off("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},bringToFront:function(){return this._image&&this._map._panes.overlayPane.appendChild(this._image),this},bringToBack:function(){var t=this._map._panes.overlayPane;return this._image&&t.insertBefore(this._image,t.firstChild),this},setUrl:function(t){this._url=t,this._image.src=this._url},getAttribution:function(){return this.options.attribution},_initImage:function(){this._image=o.DomUtil.create("img","leaflet-image-layer"),this._map.options.zoomAnimation&&o.Browser.any3d?o.DomUtil.addClass(this._image,"leaflet-zoom-animated"):o.DomUtil.addClass(this._image,"leaflet-zoom-hide"),this._updateOpacity(),o.extend(this._image,{galleryimg:"no",onselectstart:o.Util.falseFn,onmousemove:o.Util.falseFn,onload:o.bind(this._onImageLoad,this),src:this._url})},_animateZoom:function(t){var e=this._map,i=this._image,n=e.getZoomScale(t.zoom),s=this._bounds.getNorthWest(),a=this._bounds.getSouthEast(),r=e._latLngToNewLayerPoint(s,t.zoom,t.center),h=e._latLngToNewLayerPoint(a,t.zoom,t.center)._subtract(r),l=r._add(h._multiplyBy(.5*(1-1/n)));i.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(l)+" scale("+n+") "},_reset:function(){var t=this._image,e=this._map.latLngToLayerPoint(this._bounds.getNorthWest()),i=this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);o.DomUtil.setPosition(t,e),t.style.width=i.x+"px",t.style.height=i.y+"px"},_onImageLoad:function(){this.fire("load")},_updateOpacity:function(){o.DomUtil.setOpacity(this._image,this.options.opacity)}}),o.imageOverlay=function(t,e,i){return new o.ImageOverlay(t,e,i)},o.Icon=o.Class.extend({options:{className:""},initialize:function(t){o.setOptions(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n;return n=e&&"IMG"===e.tagName?this._createImg(i,e):this._createImg(i),this._setIconStyles(n,t),n},_setIconStyles:function(t,e){var i,n=this.options,s=o.point(n[e+"Size"]);i=o.point("shadow"===e?n.shadowAnchor||n.iconAnchor:n.iconAnchor),!i&&s&&(i=s.divideBy(2,!0)),t.className="leaflet-marker-"+e+" "+n.className,i&&(t.style.marginLeft=-i.x+"px",t.style.marginTop=-i.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,i){return i=i||e.createElement("img"),i.src=t,i},_getIconUrl:function(t){return o.Browser.retina&&this.options[t+"RetinaUrl"]?this.options[t+"RetinaUrl"]:this.options[t+"Url"]}}),o.icon=function(t){return new o.Icon(t)},o.Icon.Default=o.Icon.extend({options:{iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]},_getIconUrl:function(t){var e=t+"Url";if(this.options[e])return this.options[e];o.Browser.retina&&"icon"===t&&(t+="-2x");var i=o.Icon.Default.imagePath;if(!i)throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");return i+"/marker-"+t+".png"}}),o.Icon.Default.imagePath=function(){var t,i,n,o,s,a=e.getElementsByTagName("script"),r=/[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;for(t=0,i=a.length;i>t;t++)if(n=a[t].src,o=n.match(r))return s=n.split(r)[0],(s?s+"/":"")+"images"}(),o.Marker=o.Class.extend({includes:o.Mixin.Events,options:{icon:new o.Icon.Default,title:"",alt:"",clickable:!0,draggable:!1,keyboard:!0,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250},initialize:function(t,e){o.setOptions(this,e),this._latlng=o.latLng(t)},onAdd:function(t){this._map=t,t.on("viewreset",this.update,this),this._initIcon(),this.update(),this.fire("add"),t.options.zoomAnimation&&t.options.markerZoomAnimation&&t.on("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this.dragging&&this.dragging.disable(),this._removeIcon(),this._removeShadow(),this.fire("remove"),t.off({viewreset:this.update,zoomanim:this._animateZoom},this),this._map=null},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this.update(),this.fire("move",{latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update(),this},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup),this},update:function(){if(this._icon){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e=this._map,i=e.options.zoomAnimation&&e.options.markerZoomAnimation,n=i?"leaflet-zoom-animated":"leaflet-zoom-hide",s=t.icon.createIcon(this._icon),a=!1;s!==this._icon&&(this._icon&&this._removeIcon(),a=!0,t.title&&(s.title=t.title),t.alt&&(s.alt=t.alt)),o.DomUtil.addClass(s,n),t.keyboard&&(s.tabIndex="0"),this._icon=s,this._initInteraction(),t.riseOnHover&&o.DomEvent.on(s,"mouseover",this._bringToFront,this).on(s,"mouseout",this._resetZIndex,this);var r=t.icon.createShadow(this._shadow),h=!1;r!==this._shadow&&(this._removeShadow(),h=!0),r&&o.DomUtil.addClass(r,n),this._shadow=r,t.opacity<1&&this._updateOpacity();var l=this._map._panes;a&&l.markerPane.appendChild(this._icon),r&&h&&l.shadowPane.appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&o.DomEvent.off(this._icon,"mouseover",this._bringToFront).off(this._icon,"mouseout",this._resetZIndex),this._map._panes.markerPane.removeChild(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&this._map._panes.shadowPane.removeChild(this._shadow),this._shadow=null},_setPos:function(t){o.DomUtil.setPosition(this._icon,t),this._shadow&&o.DomUtil.setPosition(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.clickable){var t=this._icon,e=["dblclick","mousedown","mouseover","mouseout","contextmenu"];o.DomUtil.addClass(t,"leaflet-clickable"),o.DomEvent.on(t,"click",this._onMouseClick,this),o.DomEvent.on(t,"keypress",this._onKeyPress,this);for(var i=0;i<e.length;i++)o.DomEvent.on(t,e[i],this._fireMouseEvent,this);o.Handler.MarkerDrag&&(this.dragging=new o.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable())}},_onMouseClick:function(t){var e=this.dragging&&this.dragging.moved();(this.hasEventListeners(t.type)||e)&&o.DomEvent.stopPropagation(t),e||(this.dragging&&this.dragging._enabled||!this._map.dragging||!this._map.dragging.moved())&&this.fire(t.type,{originalEvent:t,latlng:this._latlng})},_onKeyPress:function(t){13===t.keyCode&&this.fire("click",{originalEvent:t,latlng:this._latlng})},_fireMouseEvent:function(t){this.fire(t.type,{originalEvent:t,latlng:this._latlng}),"contextmenu"===t.type&&this.hasEventListeners(t.type)&&o.DomEvent.preventDefault(t),"mousedown"!==t.type?o.DomEvent.stopPropagation(t):o.DomEvent.preventDefault(t)},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){o.DomUtil.setOpacity(this._icon,this.options.opacity),this._shadow&&o.DomUtil.setOpacity(this._shadow,this.options.opacity)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)}}),o.marker=function(t,e){return new o.Marker(t,e)},o.DivIcon=o.Icon.extend({options:{iconSize:[12,12],className:"leaflet-div-icon",html:!1},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:e.createElement("div"),n=this.options;return i.innerHTML=n.html!==!1?n.html:"",n.bgPos&&(i.style.backgroundPosition=-n.bgPos.x+"px "+-n.bgPos.y+"px"),this._setIconStyles(i,"icon"),i},createShadow:function(){return null}}),o.divIcon=function(t){return new o.DivIcon(t)},o.Map.mergeOptions({closePopupOnClick:!0}),o.Popup=o.Class.extend({includes:o.Mixin.Events,options:{minWidth:50,maxWidth:300,autoPan:!0,closeButton:!0,offset:[0,7],autoPanPadding:[5,5],keepInView:!1,className:"",zoomAnimation:!0},initialize:function(t,e){o.setOptions(this,t),this._source=e,this._animated=o.Browser.any3d&&this.options.zoomAnimation,this._isOpen=!1},onAdd:function(t){this._map=t,this._container||this._initLayout();var e=t.options.fadeAnimation;e&&o.DomUtil.setOpacity(this._container,0),t._panes.popupPane.appendChild(this._container),t.on(this._getEvents(),this),this.update(),e&&o.DomUtil.setOpacity(this._container,1),this.fire("open"),t.fire("popupopen",{popup:this}),this._source&&this._source.fire("popupopen",{popup:this})},addTo:function(t){return t.addLayer(this),this},openOn:function(t){return t.openPopup(this),this},onRemove:function(t){t._panes.popupPane.removeChild(this._container),o.Util.falseFn(this._container.offsetWidth),t.off(this._getEvents(),this),t.options.fadeAnimation&&o.DomUtil.setOpacity(this._container,0),this._map=null,this.fire("close"),t.fire("popupclose",{popup:this}),this._source&&this._source.fire("popupclose",{popup:this})},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},_getEvents:function(){var t={viewreset:this._updatePosition};return this._animated&&(t.zoomanim=this._zoomAnimation),("closeOnClick"in this.options?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t,e="leaflet-popup",i=e+" "+this.options.className+" leaflet-zoom-"+(this._animated?"animated":"hide"),n=this._container=o.DomUtil.create("div",i);this.options.closeButton&&(t=this._closeButton=o.DomUtil.create("a",e+"-close-button",n),t.href="#close",t.innerHTML="&#215;",o.DomEvent.disableClickPropagation(t),o.DomEvent.on(t,"click",this._onCloseButtonClick,this));var s=this._wrapper=o.DomUtil.create("div",e+"-content-wrapper",n);o.DomEvent.disableClickPropagation(s),this._contentNode=o.DomUtil.create("div",e+"-content",s),o.DomEvent.disableScrollPropagation(this._contentNode),o.DomEvent.on(s,"contextmenu",o.DomEvent.stopPropagation),this._tipContainer=o.DomUtil.create("div",e+"-tip-container",n),this._tip=o.DomUtil.create("div",e+"-tip",this._tipContainer)},_updateContent:function(){if(this._content){if("string"==typeof this._content)this._contentNode.innerHTML=this._content;else{for(;this._contentNode.hasChildNodes();)this._contentNode.removeChild(this._contentNode.firstChild);this._contentNode.appendChild(this._content)}this.fire("contentupdate")}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,a="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",o.DomUtil.addClass(t,a)):o.DomUtil.removeClass(t,a),this._containerWidth=this._container.offsetWidth},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=this._animated,i=o.point(this.options.offset);e&&o.DomUtil.setPosition(this._container,t),this._containerBottom=-i.y-(e?0:t.y),this._containerLeft=-Math.round(this._containerWidth/2)+i.x+(e?0:t.x),this._container.style.bottom=this._containerBottom+"px",this._container.style.left=this._containerLeft+"px"}},_zoomAnimation:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);o.DomUtil.setPosition(this._container,e)},_adjustPan:function(){if(this.options.autoPan){var t=this._map,e=this._container.offsetHeight,i=this._containerWidth,n=new o.Point(this._containerLeft,-e-this._containerBottom);this._animated&&n._add(o.DomUtil.getPosition(this._container));var s=t.layerPointToContainerPoint(n),a=o.point(this.options.autoPanPadding),r=o.point(this.options.autoPanPaddingTopLeft||a),h=o.point(this.options.autoPanPaddingBottomRight||a),l=t.getSize(),u=0,c=0;s.x+i+h.x>l.x&&(u=s.x+i-l.x+h.x),s.x-u-r.x<0&&(u=s.x-r.x),s.y+e+h.y>l.y&&(c=s.y+e-l.y+h.y),s.y-c-r.y<0&&(c=s.y-r.y),(u||c)&&t.fire("autopanstart").panBy([u,c])}},_onCloseButtonClick:function(t){this._close(),o.DomEvent.stop(t)}}),o.popup=function(t,e){return new o.Popup(t,e)},o.Map.include({openPopup:function(t,e,i){if(this.closePopup(),!(t instanceof o.Popup)){var n=t;t=new o.Popup(i).setLatLng(e).setContent(n)}return t._isOpen=!0,this._popup=t,this.addLayer(t)},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&(this.removeLayer(t),t._isOpen=!1),this}}),o.Marker.include({openPopup:function(){return this._popup&&this._map&&!this._map.hasLayer(this._popup)&&(this._popup.setLatLng(this._latlng),this._map.openPopup(this._popup)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(){return this._popup&&(this._popup._isOpen?this.closePopup():this.openPopup()),this},bindPopup:function(t,e){var i=o.point(this.options.icon.options.popupAnchor||[0,0]);return i=i.add(o.Popup.prototype.options.offset),e&&e.offset&&(i=i.add(e.offset)),e=o.extend({offset:i},e),this._popupHandlersAdded||(this.on("click",this.togglePopup,this).on("remove",this.closePopup,this).on("move",this._movePopup,this),this._popupHandlersAdded=!0),t instanceof o.Popup?(o.setOptions(t,e),this._popup=t):this._popup=new o.Popup(e,this).setContent(t),this},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this.togglePopup,this).off("remove",this.closePopup,this).off("move",this._movePopup,this),this._popupHandlersAdded=!1),this},getPopup:function(){return this._popup},_movePopup:function(t){this._popup.setLatLng(t.latlng)}}),o.LayerGroup=o.Class.extend({initialize:function(t){this._layers={};var e,i;if(t)for(e=0,i=t.length;i>e;e++)this.addLayer(t[e])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){return t?t in this._layers||this.getLayerId(t)in this._layers:!1},clearLayers:function(){return this.eachLayer(this.removeLayer,this),this},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)i=this._layers[e],i[t]&&i[t].apply(i,n);return this},onAdd:function(t){this._map=t,this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t),this._map=null},addTo:function(t){return t.addLayer(this),this},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];for(var e in this._layers)t.push(this._layers[e]);return t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return o.stamp(t)}}),o.layerGroup=function(t){return new o.LayerGroup(t)},o.FeatureGroup=o.LayerGroup.extend({includes:o.Mixin.Events,statics:{EVENTS:"click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"},addLayer:function(t){return this.hasLayer(t)?this:("on"in t&&t.on(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.addLayer.call(this,t),this._popupContent&&t.bindPopup&&t.bindPopup(this._popupContent,this._popupOptions),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.off(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.removeLayer.call(this,t),this._popupContent&&this.invoke("unbindPopup"),this.fire("layerremove",{layer:t})):this},bindPopup:function(t,e){return this._popupContent=t,this._popupOptions=e,this.invoke("bindPopup",t,e)},openPopup:function(t){for(var e in this._layers){this._layers[e].openPopup(t);break}return this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new o.LatLngBounds;return this.eachLayer(function(e){t.extend(e instanceof o.Marker?e.getLatLng():e.getBounds())}),t},_propagateEvent:function(t){t=o.extend({layer:t.target,target:this},t),this.fire(t.type,t)}}),o.featureGroup=function(t){return new o.FeatureGroup(t)},o.Path=o.Class.extend({includes:[o.Mixin.Events],statics:{CLIP_PADDING:function(){var e=o.Browser.mobile?1280:2e3,i=(e/Math.max(t.outerWidth,t.outerHeight)-1)/2;return Math.max(0,Math.min(.5,i))}()},options:{stroke:!0,color:"#0033ff",dashArray:null,lineCap:null,lineJoin:null,weight:5,opacity:.5,fill:!1,fillColor:null,fillOpacity:.2,clickable:!0},initialize:function(t){o.setOptions(this,t)},onAdd:function(t){this._map=t,this._container||(this._initElements(),this._initEvents()),this.projectLatlngs(),this._updatePath(),this._container&&this._map._pathRoot.appendChild(this._container),this.fire("add"),t.on({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){t._pathRoot.removeChild(this._container),this.fire("remove"),this._map=null,o.Browser.vml&&(this._container=null,this._stroke=null,this._fill=null),t.off({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},projectLatlngs:function(){},setStyle:function(t){return o.setOptions(this,t),this._container&&this._updateStyle(),this},redraw:function(){return this._map&&(this.projectLatlngs(),this._updatePath()),this}}),o.Map.include({_updatePathViewport:function(){var t=o.Path.CLIP_PADDING,e=this.getSize(),i=o.DomUtil.getPosition(this._mapPane),n=i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),s=n.add(e.multiplyBy(1+2*t)._round());this._pathViewport=new o.Bounds(n,s)}}),o.Path.SVG_NS="http://www.w3.org/2000/svg",o.Browser.svg=!(!e.createElementNS||!e.createElementNS(o.Path.SVG_NS,"svg").createSVGRect),o.Path=o.Path.extend({statics:{SVG:o.Browser.svg},bringToFront:function(){var t=this._map._pathRoot,e=this._container;return e&&t.lastChild!==e&&t.appendChild(e),this},bringToBack:function(){var t=this._map._pathRoot,e=this._container,i=t.firstChild;return e&&i!==e&&t.insertBefore(e,i),this},getPathString:function(){},_createElement:function(t){return e.createElementNS(o.Path.SVG_NS,t)},_initElements:function(){this._map._initPathRoot(),this._initPath(),this._initStyle()},_initPath:function(){this._container=this._createElement("g"),this._path=this._createElement("path"),this.options.className&&o.DomUtil.addClass(this._path,this.options.className),this._container.appendChild(this._path)},_initStyle:function(){this.options.stroke&&(this._path.setAttribute("stroke-linejoin","round"),this._path.setAttribute("stroke-linecap","round")),this.options.fill&&this._path.setAttribute("fill-rule","evenodd"),this.options.pointerEvents&&this._path.setAttribute("pointer-events",this.options.pointerEvents),this.options.clickable||this.options.pointerEvents||this._path.setAttribute("pointer-events","none"),this._updateStyle()},_updateStyle:function(){this.options.stroke?(this._path.setAttribute("stroke",this.options.color),this._path.setAttribute("stroke-opacity",this.options.opacity),this._path.setAttribute("stroke-width",this.options.weight),this.options.dashArray?this._path.setAttribute("stroke-dasharray",this.options.dashArray):this._path.removeAttribute("stroke-dasharray"),this.options.lineCap&&this._path.setAttribute("stroke-linecap",this.options.lineCap),this.options.lineJoin&&this._path.setAttribute("stroke-linejoin",this.options.lineJoin)):this._path.setAttribute("stroke","none"),this.options.fill?(this._path.setAttribute("fill",this.options.fillColor||this.options.color),this._path.setAttribute("fill-opacity",this.options.fillOpacity)):this._path.setAttribute("fill","none")},_updatePath:function(){var t=this.getPathString();t||(t="M0 0"),this._path.setAttribute("d",t)},_initEvents:function(){if(this.options.clickable){(o.Browser.svg||!o.Browser.vml)&&o.DomUtil.addClass(this._path,"leaflet-clickable"),o.DomEvent.on(this._container,"click",this._onMouseClick,this);for(var t=["dblclick","mousedown","mouseover","mouseout","mousemove","contextmenu"],e=0;e<t.length;e++)o.DomEvent.on(this._container,t[e],this._fireMouseEvent,this)}},_onMouseClick:function(t){this._map.dragging&&this._map.dragging.moved()||this._fireMouseEvent(t)},_fireMouseEvent:function(t){if(this.hasEventListeners(t.type)){var e=this._map,i=e.mouseEventToContainerPoint(t),n=e.containerPointToLayerPoint(i),s=e.layerPointToLatLng(n);this.fire(t.type,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t}),"contextmenu"===t.type&&o.DomEvent.preventDefault(t),"mousemove"!==t.type&&o.DomEvent.stopPropagation(t)}}}),o.Map.include({_initPathRoot:function(){this._pathRoot||(this._pathRoot=o.Path.prototype._createElement("svg"),this._panes.overlayPane.appendChild(this._pathRoot),this.options.zoomAnimation&&o.Browser.any3d?(o.DomUtil.addClass(this._pathRoot,"leaflet-zoom-animated"),this.on({zoomanim:this._animatePathZoom,zoomend:this._endPathZoom})):o.DomUtil.addClass(this._pathRoot,"leaflet-zoom-hide"),this.on("moveend",this._updateSvgViewport),this._updateSvgViewport())
},_animatePathZoom:function(t){var e=this.getZoomScale(t.zoom),i=this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);this._pathRoot.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(i)+" scale("+e+") ",this._pathZooming=!0},_endPathZoom:function(){this._pathZooming=!1},_updateSvgViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max,n=i.x-e.x,s=i.y-e.y,a=this._pathRoot,r=this._panes.overlayPane;o.Browser.mobileWebkit&&r.removeChild(a),o.DomUtil.setPosition(a,e),a.setAttribute("width",n),a.setAttribute("height",s),a.setAttribute("viewBox",[e.x,e.y,n,s].join(" ")),o.Browser.mobileWebkit&&r.appendChild(a)}}}),o.Path.include({bindPopup:function(t,e){return t instanceof o.Popup?this._popup=t:((!this._popup||e)&&(this._popup=new o.Popup(e,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on("click",this._openPopup,this).on("remove",this.closePopup,this),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this._openPopup).off("remove",this.closePopup),this._popupHandlersAdded=!1),this},openPopup:function(t){return this._popup&&(t=t||this._latlng||this._latlngs[Math.floor(this._latlngs.length/2)],this._openPopup({latlng:t})),this},closePopup:function(){return this._popup&&this._popup._close(),this},_openPopup:function(t){this._popup.setLatLng(t.latlng),this._map.openPopup(this._popup)}}),o.Browser.vml=!o.Browser.svg&&function(){try{var t=e.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(n){return!1}}(),o.Path=o.Browser.svg||!o.Browser.vml?o.Path:o.Path.extend({statics:{VML:!0,CLIP_PADDING:.02},_createElement:function(){try{return e.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return e.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),_initPath:function(){var t=this._container=this._createElement("shape");o.DomUtil.addClass(t,"leaflet-vml-shape"+(this.options.className?" "+this.options.className:"")),this.options.clickable&&o.DomUtil.addClass(t,"leaflet-clickable"),t.coordsize="1 1",this._path=this._createElement("path"),t.appendChild(this._path),this._map._pathRoot.appendChild(t)},_initStyle:function(){this._updateStyle()},_updateStyle:function(){var t=this._stroke,e=this._fill,i=this.options,n=this._container;n.stroked=i.stroke,n.filled=i.fill,i.stroke?(t||(t=this._stroke=this._createElement("stroke"),t.endcap="round",n.appendChild(t)),t.weight=i.weight+"px",t.color=i.color,t.opacity=i.opacity,t.dashStyle=i.dashArray?o.Util.isArray(i.dashArray)?i.dashArray.join(" "):i.dashArray.replace(/( *, *)/g," "):"",i.lineCap&&(t.endcap=i.lineCap.replace("butt","flat")),i.lineJoin&&(t.joinstyle=i.lineJoin)):t&&(n.removeChild(t),this._stroke=null),i.fill?(e||(e=this._fill=this._createElement("fill"),n.appendChild(e)),e.color=i.fillColor||i.color,e.opacity=i.fillOpacity):e&&(n.removeChild(e),this._fill=null)},_updatePath:function(){var t=this._container.style;t.display="none",this._path.v=this.getPathString()+" ",t.display=""}}),o.Map.include(o.Browser.svg||!o.Browser.vml?{}:{_initPathRoot:function(){if(!this._pathRoot){var t=this._pathRoot=e.createElement("div");t.className="leaflet-vml-container",this._panes.overlayPane.appendChild(t),this.on("moveend",this._updatePathViewport),this._updatePathViewport()}}}),o.Browser.canvas=function(){return!!e.createElement("canvas").getContext}(),o.Path=o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?o.Path:o.Path.extend({statics:{CANVAS:!0,SVG:!1},redraw:function(){return this._map&&(this.projectLatlngs(),this._requestUpdate()),this},setStyle:function(t){return o.setOptions(this,t),this._map&&(this._updateStyle(),this._requestUpdate()),this},onRemove:function(t){t.off("viewreset",this.projectLatlngs,this).off("moveend",this._updatePath,this),this.options.clickable&&(this._map.off("click",this._onClick,this),this._map.off("mousemove",this._onMouseMove,this)),this._requestUpdate(),this.fire("remove"),this._map=null},_requestUpdate:function(){this._map&&!o.Path._updateRequest&&(o.Path._updateRequest=o.Util.requestAnimFrame(this._fireMapMoveEnd,this._map))},_fireMapMoveEnd:function(){o.Path._updateRequest=null,this.fire("moveend")},_initElements:function(){this._map._initPathRoot(),this._ctx=this._map._canvasCtx},_updateStyle:function(){var t=this.options;t.stroke&&(this._ctx.lineWidth=t.weight,this._ctx.strokeStyle=t.color),t.fill&&(this._ctx.fillStyle=t.fillColor||t.color)},_drawPath:function(){var t,e,i,n,s,a;for(this._ctx.beginPath(),t=0,i=this._parts.length;i>t;t++){for(e=0,n=this._parts[t].length;n>e;e++)s=this._parts[t][e],a=(0===e?"move":"line")+"To",this._ctx[a](s.x,s.y);this instanceof o.Polygon&&this._ctx.closePath()}},_checkIfEmpty:function(){return!this._parts.length},_updatePath:function(){if(!this._checkIfEmpty()){var t=this._ctx,e=this.options;this._drawPath(),t.save(),this._updateStyle(),e.fill&&(t.globalAlpha=e.fillOpacity,t.fill()),e.stroke&&(t.globalAlpha=e.opacity,t.stroke()),t.restore()}},_initEvents:function(){this.options.clickable&&(this._map.on("mousemove",this._onMouseMove,this),this._map.on("click",this._onClick,this))},_onClick:function(t){this._containsPoint(t.layerPoint)&&this.fire("click",t)},_onMouseMove:function(t){this._map&&!this._map._animatingZoom&&(this._containsPoint(t.layerPoint)?(this._ctx.canvas.style.cursor="pointer",this._mouseInside=!0,this.fire("mouseover",t)):this._mouseInside&&(this._ctx.canvas.style.cursor="",this._mouseInside=!1,this.fire("mouseout",t)))}}),o.Map.include(o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?{}:{_initPathRoot:function(){var t,i=this._pathRoot;i||(i=this._pathRoot=e.createElement("canvas"),i.style.position="absolute",t=this._canvasCtx=i.getContext("2d"),t.lineCap="round",t.lineJoin="round",this._panes.overlayPane.appendChild(i),this.options.zoomAnimation&&(this._pathRoot.className="leaflet-zoom-animated",this.on("zoomanim",this._animatePathZoom),this.on("zoomend",this._endPathZoom)),this.on("moveend",this._updateCanvasViewport),this._updateCanvasViewport())},_updateCanvasViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max.subtract(e),n=this._pathRoot;o.DomUtil.setPosition(n,e),n.width=i.x,n.height=i.y,n.getContext("2d").translate(-e.x,-e.y)}}}),o.LineUtil={simplify:function(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=this._reducePoints(t,i),t=this._simplifyDP(t,i)},pointToSegmentDistance:function(t,e,i){return Math.sqrt(this._sqClosestPointOnSegment(t,e,i,!0))},closestPointOnSegment:function(t,e,i){return this._sqClosestPointOnSegment(t,e,i)},_simplifyDP:function(t,e){var n=t.length,o=typeof Uint8Array!=i+""?Uint8Array:Array,s=new o(n);s[0]=s[n-1]=1,this._simplifyDPStep(t,s,e,0,n-1);var a,r=[];for(a=0;n>a;a++)s[a]&&r.push(t[a]);return r},_simplifyDPStep:function(t,e,i,n,o){var s,a,r,h=0;for(a=n+1;o-1>=a;a++)r=this._sqClosestPointOnSegment(t[a],t[n],t[o],!0),r>h&&(s=a,h=r);h>i&&(e[s]=1,this._simplifyDPStep(t,e,i,n,s),this._simplifyDPStep(t,e,i,s,o))},_reducePoints:function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;s>n;n++)this._sqDist(t[n],t[o])>e&&(i.push(t[n]),o=n);return s-1>o&&i.push(t[s-1]),i},clipSegment:function(t,e,i,n){var o,s,a,r=n?this._lastCode:this._getBitCode(t,i),h=this._getBitCode(e,i);for(this._lastCode=h;;){if(!(r|h))return[t,e];if(r&h)return!1;o=r||h,s=this._getEdgeIntersection(t,e,o,i),a=this._getBitCode(s,i),o===r?(t=s,r=a):(e=s,h=a)}},_getEdgeIntersection:function(t,e,i,n){var s=e.x-t.x,a=e.y-t.y,r=n.min,h=n.max;return 8&i?new o.Point(t.x+s*(h.y-t.y)/a,h.y):4&i?new o.Point(t.x+s*(r.y-t.y)/a,r.y):2&i?new o.Point(h.x,t.y+a*(h.x-t.x)/s):1&i?new o.Point(r.x,t.y+a*(r.x-t.x)/s):void 0},_getBitCode:function(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i},_sqDist:function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},_sqClosestPointOnSegment:function(t,e,i,n){var s,a=e.x,r=e.y,h=i.x-a,l=i.y-r,u=h*h+l*l;return u>0&&(s=((t.x-a)*h+(t.y-r)*l)/u,s>1?(a=i.x,r=i.y):s>0&&(a+=h*s,r+=l*s)),h=t.x-a,l=t.y-r,n?h*h+l*l:new o.Point(a,r)}},o.Polyline=o.Path.extend({initialize:function(t,e){o.Path.prototype.initialize.call(this,e),this._latlngs=this._convertLatLngs(t)},options:{smoothFactor:1,noClip:!1},projectLatlngs:function(){this._originalPoints=[];for(var t=0,e=this._latlngs.length;e>t;t++)this._originalPoints[t]=this._map.latLngToLayerPoint(this._latlngs[t])},getPathString:function(){for(var t=0,e=this._parts.length,i="";e>t;t++)i+=this._getPathPartStr(this._parts[t]);return i},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._latlngs=this._convertLatLngs(t),this.redraw()},addLatLng:function(t){return this._latlngs.push(o.latLng(t)),this.redraw()},spliceLatLngs:function(){var t=[].splice.apply(this._latlngs,arguments);return this._convertLatLngs(this._latlngs,!0),this.redraw(),t},closestLayerPoint:function(t){for(var e,i,n=1/0,s=this._parts,a=null,r=0,h=s.length;h>r;r++)for(var l=s[r],u=1,c=l.length;c>u;u++){e=l[u-1],i=l[u];var d=o.LineUtil._sqClosestPointOnSegment(t,e,i,!0);n>d&&(n=d,a=o.LineUtil._sqClosestPointOnSegment(t,e,i))}return a&&(a.distance=Math.sqrt(n)),a},getBounds:function(){return new o.LatLngBounds(this.getLatLngs())},_convertLatLngs:function(t,e){var i,n,s=e?t:[];for(i=0,n=t.length;n>i;i++){if(o.Util.isArray(t[i])&&"number"!=typeof t[i][0])return;s[i]=o.latLng(t[i])}return s},_initEvents:function(){o.Path.prototype._initEvents.call(this)},_getPathPartStr:function(t){for(var e,i=o.Path.VML,n=0,s=t.length,a="";s>n;n++)e=t[n],i&&e._round(),a+=(n?"L":"M")+e.x+" "+e.y;return a},_clipPoints:function(){var t,e,i,n=this._originalPoints,s=n.length;if(this.options.noClip)return void(this._parts=[n]);this._parts=[];var a=this._parts,r=this._map._pathViewport,h=o.LineUtil;for(t=0,e=0;s-1>t;t++)i=h.clipSegment(n[t],n[t+1],r,t),i&&(a[e]=a[e]||[],a[e].push(i[0]),(i[1]!==n[t+1]||t===s-2)&&(a[e].push(i[1]),e++))},_simplifyPoints:function(){for(var t=this._parts,e=o.LineUtil,i=0,n=t.length;n>i;i++)t[i]=e.simplify(t[i],this.options.smoothFactor)},_updatePath:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),o.Path.prototype._updatePath.call(this))}}),o.polyline=function(t,e){return new o.Polyline(t,e)},o.PolyUtil={},o.PolyUtil.clipPolygon=function(t,e){var i,n,s,a,r,h,l,u,c,d=[1,4,2,8],p=o.LineUtil;for(n=0,l=t.length;l>n;n++)t[n]._code=p._getBitCode(t[n],e);for(a=0;4>a;a++){for(u=d[a],i=[],n=0,l=t.length,s=l-1;l>n;s=n++)r=t[n],h=t[s],r._code&u?h._code&u||(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)):(h._code&u&&(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)),i.push(r));t=i}return t},o.Polygon=o.Polyline.extend({options:{fill:!0},initialize:function(t,e){o.Polyline.prototype.initialize.call(this,t,e),this._initWithHoles(t)},_initWithHoles:function(t){var e,i,n;if(t&&o.Util.isArray(t[0])&&"number"!=typeof t[0][0])for(this._latlngs=this._convertLatLngs(t[0]),this._holes=t.slice(1),e=0,i=this._holes.length;i>e;e++)n=this._holes[e]=this._convertLatLngs(this._holes[e]),n[0].equals(n[n.length-1])&&n.pop();t=this._latlngs,t.length>=2&&t[0].equals(t[t.length-1])&&t.pop()},projectLatlngs:function(){if(o.Polyline.prototype.projectLatlngs.call(this),this._holePoints=[],this._holes){var t,e,i,n;for(t=0,i=this._holes.length;i>t;t++)for(this._holePoints[t]=[],e=0,n=this._holes[t].length;n>e;e++)this._holePoints[t][e]=this._map.latLngToLayerPoint(this._holes[t][e])}},setLatLngs:function(t){return t&&o.Util.isArray(t[0])&&"number"!=typeof t[0][0]?(this._initWithHoles(t),this.redraw()):o.Polyline.prototype.setLatLngs.call(this,t)},_clipPoints:function(){var t=this._originalPoints,e=[];if(this._parts=[t].concat(this._holePoints),!this.options.noClip){for(var i=0,n=this._parts.length;n>i;i++){var s=o.PolyUtil.clipPolygon(this._parts[i],this._map._pathViewport);s.length&&e.push(s)}this._parts=e}},_getPathPartStr:function(t){var e=o.Polyline.prototype._getPathPartStr.call(this,t);return e+(o.Browser.svg?"z":"x")}}),o.polygon=function(t,e){return new o.Polygon(t,e)},function(){function t(t){return o.FeatureGroup.extend({initialize:function(t,e){this._layers={},this._options=e,this.setLatLngs(t)},setLatLngs:function(e){var i=0,n=e.length;for(this.eachLayer(function(t){n>i?t.setLatLngs(e[i++]):this.removeLayer(t)},this);n>i;)this.addLayer(new t(e[i++],this._options));return this},getLatLngs:function(){var t=[];return this.eachLayer(function(e){t.push(e.getLatLngs())}),t}})}o.MultiPolyline=t(o.Polyline),o.MultiPolygon=t(o.Polygon),o.multiPolyline=function(t,e){return new o.MultiPolyline(t,e)},o.multiPolygon=function(t,e){return new o.MultiPolygon(t,e)}}(),o.Rectangle=o.Polygon.extend({initialize:function(t,e){o.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=o.latLngBounds(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}}),o.rectangle=function(t,e){return new o.Rectangle(t,e)},o.Circle=o.Path.extend({initialize:function(t,e,i){o.Path.prototype.initialize.call(this,i),this._latlng=o.latLng(t),this._mRadius=e},options:{fill:!0},setLatLng:function(t){return this._latlng=o.latLng(t),this.redraw()},setRadius:function(t){return this._mRadius=t,this.redraw()},projectLatlngs:function(){var t=this._getLngRadius(),e=this._latlng,i=this._map.latLngToLayerPoint([e.lat,e.lng-t]);this._point=this._map.latLngToLayerPoint(e),this._radius=Math.max(this._point.x-i.x,1)},getBounds:function(){var t=this._getLngRadius(),e=this._mRadius/40075017*360,i=this._latlng;return new o.LatLngBounds([i.lat-e,i.lng-t],[i.lat+e,i.lng+t])},getLatLng:function(){return this._latlng},getPathString:function(){var t=this._point,e=this._radius;return this._checkIfEmpty()?"":o.Browser.svg?"M"+t.x+","+(t.y-e)+"A"+e+","+e+",0,1,1,"+(t.x-.1)+","+(t.y-e)+" z":(t._round(),e=Math.round(e),"AL "+t.x+","+t.y+" "+e+","+e+" 0,23592600")},getRadius:function(){return this._mRadius},_getLatRadius:function(){return this._mRadius/40075017*360},_getLngRadius:function(){return this._getLatRadius()/Math.cos(o.LatLng.DEG_TO_RAD*this._latlng.lat)},_checkIfEmpty:function(){if(!this._map)return!1;var t=this._map._pathViewport,e=this._radius,i=this._point;return i.x-e>t.max.x||i.y-e>t.max.y||i.x+e<t.min.x||i.y+e<t.min.y}}),o.circle=function(t,e,i){return new o.Circle(t,e,i)},o.CircleMarker=o.Circle.extend({options:{radius:10,weight:2},initialize:function(t,e){o.Circle.prototype.initialize.call(this,t,null,e),this._radius=this.options.radius},projectLatlngs:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_updateStyle:function(){o.Circle.prototype._updateStyle.call(this),this.setRadius(this.options.radius)},setLatLng:function(t){return o.Circle.prototype.setLatLng.call(this,t),this._popup&&this._popup._isOpen&&this._popup.setLatLng(t),this},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius}}),o.circleMarker=function(t,e){return new o.CircleMarker(t,e)},o.Polyline.include(o.Path.CANVAS?{_containsPoint:function(t,e){var i,n,s,a,r,h,l,u=this.options.weight/2;for(o.Browser.touch&&(u+=10),i=0,a=this._parts.length;a>i;i++)for(l=this._parts[i],n=0,r=l.length,s=r-1;r>n;s=n++)if((e||0!==n)&&(h=o.LineUtil.pointToSegmentDistance(t,l[s],l[n]),u>=h))return!0;return!1}}:{}),o.Polygon.include(o.Path.CANVAS?{_containsPoint:function(t){var e,i,n,s,a,r,h,l,u=!1;if(o.Polyline.prototype._containsPoint.call(this,t,!0))return!0;for(s=0,h=this._parts.length;h>s;s++)for(e=this._parts[s],a=0,l=e.length,r=l-1;l>a;r=a++)i=e[a],n=e[r],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(u=!u);return u}}:{}),o.Circle.include(o.Path.CANVAS?{_drawPath:function(){var t=this._point;this._ctx.beginPath(),this._ctx.arc(t.x,t.y,this._radius,0,2*Math.PI,!1)},_containsPoint:function(t){var e=this._point,i=this.options.stroke?this.options.weight/2:0;return t.distanceTo(e)<=this._radius+i}}:{}),o.CircleMarker.include(o.Path.CANVAS?{_updateStyle:function(){o.Path.prototype._updateStyle.call(this)}}:{}),o.GeoJSON=o.FeatureGroup.extend({initialize:function(t,e){o.setOptions(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,s=o.Util.isArray(t)?t:t.features;if(s){for(e=0,i=s.length;i>e;e++)n=s[e],(n.geometries||n.geometry||n.features||n.coordinates)&&this.addData(s[e]);return this}var a=this.options;if(!a.filter||a.filter(t)){var r=o.GeoJSON.geometryToLayer(t,a.pointToLayer,a.coordsToLatLng,a);return r.feature=o.GeoJSON.asFeature(t),r.defaultOptions=r.options,this.resetStyle(r),a.onEachFeature&&a.onEachFeature(t,r),this.addLayer(r)}},resetStyle:function(t){var e=this.options.style;e&&(o.Util.extend(t.options,t.defaultOptions),this._setLayerStyle(t,e))},setStyle:function(t){this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){"function"==typeof e&&(e=e(t.feature)),t.setStyle&&t.setStyle(e)}}),o.extend(o.GeoJSON,{geometryToLayer:function(t,e,i,n){var s,a,r,h,l="Feature"===t.type?t.geometry:t,u=l.coordinates,c=[];switch(i=i||this.coordsToLatLng,l.type){case"Point":return s=i(u),e?e(t,s):new o.Marker(s);case"MultiPoint":for(r=0,h=u.length;h>r;r++)s=i(u[r]),c.push(e?e(t,s):new o.Marker(s));return new o.FeatureGroup(c);case"LineString":return a=this.coordsToLatLngs(u,0,i),new o.Polyline(a,n);case"Polygon":if(2===u.length&&!u[1].length)throw new Error("Invalid GeoJSON object.");return a=this.coordsToLatLngs(u,1,i),new o.Polygon(a,n);case"MultiLineString":return a=this.coordsToLatLngs(u,1,i),new o.MultiPolyline(a,n);case"MultiPolygon":return a=this.coordsToLatLngs(u,2,i),new o.MultiPolygon(a,n);case"GeometryCollection":for(r=0,h=l.geometries.length;h>r;r++)c.push(this.geometryToLayer({geometry:l.geometries[r],type:"Feature",properties:t.properties},e,i,n));return new o.FeatureGroup(c);default:throw new Error("Invalid GeoJSON object.")}},coordsToLatLng:function(t){return new o.LatLng(t[1],t[0],t[2])},coordsToLatLngs:function(t,e,i){var n,o,s,a=[];for(o=0,s=t.length;s>o;o++)n=e?this.coordsToLatLngs(t[o],e-1,i):(i||this.coordsToLatLng)(t[o]),a.push(n);return a},latLngToCoords:function(t){var e=[t.lng,t.lat];return t.alt!==i&&e.push(t.alt),e},latLngsToCoords:function(t){for(var e=[],i=0,n=t.length;n>i;i++)e.push(o.GeoJSON.latLngToCoords(t[i]));return e},getFeature:function(t,e){return t.feature?o.extend({},t.feature,{geometry:e}):o.GeoJSON.asFeature(e)},asFeature:function(t){return"Feature"===t.type?t:{type:"Feature",properties:{},geometry:t}}});var a={toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"Point",coordinates:o.GeoJSON.latLngToCoords(this.getLatLng())})}};o.Marker.include(a),o.Circle.include(a),o.CircleMarker.include(a),o.Polyline.include({toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"LineString",coordinates:o.GeoJSON.latLngsToCoords(this.getLatLngs())})}}),o.Polygon.include({toGeoJSON:function(){var t,e,i,n=[o.GeoJSON.latLngsToCoords(this.getLatLngs())];if(n[0].push(n[0][0]),this._holes)for(t=0,e=this._holes.length;e>t;t++)i=o.GeoJSON.latLngsToCoords(this._holes[t]),i.push(i[0]),n.push(i);return o.GeoJSON.getFeature(this,{type:"Polygon",coordinates:n})}}),function(){function t(t){return function(){var e=[];return this.eachLayer(function(t){e.push(t.toGeoJSON().geometry.coordinates)}),o.GeoJSON.getFeature(this,{type:t,coordinates:e})}}o.MultiPolyline.include({toGeoJSON:t("MultiLineString")}),o.MultiPolygon.include({toGeoJSON:t("MultiPolygon")}),o.LayerGroup.include({toGeoJSON:function(){var e,i=this.feature&&this.feature.geometry,n=[];if(i&&"MultiPoint"===i.type)return t("MultiPoint").call(this);var s=i&&"GeometryCollection"===i.type;return this.eachLayer(function(t){t.toGeoJSON&&(e=t.toGeoJSON(),n.push(s?e.geometry:o.GeoJSON.asFeature(e)))}),s?o.GeoJSON.getFeature(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}})}(),o.geoJson=function(t,e){return new o.GeoJSON(t,e)},o.DomEvent={addListener:function(t,e,i,n){var s,a,r,h=o.stamp(i),l="_leaflet_"+e+h;return t[l]?this:(s=function(e){return i.call(n||t,e||o.DomEvent._getEvent())},o.Browser.pointer&&0===e.indexOf("touch")?this.addPointerListener(t,e,s,h):(o.Browser.touch&&"dblclick"===e&&this.addDoubleTapListener&&this.addDoubleTapListener(t,s,h),"addEventListener"in t?"mousewheel"===e?(t.addEventListener("DOMMouseScroll",s,!1),t.addEventListener(e,s,!1)):"mouseenter"===e||"mouseleave"===e?(a=s,r="mouseenter"===e?"mouseover":"mouseout",s=function(e){return o.DomEvent._checkMouse(t,e)?a(e):void 0},t.addEventListener(r,s,!1)):"click"===e&&o.Browser.android?(a=s,s=function(t){return o.DomEvent._filterClick(t,a)},t.addEventListener(e,s,!1)):t.addEventListener(e,s,!1):"attachEvent"in t&&t.attachEvent("on"+e,s),t[l]=s,this))},removeListener:function(t,e,i){var n=o.stamp(i),s="_leaflet_"+e+n,a=t[s];return a?(o.Browser.pointer&&0===e.indexOf("touch")?this.removePointerListener(t,e,n):o.Browser.touch&&"dblclick"===e&&this.removeDoubleTapListener?this.removeDoubleTapListener(t,n):"removeEventListener"in t?"mousewheel"===e?(t.removeEventListener("DOMMouseScroll",a,!1),t.removeEventListener(e,a,!1)):"mouseenter"===e||"mouseleave"===e?t.removeEventListener("mouseenter"===e?"mouseover":"mouseout",a,!1):t.removeEventListener(e,a,!1):"detachEvent"in t&&t.detachEvent("on"+e,a),t[s]=null,this):this},stopPropagation:function(t){return t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,o.DomEvent._skipped(t),this},disableScrollPropagation:function(t){var e=o.DomEvent.stopPropagation;return o.DomEvent.on(t,"mousewheel",e).on(t,"MozMousePixelScroll",e)},disableClickPropagation:function(t){for(var e=o.DomEvent.stopPropagation,i=o.Draggable.START.length-1;i>=0;i--)o.DomEvent.on(t,o.Draggable.START[i],e);return o.DomEvent.on(t,"click",o.DomEvent._fakeStop).on(t,"dblclick",e)},preventDefault:function(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this},stop:function(t){return o.DomEvent.preventDefault(t).stopPropagation(t)},getMousePosition:function(t,e){if(!e)return new o.Point(t.clientX,t.clientY);var i=e.getBoundingClientRect();return new o.Point(t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop)},getWheelDelta:function(t){var e=0;return t.wheelDelta&&(e=t.wheelDelta/120),t.detail&&(e=-t.detail/3),e},_skipEvents:{},_fakeStop:function(t){o.DomEvent._skipEvents[t.type]=!0},_skipped:function(t){var e=this._skipEvents[t.type];return this._skipEvents[t.type]=!1,e},_checkMouse:function(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(n){return!1}return i!==t},_getEvent:function(){var e=t.event;if(!e)for(var i=arguments.callee.caller;i&&(e=i.arguments[0],!e||t.Event!==e.constructor);)i=i.caller;return e},_filterClick:function(t,e){var i=t.timeStamp||t.originalEvent.timeStamp,n=o.DomEvent._lastClick&&i-o.DomEvent._lastClick;return n&&n>100&&500>n||t.target._simulatedClick&&!t._simulated?void o.DomEvent.stop(t):(o.DomEvent._lastClick=i,e(t))}},o.DomEvent.on=o.DomEvent.addListener,o.DomEvent.off=o.DomEvent.removeListener,o.Draggable=o.Class.extend({includes:o.Mixin.Events,statics:{START:o.Browser.touch?["touchstart","mousedown"]:["mousedown"],END:{mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},MOVE:{mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"}},initialize:function(t,e){this._element=t,this._dragStartTarget=e||t},enable:function(){if(!this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.on(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!0}},disable:function(){if(this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.off(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!1,this._moved=!1}},_onDown:function(t){if(this._moved=!1,!(t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(o.DomEvent.stopPropagation(t),o.Draggable._disabled||(o.DomUtil.disableImageDrag(),o.DomUtil.disableTextSelection(),this._moving)))){var i=t.touches?t.touches[0]:t;this._startPoint=new o.Point(i.clientX,i.clientY),this._startPos=this._newPos=o.DomUtil.getPosition(this._element),o.DomEvent.on(e,o.Draggable.MOVE[t.type],this._onMove,this).on(e,o.Draggable.END[t.type],this._onUp,this)}},_onMove:function(t){if(t.touches&&t.touches.length>1)return void(this._moved=!0);var i=t.touches&&1===t.touches.length?t.touches[0]:t,n=new o.Point(i.clientX,i.clientY),s=n.subtract(this._startPoint);(s.x||s.y)&&(o.Browser.touch&&Math.abs(s.x)+Math.abs(s.y)<3||(o.DomEvent.preventDefault(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=o.DomUtil.getPosition(this._element).subtract(s),o.DomUtil.addClass(e.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,o.DomUtil.addClass(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(s),this._moving=!0,o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updatePosition,this,!0,this._dragStartTarget)))},_updatePosition:function(){this.fire("predrag"),o.DomUtil.setPosition(this._element,this._newPos),this.fire("drag")},_onUp:function(){o.DomUtil.removeClass(e.body,"leaflet-dragging"),this._lastTarget&&(o.DomUtil.removeClass(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null);for(var t in o.Draggable.MOVE)o.DomEvent.off(e,o.Draggable.MOVE[t],this._onMove).off(e,o.Draggable.END[t],this._onUp);o.DomUtil.enableImageDrag(),o.DomUtil.enableTextSelection(),this._moved&&this._moving&&(o.Util.cancelAnimFrame(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1}}),o.Handler=o.Class.extend({initialize:function(t){this._map=t},enable:function(){this._enabled||(this._enabled=!0,this.addHooks())},disable:function(){this._enabled&&(this._enabled=!1,this.removeHooks())},enabled:function(){return!!this._enabled}}),o.Map.mergeOptions({dragging:!0,inertia:!o.Browser.android23,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,inertiaThreshold:o.Browser.touch?32:18,easeLinearity:.25,worldCopyJump:!1}),o.Map.Drag=o.Handler.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new o.Draggable(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDrag,this),t.on("viewreset",this._onViewReset,this),t.whenReady(this._onViewReset,this))}this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){var t=this._map;t._panAnim&&t._panAnim.stop(),t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(){if(this._map.options.inertia){var t=this._lastTime=+new Date,e=this._lastPos=this._draggable._newPos;this._positions.push(e),this._times.push(t),t-this._times[0]>200&&(this._positions.shift(),this._times.shift())}this._map.fire("move").fire("drag")},_onViewReset:function(){var t=this._map.getSize()._divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.project([0,180]).x},_onPreDrag:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,s=(n+e+i)%t-e-i,a=Math.abs(o+i)<Math.abs(s+i)?o:s;this._draggable._newPos.x=a},_onDragEnd:function(t){var e=this._map,i=e.options,n=+new Date-this._lastTime,s=!i.inertia||n>i.inertiaThreshold||!this._positions[0];if(e.fire("dragend",t),s)e.fire("moveend");else{var a=this._lastPos.subtract(this._positions[0]),r=(this._lastTime+n-this._times[0])/1e3,h=i.easeLinearity,l=a.multiplyBy(h/r),u=l.distanceTo([0,0]),c=Math.min(i.inertiaMaxSpeed,u),d=l.multiplyBy(c/u),p=c/(i.inertiaDeceleration*h),_=d.multiplyBy(-p/2).round();_.x&&_.y?(_=e._limitOffset(_,e.options.maxBounds),o.Util.requestAnimFrame(function(){e.panBy(_,{duration:p,easeLinearity:h,noMoveStart:!0})})):e.fire("moveend")}}}),o.Map.addInitHook("addHandler","dragging",o.Map.Drag),o.Map.mergeOptions({doubleClickZoom:!0}),o.Map.DoubleClickZoom=o.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom()+(t.originalEvent.shiftKey?-1:1);"center"===e.options.doubleClickZoom?e.setZoom(i):e.setZoomAround(t.containerPoint,i)}}),o.Map.addInitHook("addHandler","doubleClickZoom",o.Map.DoubleClickZoom),o.Map.mergeOptions({scrollWheelZoom:!0}),o.Map.ScrollWheelZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),o.DomEvent.on(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault),this._delta=0},removeHooks:function(){o.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll),o.DomEvent.off(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault)},_onWheelScroll:function(t){var e=o.DomEvent.getWheelDelta(t);this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var i=Math.max(40-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o.bind(this._performZoom,this),i),o.DomEvent.preventDefault(t),o.DomEvent.stopPropagation(t)},_performZoom:function(){var t=this._map,e=this._delta,i=t.getZoom();e=e>0?Math.ceil(e):Math.floor(e),e=Math.max(Math.min(e,4),-4),e=t._limitZoom(i+e)-i,this._delta=0,this._startTime=null,e&&("center"===t.options.scrollWheelZoom?t.setZoom(i+e):t.setZoomAround(this._lastMousePos,i+e))}}),o.Map.addInitHook("addHandler","scrollWheelZoom",o.Map.ScrollWheelZoom),o.extend(o.DomEvent,{_touchstart:o.Browser.msPointer?"MSPointerDown":o.Browser.pointer?"pointerdown":"touchstart",_touchend:o.Browser.msPointer?"MSPointerUp":o.Browser.pointer?"pointerup":"touchend",addDoubleTapListener:function(t,i,n){function s(t){var e;if(o.Browser.pointer?(_.push(t.pointerId),e=_.length):e=t.touches.length,!(e>1)){var i=Date.now(),n=i-(r||i);h=t.touches?t.touches[0]:t,l=n>0&&u>=n,r=i}}function a(t){if(o.Browser.pointer){var e=_.indexOf(t.pointerId);if(-1===e)return;_.splice(e,1)}if(l){if(o.Browser.pointer){var n,s={};for(var a in h)n=h[a],s[a]="function"==typeof n?n.bind(h):n;h=s}h.type="dblclick",i(h),r=null}}var r,h,l=!1,u=250,c="_leaflet_",d=this._touchstart,p=this._touchend,_=[];t[c+d+n]=s,t[c+p+n]=a;var m=o.Browser.pointer?e.documentElement:t;return t.addEventListener(d,s,!1),m.addEventListener(p,a,!1),o.Browser.pointer&&m.addEventListener(o.DomEvent.POINTER_CANCEL,a,!1),this},removeDoubleTapListener:function(t,i){var n="_leaflet_";return t.removeEventListener(this._touchstart,t[n+this._touchstart+i],!1),(o.Browser.pointer?e.documentElement:t).removeEventListener(this._touchend,t[n+this._touchend+i],!1),o.Browser.pointer&&e.documentElement.removeEventListener(o.DomEvent.POINTER_CANCEL,t[n+this._touchend+i],!1),this}}),o.extend(o.DomEvent,{POINTER_DOWN:o.Browser.msPointer?"MSPointerDown":"pointerdown",POINTER_MOVE:o.Browser.msPointer?"MSPointerMove":"pointermove",POINTER_UP:o.Browser.msPointer?"MSPointerUp":"pointerup",POINTER_CANCEL:o.Browser.msPointer?"MSPointerCancel":"pointercancel",_pointers:[],_pointerDocumentListener:!1,addPointerListener:function(t,e,i,n){switch(e){case"touchstart":return this.addPointerListenerStart(t,e,i,n);case"touchend":return this.addPointerListenerEnd(t,e,i,n);case"touchmove":return this.addPointerListenerMove(t,e,i,n);default:throw"Unknown touch event type"}},addPointerListenerStart:function(t,i,n,s){var a="_leaflet_",r=this._pointers,h=function(t){o.DomEvent.preventDefault(t);for(var e=!1,i=0;i<r.length;i++)if(r[i].pointerId===t.pointerId){e=!0;
break}e||r.push(t),t.touches=r.slice(),t.changedTouches=[t],n(t)};if(t[a+"touchstart"+s]=h,t.addEventListener(this.POINTER_DOWN,h,!1),!this._pointerDocumentListener){var l=function(t){for(var e=0;e<r.length;e++)if(r[e].pointerId===t.pointerId){r.splice(e,1);break}};e.documentElement.addEventListener(this.POINTER_UP,l,!1),e.documentElement.addEventListener(this.POINTER_CANCEL,l,!1),this._pointerDocumentListener=!0}return this},addPointerListenerMove:function(t,e,i,n){function o(t){if(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons){for(var e=0;e<a.length;e++)if(a[e].pointerId===t.pointerId){a[e]=t;break}t.touches=a.slice(),t.changedTouches=[t],i(t)}}var s="_leaflet_",a=this._pointers;return t[s+"touchmove"+n]=o,t.addEventListener(this.POINTER_MOVE,o,!1),this},addPointerListenerEnd:function(t,e,i,n){var o="_leaflet_",s=this._pointers,a=function(t){for(var e=0;e<s.length;e++)if(s[e].pointerId===t.pointerId){s.splice(e,1);break}t.touches=s.slice(),t.changedTouches=[t],i(t)};return t[o+"touchend"+n]=a,t.addEventListener(this.POINTER_UP,a,!1),t.addEventListener(this.POINTER_CANCEL,a,!1),this},removePointerListener:function(t,e,i){var n="_leaflet_",o=t[n+e+i];switch(e){case"touchstart":t.removeEventListener(this.POINTER_DOWN,o,!1);break;case"touchmove":t.removeEventListener(this.POINTER_MOVE,o,!1);break;case"touchend":t.removeEventListener(this.POINTER_UP,o,!1),t.removeEventListener(this.POINTER_CANCEL,o,!1)}return this}}),o.Map.mergeOptions({touchZoom:o.Browser.touch&&!o.Browser.android23,bounceAtZoomLimits:!0}),o.Map.TouchZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var n=i.mouseEventToLayerPoint(t.touches[0]),s=i.mouseEventToLayerPoint(t.touches[1]),a=i._getCenterLayerPoint();this._startCenter=n.add(s)._divideBy(2),this._startDist=n.distanceTo(s),this._moved=!1,this._zooming=!0,this._centerOffset=a.subtract(this._startCenter),i._panAnim&&i._panAnim.stop(),o.DomEvent.on(e,"touchmove",this._onTouchMove,this).on(e,"touchend",this._onTouchEnd,this),o.DomEvent.preventDefault(t)}},_onTouchMove:function(t){var e=this._map;if(t.touches&&2===t.touches.length&&this._zooming){var i=e.mouseEventToLayerPoint(t.touches[0]),n=e.mouseEventToLayerPoint(t.touches[1]);this._scale=i.distanceTo(n)/this._startDist,this._delta=i._add(n)._divideBy(2)._subtract(this._startCenter),1!==this._scale&&(e.options.bounceAtZoomLimits||!(e.getZoom()===e.getMinZoom()&&this._scale<1||e.getZoom()===e.getMaxZoom()&&this._scale>1))&&(this._moved||(o.DomUtil.addClass(e._mapPane,"leaflet-touching"),e.fire("movestart").fire("zoomstart"),this._moved=!0),o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updateOnMove,this,!0,this._map._container),o.DomEvent.preventDefault(t))}},_updateOnMove:function(){var t=this._map,e=this._getScaleOrigin(),i=t.layerPointToLatLng(e),n=t.getScaleZoom(this._scale);t._animateZoom(i,n,this._startCenter,this._scale,this._delta,!1,!0)},_onTouchEnd:function(){if(!this._moved||!this._zooming)return void(this._zooming=!1);var t=this._map;this._zooming=!1,o.DomUtil.removeClass(t._mapPane,"leaflet-touching"),o.Util.cancelAnimFrame(this._animRequest),o.DomEvent.off(e,"touchmove",this._onTouchMove).off(e,"touchend",this._onTouchEnd);var i=this._getScaleOrigin(),n=t.layerPointToLatLng(i),s=t.getZoom(),a=t.getScaleZoom(this._scale)-s,r=a>0?Math.ceil(a):Math.floor(a),h=t._limitZoom(s+r),l=t.getZoomScale(h)/this._scale;t._animateZoom(n,h,i,l)},_getScaleOrigin:function(){var t=this._centerOffset.subtract(this._delta).divideBy(this._scale);return this._startCenter.add(t)}}),o.Map.addInitHook("addHandler","touchZoom",o.Map.TouchZoom),o.Map.mergeOptions({tap:!0,tapTolerance:15}),o.Map.Tap=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(o.DomEvent.preventDefault(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],n=i.target;this._startPos=this._newPos=new o.Point(i.clientX,i.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.addClass(n,"leaflet-active"),this._holdTimeout=setTimeout(o.bind(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),o.DomEvent.on(e,"touchmove",this._onMove,this).on(e,"touchend",this._onUp,this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),o.DomEvent.off(e,"touchmove",this._onMove,this).off(e,"touchend",this._onUp,this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],n=i.target;n&&n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.removeClass(n,"leaflet-active"),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var e=t.touches[0];this._newPos=new o.Point(e.clientX,e.clientY)},_simulateEvent:function(i,n){var o=e.createEvent("MouseEvents");o._simulated=!0,n.target._simulatedClick=!0,o.initMouseEvent(i,!0,!0,t,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),n.target.dispatchEvent(o)}}),o.Browser.touch&&!o.Browser.pointer&&o.Map.addInitHook("addHandler","tap",o.Map.Tap),o.Map.mergeOptions({boxZoom:!0}),o.Map.BoxZoom=o.Handler.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._moved=!1},addHooks:function(){o.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){o.DomEvent.off(this._container,"mousedown",this._onMouseDown),this._moved=!1},moved:function(){return this._moved},_onMouseDown:function(t){return this._moved=!1,!t.shiftKey||1!==t.which&&1!==t.button?!1:(o.DomUtil.disableTextSelection(),o.DomUtil.disableImageDrag(),this._startLayerPoint=this._map.mouseEventToLayerPoint(t),void o.DomEvent.on(e,"mousemove",this._onMouseMove,this).on(e,"mouseup",this._onMouseUp,this).on(e,"keydown",this._onKeyDown,this))},_onMouseMove:function(t){this._moved||(this._box=o.DomUtil.create("div","leaflet-zoom-box",this._pane),o.DomUtil.setPosition(this._box,this._startLayerPoint),this._container.style.cursor="crosshair",this._map.fire("boxzoomstart"));var e=this._startLayerPoint,i=this._box,n=this._map.mouseEventToLayerPoint(t),s=n.subtract(e),a=new o.Point(Math.min(n.x,e.x),Math.min(n.y,e.y));o.DomUtil.setPosition(i,a),this._moved=!0,i.style.width=Math.max(0,Math.abs(s.x)-4)+"px",i.style.height=Math.max(0,Math.abs(s.y)-4)+"px"},_finish:function(){this._moved&&(this._pane.removeChild(this._box),this._container.style.cursor=""),o.DomUtil.enableTextSelection(),o.DomUtil.enableImageDrag(),o.DomEvent.off(e,"mousemove",this._onMouseMove).off(e,"mouseup",this._onMouseUp).off(e,"keydown",this._onKeyDown)},_onMouseUp:function(t){this._finish();var e=this._map,i=e.mouseEventToLayerPoint(t);if(!this._startLayerPoint.equals(i)){var n=new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint),e.layerPointToLatLng(i));e.fitBounds(n),e.fire("boxzoomend",{boxZoomBounds:n})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}}),o.Map.addInitHook("addHandler","boxZoom",o.Map.BoxZoom),o.Map.mergeOptions({keyboard:!0,keyboardPanOffset:80,keyboardZoomOffset:1}),o.Map.Keyboard=o.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,173]},initialize:function(t){this._map=t,this._setPanOffset(t.options.keyboardPanOffset),this._setZoomOffset(t.options.keyboardZoomOffset)},addHooks:function(){var t=this._map._container;-1===t.tabIndex&&(t.tabIndex="0"),o.DomEvent.on(t,"focus",this._onFocus,this).on(t,"blur",this._onBlur,this).on(t,"mousedown",this._onMouseDown,this),this._map.on("focus",this._addHooks,this).on("blur",this._removeHooks,this)},removeHooks:function(){this._removeHooks();var t=this._map._container;o.DomEvent.off(t,"focus",this._onFocus,this).off(t,"blur",this._onBlur,this).off(t,"mousedown",this._onMouseDown,this),this._map.off("focus",this._addHooks,this).off("blur",this._removeHooks,this)},_onMouseDown:function(){if(!this._focused){var i=e.body,n=e.documentElement,o=i.scrollTop||n.scrollTop,s=i.scrollLeft||n.scrollLeft;this._map._container.focus(),t.scrollTo(s,o)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanOffset:function(t){var e,i,n=this._panKeys={},o=this.keyCodes;for(e=0,i=o.left.length;i>e;e++)n[o.left[e]]=[-1*t,0];for(e=0,i=o.right.length;i>e;e++)n[o.right[e]]=[t,0];for(e=0,i=o.down.length;i>e;e++)n[o.down[e]]=[0,t];for(e=0,i=o.up.length;i>e;e++)n[o.up[e]]=[0,-1*t]},_setZoomOffset:function(t){var e,i,n=this._zoomKeys={},o=this.keyCodes;for(e=0,i=o.zoomIn.length;i>e;e++)n[o.zoomIn[e]]=t;for(e=0,i=o.zoomOut.length;i>e;e++)n[o.zoomOut[e]]=-t},_addHooks:function(){o.DomEvent.on(e,"keydown",this._onKeyDown,this)},_removeHooks:function(){o.DomEvent.off(e,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){var e=t.keyCode,i=this._map;if(e in this._panKeys){if(i._panAnim&&i._panAnim._inProgress)return;i.panBy(this._panKeys[e]),i.options.maxBounds&&i.panInsideBounds(i.options.maxBounds)}else{if(!(e in this._zoomKeys))return;i.setZoom(i.getZoom()+this._zoomKeys[e])}o.DomEvent.stop(t)}}),o.Map.addInitHook("addHandler","keyboard",o.Map.Keyboard),o.Handler.MarkerDrag=o.Handler.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new o.Draggable(t,t)),this._draggable.on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this),this._draggable.enable(),o.DomUtil.addClass(this._marker._icon,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off("dragstart",this._onDragStart,this).off("drag",this._onDrag,this).off("dragend",this._onDragEnd,this),this._draggable.disable(),o.DomUtil.removeClass(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(){var t=this._marker,e=t._shadow,i=o.DomUtil.getPosition(t._icon),n=t._map.layerPointToLatLng(i);e&&o.DomUtil.setPosition(e,i),t._latlng=n,t.fire("move",{latlng:n}).fire("drag")},_onDragEnd:function(t){this._marker.fire("moveend").fire("dragend",t)}}),o.Control=o.Class.extend({options:{position:"topright"},initialize:function(t){o.setOptions(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return o.DomUtil.addClass(e,"leaflet-control"),-1!==i.indexOf("bottom")?n.insertBefore(e,n.firstChild):n.appendChild(e),this},removeFrom:function(t){var e=this.getPosition(),i=t._controlCorners[e];return i.removeChild(this._container),this._map=null,this.onRemove&&this.onRemove(t),this},_refocusOnMap:function(){this._map&&this._map.getContainer().focus()}}),o.control=function(t){return new o.Control(t)},o.Map.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.removeFrom(this),this},_initControlPos:function(){function t(t,s){var a=i+t+" "+i+s;e[t+s]=o.DomUtil.create("div",a,n)}var e=this._controlCorners={},i="leaflet-",n=this._controlContainer=o.DomUtil.create("div",i+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){this._container.removeChild(this._controlContainer)}}),o.Control.Zoom=o.Control.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"-",zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=o.DomUtil.create("div",e+" leaflet-bar");return this._map=t,this._zoomInButton=this._createButton(this.options.zoomInText,this.options.zoomInTitle,e+"-in",i,this._zoomIn,this),this._zoomOutButton=this._createButton(this.options.zoomOutText,this.options.zoomOutTitle,e+"-out",i,this._zoomOut,this),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},_zoomIn:function(t){this._map.zoomIn(t.shiftKey?3:1)},_zoomOut:function(t){this._map.zoomOut(t.shiftKey?3:1)},_createButton:function(t,e,i,n,s,a){var r=o.DomUtil.create("a",i,n);r.innerHTML=t,r.href="#",r.title=e;var h=o.DomEvent.stopPropagation;return o.DomEvent.on(r,"click",h).on(r,"mousedown",h).on(r,"dblclick",h).on(r,"click",o.DomEvent.preventDefault).on(r,"click",s,a).on(r,"click",this._refocusOnMap,a),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";o.DomUtil.removeClass(this._zoomInButton,e),o.DomUtil.removeClass(this._zoomOutButton,e),t._zoom===t.getMinZoom()&&o.DomUtil.addClass(this._zoomOutButton,e),t._zoom===t.getMaxZoom()&&o.DomUtil.addClass(this._zoomInButton,e)}}),o.Map.mergeOptions({zoomControl:!0}),o.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new o.Control.Zoom,this.addControl(this.zoomControl))}),o.control.zoom=function(t){return new o.Control.Zoom(t)},o.Control.Attribution=o.Control.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){o.setOptions(this,t),this._attributions={}},onAdd:function(t){this._container=o.DomUtil.create("div","leaflet-control-attribution"),o.DomEvent.disableClickPropagation(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return t.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this),this._update(),this._container},onRemove:function(t){t.off("layeradd",this._onLayerAdd).off("layerremove",this._onLayerRemove)},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):void 0},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):void 0},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(" | ")}},_onLayerAdd:function(t){t.layer.getAttribution&&this.addAttribution(t.layer.getAttribution())},_onLayerRemove:function(t){t.layer.getAttribution&&this.removeAttribution(t.layer.getAttribution())}}),o.Map.mergeOptions({attributionControl:!0}),o.Map.addInitHook(function(){this.options.attributionControl&&(this.attributionControl=(new o.Control.Attribution).addTo(this))}),o.control.attribution=function(t){return new o.Control.Attribution(t)},o.Control.Scale=o.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0,updateWhenIdle:!1},onAdd:function(t){this._map=t;var e="leaflet-control-scale",i=o.DomUtil.create("div",e),n=this.options;return this._addScales(n,e,i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=o.DomUtil.create("div",e+"-line",i)),t.imperial&&(this._iScale=o.DomUtil.create("div",e+"-line",i))},_update:function(){var t=this._map.getBounds(),e=t.getCenter().lat,i=6378137*Math.PI*Math.cos(e*Math.PI/180),n=i*(t.getNorthEast().lng-t.getSouthWest().lng)/180,o=this._map.getSize(),s=this.options,a=0;o.x>0&&(a=n*(s.maxWidth/o.x)),this._updateScales(s,a)},_updateScales:function(t,e){t.metric&&e&&this._updateMetric(e),t.imperial&&e&&this._updateImperial(e)},_updateMetric:function(t){var e=this._getRoundNum(t);this._mScale.style.width=this._getScaleWidth(e/t)+"px",this._mScale.innerHTML=1e3>e?e+" m":e/1e3+" km"},_updateImperial:function(t){var e,i,n,o=3.2808399*t,s=this._iScale;o>5280?(e=o/5280,i=this._getRoundNum(e),s.style.width=this._getScaleWidth(i/e)+"px",s.innerHTML=i+" mi"):(n=this._getRoundNum(o),s.style.width=this._getScaleWidth(n/o)+"px",s.innerHTML=n+" ft")},_getScaleWidth:function(t){return Math.round(this.options.maxWidth*t)-10},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),o.control.scale=function(t){return new o.Control.Scale(t)},o.Control.Layers=o.Control.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0},initialize:function(t,e,i){o.setOptions(this,i),this._layers={},this._lastZIndex=0,this._handlingClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){return this._initLayout(),this._update(),t.on("layeradd",this._onLayerChange,this).on("layerremove",this._onLayerChange,this),this._container},onRemove:function(t){t.off("layeradd",this._onLayerChange,this).off("layerremove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._update(),this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._update(),this},removeLayer:function(t){var e=o.stamp(t);return delete this._layers[e],this._update(),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=o.DomUtil.create("div",t);e.setAttribute("aria-haspopup",!0),o.Browser.touch?o.DomEvent.on(e,"click",o.DomEvent.stopPropagation):o.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);var i=this._form=o.DomUtil.create("form",t+"-list");if(this.options.collapsed){o.Browser.android||o.DomEvent.on(e,"mouseover",this._expand,this).on(e,"mouseout",this._collapse,this);var n=this._layersLink=o.DomUtil.create("a",t+"-toggle",e);n.href="#",n.title="Layers",o.Browser.touch?o.DomEvent.on(n,"click",o.DomEvent.stop).on(n,"click",this._expand,this):o.DomEvent.on(n,"focus",this._expand,this),o.DomEvent.on(i,"click",function(){setTimeout(o.bind(this._onInputClick,this),0)},this),this._map.on("click",this._collapse,this)}else this._expand();this._baseLayersList=o.DomUtil.create("div",t+"-base",i),this._separator=o.DomUtil.create("div",t+"-separator",i),this._overlaysList=o.DomUtil.create("div",t+"-overlays",i),e.appendChild(i)},_addLayer:function(t,e,i){var n=o.stamp(t);this._layers[n]={layer:t,name:e,overlay:i},this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex))},_update:function(){if(this._container){this._baseLayersList.innerHTML="",this._overlaysList.innerHTML="";var t,e,i=!1,n=!1;for(t in this._layers)e=this._layers[t],this._addItem(e),n=n||e.overlay,i=i||!e.overlay;this._separator.style.display=n&&i?"":"none"}},_onLayerChange:function(t){var e=this._layers[o.stamp(t.layer)];if(e){this._handlingClick||this._update();var i=e.overlay?"layeradd"===t.type?"overlayadd":"overlayremove":"layeradd"===t.type?"baselayerchange":null;i&&this._map.fire(i,e)}},_createRadioElement:function(t,i){var n='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"';i&&(n+=' checked="checked"'),n+="/>";var o=e.createElement("div");return o.innerHTML=n,o.firstChild},_addItem:function(t){var i,n=e.createElement("label"),s=this._map.hasLayer(t.layer);t.overlay?(i=e.createElement("input"),i.type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=s):i=this._createRadioElement("leaflet-base-layers",s),i.layerId=o.stamp(t.layer),o.DomEvent.on(i,"click",this._onInputClick,this);var a=e.createElement("span");a.innerHTML=" "+t.name,n.appendChild(i),n.appendChild(a);var r=t.overlay?this._overlaysList:this._baseLayersList;return r.appendChild(n),n},_onInputClick:function(){var t,e,i,n=this._form.getElementsByTagName("input"),o=n.length;for(this._handlingClick=!0,t=0;o>t;t++)e=n[t],i=this._layers[e.layerId],e.checked&&!this._map.hasLayer(i.layer)?this._map.addLayer(i.layer):!e.checked&&this._map.hasLayer(i.layer)&&this._map.removeLayer(i.layer);this._handlingClick=!1,this._refocusOnMap()},_expand:function(){o.DomUtil.addClass(this._container,"leaflet-control-layers-expanded")},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")}}),o.control.layers=function(t,e,i){return new o.Control.Layers(t,e,i)},o.PosAnimation=o.Class.extend({includes:o.Mixin.Events,run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._newPos=e,this.fire("start"),t.style[o.DomUtil.TRANSITION]="all "+(i||.25)+"s cubic-bezier(0,0,"+(n||.5)+",1)",o.DomEvent.on(t,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),o.DomUtil.setPosition(t,e),o.Util.falseFn(t.offsetWidth),this._stepTimer=setInterval(o.bind(this._onStep,this),50)},stop:function(){this._inProgress&&(o.DomUtil.setPosition(this._el,this._getPos()),this._onTransitionEnd(),o.Util.falseFn(this._el.offsetWidth))},_onStep:function(){var t=this._getPos();return t?(this._el._leaflet_pos=t,void this.fire("step")):void this._onTransitionEnd()},_transformRe:/([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,_getPos:function(){var e,i,n,s=this._el,a=t.getComputedStyle(s);if(o.Browser.any3d){if(n=a[o.DomUtil.TRANSFORM].match(this._transformRe),!n)return;e=parseFloat(n[1]),i=parseFloat(n[2])}else e=parseFloat(a.left),i=parseFloat(a.top);return new o.Point(e,i,!0)},_onTransitionEnd:function(){o.DomEvent.off(this._el,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),this._inProgress&&(this._inProgress=!1,this._el.style[o.DomUtil.TRANSITION]="",this._el._leaflet_pos=this._newPos,clearInterval(this._stepTimer),this.fire("step").fire("end"))}}),o.Map.include({setView:function(t,e,n){if(e=e===i?this._zoom:this._limitZoom(e),t=this._limitCenter(o.latLng(t),e,this.options.maxBounds),n=n||{},this._panAnim&&this._panAnim.stop(),this._loaded&&!n.reset&&n!==!0){n.animate!==i&&(n.zoom=o.extend({animate:n.animate},n.zoom),n.pan=o.extend({animate:n.animate},n.pan));var s=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan);if(s)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e),this},panBy:function(t,e){if(t=o.point(t).round(),e=e||{},!t.x&&!t.y)return this;if(this._panAnim||(this._panAnim=new o.PosAnimation,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){o.DomUtil.addClass(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t);this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){o.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._floor();return(e&&e.animate)===!0||this.getSize().contains(i)?(this.panBy(i,e),!0):!1}}),o.PosAnimation=o.DomUtil.TRANSITION?o.PosAnimation:o.PosAnimation.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=o.DomUtil.getPosition(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(),this._complete())},_animate:function(){this._animId=o.Util.requestAnimFrame(this._animate,this),this._step()},_step:function(){var t=+new Date-this._startTime,e=1e3*this._duration;e>t?this._runFrame(this._easeOut(t/e)):(this._runFrame(1),this._complete())},_runFrame:function(t){var e=this._startPos.add(this._offset.multiplyBy(t));o.DomUtil.setPosition(this._el,e),this.fire("step")},_complete:function(){o.Util.cancelAnimFrame(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),o.Map.mergeOptions({zoomAnimation:!0,zoomAnimationThreshold:4}),o.DomUtil.TRANSITION&&o.Map.addInitHook(function(){this._zoomAnimated=this.options.zoomAnimation&&o.DomUtil.TRANSITION&&o.Browser.any3d&&!o.Browser.android23&&!o.Browser.mobileOpera,this._zoomAnimated&&o.DomEvent.on(this._mapPane,o.DomUtil.TRANSITION_END,this._catchTransitionEnd,this)}),o.Map.include(o.DomUtil.TRANSITION?{_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n),s=this._getCenterLayerPoint()._add(o);return i.animate===!0||this.getSize().contains(o)?(this.fire("movestart").fire("zoomstart"),this._animateZoom(t,e,s,n,null,!0),!0):!1},_animateZoom:function(t,e,i,n,s,a,r){r||(this._animatingZoom=!0),o.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim"),this._animateToCenter=t,this._animateToZoom=e,o.Draggable&&(o.Draggable._disabled=!0),o.Util.requestAnimFrame(function(){this.fire("zoomanim",{center:t,zoom:e,origin:i,scale:n,delta:s,backwards:a})},this)},_onZoomTransitionEnd:function(){this._animatingZoom=!1,o.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),this._resetView(this._animateToCenter,this._animateToZoom,!0,!0),o.Draggable&&(o.Draggable._disabled=!1)}}:{}),o.TileLayer.include({_animateZoom:function(t){this._animating||(this._animating=!0,this._prepareBgBuffer());var e=this._bgBuffer,i=o.DomUtil.TRANSFORM,n=t.delta?o.DomUtil.getTranslateString(t.delta):e.style[i],s=o.DomUtil.getScaleString(t.scale,t.origin);e.style[i]=t.backwards?s+" "+n:n+" "+s},_endZoomAnim:function(){var t=this._tileContainer,e=this._bgBuffer;t.style.visibility="",t.parentNode.appendChild(t),o.Util.falseFn(e.offsetWidth),this._animating=!1},_clearBgBuffer:function(){var t=this._map;!t||t._animatingZoom||t.touchZoom._zooming||(this._bgBuffer.innerHTML="",this._bgBuffer.style[o.DomUtil.TRANSFORM]="")},_prepareBgBuffer:function(){var t=this._tileContainer,e=this._bgBuffer,i=this._getLoadedTilesPercentage(e),n=this._getLoadedTilesPercentage(t);return e&&i>.5&&.5>n?(t.style.visibility="hidden",void this._stopLoadingImages(t)):(e.style.visibility="hidden",e.style[o.DomUtil.TRANSFORM]="",this._tileContainer=e,e=this._bgBuffer=t,this._stopLoadingImages(e),void clearTimeout(this._clearBgBufferTimer))},_getLoadedTilesPercentage:function(t){var e,i,n=t.getElementsByTagName("img"),o=0;for(e=0,i=n.length;i>e;e++)n[e].complete&&o++;return o/i},_stopLoadingImages:function(t){var e,i,n,s=Array.prototype.slice.call(t.getElementsByTagName("img"));for(e=0,i=s.length;i>e;e++)n=s[e],n.complete||(n.onload=o.Util.falseFn,n.onerror=o.Util.falseFn,n.src=o.Util.emptyImageUrl,n.parentNode.removeChild(n))}}),o.Map.include({_defaultLocateOptions:{watch:!1,setView:!1,maxZoom:1/0,timeout:1e4,maximumAge:0,enableHighAccuracy:!1},locate:function(t){if(t=this._locateOptions=o.extend(this._defaultLocateOptions,t),!navigator.geolocation)return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=o.bind(this._handleGeolocationResponse,this),i=o.bind(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})},_handleGeolocationResponse:function(t){var e=t.coords.latitude,i=t.coords.longitude,n=new o.LatLng(e,i),s=180*t.coords.accuracy/40075017,a=s/Math.cos(o.LatLng.DEG_TO_RAD*e),r=o.latLngBounds([e-s,i-a],[e+s,i+a]),h=this._locateOptions;if(h.setView){var l=Math.min(this.getBoundsZoom(r),h.maxZoom);this.setView(n,l)}var u={latlng:n,bounds:r,timestamp:t.timestamp};for(var c in t.coords)"number"==typeof t.coords[c]&&(u[c]=t.coords[c]);this.fire("locationfound",u)}})}(window,document);
},{}],4:[function(require,module,exports){
(function (global){
/*! Quill Editor v0.17.6
 *  https://quilljs.com/
 *  Copyright (c) 2014, Jason Chen
 *  Copyright (c) 2013, salesforce.com
 */
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;"undefined"!=typeof window?b=window:"undefined"!=typeof global?b=global:"undefined"!=typeof self&&(b=self),b.Quill=a()}}(function(){var a;return function b(a,c,d){function e(g,h){if(!c[g]){if(!a[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};a[g][0].call(j.exports,function(b){var c=a[g][1][b];return e(c?c:b)},j,j.exports,b,a,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({"M4+//f":[function(b,c,d){(function(b){(function(){function e(a,b,c){for(var d=(c||0)-1,e=a?a.length:0;++d<e;)if(a[d]===b)return d;return-1}function f(a,b){var c=typeof b;if(a=a.cache,"boolean"==c||null==b)return a[b]?0:-1;"number"!=c&&"string"!=c&&(c="object");var d="number"==c?b:fb+b;return a=(a=a[c])&&a[d],"object"==c?a&&e(a,b)>-1?0:-1:a?0:-1}function g(a){var b=this.cache,c=typeof a;if("boolean"==c||null==a)b[a]=!0;else{"number"!=c&&"string"!=c&&(c="object");var d="number"==c?a:fb+a,e=b[c]||(b[c]={});"object"==c?(e[d]||(e[d]=[])).push(a):e[d]=!0}}function h(a){var b=-1,c=a.length,d=a[0],e=a[c/2|0],f=a[c-1];if(d&&"object"==typeof d&&e&&"object"==typeof e&&f&&"object"==typeof f)return!1;var h=j();h["false"]=h["null"]=h["true"]=h.undefined=!1;var i=j();for(i.array=a,i.cache=h,i.push=g;++b<c;)i.push(a[b]);return i}function i(){return cb.pop()||[]}function j(){return db.pop()||{array:null,cache:null,"false":!1,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1}}function k(a){a.length=0,cb.length<hb&&cb.push(a)}function l(a){var b=a.cache;b&&l(b),a.array=a.cache=a.object=a.number=a.string=null,db.length<hb&&db.push(a)}function m(a,b,c){b||(b=0),"undefined"==typeof c&&(c=a?a.length:0);for(var d=-1,e=c-b||0,f=Array(0>e?0:e);++d<e;)f[d]=a[b+d];return f}function n(){}function o(a){function b(){if(d){var a=m(d);Ib.apply(a,arguments)}if(this instanceof b){var f=q(c.prototype),g=c.apply(f,a||arguments);return F(g)?g:f}return c.apply(e,a||arguments)}var c=a[0],d=a[2],e=a[4];return Rb(b,a),b}function p(a,b,c,d,e){if(c){var f=c(a);if("undefined"!=typeof f)return f}var g=F(a);if(!g)return a;var h=Eb.call(a);if(!ub[h])return a;var j=Pb[h];switch(h){case nb:case ob:return new j(+a);case qb:case tb:return new j(a);case sb:return f=j(a.source,ib.exec(a)),f.lastIndex=a.lastIndex,f}var l=Sb(a);if(b){var n=!d;d||(d=i()),e||(e=i());for(var o=d.length;o--;)if(d[o]==a)return e[o];f=l?j(a.length):{}}else f=l?m(a):Vb({},a);return l&&(Hb.call(a,"index")&&(f.index=a.index),Hb.call(a,"input")&&(f.input=a.input)),b?(d.push(a),e.push(f),(l?L:Yb)(a,function(a,g){f[g]=p(a,b,c,d,e)}),n&&(k(d),k(e)),f):f}function q(a){return F(a)?Lb(a):{}}function r(a,b,c){if("function"!=typeof a)return Z;if("undefined"==typeof b||!("prototype"in a))return a;var d=a.__bindData__;if("undefined"==typeof d&&(Qb.funcNames&&(d=!a.name),d=d||!Qb.funcDecomp,!d)){var e=Gb.call(a);Qb.funcNames||(d=!jb.test(e)),d||(d=kb.test(e),Rb(a,d))}if(d===!1||d!==!0&&1&d[1])return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)};case 4:return function(c,d,e,f){return a.call(b,c,d,e,f)}}return V(a,b)}function s(a){function b(){var a=i?g:this;if(e){var o=m(e);Ib.apply(o,arguments)}if((f||k)&&(o||(o=m(arguments)),f&&Ib.apply(o,f),k&&o.length<h))return d|=16,s([c,l?d:-4&d,o,null,g,h]);if(o||(o=arguments),j&&(c=a[n]),this instanceof b){a=q(c.prototype);var p=c.apply(a,o);return F(p)?p:a}return c.apply(a,o)}var c=a[0],d=a[1],e=a[2],f=a[3],g=a[4],h=a[5],i=1&d,j=2&d,k=4&d,l=8&d,n=c;return Rb(b,a),b}function t(a,b){var c=-1,d=x(),g=a?a.length:0,i=g>=gb&&d===e,j=[];if(i){var k=h(b);k?(d=f,b=k):i=!1}for(;++c<g;){var m=a[c];d(b,m)<0&&j.push(m)}return i&&l(b),j}function u(a,b,c,d){for(var e=(d||0)-1,f=a?a.length:0,g=[];++e<f;){var h=a[e];if(h&&"object"==typeof h&&"number"==typeof h.length&&(Sb(h)||z(h))){b||(h=u(h,b,c));var i=-1,j=h.length,k=g.length;for(g.length+=j;++i<j;)g[k++]=h[i]}else c||g.push(h)}return g}function v(a,b,c,d,e,f){if(c){var g=c(a,b);if("undefined"!=typeof g)return!!g}if(a===b)return 0!==a||1/a==1/b;var h=typeof a,j=typeof b;if(!(a!==a||a&&wb[h]||b&&wb[j]))return!1;if(null==a||null==b)return a===b;var l=Eb.call(a),m=Eb.call(b);if(l==lb&&(l=rb),m==lb&&(m=rb),l!=m)return!1;switch(l){case nb:case ob:return+a==+b;case qb:return a!=+a?b!=+b:0==a?1/a==1/b:a==+b;case sb:case tb:return a==String(b)}var n=l==mb;if(!n){var o=Hb.call(a,"__wrapped__"),p=Hb.call(b,"__wrapped__");if(o||p)return v(o?a.__wrapped__:a,p?b.__wrapped__:b,c,d,e,f);if(l!=rb)return!1;var q=a.constructor,r=b.constructor;if(q!=r&&!(E(q)&&q instanceof q&&E(r)&&r instanceof r)&&"constructor"in a&&"constructor"in b)return!1}var s=!e;e||(e=i()),f||(f=i());for(var t=e.length;t--;)if(e[t]==a)return f[t]==b;var u=0;if(g=!0,e.push(a),f.push(b),n){if(t=a.length,u=b.length,g=u==t,g||d)for(;u--;){var w=t,x=b[u];if(d)for(;w--&&!(g=v(a[w],x,c,d,e,f)););else if(!(g=v(a[u],x,c,d,e,f)))break}}else Xb(b,function(b,h,i){return Hb.call(i,h)?(u++,g=Hb.call(a,h)&&v(a[h],b,c,d,e,f)):void 0}),g&&!d&&Xb(a,function(a,b,c){return Hb.call(c,b)?g=--u>-1:void 0});return e.pop(),f.pop(),s&&(k(e),k(f)),g}function w(a,b,c,d,e,f){var g=1&b,h=2&b,i=4&b,j=16&b,k=32&b;if(!h&&!E(a))throw new TypeError;j&&!c.length&&(b&=-17,j=c=!1),k&&!d.length&&(b&=-33,k=d=!1);var l=a&&a.__bindData__;if(l&&l!==!0)return l=m(l),l[2]&&(l[2]=m(l[2])),l[3]&&(l[3]=m(l[3])),!g||1&l[1]||(l[4]=e),!g&&1&l[1]&&(b|=8),!i||4&l[1]||(l[5]=f),j&&Ib.apply(l[2]||(l[2]=[]),c),k&&Jb.apply(l[3]||(l[3]=[]),d),l[1]|=b,w.apply(null,l);var n=1==b||17===b?o:s;return n([a,b,c,d,e,f])}function x(){var a=(a=n.indexOf)===R?e:a;return a}function y(a){return"function"==typeof a&&Fb.test(a)}function z(a){return a&&"object"==typeof a&&"number"==typeof a.length&&Eb.call(a)==lb||!1}function A(a,b,c,d){return"boolean"!=typeof b&&null!=b&&(d=c,c=b,b=!1),p(a,b,"function"==typeof c&&r(c,d,1))}function B(a,b){return a?Hb.call(a,b):!1}function C(a){return a&&1===a.nodeType||!1}function D(a,b,c,d){return v(a,b,"function"==typeof c&&r(c,d,2))}function E(a){return"function"==typeof a}function F(a){return!(!a||!wb[typeof a])}function G(a){return"number"==typeof a||a&&"object"==typeof a&&Eb.call(a)==qb||!1}function H(a){return"string"==typeof a||a&&"object"==typeof a&&Eb.call(a)==tb||!1}function I(a,b,c){var d={};if("function"!=typeof b){var e=[];Xb(a,function(a,b){e.push(b)}),e=t(e,u(arguments,!0,!1,1));for(var f=-1,g=e.length;++f<g;){var h=e[f];d[h]=a[h]}}else b=n.createCallback(b,c,3),Xb(a,function(a,c,e){b(a,c,e)||(d[c]=a)});return d}function J(a){for(var b=-1,c=Ub(a),d=c.length,e=Array(d);++b<d;)e[b]=a[c[b]];return e}function K(a,b,c){var d=!0;b=n.createCallback(b,c,3);var e=-1,f=a?a.length:0;if("number"==typeof f)for(;++e<f&&(d=!!b(a[e],e,a)););else Yb(a,function(a,c,e){return d=!!b(a,c,e)});return d}function L(a,b,c){var d=-1,e=a?a.length:0;if(b=b&&"undefined"==typeof c?b:r(b,c,3),"number"==typeof e)for(;++d<e&&b(a[d],d,a)!==!1;);else Yb(a,b);return a}function M(a,b){var c=m(arguments,2),d=-1,e="function"==typeof b,f=a?a.length:0,g=Array("number"==typeof f?f:0);return L(a,function(a){g[++d]=(e?b:a[b]).apply(a,c)}),g}function N(a,b,c){var d=-1,e=a?a.length:0;if(b=n.createCallback(b,c,3),"number"==typeof e)for(var f=Array(e);++d<e;)f[d]=b(a[d],d,a);else f=[],Yb(a,function(a,c,e){f[++d]=b(a,c,e)});return f}function O(a,b,c,d){if(!a)return c;var e=arguments.length<3;b=n.createCallback(b,d,4);var f=-1,g=a.length;if("number"==typeof g)for(e&&(c=a[++f]);++f<g;)c=b(c,a[f],f,a);else Yb(a,function(a,d,f){c=e?(e=!1,a):b(c,a,d,f)});return c}function P(a){return t(a,u(arguments,!0,!0,1))}function Q(a,b,c,d){return"boolean"!=typeof b&&null!=b&&(d=c,c="function"!=typeof b&&d&&d[b]===a?null:b,b=!1),null!=c&&(a=N(a,c,d)),u(a,b)}function R(a,b,c){if("number"==typeof c){var d=a?a.length:0;c=0>c?Ob(0,d+c):c||0}else if(c){var f=U(a,b);return a[f]===b?f:-1}return e(a,b,c)}function S(){for(var a=[],b=-1,c=arguments.length,d=i(),g=x(),j=g===e,m=i();++b<c;){var n=arguments[b];(Sb(n)||z(n))&&(a.push(n),d.push(j&&n.length>=gb&&h(b?a[b]:m)))}var o=a[0],p=-1,q=o?o.length:0,r=[];a:for(;++p<q;){var s=d[0];if(n=o[p],(s?f(s,n):g(m,n))<0){for(b=c,(s||m).push(n);--b;)if(s=d[b],(s?f(s,n):g(a[b],n))<0)continue a;r.push(n)}}for(;c--;)s=d[c],s&&l(s);return k(d),k(m),r}function T(a,b,c){var d=0,e=a?a.length:0;if("number"!=typeof b&&null!=b){var f=e;for(b=n.createCallback(b,c,3);f--&&b(a[f],f,a);)d++}else if(d=b,null==d||c)return a?a[e-1]:bb;return m(a,Ob(0,e-d))}function U(a,b,c,d){var e=0,f=a?a.length:e;for(c=c?n.createCallback(c,d,1):Z,b=c(b);f>e;){var g=e+f>>>1;c(a[g])<b?e=g+1:f=g}return e}function V(a,b){return arguments.length>2?w(a,17,m(arguments,2),null,b):w(a,1,null,null,b)}function W(a){if(!E(a))throw new TypeError;var b=m(arguments,1);return setTimeout(function(){a.apply(bb,b)},1)}function X(a){return w(a,16,m(arguments,1))}function Y(a,b,c){var d=typeof a;if(null==a||"function"==d)return r(a,b,c);if("object"!=d)return _(a);var e=Ub(a),f=e[0],g=a[f];return 1!=e.length||g!==g||F(g)?function(b){for(var c=e.length,d=!1;c--&&(d=v(b[e[c]],a[e[c]],null,!0)););return d}:function(a){var b=a[f];return g===b&&(0!==g||1/g==1/b)}}function Z(a){return a}function $(){}function _(a){return function(b){return b[a]}}function ab(a){var b=++eb;return String(null==a?"":a)+b}var bb,cb=[],db=[],eb=0,fb=+new Date+"",gb=75,hb=40,ib=/\w*$/,jb=/^\s*function[ \n\r\t]+\w/,kb=/\bthis\b/,lb="[object Arguments]",mb="[object Array]",nb="[object Boolean]",ob="[object Date]",pb="[object Function]",qb="[object Number]",rb="[object Object]",sb="[object RegExp]",tb="[object String]",ub={};ub[pb]=!1,ub[lb]=ub[mb]=ub[nb]=ub[ob]=ub[qb]=ub[rb]=ub[sb]=ub[tb]=!0;var vb={configurable:!1,enumerable:!1,value:null,writable:!1},wb={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},xb=wb[typeof window]&&window||this,yb=wb[typeof d]&&d&&!d.nodeType&&d,zb=wb[typeof c]&&c&&!c.nodeType&&c,Ab=zb&&zb.exports===yb&&yb,Bb=wb[typeof b]&&b;!Bb||Bb.global!==Bb&&Bb.window!==Bb||(xb=Bb);var Cb=[],Db=Object.prototype,Eb=Db.toString,Fb=RegExp("^"+String(Eb).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),Gb=Function.prototype.toString,Hb=Db.hasOwnProperty,Ib=Cb.push,Jb=Cb.unshift,Kb=function(){try{var a={},b=y(b=Object.defineProperty)&&b,c=b(a,a,a)&&b}catch(d){}return c}(),Lb=y(Lb=Object.create)&&Lb,Mb=y(Mb=Array.isArray)&&Mb,Nb=y(Nb=Object.keys)&&Nb,Ob=Math.max,Pb={};Pb[mb]=Array,Pb[nb]=Boolean,Pb[ob]=Date,Pb[pb]=Function,Pb[rb]=Object,Pb[qb]=Number,Pb[sb]=RegExp,Pb[tb]=String;var Qb=n.support={};Qb.funcDecomp=!y(xb.WinRTError)&&kb.test(function(){return this}),Qb.funcNames="string"==typeof Function.name,Lb||(q=function(){function a(){}return function(b){if(F(b)){a.prototype=b;var c=new a;a.prototype=null}return c||xb.Object()}}());var Rb=Kb?function(a,b){vb.value=b,Kb(a,"__bindData__",vb)}:$,Sb=Mb||function(a){return a&&"object"==typeof a&&"number"==typeof a.length&&Eb.call(a)==mb||!1},Tb=function(a){var b,c=a,d=[];if(!c)return d;if(!wb[typeof a])return d;for(b in c)Hb.call(c,b)&&d.push(b);return d},Ub=Nb?function(a){return F(a)?Nb(a):[]}:Tb,Vb=function(a,b,c){var d,e=a,f=e;if(!e)return f;var g=arguments,h=0,i="number"==typeof c?2:g.length;if(i>3&&"function"==typeof g[i-2])var j=r(g[--i-1],g[i--],2);else i>2&&"function"==typeof g[i-1]&&(j=g[--i]);for(;++h<i;)if(e=g[h],e&&wb[typeof e])for(var k=-1,l=wb[typeof e]&&Ub(e),m=l?l.length:0;++k<m;)d=l[k],f[d]=j?j(f[d],e[d]):e[d];return f},Wb=function(a,b,c){var d,e=a,f=e;if(!e)return f;for(var g=arguments,h=0,i="number"==typeof c?2:g.length;++h<i;)if(e=g[h],e&&wb[typeof e])for(var j=-1,k=wb[typeof e]&&Ub(e),l=k?k.length:0;++j<l;)d=k[j],"undefined"==typeof f[d]&&(f[d]=e[d]);return f},Xb=function(a,b,c){var d,e=a,f=e;if(!e)return f;if(!wb[typeof e])return f;b=b&&"undefined"==typeof c?b:r(b,c,3);for(d in e)if(b(e[d],d,a)===!1)return f;return f},Yb=function(a,b,c){var d,e=a,f=e;if(!e)return f;if(!wb[typeof e])return f;b=b&&"undefined"==typeof c?b:r(b,c,3);for(var g=-1,h=wb[typeof e]&&Ub(e),i=h?h.length:0;++g<i;)if(d=h[g],b(e[d],d,a)===!1)return f;return f},Zb=N;n.assign=Vb,n.bind=V,n.createCallback=Y,n.defaults=Wb,n.defer=W,n.difference=P,n.flatten=Q,n.forEach=L,n.forIn=Xb,n.forOwn=Yb,n.intersection=S,n.invoke=M,n.keys=Ub,n.map=N,n.omit=I,n.partial=X,n.pluck=Zb,n.property=_,n.values=J,n.collect=N,n.each=L,n.extend=Vb,n.clone=A,n.every=K,n.has=B,n.identity=Z,n.indexOf=R,n.isArguments=z,n.isArray=Sb,n.isElement=C,n.isEqual=D,n.isFunction=E,n.isNumber=G,n.isObject=F,n.isString=H,n.noop=$,n.reduce=O,n.sortedIndex=U,n.uniqueId=ab,n.all=K,n.foldl=O,n.inject=O,n.last=T,n.VERSION="2.4.1","function"==typeof a&&"object"==typeof a.amd&&a.amd?(xb._=n,a(function(){return n})):yb&&zb?Ab?(zb.exports=n)._=n:yb._=n:xb._=n}).call(this)}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],lodash:[function(a,b){b.exports=a("M4+//f")},{}],3:[function(b,c,d){!function(){function b(){this._events={},this._conf&&c.call(this,this._conf)}function c(a){a&&(this._conf=a,a.delimiter&&(this.delimiter=a.delimiter),a.maxListeners&&(this._events.maxListeners=a.maxListeners),a.wildcard&&(this.wildcard=a.wildcard),a.newListener&&(this.newListener=a.newListener),this.wildcard&&(this.listenerTree={}))}function e(a){this._events={},this.newListener=!1,c.call(this,a)}function f(a,b,c,d){if(!c)return[];var e,g,h,i,j,k,l,m=[],n=b.length,o=b[d],p=b[d+1];if(d===n&&c._listeners){if("function"==typeof c._listeners)return a&&a.push(c._listeners),[c];for(e=0,g=c._listeners.length;g>e;e++)a&&a.push(c._listeners[e]);return[c]}if("*"===o||"**"===o||c[o]){if("*"===o){for(h in c)"_listeners"!==h&&c.hasOwnProperty(h)&&(m=m.concat(f(a,b,c[h],d+1)));return m}if("**"===o){l=d+1===n||d+2===n&&"*"===p,l&&c._listeners&&(m=m.concat(f(a,b,c,n)));for(h in c)"_listeners"!==h&&c.hasOwnProperty(h)&&("*"===h||"**"===h?(c[h]._listeners&&!l&&(m=m.concat(f(a,b,c[h],n))),m=m.concat(f(a,b,c[h],d))):m=m.concat(h===p?f(a,b,c[h],d+2):f(a,b,c[h],d)));return m}m=m.concat(f(a,b,c[o],d+1))}if(i=c["*"],i&&f(a,b,i,d+1),j=c["**"])if(n>d){j._listeners&&f(a,b,j,n);for(h in j)"_listeners"!==h&&j.hasOwnProperty(h)&&(h===p?f(a,b,j[h],d+2):h===o?f(a,b,j[h],d+1):(k={},k[h]=j[h],f(a,b,{"**":k},d+1)))}else j._listeners?f(a,b,j,n):j["*"]&&j["*"]._listeners&&f(a,b,j["*"],n);return m}function g(a,b){a="string"==typeof a?a.split(this.delimiter):a.slice();for(var c=0,d=a.length;d>c+1;c++)if("**"===a[c]&&"**"===a[c+1])return;for(var e=this.listenerTree,f=a.shift();f;){if(e[f]||(e[f]={}),e=e[f],0===a.length){if(e._listeners){if("function"==typeof e._listeners)e._listeners=[e._listeners,b];else if(h(e._listeners)&&(e._listeners.push(b),!e._listeners.warned)){var g=i;"undefined"!=typeof this._events.maxListeners&&(g=this._events.maxListeners),g>0&&e._listeners.length>g&&(e._listeners.warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",e._listeners.length),console.trace())}}else e._listeners=b;return!0}f=a.shift()}return!0}var h=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},i=10;e.prototype.delimiter=".",e.prototype.setMaxListeners=function(a){this._events||b.call(this),this._events.maxListeners=a,this._conf||(this._conf={}),this._conf.maxListeners=a},e.prototype.event="",e.prototype.once=function(a,b){return this.many(a,1,b),this},e.prototype.many=function(a,b,c){function d(){0===--b&&e.off(a,d),c.apply(this,arguments)}var e=this;if("function"!=typeof c)throw new Error("many only accepts instances of Function");return d._origin=c,this.on(a,d),e},e.prototype.emit=function(){this._events||b.call(this);var a=arguments[0];if("newListener"===a&&!this.newListener&&!this._events.newListener)return!1;if(this._all){for(var c=arguments.length,d=new Array(c-1),e=1;c>e;e++)d[e-1]=arguments[e];for(e=0,c=this._all.length;c>e;e++)this.event=a,this._all[e].apply(this,d)}if("error"===a&&!(this._all||this._events.error||this.wildcard&&this.listenerTree.error))throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.");var g;if(this.wildcard){g=[];var h="string"==typeof a?a.split(this.delimiter):a.slice();f.call(this,g,h,this.listenerTree,0)}else g=this._events[a];if("function"==typeof g){if(this.event=a,1===arguments.length)g.call(this);else if(arguments.length>1)switch(arguments.length){case 2:g.call(this,arguments[1]);break;case 3:g.call(this,arguments[1],arguments[2]);break;default:for(var c=arguments.length,d=new Array(c-1),e=1;c>e;e++)d[e-1]=arguments[e];g.apply(this,d)}return!0}if(g){for(var c=arguments.length,d=new Array(c-1),e=1;c>e;e++)d[e-1]=arguments[e];for(var i=g.slice(),e=0,c=i.length;c>e;e++)this.event=a,i[e].apply(this,d);return i.length>0||!!this._all}return!!this._all},e.prototype.on=function(a,c){if("function"==typeof a)return this.onAny(a),this;if("function"!=typeof c)throw new Error("on only accepts instances of Function");if(this._events||b.call(this),this.emit("newListener",a,c),this.wildcard)return g.call(this,a,c),this;if(this._events[a]){if("function"==typeof this._events[a])this._events[a]=[this._events[a],c];else if(h(this._events[a])&&(this._events[a].push(c),!this._events[a].warned)){var d=i;"undefined"!=typeof this._events.maxListeners&&(d=this._events.maxListeners),d>0&&this._events[a].length>d&&(this._events[a].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[a].length),console.trace())}}else this._events[a]=c;return this},e.prototype.onAny=function(a){if("function"!=typeof a)throw new Error("onAny only accepts instances of Function");return this._all||(this._all=[]),this._all.push(a),this},e.prototype.addListener=e.prototype.on,e.prototype.off=function(a,b){if("function"!=typeof b)throw new Error("removeListener only takes instances of Function");var c,d=[];if(this.wildcard){var e="string"==typeof a?a.split(this.delimiter):a.slice();d=f.call(this,null,e,this.listenerTree,0)}else{if(!this._events[a])return this;c=this._events[a],d.push({_listeners:c})}for(var g=0;g<d.length;g++){var i=d[g];if(c=i._listeners,h(c)){for(var j=-1,k=0,l=c.length;l>k;k++)if(c[k]===b||c[k].listener&&c[k].listener===b||c[k]._origin&&c[k]._origin===b){j=k;break}if(0>j)continue;return this.wildcard?i._listeners.splice(j,1):this._events[a].splice(j,1),0===c.length&&(this.wildcard?delete i._listeners:delete this._events[a]),this}(c===b||c.listener&&c.listener===b||c._origin&&c._origin===b)&&(this.wildcard?delete i._listeners:delete this._events[a])}return this},e.prototype.offAny=function(a){var b,c=0,d=0;if(a&&this._all&&this._all.length>0){for(b=this._all,c=0,d=b.length;d>c;c++)if(a===b[c])return b.splice(c,1),this}else this._all=[];return this},e.prototype.removeListener=e.prototype.off,e.prototype.removeAllListeners=function(a){if(0===arguments.length)return!this._events||b.call(this),this;if(this.wildcard)for(var c="string"==typeof a?a.split(this.delimiter):a.slice(),d=f.call(this,null,c,this.listenerTree,0),e=0;e<d.length;e++){var g=d[e];g._listeners=null}else{if(!this._events[a])return this;this._events[a]=null}return this},e.prototype.listeners=function(a){if(this.wildcard){var c=[],d="string"==typeof a?a.split(this.delimiter):a.slice();return f.call(this,c,d,this.listenerTree,0),c}return this._events||b.call(this),this._events[a]||(this._events[a]=[]),h(this._events[a])||(this._events[a]=[this._events[a]]),this._events[a]},e.prototype.listenersAny=function(){return this._all?this._all:[]},"function"==typeof a&&a.amd?a(function(){return e}):"object"==typeof d?d.EventEmitter2=e:window.EventEmitter2=e}()},{}],4:[function(a,b){(function(){var c,d,e,f,g,h;h=a("lodash"),g=a("diff"),e=a("./op"),d=a("./insert"),f=a("./retain"),c=function(){function a(a,b,c){var d;if(this.startLength=a,this.endLength=b,this.ops=c,null==this.ops&&(this.ops=this.endLength,this.endLength=null),this.ops=h.map(this.ops,function(a){if(e.isRetain(a))return a;if(e.isInsert(a))return a;throw new Error("Creating delta with invalid op. Expecting an insert or retain.")}),this.compact(),d=h.reduce(this.ops,function(a,b){return a+b.getLength()},0),null!=this.endLength&&d!==this.endLength)throw new Error("Expecting end length of "+d);this.endLength=d}var b,c;return a.getIdentity=function(b){return new a(b,b,[new f(0,b)])},a.getInitial=function(b){return new a(0,b.length,[new d(b)])},a.isDelta=function(a){var b,c,d,f;if(null!=a&&"object"==typeof a&&"number"==typeof a.startLength&&"number"==typeof a.endLength&&"object"==typeof a.ops){for(f=a.ops,c=0,d=f.length;d>c;c++)if(b=f[c],!e.isRetain(b)&&!e.isInsert(b))return!1;return!0}return!1},a.makeDelta=function(b){return new a(b.startLength,b.endLength,h.map(b.ops,function(a){return e.isInsert(a)?new d(a.value,a.attributes):e.isRetain(a)?new f(a.start,a.end,a.attributes):null}))},a.makeDeleteDelta=function(b,c,d){var e;return e=[],c>0&&e.push(new f(0,c)),b>c+d&&e.push(new f(c+d,b)),new a(b,e)},a.makeInsertDelta=function(b,c,e,g){var h;return h=[new d(e,g)],c>0&&h.unshift(new f(0,c)),b>c&&h.push(new f(c,b)),new a(b,h)},a.makeRetainDelta=function(b,c,d,e){var g;return g=[new f(c,c+d,e)],c>0&&g.unshift(new f(0,c)),b>c+d&&g.push(new f(c+d,b)),new a(b,g)},a.prototype.apply=function(a,b,c,d){var g,i,j;return null==a&&(a=function(){}),null==b&&(b=function(){}),null==c&&(c=function(){}),null==d&&(d=null),this.isIdentity()?void 0:(g=0,i=0,j=[],h.each(this.ops,function(){return function(c){return e.isInsert(c)?(a.call(d,g+i,c.value,c.attributes),i+=c.getLength()):e.isRetain(c)?(c.start>g&&(b.call(d,g+i,c.start-g),i-=c.start-g),j.push(new f(c.start+i,c.end+i,c.attributes)),g=c.end):void 0}}(this)),this.endLength<this.startLength+i&&b.call(d,this.endLength,this.startLength+i-this.endLength),h.each(j,function(){return function(a){return h.each(a.attributes,function(b,e){return null===b?c.call(d,a.start,a.end-a.start,e,b):void 0}),h.each(a.attributes,function(b,e){return null!=b?c.call(d,a.start,a.end-a.start,e,b):void 0})}}(this)))},a.prototype.applyToText=function(a){var b,c,d,f,g,h,i;if(c=this,a.length!==c.startLength)throw new Error("Start length of delta: "+c.startLength+" is not equal to the text: "+a.length);for(b=[],i=c.ops,g=0,h=i.length;h>g;g++)d=i[g],b.push(e.isInsert(d)?d.value:a.substring(d.start,d.end));if(f=b.join(""),c.endLength!==f.length)throw new Error("End length of delta: "+c.endLength+" is not equal to result text: "+f.length);return f},a.prototype.canCompose=function(b){return a.isDelta(b)&&this.endLength===b.startLength},a.prototype.compact=function(){var a;return a=[],h.each(this.ops,function(b){var c;if(0!==b.getLength())return 0===a.length?a.push(b):(c=h.last(a),e.isInsert(c)&&e.isInsert(b)&&c.attributesMatch(b)?a[a.length-1]=new d(c.value+b.value,b.attributes):e.isRetain(c)&&e.isRetain(b)&&c.end===b.start&&c.attributesMatch(b)?a[a.length-1]=new f(c.start,b.end,b.attributes):a.push(b))}),this.ops=a},a.prototype.compose=function(b){var c,g,i,j,k,l,m;if(!this.canCompose(b))throw new Error("Cannot compose delta");for(g=this,c=[],m=b.ops,k=0,l=m.length;l>k;k++)if(i=m[k],e.isInsert(i))c.push(i);else{if(!e.isRetain(i))throw new Error("Invalid op in deltaB when composing");j=g.getOpsAt(i.start,i.getLength()),j=h.map(j,function(a){return e.isInsert(a)?new d(a.value,a.composeAttributes(i.attributes)):new f(a.start,a.end,a.composeAttributes(i.attributes))}),c=c.concat(j)}return new a(g.startLength,b.endLength,c)},a.prototype.decompose=function(b){var c,g,i,j,k,l;if(i=this,!a.isDelta(b))throw new Error("Decompose called when deltaA is not a Delta, type: "+typeof b);if(b.startLength!==this.startLength)throw new Error("startLength "+b.startLength+" / startLength "+this.startLength+" mismatch");if(!h.all(b.ops,function(a){return e.isInsert(a)}))throw new Error("DeltaA has retain in decompose");if(!h.all(i.ops,function(a){return e.isInsert(a)}))throw new Error("DeltaC has retain in decompose");return c=function(a,b){var d,e,f;d={};for(e in b)f=b[e],(void 0===a[e]||a[e]!==f)&&(d[e]=null!==a[e]&&"object"==typeof a[e]&&null!==f&&"object"==typeof f?c(a[e],f):f);for(e in a)f=a[e],void 0===b[e]&&(d[e]=null);return d},j=b.diff(i),l=[],k=0,h.each(j.ops,function(a){var g,j;return j=i.getOpsAt(k,a.getLength()),g=0,h.each(j,function(i){var j,k,m;if(e.isInsert(a))j=new d(a.value.substring(g,g+i.getLength()),i.attributes),l.push(j);else{if(!e.isRetain(a))throw new Error("Invalid delta in deltaB when composing");m=b.getOpsAt(a.start+g,i.getLength()),k=0,h.each(m,function(b){var d,e,h;return d=c(b.attributes,i.attributes),h=a.start+k+g,e=new f(h,h+b.getLength(),d),l.push(e),k+=b.getLength()})}return g+=i.getLength()}),k+=a.getLength()}),g=new a(j.startLength,j.endLength,l)},a.prototype.diff=function(b){var c,e,i,j,k,l,m,n;if(n=h.map([this,b],function(a){return h.map(a.ops,function(a){return null!=a.value?a.value:""}).join("")}),l=n[0],m=n[1],""!==l||""!==m){if(c=g.diffChars(l,m),c.length<=0)throw new Error("diffToDelta called with diff with length <= 0");k=0,e=0,j=[],h.each(c,function(a){return a.added?(j.push(new d(a.value)),e+=a.value.length):a.removed?k+=a.value.length:(j.push(new f(k,k+a.value.length)),k+=a.value.length,e+=a.value.length)}),i=new a(k,e,j)}else i=new a(0,0,[]);return i},b=function(a,b,c,d){var e,g;if(g=h.extend({},c),e=Math.min(a.getLength(),b.getLength()),d)if(g.transformOp=new f(g.indexA,g.indexA+e),g.indexA+=e,e===a.getLength())g.elemIndexA++;else{if(!(e<a.getLength()))throw new Error("Invalid elem length in transform");g.elemA=h.last(a.split(e))}else g.transformOp=h.first(b.split(e)),g.indexB+=e,e===b.getLength()?g.elemIndexB++:g.elemB=h.last(b.split(e));return g},c=function(a,b,c){var d,e,g,i,j,k,l,m;if(j=c.indexA,k=c.indexB,e=c.elemIndexA,g=c.elemIndexB,m=h.extend({},c),a.end<b.start)m.indexA+=a.getLength(),m.elemIndexA++;else if(b.end<a.start)m.indexB+=b.getLength(),m.elemIndexB++;else{if(a.start<b.start?(m.indexA+=b.start-a.start,a=m.elemA=new f(b.start,a.end,a.attributes)):b.start<a.start&&(m.indexB+=a.start-b.start,b=m.elemB=new f(a.start,b.end,b.attributes)),i="RetainOps must have same start length in transform",a.start!==b.start)throw new Error(i);l=Math.min(a.end,b.end)-a.start,d=a.addAttributes(b.attributes),m.transformOp=new f(m.indexA,m.indexA+l,d),m.indexA+=l,m.indexB+=l,a.end===b.end?(m.elemIndexA++,m.elemIndexB++):a.end<b.end?(m.elemIndexA++,m.elemB=h.last(b.split(l))):(m.elemIndexB++,m.elemA=h.last(a.split(l)))}return m.elemIndexA!==c.elemIndexA&&(m.elemA=null),m.elemIndexB!==c.elemIndexB&&(m.elemB=null),m},a.prototype.transform=function(d,g){var i,j,k,l,m,n,o,p,q,r,s,t,u,v;if(null==g&&(g=!1),!a.isDelta(d))throw n="Transform called when deltaA is not a Delta, type: ",new Error(n+typeof d);for(d=new a(d.startLength,d.endLength,d.ops),i=new a(this.startLength,this.endLength,this.ops),s=[],o=p=0,l=m=0,u=function(a){return null!=a.indexA&&(o=a.indexA),null!=a.indexB&&(p=a.indexB),null!=a.elemIndexA&&(l=a.elemIndexA),null!=a.elemIndexB&&(m=a.elemIndexB),null!=a.elemA&&(d.ops[l]=a.elemA),null!=a.elemB&&(i.ops[m]=a.elemB),null!=a.transformOp?s.push(a.transformOp):void 0},v=function(){return{indexA:o,indexB:p,elemIndexA:l,elemIndexB:m}};l<d.ops.length&&m<i.ops.length;)j=d.ops[l],k=i.ops[m],e.isInsert(j)&&e.isInsert(k)?(q=b(j,k,v(),g),u(q)):e.isRetain(j)&&e.isRetain(k)?(q=c(j,k,v()),u(q)):e.isInsert(j)&&e.isRetain(k)?(s.push(new f(o,o+j.getLength())),o+=j.getLength(),l++):e.isRetain(j)&&e.isInsert(k)&&(s.push(k),p+=k.getLength(),m++);for(;l<d.ops.length;)j=d.ops[l],e.isInsert(j)&&s.push(new f(o,o+j.getLength())),o+=j.getLength(),l++;for(;m<i.ops.length;)k=i.ops[m],e.isInsert(k)&&s.push(k),p+=k.getLength(),m++;return t=d.endLength,r=h.reduce(s,function(a,b){return a+b.getLength()},0),new a(t,r,s)},a.prototype.getOpsAt=function(a,b){var c,d,e,f,g,h,i,j,k;for(c=[],e=null!=this.savedOpOffset&&this.savedOpOffset<a?this.savedOpOffset:this.savedOpOffset=this.savedOpIndex=0,k=this.ops.slice(this.savedOpIndex),i=0,j=k.length;j>i&&(f=k[i],!(e>=a+b));i++)g=f.getLength(),e+g>a&&(h=Math.max(a-e,0),d=Math.min(g-h,a+b-e-h),c.push(f.getAt(h,d))),e+=g,this.savedOpIndex+=1,this.savedOpOffset+=g;return c},a.prototype.invert=function(a){var b,c,d;if(!this.isInsertsOnly())throw new Error("Invert called on invalid delta containing non-insert ops");return b=this,c=b.compose(a),d=b.decompose(c)},a.prototype.isEqual=function(a){return a?this.startLength!==a.startLength||this.endLength!==a.endLength?!1:h.isArray(a.ops)&&this.ops.length===a.ops.length?h.all(this.ops,function(b,c){return b.isEqual(a.ops[c])}):!1:!1},a.prototype.isIdentity=function(){var a,b,c,d,f;if(this.startLength===this.endLength){if(0===this.ops.length)return!0;for(a=0,f=this.ops,c=0,d=f.length;d>c;c++){if(b=f[c],!e.isRetain(b))return!1;if(b.start!==a)return!1;if(!(0===b.numAttributes()||1===b.numAttributes()&&h.has(b.attributes,"authorId")))return!1;a=b.end}return a!==this.endLength?!1:!0}return!1},a.prototype.isInsertsOnly=function(){return h.every(this.ops,function(a){return e.isInsert(a)})},a.prototype.merge=function(b){var c;return c=h.map(b.ops,function(a){return function(b){return e.isRetain(b)?new f(b.start+a.startLength,b.end+a.startLength,b.attributes):b}}(this)),c=this.ops.concat(c),new a(this.startLength+b.startLength,c)},a.prototype.split=function(b){var c,d;if(!this.isInsertsOnly())throw new Error("Split only implemented for inserts only");if(!(b>=0&&b<=this.endLength))throw new Error("Split at invalid index");return c=[],d=[],h.reduce(this.ops,function(a,e){var f,g,h;return a+e.getLength()<=b?c.push(e):a>=b?d.push(e):(h=e.split(b-a),f=h[0],g=h[1],c.push(f),d.push(g)),a+e.getLength()},0),[new a(0,c),new a(0,d)]},a.prototype.toString=function(){return"{("+this.startLength+"->"+this.endLength+") ["+this.ops.join(", ")+"]}"},a}(),b.exports=c}).call(this)},{"./insert":6,"./op":7,"./retain":8,diff:11,lodash:"M4+//f"}],5:[function(a,b){(function(){var c,d,e,f,g,h,i,j;i=a("lodash"),c=a("./delta"),e=a("./insert"),f=a("./retain"),j={alphabet:"abcdefghijklmnopqrstuvwxyz\n\n\n\n  ",booleanAttributes:{bold:[!0,!1],italic:[!0,!1],strike:[!0,!1]},nonBooleanAttributes:{"back-color":["white","black","red","blue","lime","teal","magenta","yellow"],"fore-color":["white","black","red","blue","lime","teal","magenta","yellow"],"font-name":["monospace","serif"],"font-size":["huge","large","small"]},defaultAttributeValue:{"back-color":"white","fore-color":"black","font-name":"san-serif","font-size":"normal"}},h=function(a){return null!=a?j=a:void 0},g=function(a){if(a=a||j,null==a)throw new Error("Must provide DeltaGenerator with a domain.");if(null==a.alphabet)throw new Error("Domain must define alphabet.");if(null==a.booleanAttributes)throw new Error("Domain must define booleanAttributes.");if(null==a.nonBooleanAttributes)throw new Error("Domain must define nonBooleanAttributes.");if(null==a.defaultAttributeValue)throw new Error("Domain must define defaultAttributeValue.");return{getDomain:function(){return j},getRandomString:function(b){var c;return i.map(function(){c=[];for(var a=0,d=b-1;d>=0?d>=a:a>=d;d>=0?a++:a--)c.push(a);return c}.apply(this),function(){return a.alphabet[i.random(0,a.alphabet.length-1)]}).join("")},getRandomLength:function(){var a;return a=Math.random(),.6>a?i.random(1,2):.8>a?i.random(3,4):.9>a?i.random(5,9):i.random(10,50)},insertAt:function(a,b,c){var d,f,g,h,i,j,k,l,m;for(d=h=0,l=a.ops,j=0,k=l.length;k>j&&(g=l[j],d!==b);j++){if(b<d+g.getLength()){m=g.split(b-d),f=m[0],i=m[1],a.ops.splice(h,1,f,i),h++;break}d+=g.getLength(),h++}return a.ops.splice(h,0,new e(c)),a.endLength+=c.length,a.compact()},deleteAt:function(a,b,c){var d,g,h,j,k,l,m,n,o,p,q;for(d=0,l=[],q=a.ops,o=0,p=q.length;p>o;o++){if(k=q[o],m=d===b||b<d+k.getLength(),c>0&&m){if(g=Math.min(c,k.getLength()-(b-d)),c-=g,e.isInsert(k))j=k.value.substring(0,b-d)+k.value.substring(b-d+g),j.length>0&&l.push(new e(j));
else{if(!f.isRetain(k))throw new Error("Expected retain but got "+k);h=new f(k.start,k.start+b-d,i.clone(k.attributes)),n=new f(k.start+b-d+g,k.end,i.clone(k.attributes)),h.start<h.end&&l.push(h),n.start<n.end&&l.push(n)}b+=g}else l.push(k);d+=k.getLength()}return a.ops=l,a.endLength=i.reduce(l,function(a,b){return a+b.getLength()},0)},formatAt:function(b,c,d,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B;for(B=function(a,b,c,d){var g,h,j,k,l,m,n,o,p,q,r,s;if(e.isInsert(a))k=a.value.substring(0,b),j=new e(k,i.clone(a.attributes)),h=a.value.substring(b,b+c),g=new e(h,i.clone(a.attributes)),q=a.value.substring(b+c),p=new e(q,i.clone(a.attributes)),-1!==h.indexOf("\n")&&(m=h.substring(0,h.indexOf("\n")),q=h.substring(h.indexOf("\n"))+q,g=new e(m,i.clone(a.attributes)),p=new e(q,i.clone(a.attributes)));else{if(!f.isRetain(a))throw new Error("Expected retain but got "+a);if(j=new f(a.start,a.start+b,i.clone(a.attributes)),g=new f(j.end,j.end+c,i.clone(a.attributes)),p=new f(g.end,a.end,i.clone(a.attributes)),o=d.getOpsAt(g.start,g.getLength()),!i.every(o,function(a){return e.isInsert(a)}))throw new Error("Non insert op in backref");for(l=g.start,r=0,s=o.length;s>r;r++){if(n=o[r],!e.isInsert(n))throw new Error("Got retainOp in reference delta!");if(-1!==n.value.indexOf("\n")){g=new f(g.start,l+n.value.indexOf("\n"),i.clone(g.attributes)),p=new f(l+n.value.indexOf("\n"),p.end,i.clone(p.attributes));break}l+=n.getLength()}}return[j,g,p]},y=function(a,b,c,d){var e,f,g,h,i,j;for(e=0,g=d[0].attributes[c],j=[],h=0,i=d.length;i>h;h++){if(f=d[h],f.attributes[c]!==g){a.end=a.start+e,b.start=a.end;break}j.push(e+=f.getLength())}return j},s=function(a,b,c,d){var g;if(e.isInsert(a))return null!=a.attributes[c]?delete a.attributes[c]:a.attributes[c]=!0;if(!f.isRetain(a))throw new Error("Expected retain but got "+a);if(null!=a.attributes[c])return delete a.attributes[c];if(g=d.getOpsAt(a.start,a.getLength()),!i.every(g,function(a){return e.isInsert(a)}))throw new Error("Formatting a retain that does not refer to an insert.");if(g.length>0){if(y(a,b,c,g),null!=g[0].attributes[c]){if(!g[0].attributes[c])throw new Error("Boolean attribute on reference delta should only be true!");return a.attributes[c]=null}return a.attributes[c]=!0}},t=function(){return function(b,c,d,g){var h,j;if(h=function(b){return i.first(null!=b?i.shuffle(i.without(a.nonBooleanAttributes[d],b)):i.shuffle(i.without(a.nonBooleanAttributes[d],a.defaultAttributeValue[d])))},e.isInsert(b))return b.attributes[d]=h(d,b.attributes[d]);if(!f.isRetain(b))throw new Error("Expected retain but got "+b);if(j=g.getOpsAt(b.start,b.getLength()),!i.every(j,function(a){return e.isInsert(a)}))throw new Error("Formatting a retain that does not refer to an insert.");return j.length>0?(y(b,c,d,j),null!=b.attributes[d]&&Math.random()<.5?delete b.attributes[d]:b.attributes[d]=h(b.attributes[d])):void 0}}(this),k=0,p=[],z=b.ops,u=0,w=z.length;w>u;u++){if(o=z[u],q=k===c||k+o.getLength()>c,d>0&&q){for(m=Math.min(d,o.getLength()-(c-k)),d-=m,A=B(o,c-k,m,h),n=A[0],l=A[1],r=A[2],p.push(n),p.push(l),p.push(r),v=0,x=g.length;x>v;v++)if(j=g[v],i.has(a.booleanAttributes,j))s(l,r,j,h);else{if(!i.has(a.nonBooleanAttributes,j))throw new Error("Received unknown attribute: "+j);t(l,r,j,h)}c+=m}else p.push(o);k+=o.getLength()}return b.endLength=i.reduce(p,function(a,b){return a+b.getLength()},0),b.ops=p,b.compact()},addRandomOp:function(b,c){var d,e,f,g,h,j,k;if(e=c.endLength-1,g=i.random(0,e),j=Math.random(),.5>j)h=this.getRandomLength(),this.insertAt(b,g,this.getRandomString(h));else if(.75>j){if(c.endLength<=1)return b;g=i.random(0,e-1),h=i.random(1,e-g),this.deleteAt(b,g,h)}else k=i.shuffle(i.keys(a.booleanAttributes).concat(i.keys(a.nonBooleanAttributes))),f=i.random(1,k.length),d=k.slice(0,f),h=i.random(1,e-g),this.formatAt(b,g,h,d,c);return b},getRandomDelta:function(a,b){var d,e,g;for(e=new c(a.endLength,a.endLength,[new f(0,a.endLength)]),b||(b=i.random(1,10)),d=g=0;b>=0?b>g:g>b;d=b>=0?++g:--g)this.addRandomOp(e,a);return e}}},d={setDomain:h,getUtils:g},b.exports=d}).call(this)},{"./delta":4,"./insert":6,"./retain":8,lodash:"M4+//f"}],6:[function(a,b){(function(){var c,d,e,f={}.hasOwnProperty,g=function(a,b){function c(){this.constructor=a}for(var d in b)f.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};e=a("lodash"),d=a("./op"),c=function(a){function b(a,b){this.value=a,null==b&&(b={}),this.attributes=e.clone(b)}return g(b,a),b.prototype.getAt=function(a,c){return new b(this.value.substr(a,c),this.attributes)},b.prototype.getLength=function(){return this.value.length},b.prototype.isEqual=function(a){return null!=a&&this.value===a.value&&e.isEqual(this.attributes,a.attributes)},b.prototype.join=function(a){if(e.isEqual(this.attributes,a.attributes))return new b(this.value+second.value,this.attributes);throw Error},b.prototype.split=function(a){var c,d;return c=new b(this.value.substr(0,a),this.attributes),d=new b(this.value.substr(a),this.attributes),[c,d]},b.prototype.toString=function(){return"{"+this.value+", "+this.printAttributes()+"}"},b}(d),b.exports=c}).call(this)},{"./op":7,lodash:"M4+//f"}],7:[function(a,b){(function(){var c,d;d=a("lodash"),c=function(){function a(a){null==a&&(a={}),this.attributes=d.clone(a)}return a.isInsert=function(a){return null!=a&&"string"==typeof a.value},a.isRetain=function(a){return null!=a&&"number"==typeof a.start&&"number"==typeof a.end},a.prototype.addAttributes=function(a){var b,c,d;b={};for(c in a)d=a[c],void 0===this.attributes[c]&&(b[c]=d);return b},a.prototype.attributesMatch=function(a){var b;return b=a.attributes||{},d.isEqual(this.attributes,b)},a.prototype.composeAttributes=function(b){var c;return(c=function(b){return function(e,f){var g,h,i;if(!f)return e;h=d.clone(e);for(g in f)i=f[g],a.isInsert(b)&&null===i?delete h[g]:"undefined"!=typeof i&&(h[g]="object"==typeof h[g]&&"object"==typeof i&&d.all([h[g],f[g]],function(a){return null!==a})?c(h[g],i):i);return h}}(this))(this.attributes,b)},a.prototype.numAttributes=function(){return d.keys(this.attributes).length},a.prototype.printAttributes=function(){return JSON.stringify(this.attributes)},a}(),b.exports=c}).call(this)},{lodash:"M4+//f"}],8:[function(a,b){(function(){var c,d,e,f={}.hasOwnProperty,g=function(a,b){function c(){this.constructor=a}for(var d in b)f.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};e=a("lodash"),c=a("./op"),d=function(a){function b(a,b,c){this.start=a,this.end=b,null==c&&(c={}),this.attributes=e.clone(c)}return g(b,a),b.prototype.getAt=function(a,c){return new b(this.start+a,this.start+a+c,this.attributes)},b.prototype.getLength=function(){return this.end-this.start},b.prototype.isEqual=function(a){return null!=a&&this.start===a.start&&this.end===a.end&&e.isEqual(this.attributes,a.attributes)},b.prototype.split=function(a){var c,d;return c=new b(this.start,this.start+a,this.attributes),d=new b(this.start+a,this.end,this.attributes),[c,d]},b.prototype.toString=function(){return"{{"+this.start+" - "+this.end+"), "+this.printAttributes()+"}"},b}(c),b.exports=d}).call(this)},{"./op":7,lodash:"M4+//f"}],9:[function(a,b){(function(){b.exports={Delta:a("./delta"),DeltaGen:a("./delta_generator"),Op:a("./op"),InsertOp:a("./insert"),RetainOp:a("./retain")}}).call(this)},{"./delta":4,"./delta_generator":5,"./insert":6,"./op":7,"./retain":8}],10:[function(a,b){b.exports=a("./build/tandem-core")},{"./build/tandem-core":9}],11:[function(a,b){var c=function(){function a(a){return{newPos:a.newPos,components:a.components.slice(0)}}function b(a){for(var b=[],c=0;c<a.length;c++)a[c]&&b.push(a[c]);return b}function c(a){var b=a;return b=b.replace(/&/g,"&amp;"),b=b.replace(/</g,"&lt;"),b=b.replace(/>/g,"&gt;"),b=b.replace(/"/g,"&quot;")}var d=function(a){this.ignoreWhitespace=a};d.prototype={diff:function(b,c){if(c===b)return[{value:c}];if(!c)return[{value:b,removed:!0}];if(!b)return[{value:c,added:!0}];c=this.tokenize(c),b=this.tokenize(b);var d=c.length,e=b.length,f=d+e,g=[{newPos:-1,components:[]}],h=this.extractCommon(g[0],c,b,0);if(g[0].newPos+1>=d&&h+1>=e)return g[0].components;for(var i=1;f>=i;i++)for(var j=-1*i;i>=j;j+=2){var k,l=g[j-1],m=g[j+1];h=(m?m.newPos:0)-j,l&&(g[j-1]=void 0);var n=l&&l.newPos+1<d,o=m&&h>=0&&e>h;if(n||o){!n||o&&l.newPos<m.newPos?(k=a(m),this.pushComponent(k.components,b[h],void 0,!0)):(k=a(l),k.newPos++,this.pushComponent(k.components,c[k.newPos],!0,void 0));var h=this.extractCommon(k,c,b,j);if(k.newPos+1>=d&&h+1>=e)return k.components;g[j]=k}else g[j]=void 0}},pushComponent:function(a,b,c,d){var e=a[a.length-1];e&&e.added===c&&e.removed===d?a[a.length-1]={value:this.join(e.value,b),added:c,removed:d}:a.push({value:b,added:c,removed:d})},extractCommon:function(a,b,c,d){for(var e=b.length,f=c.length,g=a.newPos,h=g-d;e>g+1&&f>h+1&&this.equals(b[g+1],c[h+1]);)g++,h++,this.pushComponent(a.components,b[g],void 0,void 0);return a.newPos=g,h},equals:function(a,b){var c=/\S/;return!this.ignoreWhitespace||c.test(a)||c.test(b)?a===b:!0},join:function(a,b){return a+b},tokenize:function(a){return a}};var e=new d,f=new d(!0),g=new d;f.tokenize=g.tokenize=function(a){return b(a.split(/(\s+|\b)/))};var h=new d(!0);h.tokenize=function(a){return b(a.split(/([{}:;,]|\s+)/))};var i=new d;return i.tokenize=function(a){for(var b=[],c=a.split(/^/m),d=0;d<c.length;d++){var e=c[d],f=c[d-1];"\n"==e&&f&&"\r"===f[f.length-1]?b[b.length-1]+="\n":e&&b.push(e)}return b},{Diff:d,diffChars:function(a,b){return e.diff(a,b)},diffWords:function(a,b){return f.diff(a,b)},diffWordsWithSpace:function(a,b){return g.diff(a,b)},diffLines:function(a,b){return i.diff(a,b)},diffCss:function(a,b){return h.diff(a,b)},createPatch:function(a,b,c,d,e){function f(a){return a.map(function(a){return" "+a})}function g(a,b,c){var d=j[j.length-2],e=b===j.length-2,f=b===j.length-3&&(c.added!==d.added||c.removed!==d.removed);/\n$/.test(c.value)||!e&&!f||a.push("\\ No newline at end of file")}var h=[];h.push("Index: "+a),h.push("==================================================================="),h.push("--- "+a+("undefined"==typeof d?"":"	"+d)),h.push("+++ "+a+("undefined"==typeof e?"":"	"+e));var j=i.diff(b,c);j[j.length-1].value||j.pop(),j.push({value:"",lines:[]});for(var k=0,l=0,m=[],n=1,o=1,p=0;p<j.length;p++){var q=j[p],r=q.lines||q.value.replace(/\n$/,"").split("\n");if(q.lines=r,q.added||q.removed){if(!k){var s=j[p-1];k=n,l=o,s&&(m=f(s.lines.slice(-4)),k-=m.length,l-=m.length)}m.push.apply(m,r.map(function(a){return(q.added?"+":"-")+a})),g(m,p,q),q.added?o+=r.length:n+=r.length}else{if(k)if(r.length<=8&&p<j.length-2)m.push.apply(m,f(r));else{var t=Math.min(r.length,4);h.push("@@ -"+k+","+(n-k+t)+" +"+l+","+(o-l+t)+" @@"),h.push.apply(h,m),h.push.apply(h,f(r.slice(0,t))),r.length<=4&&g(h,p,q),k=0,l=0,m=[]}n+=r.length,o+=r.length}}return h.join("\n")+"\n"},applyPatch:function(a,b){for(var c=b.split("\n"),d=[],e=!1,f=!1,g="I"===c[0][0]?4:0;g<c.length;g++)if("@"===c[g][0]){var h=c[g].split(/@@ -(\d+),(\d+) \+(\d+),(\d+) @@/);d.unshift({start:h[3],oldlength:h[2],oldlines:[],newlength:h[4],newlines:[]})}else"+"===c[g][0]?d[0].newlines.push(c[g].substr(1)):"-"===c[g][0]?d[0].oldlines.push(c[g].substr(1)):" "===c[g][0]?(d[0].newlines.push(c[g].substr(1)),d[0].oldlines.push(c[g].substr(1))):"\\"===c[g][0]&&("+"===c[g-1][0]?e=!0:"-"===c[g-1][0]&&(f=!0));for(var i=a.split("\n"),g=d.length-1;g>=0;g--){for(var j=d[g],k=0;k<j.oldlength;k++)if(i[j.start-1+k]!==j.oldlines[k])return!1;Array.prototype.splice.apply(i,[j.start-1,+j.oldlength].concat(j.newlines))}if(e)for(;!i[i.length-1];)i.pop();else f&&i.push("");return i.join("\n")},convertChangesToXML:function(a){for(var b=[],d=0;d<a.length;d++){var e=a[d];e.added?b.push("<ins>"):e.removed&&b.push("<del>"),b.push(c(e.value)),e.added?b.push("</ins>"):e.removed&&b.push("</del>")}return b.join("")},convertChangesToDMP:function(a){for(var b,c=[],d=0;d<a.length;d++)b=a[d],c.push([b.added?1:b.removed?-1:0,b.value]);return c}}}();"undefined"!=typeof b&&(b.exports=c)},{}],12:[function(a,b){b.exports={name:"quilljs",version:"0.17.6",description:"Cross browser rich text editor",author:"Jason Chen <jhchen7@gmail.com>",homepage:"http://quilljs.com",contributors:["Byron Milligan <byronner@gmail.com>","Keegan Poppen <keegan.poppen@gmail.com>"],main:"index.js",dependencies:{eventemitter2:"~0.4.13",lodash:"~2.4.1","tandem-core":"~0.6.2"},devDependencies:{async:"~0.9.0","coffee-script":"~1.8.0",coffeeify:"~0.7.0",glob:"~4.0.4",grunt:"~0.4.3","grunt-browserify":"~2.1.0","grunt-contrib-clean":"~0.6.0","grunt-contrib-coffee":"~0.11.0","grunt-contrib-compress":"~0.10.0","grunt-contrib-concat":"~0.5.0","grunt-contrib-connect":"~0.8.0","grunt-contrib-copy":"~0.5.0","grunt-contrib-stylus":"~0.18.0","grunt-contrib-uglify":"~0.5.0","grunt-karma":"~0.9.0","grunt-lodash":"~0.3.0","grunt-protractor-runner":"~1.1.0","grunt-sauce-connect-launcher":"~0.3.0",harp:"~0.13.0",istanbul:"~0.3.0",jquery:"~2.1.1",karma:"~0.12.0","karma-chrome-launcher":"~0.1.2","karma-coffee-preprocessor":"~0.2.1","karma-coverage":"~0.2.0","karma-firefox-launcher":"~0.1.3","karma-html2js-preprocessor":"~0.1.0","karma-jasmine":"~0.2.0","karma-phantomjs-launcher":"~0.1.2","karma-safari-launcher":"~0.1.1","karma-sauce-launcher":"~0.2.2","load-grunt-tasks":"~0.6.0",protractor:"~1.1.1",stylus:"~0.48.1",watchify:"~0.10.2"},engines:{node:">=0.10"},license:"BSD-3-Clause",repository:{type:"git",url:"https://github.com/quilljs/quill"},bugs:{url:"https://github.com/quilljs/quill/issues"},scripts:{prepublish:"grunt coffee:quill",postpublish:"grunt clean:coffee",test:"grunt test"},keywords:["editor","rich text","wysiwyg"]}},{}],13:[function(a,b){var c,d,e,f,g,h,i,j;j=a("lodash"),i=a("../lib/dom"),d=a("./format"),e=a("./line"),f=a("../lib/linked-list"),g=a("../lib/normalizer"),h=a("tandem-core"),c=function(){function a(a,b){this.root=a,null==b&&(b={}),this.formats={},j.each(b.formats,j.bind(this.addFormat,this)),this.setHTML(this.root.innerHTML)}return a.prototype.addFormat=function(a,b){return j.isObject(b)||(b=d.FORMATS[a]),null!=this.formats[a]&&console.warn("Overwriting format",a,this.formats[a]),this.formats[a]=new d(this.root.ownerDocument,b)},a.prototype.appendLine=function(a){return this.insertLineBefore(a,null)},a.prototype.findLeafAt=function(a,b){var c,d,e;return e=this.findLineAt(a),c=e[0],d=e[1],null!=c?c.findLeafAt(d,b):[null,d]},a.prototype.findLine=function(a){for(var b;null!=a&&null==i.BLOCK_TAGS[a.tagName];)a=a.parentNode;return b=null!=a?this.lineMap[a.id]:null,(null!=b?b.node:void 0)===a?b:null},a.prototype.findLineAt=function(a){var b,c;if(!(this.lines.length>0))return[null,a];if(c=this.toDelta().endLength,a===c)return[this.lines.last,this.lines.last.length];if(a>c)return[null,a-c];for(b=this.lines.first;null!=b;){if(a<b.length)return[b,a];a-=b.length,b=b.next}return[null,a]},a.prototype.insertLineBefore=function(a,b){var c;return c=new e(this,a),null!=b?(i(a.parentNode).isElement()||this.root.insertBefore(a,b.node),this.lines.insertAfter(b.prev,c)):(i(a.parentNode).isElement()||this.root.appendChild(a),this.lines.append(c)),this.lineMap[c.id]=c,c},a.prototype.mergeLines=function(a,b){return b.length>1&&(1===a.length&&i(a.leaves.last.node).remove(),j.each(i(b.node).childNodes(),function(b){return b.tagName!==i.DEFAULT_BREAK_TAG?a.node.appendChild(b):void 0})),this.removeLine(b),a.rebuild()},a.prototype.optimizeLines=function(){return j.each(this.lines.toArray(),function(a){return a.optimize(),!0})},a.prototype.rebuild=function(){var a,b,c;for(b=this.lines.toArray(),a=this.root.firstChild,null!=a&&null!=i.LIST_TAGS[a.tagName]&&(a=a.firstChild),j.each(b,function(b){return function(c){for(var d,e;c.node!==a;){if(c.node.parentNode!==b.root&&(null!=(e=c.node.parentNode)?e.parentNode:void 0)!==b.root)return b.removeLine(c);a=g.normalizeLine(a),d=b.insertLineBefore(a,c),a=i(a).nextLineNode(b.root)}return c.outerHTML!==a.outerHTML&&(c.node=g.normalizeLine(c.node),c.rebuild()),a=i(a).nextLineNode(b.root)}}(this)),c=[];null!=a;)a=g.normalizeLine(a),this.appendLine(a),c.push(a=i(a).nextLineNode(this.root));return c},a.prototype.removeLine=function(a){return null!=a.node.parentNode&&(i.LIST_TAGS[a.node.parentNode.tagName]&&1===a.node.parentNode.childNodes.length?i(a.node.parentNode).remove():i(a.node).remove()),delete this.lineMap[a.id],this.lines.remove(a)},a.prototype.setHTML=function(a){return a=g.stripComments(a),a=g.stripWhitespace(a),this.root.innerHTML=a,this.lines=new f,this.lineMap={},this.rebuild()},a.prototype.splitLine=function(a,b){var c,d,e,f;return b=Math.min(b,a.length-1),f=i(a.node).split(b,!0),c=f[0],d=f[1],a.node=c,a.rebuild(),e=this.insertLineBefore(d,a.next),e.formats=j.clone(a.formats),e.resetContent(),e},a.prototype.toDelta=function(){var a,b;return a=this.lines.toArray(),b=j.flatten(j.map(a,function(a){return j.clone(a.delta.ops)}),!0),new h.Delta(0,b)},a}(),b.exports=c},{"../lib/dom":22,"../lib/linked-list":23,"../lib/normalizer":24,"./format":15,"./line":17,lodash:"M4+//f","tandem-core":10}],14:[function(a,b){var c,d,e,f,g,h,i,j;j=a("lodash"),i=a("../lib/dom"),c=a("./document"),e=a("./line"),f=a("./renderer"),g=a("./selection"),h=a("tandem-core"),d=function(){function a(a,b,d){this.iframeContainer=a,this.quill=b,this.options=null!=d?d:{},this.renderer=new f(this.iframeContainer,this.options),i(this.iframeContainer).on("focus",this.focus.bind(this)),this.root=this.renderer.root,this.doc=new c(this.root,this.options),this.delta=this.doc.toDelta(),this.selection=new g(this.doc,this.renderer.iframe,this.quill),this.timer=setInterval(j.bind(this.checkUpdate,this),this.options.pollInterval),this.quill.on(this.quill.constructor.events.SELECTION_CHANGE,function(a){return function(b){return a.savedRange=b}}(this)),this.options.readOnly||this.enable()}return a.prototype.disable=function(){return this.enable(!1)},a.prototype.enable=function(a){return null==a&&(a=!0),this.root.setAttribute("contenteditable",a)},a.prototype.applyDelta=function(a,b){var c,d;return c=this._update(),c&&(d=c,c=c.transform(a,!0),a=a.transform(d,!1),this.delta=this.doc.toDelta()),a.isIdentity()||(a.startLength!==this.delta.endLength&&console.warn("Trying to apply delta to incorrect doc length",a,this.delta),a=this._trackDelta(function(b){return function(){return a.apply(b._insertAt,b._deleteAt,b._formatAt,b),b.selection.shiftAfter(0,0,j.bind(b.doc.optimizeLines,b.doc))}}(this)),this.delta=this.doc.toDelta(),this.innerHTML=this.root.innerHTML,a&&"silent"!==b&&this.quill.emit(this.quill.constructor.events.TEXT_CHANGE,a,b)),c&&!c.isIdentity()&&"silent"!==b?this.quill.emit(this.quill.constructor.events.TEXT_CHANGE,c,"user"):void 0},a.prototype.checkUpdate=function(a){var b,c;return null==a&&(a="user"),null==this.renderer.iframe.parentNode||null==this.root.parentNode?clearInterval(this.timer):(b=this._update(),b&&(c=this.delta,this.delta=c.compose(b),this.quill.emit(this.quill.constructor.events.TEXT_CHANGE,b,a)),b&&(a="silent"),this.selection.update(a))},a.prototype.focus=function(){return i.isIE(11)&&this.selection.setRange(this.selection.range),i.isIOS()&&this.renderer.iframe.focus(),this.root.focus()},a.prototype.getDelta=function(){return this.delta},a.prototype._deleteAt=function(a,b){return 0>=b?void 0:this.selection.shiftAfter(a,-1*b,function(c){return function(){var d,e,f,g,h,i,j;for(j=c.doc.findLineAt(a),f=j[0],i=j[1],d=f,g=f.length-i<=b&&i>0;null!=d&&b>0;)h=d.next,e=Math.min(d.length-i,b),0===i&&b>=d.length?c.doc.removeLine(d):d.deleteText(i,e),b-=e,d=h,i=0;return g&&f.next?c.doc.mergeLines(f,f.next):void 0}}(this))},a.prototype._formatAt=function(a,b,c,d){return this.selection.shiftAfter(a,0,function(e){return function(){var f,g,h,i,j;for(i=e.doc.findLineAt(a),g=i[0],h=i[1],j=[];null!=g&&b>0;)f=Math.min(b,g.length-h-1),g.formatText(h,f,c,d),b-=f,b>0&&g.format(c,d),b-=1,h=0,j.push(g=g.next);return j}}(this))},a.prototype._insertAt=function(a,b,c){return null==c&&(c={}),this.selection.shiftAfter(a,b.length,function(d){return function(){var e,f,g,h;return b=b.replace(/\r\n/g,"\n").replace(/\r/g,"\n"),f=b.split("\n"),h=d.doc.findLineAt(a),e=h[0],g=h[1],j.each(f,function(a,b){var h;return null==e||e.length<=g?(b<f.length-1||a.length>0)&&(e=d.doc.appendLine(d.root.ownerDocument.createElement(i.DEFAULT_BLOCK_TAG)),g=0,e.insertText(g,a,c),e.format(c),h=null):(e.insertText(g,a,c),b<f.length-1&&(h=d.doc.splitLine(e,g+a.length),j.each(j.defaults({},c,e.formats),function(a,b){return e.format(b,c[b])}),g=0)),e=h})}}(this))},a.prototype._trackDelta=function(a){var b,c,d,e,f,g,h,i,k,l,m,n,o,p,q,r,s,t,u,v;o=null!=(r=this.savedRange)?r.start:void 0,a(),k=this.doc.toDelta();try{l=null!=(s=this.selection.getRange())?s.start:void 0,null!=o&&null!=l&&o<=this.delta.endLength&&l<=k.endLength&&(t=this.delta.split(o),p=t[0],q=t[1],u=k.split(l),m=u[0],n=u[1],e=m.decompose(p),f=n.decompose(q),c=e.merge(f))}catch(w){g=w}return d=k.decompose(this.delta),c&&d?(v=j.map([c,d],function(a){return j.reduce(a.ops,function(a,b){return null!=b.value&&(a+=b.value.length),a},0)}),h=v[0],i=v[1],b=h>h?c:d):b=c||d,b},a.prototype._update=function(){var a;return this.innerHTML===this.root.innerHTML?!1:(a=this._trackDelta(function(a){return function(){return a.selection.preserve(j.bind(a.doc.rebuild,a.doc)),a.selection.shiftAfter(0,0,j.bind(a.doc.optimizeLines,a.doc))}}(this)),this.innerHTML=this.root.innerHTML,a.isIdentity()?!1:a)},a}(),b.exports=d},{"../lib/dom":22,"./document":13,"./line":17,"./renderer":18,"./selection":19,lodash:"M4+//f","tandem-core":10}],15:[function(a,b){var c,d,e;e=a("lodash"),d=a("../lib/dom"),c=function(){function a(a,b){this.document=a,this.config=b}return a.types={LINE:"line"},a.FORMATS={bold:{tag:"B",prepare:"bold"},italic:{tag:"I",prepare:"italic"},underline:{tag:"U",prepare:"underline"},strike:{tag:"S",prepare:"strikeThrough"},color:{style:"color","default":"rgb(0, 0, 0)",prepare:"foreColor"},background:{style:"backgroundColor","default":"rgb(255, 255, 255)",prepare:"backColor"},font:{style:"fontFamily","default":"'Helvetica', 'Arial', sans-serif",prepare:"fontName"},size:{style:"fontSize","default":"13px",prepare:function(a,b){return a.execCommand("fontSize",!1,d.convertFontSize(b))}},link:{tag:"A",attribute:"href"},image:{tag:"IMG",attribute:"src"},align:{type:a.types.LINE,style:"textAlign","default":"left"},bullet:{type:a.types.LINE,exclude:"list",parentTag:"UL",tag:"LI"},list:{type:a.types.LINE,exclude:"bullet",parentTag:"OL",tag:"LI"}},a.prototype.add=function(b,c){var f,g,h,i,j;return c?this.value(b)===c?b:(e.isString(this.config.parentTag)&&(h=this.document.createElement(this.config.parentTag),d(b).wrap(h),b.parentNode.tagName===(null!=(i=b.parentNode.previousSibling)?i.tagName:void 0)&&d(b.parentNode.previousSibling).merge(b.parentNode),b.parentNode.tagName===(null!=(j=b.parentNode.nextSibling)?j.tagName:void 0)&&d(b.parentNode).merge(b.parentNode.nextSibling)),e.isString(this.config.tag)&&(f=this.document.createElement(this.config.tag),null!=d.VOID_TAGS[f.tagName]?(null!=b.parentNode&&d(b).replace(f),b=f):this.isType(a.types.LINE)?b=d(b).switchTag(this.config.tag):(d(b).wrap(f),b=f)),(e.isString(this.config.style)||e.isString(this.config.attribute)||e.isString(this.config["class"]))&&(e.isString(this.config["class"])&&(b=this.remove(b)),d(b).isTextNode()&&(g=this.document.createElement(d.DEFAULT_INLINE_TAG),d(b).wrap(g),b=g),e.isString(this.config.style)&&c!==this.config["default"]&&(b.style[this.config.style]=c),e.isString(this.config.attribute)&&b.setAttribute(this.config.attribute,c),e.isString(this.config["class"])&&d(b).addClass(this.config["class"]+c)),b):this.remove(b)},a.prototype.isType=function(a){return a===this.config.type},a.prototype.match=function(a){var b,c,f,g,h;if(!d(a).isElement())return!1;if(e.isString(this.config.parentTag)&&(null!=(g=a.parentNode)?g.tagName:void 0)!==this.config.parentTag)return!1;if(e.isString(this.config.tag)&&a.tagName!==this.config.tag)return!1;if(e.isString(this.config.style)&&(!a.style[this.config.style]||a.style[this.config.style]===this.config["default"]))return!1;if(e.isString(this.config.attribute)&&!a.hasAttribute(this.config.attribute))return!1;if(e.isString(this.config["class"])){for(h=d(a).classes(),c=0,f=h.length;f>c;c++)if(b=h[c],0===b.indexOf(this.config["class"]))return!0;return!1}return!0},a.prototype.prepare=function(a){return e.isString(this.config.prepare)?this.document.execCommand(this.config.prepare,!1,a):e.isFunction(this.config.prepare)?this.config.prepare(this.document,a):void 0},a.prototype.remove=function(b){var c,f,g,h;if(!this.match(b))return b;if(e.isString(this.config.style)&&(b.style[this.config.style]="",b.getAttribute("style")||b.removeAttribute("style")),e.isString(this.config.attribute)&&b.removeAttribute(this.config.attribute),e.isString(this.config["class"])){for(h=d(b).classes(),f=0,g=h.length;g>f;f++)c=h[f],0===c.indexOf(this.config["class"])&&d(b).removeClass(c);b.getAttribute("class")||b.removeAttribute("class")}return e.isString(this.config.tag)&&(this.isType(a.types.LINE)?(e.isString(this.config.parentTag)&&(null!=b.previousSibling&&d(b).splitAncestors(b.parentNode.parentNode),null!=b.nextSibling&&d(b.nextSibling).splitAncestors(b.parentNode.parentNode)),b=d(b).switchTag(d.DEFAULT_BLOCK_TAG)):(b=d(b).switchTag(d.DEFAULT_INLINE_TAG),null!=d.EMBED_TAGS[this.config.tag]&&d(b).text(d.EMBED_TEXT))),e.isString(this.config.parentTag)&&d(b.parentNode).unwrap(),b.tagName!==d.DEFAULT_INLINE_TAG||b.hasAttributes()||(b=d(b).unwrap()),b},a.prototype.value=function(a){var b,c,f,g;if(!this.match(a))return void 0;if(e.isString(this.config.attribute))return a.getAttribute(this.config.attribute)||void 0;if(e.isString(this.config.style))return a.style[this.config.style]||void 0;if(e.isString(this.config["class"])){for(g=d(a).classes(),c=0,f=g.length;f>c;c++)if(b=g[c],0===b.indexOf(this.config["class"]))return b.slice(this.config["class"].length)}else if(e.isString(this.config.tag))return!0;return void 0},a}(),b.exports=c},{"../lib/dom":22,lodash:"M4+//f"}],16:[function(a,b){var c,d,e,f,g,h={}.hasOwnProperty,i=function(a,b){function c(){this.constructor=a}for(var d in b)h.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};g=a("lodash"),f=a("../lib/dom"),c=a("./format"),e=a("../lib/linked-list"),d=function(a){function b(a,c){this.node=a,this.formats=g.clone(c),this.id=g.uniqueId(b.ID_PREFIX),this.text=f(this.node).text(),this.length=this.text.length}return i(b,a),b.ID_PREFIX="leaf-",b.isLeafNode=function(a){return f(a).isTextNode()||null==a.firstChild},b.prototype.deleteText=function(a,b){var c;if(b>0)return this.text=this.text.slice(0,a)+this.text.slice(a+b),this.length=this.text.length,null!=f.EMBED_TAGS[this.node.tagName]?(c=this.node.ownerDocument.createTextNode(this.text),this.node=f(this.node).replace(c)):f(this.node).text(this.text)},b.prototype.insertText=function(a,b){var c;return this.text=this.text.slice(0,a)+b+this.text.slice(a),f(this.node).isTextNode()?f(this.node).text(this.text):(c=this.node.ownerDocument.createTextNode(b),this.node.tagName===f.DEFAULT_BREAK_TAG?this.node=f(this.node).replace(c):(this.node.appendChild(c),this.node=c)),this.length=this.text.length},b}(e.Node),b.exports=d},{"../lib/dom":22,"../lib/linked-list":23,"./format":15,lodash:"M4+//f"}],17:[function(a,b){var c,d,e,f,g,h,i,j,k={}.hasOwnProperty,l=function(a,b){function c(){this.constructor=a}for(var d in b)k.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};j=a("lodash"),i=a("../lib/dom"),c=a("./format"),d=a("./leaf"),e=a("./line"),f=a("../lib/linked-list"),g=a("../lib/normalizer"),h=a("tandem-core"),e=function(a){function b(a,c){this.doc=a,this.node=c,this.id=j.uniqueId(b.ID_PREFIX),this.formats={},i(this.node).addClass(b.CLASS_NAME),this.rebuild(),b.__super__.constructor.call(this,this.node)}return l(b,a),b.CLASS_NAME="line",b.ID_PREFIX="line-",b.prototype.buildLeaves=function(a,b){return j.each(i(a).childNodes(),function(a){return function(e){var f;return e=g.normalizeNode(e),f=j.clone(b),j.each(a.doc.formats,function(a,b){return!a.isType(c.types.LINE)&&a.match(e)?f[b]=a.value(e):void 0}),d.isLeafNode(e)?a.leaves.append(new d(e,f)):a.buildLeaves(e,f)}}(this))},b.prototype.deleteText=function(a,b){var c,d,e;if(b>0){for(e=this.findLeafAt(a),d=e[0],a=e[1];null!=d&&b>0;)c=Math.min(b,d.length-a),d.deleteText(a,c),b-=c,d=d.next,a=0;return this.rebuild()}},b.prototype.findLeaf=function(a){var b;for(b=this.leaves.first;null!=b;){if(b.node===a)return b;b=b.next}return null},b.prototype.findLeafAt=function(a,b){var c;if(null==b&&(b=!1),a>=this.length-1)return[this.leaves.last,this.leaves.last.length];for(c=this.leaves.first;null!=c;){if(a<c.length||a===c.length&&b)return[c,a];a-=c.length,c=c.next}return[this.leaves.last,a-this.leaves.last.length]},b.prototype.format=function(a,b){var d;return j.isObject(a)?d=a:(d={},d[a]=b),j.each(d,function(a){return function(b,d){var e,f;return f=a.doc.formats[d],f.isType(c.types.LINE)&&(f.config.exclude&&a.formats[f.config.exclude]&&(e=a.doc.formats[f.config.exclude],null!=e&&(a.node=e.remove(a.node),delete a.formats[f.config.exclude])),a.node=f.add(a.node,b)),b?a.formats[d]=b:delete a.formats[d]}}(this)),this.resetContent()},b.prototype.formatText=function(a,b,d,e){var f,g,h,j,k,l,m,n,o,p;if(n=this.findLeafAt(a),g=n[0],h=n[1],f=this.doc.formats[d],null!=f&&f.config.type!==c.types.LINE){for(;null!=g&&b>0;){if(k=g.next,e&&g.formats[d]!==e||!e&&null!=g.formats[d]){if(m=g.node,null!=g.formats[d])for(i(m).splitAncestors(this.node);!f.match(m);)m=m.parentNode;h>0&&(o=i(m).split(h),j=o[0],m=o[1]),g.length>h+b&&(p=i(m).split(b),m=p[0],l=p[1]),f.add(m,e)}b-=g.length-h,h=0,g=k}return this.rebuild()}},b.prototype.insertText=function(a,b,c){var d,e,f,g,h,k,l;return null==c&&(c={}),b.length>0?(k=this.findLeafAt(a),d=k[0],e=k[1],j.isEqual(d.formats,c)?(d.insertText(e,b),this.resetContent()):(g=j.reduce(c,function(a){return function(b,c,d){return a.doc.formats[d].add(b,c)}}(this),this.node.ownerDocument.createTextNode(b)),l=i(d.node).split(e),h=l[0],f=l[1],f&&(f=i(f).splitAncestors(this.node).get()),this.node.insertBefore(g,f),this.rebuild())):void 0},b.prototype.optimize=function(){return g.optimizeLine(this.node),this.rebuild()},b.prototype.rebuild=function(a){return null==a&&(a=!1),!a&&null!=this.outerHTML&&this.outerHTML===this.node.outerHTML&&j.all(this.leaves.toArray(),function(a){return function(b){return i(b.node).isAncestor(a.node)}}(this))?!1:(this.node=g.normalizeNode(this.node),0!==i(this.node).length()||this.node.querySelector(i.DEFAULT_BREAK_TAG)||this.node.appendChild(this.node.ownerDocument.createElement(i.DEFAULT_BREAK_TAG)),this.leaves=new f,this.formats=j.reduce(this.doc.formats,function(a){return function(b,d,e){return d.isType(c.types.LINE)&&(d.match(a.node)?b[e]=d.value(a.node):delete b[e]),b}}(this),this.formats),this.buildLeaves(this.node,{}),this.resetContent(),!0)},b.prototype.resetContent=function(){var a;return this.node.id!==this.id&&(this.node.id=this.id),this.outerHTML=this.node.outerHTML,this.length=1,a=j.map(this.leaves.toArray(),function(a){return function(b){return a.length+=b.length,new h.InsertOp(b.text,b.formats)}}(this)),a.push(new h.InsertOp("\n",this.formats)),this.delta=new h.Delta(0,this.length,a)},b}(f.Node),b.exports=e},{"../lib/dom":22,"../lib/linked-list":23,"../lib/normalizer":24,"./format":15,"./leaf":16,"./line":17,lodash:"M4+//f","tandem-core":10}],18:[function(a,b){var c,d,e,f,g,h,i;i=a("lodash"),g=a("../lib/dom"),e=a("../lib/normalizer"),c={html:{height:"100%",width:"100%"},body:{"box-sizing":"border-box",cursor:"text","font-family":"'Helvetica', 'Arial', sans-serif","font-size":"13px",height:"100%","line-height":"1.42",margin:"0px","overflow-x":"hidden","overflow-y":"auto",padding:"12px 15px"},".editor-container":{height:"100%",outline:"none",position:"relative","tab-size":"4","white-space":"pre-wrap"},".editor-container div":{margin:"0",padding:"0"},".editor-container a":{"text-decoration":"underline"},".editor-container b":{"font-weight":"bold"},".editor-container i":{"font-style":"italic"},".editor-container s":{"text-decoration":"line-through"},".editor-container u":{"text-decoration":"underline"},".editor-container img":{"max-width":"100%"},".editor-container blockquote":{margin:"0 0 0 2em",padding:"0"},".editor-container ol":{margin:"0 0 0 2em",padding:"0","list-style-type":"decimal"},".editor-container ul":{margin:"0 0 0 2em",padding:"0","list-style-type":"disc"}},d=["decimal","lower-alpha","lower-roman"],h=".editor-container ol > li",i.each([1,2,3,4,5,6,7,8,9],function(a){return h+=" > ol",c[h]={"list-style-type":d[a%3]},h+=" > li"
}),g.isIE(10)&&(c[g.DEFAULT_BREAK_TAG]={display:"none"}),f=function(){function a(b,d){var e;this.container=b,this.options=null!=d?d:{},this.container.innerHTML="",e=a.buildFrame(this.container),this.root=e[0],this.iframe=e[1],this.root.setAttribute("id",this.options.id),this.iframe.setAttribute("name",this.options.id),g(this.root).addClass("editor-container"),g(this.container).addClass("ql-container"),g.isIOS()&&g(this.container).styles({overflow:"auto","-webkit-overflow-scrolling":"touch"}),this.addStyles(c),null!=this.options.styles&&i.defer(i.bind(this.addStyles,this,this.options.styles))}return a.objToCss=function(a){return i.map(a,function(a,b){var c;return c=i.map(a,function(a,b){return""+b+": "+a+";"}).join(" "),""+b+" { "+c+" }"}).join("\n")},a.buildFrame=function(a){var b,c,d;return b=a.ownerDocument.createElement("iframe"),g(b).attributes({frameBorder:"0",height:"100%",width:"100%",title:"Quill Rich Text Editor",role:"presentation"}),a.appendChild(b),c=b.contentWindow.document,c.open(),c.write("<!DOCTYPE html>"),c.close(),d=c.createElement("div"),c.body.appendChild(d),[d,b]},a.prototype.addContainer=function(a,b){var c,d;return null==b&&(b=!1),d=b?this.root:null,c=this.root.ownerDocument.createElement("div"),g(c).addClass(a),this.root.parentNode.insertBefore(c,d),c},a.prototype.addStyles=function(b){var c,d;return"object"==typeof b?(d=this.root.ownerDocument.createElement("style"),d.type="text/css",b=a.objToCss(b),d.appendChild(this.root.ownerDocument.createTextNode(b)),this.root.ownerDocument.head.appendChild(d)):"string"==typeof b?(c=this.root.ownerDocument.createElement("link"),g(c).attributes({type:"text/css",rel:"stylesheet",href:b}),this.root.ownerDocument.head.appendChild(c)):void 0},a}(),b.exports=f},{"../lib/dom":22,"../lib/normalizer":24,lodash:"M4+//f"}],19:[function(a,b){var c,d,e,f,g,h;h=a("lodash"),g=a("../lib/dom"),c=a("./leaf"),d=a("../lib/normalizer"),e=a("../lib/range"),f=function(){function a(a,b,c){this.doc=a,this.iframe=b,this.emitter=c,this.document=this.doc.root.ownerDocument,this.focus=!1,this.range=new e(0,0),this.nullDelay=!1,this.update("silent")}return a.prototype.checkFocus=function(){return this.document.activeElement===this.doc.root&&document.activeElement===this.iframe},a.prototype.getRange=function(a){var b,c,d;return null==a&&(a=!1),this.checkFocus()?(c=this._getNativeRange(),null==c?null:(d=this._positionToIndex(c.startContainer,c.startOffset),b=c.startContainer===c.endContainer&&c.startOffset===c.endOffset?d:this._positionToIndex(c.endContainer,c.endOffset),new e(Math.min(d,b),Math.max(d,b)))):a?this.range:null},a.prototype.preserve=function(a){var b,c,d,e,f,g,h,i,j;return d=this._getNativeRange(),null!=d&&this.checkFocus()?(g=this._encodePosition(d.startContainer,d.startOffset),e=g[0],f=g[1],h=this._encodePosition(d.endContainer,d.endOffset),b=h[0],c=h[1],a(),i=this._decodePosition(e,f),e=i[0],f=i[1],j=this._decodePosition(b,c),b=j[0],c=j[1],this._setNativeRange(e,f,b,c)):a()},a.prototype.setRange=function(a,b){var c,d,e,f,g,h,i;return null!=a?(g=this._indexToPosition(a.start),e=g[0],f=g[1],a.isCollapsed()?(h=[e,f],c=h[0],d=h[1]):(i=this._indexToPosition(a.end),c=i[0],d=i[1]),this._setNativeRange(e,f,c,d)):this._setNativeRange(null),this.update(b)},a.prototype.shiftAfter=function(a,b,c){var d;return d=this.getRange(),c(),null!=d?(d.shift(a,b),this.setRange(d,"silent")):void 0},a.prototype.update=function(a){var b,c,d,f;return c=this.checkFocus(),d=this.getRange(!0),b="silent"!==a&&(!e.compare(d,this.range)||c!==this.focus),f=c?d:null,null!==f||"user"!==a||this.nullDelay?(this.nullDelay=!1,this.range=d,this.focus=c,b?this.emitter.emit(this.emitter.constructor.events.SELECTION_CHANGE,f,a):void 0):this.nullDelay=!0},a.prototype._decodePosition=function(a,b){var c;return g(a).isElement()&&(c=h.indexOf(g(a.parentNode).childNodes(),a),b+=c,a=a.parentNode),[a,b]},a.prototype._encodePosition=function(a,b){for(var c;;){if(g(a).isTextNode()||a.tagName===g.DEFAULT_BREAK_TAG||null!=g.EMBED_TAGS[a.tagName])return[a,b];if(b<a.childNodes.length)a=a.childNodes[b],b=0;else{if(0===a.childNodes.length)return null==d.TAGS[a.tagName]&&(c=a.ownerDocument.createTextNode(""),a.appendChild(c),a=c),[a,0];if(a=a.lastChild,!g(a).isElement())return[a,g(a).length()];if(a.tagName===g.DEFAULT_BREAK_TAG||null!=g.EMBED_TAGS[a.tagName])return[a,1];b=a.childNodes.length}}},a.prototype._getNativeSelection=function(){return null!=this.document.getSelection?this.document.getSelection():null},a.prototype._getNativeRange=function(){var a,b;return b=this._getNativeSelection(),(null!=b?b.rangeCount:void 0)>0&&(a=b.getRangeAt(0),g(a.startContainer).isAncestor(this.doc.root,!0)&&(a.startContainer===a.endContainer||g(a.endContainer).isAncestor(this.doc.root,!0)))?a:null},a.prototype._indexToPosition=function(a){var b,c,d;return 0===this.doc.lines.length?[this.doc.root,0]:(d=this.doc.findLeafAt(a,!0),b=d[0],c=d[1],this._decodePosition(b.node,c))},a.prototype._positionToIndex=function(a,b){var c,d,e,f,g,h;if(h=this._encodePosition(a,b),d=h[0],b=h[1],f=this.doc.findLine(d),null==f)return 0;for(c=f.findLeaf(d),g=0;null!=f.prev;)f=f.prev,g+=f.length;if(null==c)return g;for(e=0;null!=c.prev;)c=c.prev,e+=c.length;return g+e+b},a.prototype._setNativeRange=function(a,b,c,d){var e,f;return(f=this._getNativeSelection())?null==a?(f.removeAllRanges(),this.doc.root.blur()):(this.checkFocus()||this.doc.root.focus(),e=this._getNativeRange(),null!=e&&a===e.startContainer&&b===e.startOffset&&c===e.endContainer&&d===e.endOffset||(f.removeAllRanges(),e=this.document.createRange(),e.setStart(a,b),e.setEnd(c,d),f.addRange(e),this.checkFocus())?void 0:this.doc.root.focus()):void 0},a}(),b.exports=f},{"../lib/dom":22,"../lib/normalizer":24,"../lib/range":26,"./leaf":16,lodash:"M4+//f"}],20:[function(a,b){a("./modules/authorship"),a("./modules/image-tooltip"),a("./modules/keyboard"),a("./modules/link-tooltip"),a("./modules/multi-cursor"),a("./modules/paste-manager"),a("./modules/toolbar"),a("./modules/tooltip"),a("./modules/undo-manager"),b.exports=a("./quill")},{"./modules/authorship":27,"./modules/image-tooltip":28,"./modules/keyboard":29,"./modules/link-tooltip":30,"./modules/multi-cursor":31,"./modules/paste-manager":32,"./modules/toolbar":33,"./modules/tooltip":34,"./modules/undo-manager":35,"./quill":36}],21:[function(a,b){var c,d,e,f={}.hasOwnProperty,g=function(a,b){function c(){this.constructor=a}for(var d in b)f.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};e=a("./dom"),d=a("./picker"),c=function(a){function b(){b.__super__.constructor.apply(this,arguments),e(this.container).addClass("ql-color-picker")}return g(b,a),b.prototype.buildItem=function(a,c,d){var e;return e=b.__super__.buildItem.call(this,a,c,d),e.style.backgroundColor=c.value,e},b}(d),b.exports=c},{"./dom":22,"./picker":25}],22:[function(a,b){var c,d,e,f,g,h=function(a,b){return function(){return a.apply(b,arguments)}},i={}.hasOwnProperty,j=function(a,b){function c(){this.constructor=a}for(var d in b)i.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};g=a("lodash"),f=null,d=function(){function a(a){this.node=a,this.trigger=h(this.trigger,this)}return a.prototype.addClass=function(a){return this.hasClass(a)?void 0:(null!=this.node.classList?this.node.classList.add(a):null!=this.node.className&&(this.node.className=(this.node.className+" "+a).trim()),this)},a.prototype.attributes=function(a){var b,c,d,e,f,h;if(a)return g.each(a,function(a){return function(b,c){return a.node.setAttribute(c,b)}}(this)),this;if(null==this.node.attributes)return{};for(a={},h=this.node.attributes,c=e=0,f=h.length;f>e;c=++e)d=h[c],b=this.node.attributes[c],a[b.name]=b.value;return a},a.prototype.child=function(a){var b,c;for(b=this.node.firstChild,c=e(b).length();null!=b&&!(c>a);)a-=c,b=b.nextSibling,c=e(b).length();return null==b&&(b=this.node.lastChild,a=e(b).length()),[b,a]},a.prototype.childNodes=function(){return g.map(this.node.childNodes)},a.prototype.classes=function(){return this.node.className.split(/\s+/)},a.prototype.descendants=function(){return g.map(this.node.getElementsByTagName("*"))},a.prototype.get=function(){return this.node},a.prototype.hasClass=function(a){return null!=this.node.classList?this.node.classList.contains(a):null!=this.node.className?g.indexOf(this.classes(),a)>-1:!1},a.prototype.isAncestor=function(a,b){var c;if(null==b&&(b=!1),a===this.node)return b;for(c=this.node;c;){if(c===a)return!0;c=c.parentNode}return!1},a.prototype.isElement=function(){var a;return(null!=(a=this.node)?a.nodeType:void 0)===e.ELEMENT_NODE},a.prototype.isTextNode=function(){var a;return(null!=(a=this.node)?a.nodeType:void 0)===e.TEXT_NODE},a.prototype.length=function(){var a;return null==this.node?0:(a=this.text().length,this.isElement()&&(a+=this.node.querySelectorAll(g.keys(e.EMBED_TAGS).join(",")).length),a)},a.prototype.merge=function(a){var b;return b=e(a),this.isElement()?(b.moveChildren(this.node),this.normalize()):this.text(this.text()+b.text()),b.remove(),this},a.prototype.moveChildren=function(a){return g.each(this.childNodes(),function(b){return a.appendChild(b)}),this},a.prototype.nextLineNode=function(a){var b;return b=this.node.nextSibling,null==b&&this.node.parentNode!==a&&(b=this.node.parentNode.nextSibling),null!=b&&null!=e.LIST_TAGS[b.tagName]&&(b=b.firstChild),b},a.prototype.normalize=function(){var a,b,c,d;for(b=this.node.firstChild;null!=b;)d=b.nextSibling,a=e(b),null!=d&&e(d).isTextNode()&&(0===a.text().length?a.remove():a.isTextNode()&&(c=d.nextSibling,a.merge(d),d=c)),b=d;return this},a.prototype.on=function(a,b){return this.node.addEventListener(a,function(c){var d,e;return d=!f||"keydown"!==a&&"keyup"!==a?c:f,e=b(d),e||(c.preventDefault(),c.stopPropagation()),e}),this},a.prototype.remove=function(){var a;return null!=(a=this.node.parentNode)&&a.removeChild(this.node),this.node=null,null},a.prototype.removeClass=function(a){var b;if(this.hasClass(a))return null!=this.node.classList?this.node.classList.remove(a):(null!=this.node.className&&(b=this.classes(),b.splice(g.indexOf(b,a),1),this.node.className=b.join(" ")),this)},a.prototype.replace=function(a){return this.node.parentNode.replaceChild(a,this.node),this.node=a,a},a.prototype.splitAncestors=function(a,b){var c,d,f,g;if(null==b&&(b=!1),this.node===a||this.node.parentNode===a)return this;if(null!=this.node.previousSibling||b){for(f=this.node.parentNode,d=f.cloneNode(!1),f.parentNode.insertBefore(d,f.nextSibling),g=this.node;null!=g;)c=g.nextSibling,d.appendChild(g),g=c;return e(d).splitAncestors(a)}return e(this.node.parentNode).splitAncestors(a)},a.prototype.split=function(a,b){var c,d,f,g,h,i,j,k,l,m;if(null==b&&(b=!1),j=this.length(),a=Math.max(0,a),a=Math.min(a,j),!b&&0===a)return[this.node.previousSibling,this.node,!1];if(!b&&a===j)return[this.node,this.node.nextSibling,!1];if(this.node.nodeType===e.TEXT_NODE)return c=this.node.splitText(a),[this.node,c,!0];for(h=this.node,k=this.node.cloneNode(!1),this.node.parentNode.insertBefore(k,h.nextSibling),l=this.child(a),d=l[0],a=l[1],m=e(d).split(a),f=m[0],g=m[1];null!==g;)i=g.nextSibling,k.appendChild(g),g=i;return[h,k,!0]},a.prototype.styles=function(a,b){var c,d;return null==b&&(b=!1),a?(b||(a=g.defaults(a,this.styles())),d=g.map(a,function(a,b){return""+b+": "+a}).join("; ")+";",this.node.setAttribute("style",d),this):(d=this.node.getAttribute("style")||"",c=g.reduce(d.split(";"),function(a,b){var c,d,e;return e=b.split(":"),c=e[0],d=e[1],c&&d&&(c=c.trim(),d=d.trim(),a[c.toLowerCase()]=d),a},{}))},a.prototype.switchTag=function(a){var b,c;return a=a.toUpperCase(),this.node.tagName===a?this:(c=this.node.ownerDocument.createElement(a),b=this.attributes(),null==e.VOID_TAGS[a]&&this.moveChildren(c),this.replace(c),this.attributes(b).get())},a.prototype.text=function(a){if(null!=a){switch(this.node.nodeType){case e.ELEMENT_NODE:this.node.textContent=a;break;case e.TEXT_NODE:this.node.data=a}return this}switch(this.node.nodeType){case e.ELEMENT_NODE:return this.node.tagName===e.DEFAULT_BREAK_TAG?"":null!=e.EMBED_TAGS[this.node.tagName]?e.EMBED_TEXT:null!=this.node.textContent?this.node.textContent:"";case e.TEXT_NODE:return this.node.data||"";default:return""}},a.prototype.textNodes=function(){var a,b,c;for(c=this.node.ownerDocument.createTreeWalker(this.node,NodeFilter.SHOW_TEXT,null,!1),b=[];a=c.nextNode();)b.push(a);return b},a.prototype.toggleClass=function(a,b){return null==b&&(b=!this.hasClass(a)),b?this.addClass(a):this.removeClass(a),this},a.prototype.trigger=function(a,b){var c,d,h;return null==b&&(b={}),g.indexOf(["keypress","keydown","keyup"],a)<0?(c=this.node.ownerDocument.createEvent("Event"),c.initEvent(a,b.bubbles,b.cancelable)):(c=this.node.ownerDocument.createEvent("KeyboardEvent"),f=g.clone(b),f.which=g.isNumber(b.key)?b.key:g.isString(b.key)?b.key.toUpperCase().charCodeAt(0):0,e.isIE(10)?(h=[],b.altKey&&h.push("Alt"),b.ctrlKey&&h.push("Control"),b.metaKey&&h.push("Meta"),b.shiftKey&&h.push("Shift"),c.initKeyboardEvent(a,b.bubbles,b.cancelable,this.window(),0,0,h.join(" "),null,null)):(d=g.isFunction(c.initKeyboardEvent)?"initKeyboardEvent":"initKeyEvent",c[d](a,b.bubbles,b.cancelable,this.window(),b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,0,0))),this.node.dispatchEvent(c),f=null,this},a.prototype.unwrap=function(){var a,b;return b=this.node.firstChild,a=this.node.nextSibling,g.each(this.childNodes(),function(b){return function(c){return b.node.parentNode.insertBefore(c,a)}}(this)),this.remove(),b},a.prototype.window=function(){return this.node.ownerDocument.defaultView||this.node.ownerDocument.parentWindow},a.prototype.wrap=function(a){var b;for(null!=this.node.parentNode&&this.node.parentNode.insertBefore(a,this.node),b=a;null!=b.firstChild;)b=a.firstChild;return b.appendChild(this.node),this},a}(),c=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return j(b,a),b.prototype["default"]=function(){return this.node.querySelector("option[selected]")},b.prototype.option=function(a,b){var c;return null==b&&(b=!0),c=g.isElement(a)?a.value:a,c?this.node.value=c:this.node.selectedIndex=-1,b&&this.trigger("change"),this},b.prototype.reset=function(a){var b;return null==a&&(a=!0),b=this["default"](),null!=b?b.selected=!0:this.node.selectedIndex=0,a&&this.trigger("change"),this},b.prototype.value=function(){return this.node.selectedIndex>-1?this.node.options[this.node.selectedIndex].value:""},b}(d),e=function(a){return"SELECT"===(null!=a?a.tagName:void 0)?new c(a):new d(a)},e=g.extend(e,{ELEMENT_NODE:1,NOBREAK_SPACE:"&nbsp;",TEXT_NODE:3,ZERO_WIDTH_NOBREAK_SPACE:"﻿",DEFAULT_BLOCK_TAG:"DIV",DEFAULT_BREAK_TAG:"BR",DEFAULT_INLINE_TAG:"SPAN",EMBED_TEXT:"!",FONT_SIZES:{"10px":1,"13px":2,"16px":3,"18px":4,"24px":5,"32px":6,"48px":7},KEYS:{BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},BLOCK_TAGS:{ADDRESS:"ADDRESS",ARTICLE:"ARTICLE",ASIDE:"ASIDE",AUDIO:"AUDIO",BLOCKQUOTE:"BLOCKQUOTE",CANVAS:"CANVAS",DD:"DD",DIV:"DIV",DL:"DL",FIGCAPTION:"FIGCAPTION",FIGURE:"FIGURE",FOOTER:"FOOTER",FORM:"FORM",H1:"H1",H2:"H2",H3:"H3",H4:"H4",H5:"H5",H6:"H6",HEADER:"HEADER",HGROUP:"HGROUP",LI:"LI",OL:"OL",OUTPUT:"OUTPUT",P:"P",PRE:"PRE",SECTION:"SECTION",TABLE:"TABLE",TBODY:"TBODY",TD:"TD",TFOOT:"TFOOT",TH:"TH",THEAD:"THEAD",TR:"TR",UL:"UL",VIDEO:"VIDEO"},EMBED_TAGS:{IMG:"IMG"},LINE_TAGS:{DIV:"DIV",LI:"LI"},LIST_TAGS:{OL:"OL",UL:"UL"},VOID_TAGS:{AREA:"AREA",BASE:"BASE",BR:"BR",COL:"COL",COMMAND:"COMMAND",EMBED:"EMBED",HR:"HR",IMG:"IMG",INPUT:"INPUT",KEYGEN:"KEYGEN",LINK:"LINK",META:"META",PARAM:"PARAM",SOURCE:"SOURCE",TRACK:"TRACK",WBR:"WBR"},convertFontSize:function(a){var b,c,d,f;g.isString(a)&&a.indexOf("px")>-1?(d=g.keys(e.FONT_SIZES),f=g.values(e.FONT_SIZES)):(f=g.keys(e.FONT_SIZES),d=g.values(e.FONT_SIZES));for(b in d)if(c=d[b],parseInt(a)<=parseInt(c))return f[b];return g.last(f)},isIE:function(a){var b;return b=document.documentMode,b&&a>=b},isIOS:function(){return/iPhone|iPad/i.test(navigator.userAgent)},isMac:function(){return/Mac/i.test(navigator.platform)}}),b.exports=e},{lodash:"M4+//f"}],23:[function(a,b){var c,d;d=function(){function a(a){this.data=a,this.prev=this.next=null}return a}(),c=function(){function a(){this.length=0,this.first=this.last=null}return a.Node=d,a.prototype.append=function(a){return null!=this.first?(a.next=null,this.last.next=a):this.first=a,a.prev=this.last,this.last=a,this.length+=1},a.prototype.insertAfter=function(a,b){return b.prev=a,null!=a?(b.next=a.next,null!=a.next&&(a.next.prev=b),a.next=b,a===this.last&&(this.last=b)):(b.next=this.first,this.first.prev=b,this.first=b),this.length+=1},a.prototype.remove=function(a){return this.length>1?(null!=a.prev&&(a.prev.next=a.next),null!=a.next&&(a.next.prev=a.prev),a===this.first&&(this.first=a.next),a===this.last&&(this.last=a.prev)):this.first=this.last=null,a.prev=a.next=null,this.length-=1},a.prototype.toArray=function(){var a,b;for(a=[],b=this.first;null!=b;)a.push(b),b=b.next;return a},a}(),b.exports=c},{}],24:[function(a,b){var c,d,e;e=a("lodash"),d=a("./dom"),c={ALIASES:{STRONG:"B",EM:"I",DEL:"S",STRIKE:"S"},ATTRIBUTES:{color:"color",face:"fontFamily",size:"fontSize"},STYLES:{"background-color":"background-color",color:"color","font-family":"font-family","font-size":"font-size","text-align":"text-align"},TAGS:{DIV:"DIV",BR:"BR",SPAN:"SPAN",B:"B",I:"I",S:"S",U:"U",A:"A",IMG:"IMG",OL:"OL",UL:"UL",LI:"LI"},handleBreaks:function(a){var b;return b=e.map(a.querySelectorAll(d.DEFAULT_BREAK_TAG)),e.each(b,function(){return function(b){return null==b.nextSibling||d.isIE(10)&&null==b.previousSibling?void 0:d(b.nextSibling).splitAncestors(a.parentNode)}}(this)),a},normalizeLine:function(a){return a=c.wrapInline(a),a=c.handleBreaks(a),a=c.pullBlocks(a),a=c.normalizeNode(a),c.unwrapText(a),null!=a&&null!=d.LIST_TAGS[a.tagName]&&(a=a.firstChild),a},normalizeNode:function(a){return d(a).isTextNode()?a:(e.each(c.ATTRIBUTES,function(b,c){var e;return a.hasAttribute(c)?(e=a.getAttribute(c),"size"===c&&(e=d.convertFontSize(e)),a.style[b]=e,a.removeAttribute(c)):void 0}),c.whitelistStyles(a),c.whitelistTags(a))},optimizeLine:function(a){var b,c,f,g;for(b=d(a).length(),f=d(a).descendants(),g=[];f.length>0;)c=f.pop(),null!=(null!=c?c.parentNode:void 0)&&null==d.EMBED_TAGS[c.tagName]&&(c.tagName===d.DEFAULT_BREAK_TAG?g.push(0!==b?d(c).remove():void 0):0===d(c).length()?(f.push(c.nextSibling),g.push(d(c).unwrap())):null!=c.previousSibling&&c.tagName===c.previousSibling.tagName&&e.isEqual(d(c).attributes(),d(c.previousSibling).attributes())?(f.push(c.firstChild),g.push(d(c.previousSibling).merge(c))):g.push(void 0));return g},pullBlocks:function(a){var b;for(b=a.firstChild;null!=b;){if(null!=d.BLOCK_TAGS[b.tagName]&&"LI"!==b.tagName){null!=b.previousSibling&&d(b).splitAncestors(a.parentNode),null!=b.nextSibling&&d(b.nextSibling).splitAncestors(a.parentNode),null!=d.LIST_TAGS[b.tagName]&&b.firstChild?(d(b.parentNode).unwrap(),null==a.parentNode&&(a=b)):(d(b).unwrap(),c.pullBlocks(a));break}b=b.nextSibling}return a},stripComments:function(a){return a.replace(/<!--[\s\S]*?-->/g,"")},stripWhitespace:function(a){return a=a.replace(/^\s+/,"").replace(/\s+$/,""),a=a.replace(/^\s+/,"").replace(/\s+$/,""),a=a.replace(/(\r?\n|\r)+/g," "),a=a.replace(/\>\s+\</g,"><")},whitelistStyles:function(a){var b,f;return b=d(a).styles(),f=e.omit(b,function(a,b){return null==c.STYLES[b]}),e.keys(f).length<e.keys(b).length?e.keys(f).length>0?d(a).styles(f,!0):a.removeAttribute("style"):void 0},whitelistTags:function(a){return d(a).isElement()?(null!=c.ALIASES[a.tagName]?a=d(a).switchTag(c.ALIASES[a.tagName]):null==c.TAGS[a.tagName]&&(a=null!=d.BLOCK_TAGS[a.tagName]?d(a).switchTag(d.DEFAULT_BLOCK_TAG):a.hasAttributes()||null==a.firstChild?d(a).switchTag(d.DEFAULT_INLINE_TAG):d(a).unwrap()),a):a},wrapInline:function(a){var b,c;if(null!=d.BLOCK_TAGS[a.tagName])return a;for(b=a.ownerDocument.createElement(d.DEFAULT_BLOCK_TAG),a.parentNode.insertBefore(b,a);null!=a&&null==d.BLOCK_TAGS[a.tagName];)c=a.nextSibling,b.appendChild(a),a=c;return b},unwrapText:function(a){var b;return b=e.map(a.querySelectorAll(d.DEFAULT_INLINE_TAG)),e.each(b,function(a){return a.hasAttributes()?void 0:d(a).unwrap()})}},b.exports=c},{"./dom":22,lodash:"M4+//f"}],25:[function(a,b){var c,d,e,f;f=a("lodash"),e=a("./dom"),c=a("./normalizer"),d=function(){function a(a){this.select=a,this.container=this.select.ownerDocument.createElement("span"),this.buildPicker(),e(this.container).addClass("ql-picker"),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),e(this.select.ownerDocument).on("click",function(a){return function(){return a.close(),!0}}(this)),e(this.label).on("click",function(a){return function(){return f.defer(function(){return e(a.container).toggleClass("ql-expanded")}),!1}}(this)),e(this.select).on("change",function(a){return function(){var b,c;return a.select.selectedIndex>-1&&(b=a.container.querySelectorAll(".ql-picker-item")[a.select.selectedIndex],c=a.select.options[a.select.selectedIndex]),a.selectItem(b,!1),e(a.label).toggleClass("ql-active",c!==e(a.select)["default"]())}}(this))}return a.TEMPLATE='<span class="ql-picker-label"></span><span class="ql-picker-options"></span>',a.prototype.buildItem=function(a,b,c){var d;return d=this.select.ownerDocument.createElement("span"),d.setAttribute("data-value",b.getAttribute("value")),e(d).addClass("ql-picker-item").text(e(b).text()).on("click",function(a){return function(){return a.selectItem(d,!0),a.close()}}(this)),this.select.selectedIndex===c&&this.selectItem(d,!1),d},a.prototype.buildPicker=function(){var b;return f.each(e(this.select).attributes(),function(a){return function(b,c){return a.container.setAttribute(c,b)}}(this)),this.container.innerHTML=c.stripWhitespace(a.TEMPLATE),this.label=this.container.querySelector(".ql-picker-label"),b=this.container.querySelector(".ql-picker-options"),f.each(this.select.options,function(a){return function(c,d){var e;return e=a.buildItem(b,c,d),b.appendChild(e)}}(this))},a.prototype.close=function(){return e(this.container).removeClass("ql-expanded")},a.prototype.selectItem=function(a,b){var c,d;return c=this.container.querySelector(".ql-selected"),null!=c&&e(c).removeClass("ql-selected"),null!=a?(d=a.getAttribute("data-value"),e(a).addClass("ql-selected"),e(this.label).text(e(a).text()),e(this.select).option(d,b),this.label.setAttribute("data-value",d)):(this.label.innerHTML="&nbsp;",this.label.removeAttribute("data-value"))},a}(),b.exports=d},{"./dom":22,"./normalizer":24,lodash:"M4+//f"}],26:[function(a,b){var c,d;d=a("lodash"),c=function(){function a(a,b){this.start=a,this.end=b}return a.compare=function(a,b){return a===b?!0:null==a||null==b?!1:a.equals(b)},a.prototype.equals=function(a){return null==a?!1:this.start===a.start&&this.end===a.end},a.prototype.shift=function(a,b){var c;return c=d.map([this.start,this.end],function(c){return a>c?c:b>=0?c+b:Math.max(a,c+b)}),this.start=c[0],this.end=c[1],c},a.prototype.isCollapsed=function(){return this.start===this.end},a}(),b.exports=c},{lodash:"M4+//f"}],27:[function(a,b){var c,d,e,f,g;d=a("../quill"),g=d.require("lodash"),f=d.require("dom"),e=d.require("tandem-core"),c=function(){function a(a,b){this.quill=a,this.options=b,null!=this.options.button&&this.attachButton(this.options.button),this.options.enabled&&this.enable(),this.quill.addFormat("author",{"class":"author-"}),null!=this.options.authorId&&(this.quill.on(this.quill.constructor.events.PRE_EVENT,function(a){return function(b,c,d){var f,h;return b===a.quill.constructor.events.TEXT_CHANGE&&"user"===d?(g.each(c.ops,function(b){return e.InsertOp.isInsert(b)||g.keys(b.attributes).length>0?b.attributes.author=a.options.authorId:void 0}),h=new e.Delta(c.endLength,[new e.RetainOp(0,c.endLength)]),f={author:a.options.authorId},c.apply(function(a,b){return h=h.compose(e.Delta.makeRetainDelta(c.endLength,a,b.length,f))},function(){},function(a,b){return h=h.compose(e.Delta.makeRetainDelta(c.endLength,a,b,f))}),a.quill.updateContents(h,"silent")):void 0}}(this)),this.addAuthor(this.options.authorId,this.options.color))}return a.DEFAULTS={authorId:null,color:"transparent",enabled:!1},a.prototype.addAuthor=function(a,b){var c;return c={},c[".authorship .author-"+a]={"background-color":""+b},this.quill.addStyles(c)},a.prototype.attachButton=function(a){var b;return b=f(a),b.on("click",function(a){return function(){return b.toggleClass("ql-on"),a.enable($dom.hasClass("ql-on"))}}(this))},a.prototype.enable=function(a){return null==a&&(a=!0),f(this.quill.root).toggleClass("authorship",a)},a.prototype.disable=function(){return this.enable(!1)},a}(),d.registerModule("authorship",c),b.exports=c},{"../quill":36}],28:[function(a,b){var c,d,e,f,g,h,i={}.hasOwnProperty,j=function(a,b){function c(){this.constructor=a}for(var d in b)i.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};d=a("../quill"),f=a("./tooltip"),h=d.require("lodash"),g=d.require("dom"),e=d.require("tandem-core"),c=function(a){function b(a,c){this.quill=a,this.options=c,this.options.styles=h.defaults(this.options.styles,f.DEFAULTS.styles),this.options=h.defaults(this.options,f.DEFAULTS),b.__super__.constructor.call(this,this.quill,this.options),this.preview=this.container.querySelector(".preview"),this.textbox=this.container.querySelector(".input"),g(this.container).addClass("image-tooltip-container"),this.initListeners()}return j(b,a),b.DEFAULTS={styles:{".image-tooltip-container":{margin:"25px",padding:"10px",width:"300px"},".image-tooltip-container:after":{clear:"both",content:'""',display:"table"},".image-tooltip-container .preview":{margin:"10px 0px",position:"relative",border:"1px dashed #000",height:"200px"},".image-tooltip-container .preview span":{display:"inline-block",position:"absolute","text-align":"center",top:"40%",width:"100%"},".image-tooltip-container img":{bottom:"0",left:"0",margin:"auto","max-height":"100%","max-width":"100%",position:"absolute",right:"0",top:"0"},".image-tooltip-container .input":{"box-sizing":"border-box",width:"100%"},".image-tooltip-container a":{border:"1px solid black","box-sizing":"border-box",display:"inline-block","float":"left",padding:"5px","text-align":"center",width:"50%"}},template:'<input class="input" type="textbox"> <div class="preview"> <span>Preview</span> </div> <a href="javascript:;" class="cancel">Cancel</a> <a href="javascript:;" class="insert">Insert</a>'},b.prototype.initListeners=function(){return g(this.container.querySelector(".insert")).on("click",h.bind(this.insertImage,this)),g(this.container.querySelector(".cancel")).on("click",h.bind(this.hide,this)),g(this.textbox).on("input",h.bind(this._preview,this)),this.initTextbox(this.textbox,this.insertImage,this.hide),this.quill.onModuleLoad("toolbar",function(a){return function(b){return b.initFormat("image",h.bind(a._onToolbar,a))}}(this))},b.prototype.insertImage=function(){var a,b;return b=this._normalizeURL(this.textbox.value),null==this.range&&(this.range=new Range(0,0)),this.range&&(this.preview.innerHTML="<span>Preview</span>",this.textbox.value="",a=this.range.end,this.quill.insertEmbed(a,"image",b,"user"),this.quill.setSelection(a+1,a+1)),this.hide()},b.prototype._onToolbar=function(a,b){return b?(this.textbox.value||(this.textbox.value="http://"),this.show(),this.textbox.focus(),h.defer(function(a){return function(){return a.textbox.setSelectionRange(a.textbox.value.length,a.textbox.value.length)}}(this))):this.quill.deleteText(a,"user")},b.prototype._preview=function(){var a;if(this._matchImageURL(this.textbox.value))return"IMG"===this.preview.firstChild.tagName?this.preview.firstChild.setAttribute("src",this.textbox.value):(a=this.preview.ownerDocument.createElement("img"),a.setAttribute("src",this.textbox.value),this.preview.replaceChild(a,this.preview.firstChild))},b.prototype._matchImageURL=function(a){return/^https?:\/\/.+\.(jp?g|gif|png)$/.test(a)},b.prototype._normalizeURL=function(a){return/^https?:\/\//.test(a)||(a="http://"+a),a},b}(f),d.registerModule("image-tooltip",c),b.exports=c},{"../quill":36,"./tooltip":34}],29:[function(a,b){var c,d,e,f,g;d=a("../quill"),g=d.require("lodash"),f=d.require("dom"),e=d.require("tandem-core"),c=function(){function a(a){this.quill=a,this.hotkeys={},this._initListeners(),this._initHotkeys(),this._initDeletes()}return a.hotkeys={BOLD:{key:"B",metaKey:!0},INDENT:{key:f.KEYS.TAB},ITALIC:{key:"I",metaKey:!0},OUTDENT:{key:f.KEYS.TAB,shiftKey:!0},UNDERLINE:{key:"U",metaKey:!0}},a.prototype.addHotkey=function(a,b){var c,d;return a=g.isObject(a)?g.clone(a):{key:a},a.callback=b,c=g.isNumber(a.key)?a.key:a.key.toUpperCase().charCodeAt(0),null==(d=this.hotkeys)[c]&&(d[c]=[]),this.hotkeys[c].push(a)},a.prototype.toggleFormat=function(a,b){var c,d,e;return c=a.isCollapsed()?this.quill.getContents(Math.max(0,a.start-1),a.end):this.quill.getContents(a),e=0===c.ops.length||!g.all(c.ops,function(a){return a.attributes[b]}),a.isCollapsed()?this.quill.prepareFormat(b,e):this.quill.formatText(a,b,e,"user"),d=this.quill.getModule("toolbar"),null!=d?d.setActive(b,e):void 0},a.prototype._initDeletes=function(){return g.each([f.KEYS.DELETE,f.KEYS.BACKSPACE],function(a){return function(b){return a.addHotkey(b,function(){return a.quill.getLength()>1})}}(this))},a.prototype._initHotkeys=function(){return this.addHotkey(a.hotkeys.INDENT,function(a){return function(b){return a._onTab(b,!1),!1}}(this)),this.addHotkey(a.hotkeys.OUTDENT,function(){return function(){return!1}}(this)),g.each(["bold","italic","underline"],function(b){return function(c){return b.addHotkey(a.hotkeys[c.toUpperCase()],function(a){return b.toggleFormat(a,c),!1})}}(this))},a.prototype._initListeners=function(){return f(this.quill.root).on("keydown",function(a){return function(b){var c;return c=!1,g.each(a.hotkeys[b.which],function(d){var e;return e=f.isMac()?b.metaKey:b.metaKey||b.ctrlKey,!!d.metaKey==!!e&&!!d.shiftKey==!!b.shiftKey&&!!d.altKey==!!b.altKey?c=d.callback(a.quill.getSelection())===!1||c:void 0}),!c}}(this))},a.prototype._onTab=function(a,b){var c;return null==b&&(b=!1),c=e.Delta.makeDelta({startLength:this.quill.getLength(),ops:[{start:0,end:a.start},{value:"	"},{start:a.end,end:this.quill.getLength()}]}),this.quill.updateContents(c),this.quill.setSelection(a.start+1,a.start+1)},a}(),d.registerModule("keyboard",c),b.exports=c},{"../quill":36}],30:[function(a,b){var c,d,e,f,g,h={}.hasOwnProperty,i=function(a,b){function c(){this.constructor=a}for(var d in b)h.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};d=a("../quill"),e=a("./tooltip"),g=d.require("lodash"),f=d.require("dom"),c=function(a){function b(a,c){this.quill=a,this.options=c,this.options.styles=g.defaults(this.options.styles,e.DEFAULTS.styles),this.options=g.defaults(this.options,e.DEFAULTS),b.__super__.constructor.call(this,this.quill,this.options),f(this.container).addClass("link-tooltip-container"),this.textbox=this.container.querySelector(".input"),this.link=this.container.querySelector(".url"),this.initListeners()}return i(b,a),b.DEFAULTS={maxLength:50,styles:{".link-tooltip-container":{padding:"5px 10px"},".link-tooltip-container input.input":{width:"170px"},".link-tooltip-container input.input, .link-tooltip-container a.done, .link-tooltip-container.editing a.url, .link-tooltip-container.editing a.change":{display:"none"},".link-tooltip-container.editing input.input, .link-tooltip-container.editing a.done":{display:"inline-block"}},template:'<span class="title">Visit URL:&nbsp;</span> <a href="#" class="url" target="_blank" href="about:blank"></a> <input class="input" type="text"> <span>&nbsp;&#45;&nbsp;</span> <a href="javascript:;" class="change">Change</a> <a href="javascript:;" class="done">Done</a>'},b.prototype.initListeners=function(){return this.quill.on(this.quill.constructor.events.SELECTION_CHANGE,function(a){return function(b){var c;if(null!=b&&b.isCollapsed())return c=a._findAnchor(b),c?(a.setMode(c.href,!1),a.show(c)):(a.range=null,a.hide())
}}(this)),f(this.container.querySelector(".done")).on("click",g.bind(this.saveLink,this)),f(this.container.querySelector(".change")).on("click",function(a){return function(){return a.setMode(a.link.href,!0)}}(this)),this.initTextbox(this.textbox,this.saveLink,this.hide),this.quill.onModuleLoad("toolbar",function(a){return function(b){return b.initFormat("link",g.bind(a._onToolbar,a))}}(this))},b.prototype.saveLink=function(){var a,b;return b=this._normalizeURL(this.textbox.value),null!=this.range&&(this.range.isCollapsed()?(a=this._findAnchor(this.range),null!=a&&(a.href=b)):this.quill.formatText(this.range,"link",b,"user")),this.setMode(b,!1)},b.prototype.setMode=function(a,b){var c;return null==b&&(b=!1),b?(this.textbox.value=a,g.defer(function(b){return function(){return b.textbox.focus(),b.textbox.setSelectionRange(a.length,a.length)}}(this))):(this.link.href=a,c=a.length>this.options.maxLength?a.slice(0,this.options.maxLength)+"...":a,f(this.link).text(c)),f(this.container).toggleClass("editing",b)},b.prototype._findAnchor=function(a){var b,c,d,e;for(e=this.quill.editor.doc.findLeafAt(a.start,!0),b=e[0],d=e[1],null!=b&&(c=b.node);null!=c;){if("A"===c.tagName)return c;c=c.parentNode}return null},b.prototype._onToolbar=function(a,b){var c;if(a&&!a.isCollapsed())return b?(this.setMode(this._suggestURL(a),!0),c=this.quill.editor.selection._getNativeRange(),this.show(c)):this.quill.formatText(a,"link",!1,"user")},b.prototype._normalizeURL=function(a){return/^(https?:\/\/|mailto:)/.test(a)||(a="http://"+a),a},b.prototype._suggestURL=function(a){var b;return b=this.quill.getText(a),this._normalizeURL(b)},b}(e),d.registerModule("link-tooltip",c),b.exports=c},{"../quill":36,"./tooltip":34}],31:[function(a,b){var c,d,e,f,g,h={}.hasOwnProperty,i=function(a,b){function c(){this.constructor=a}for(var d in b)h.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};e=a("../quill"),c=a("eventemitter2").EventEmitter2,g=e.require("lodash"),f=e.require("dom"),d=function(a){function b(a,b){this.quill=a,this.options=b,this.cursors={},this.container=this.quill.addContainer("cursor-container",!0),this.quill.addStyles({".cursor-container":{position:"absolute",left:"0",top:"0","z-index":"1000"},".cursor":{"margin-left":"-1px",position:"absolute"},".cursor-flag":{bottom:"100%",position:"absolute","white-space":"nowrap"},".cursor-name":{display:"inline-block",color:"white",padding:"2px 8px"},".cursor-caret":{height:"100%",position:"absolute",width:"2px"},".cursor.hidden .cursor-flag":{display:"none"},".cursor.top > .cursor-flag":{bottom:"auto",top:"100%"},".cursor.right > .cursor-flag":{right:"-2px"}}),this.quill.on(this.quill.constructor.events.TEXT_CHANGE,g.bind(this._applyDelta,this))}return i(b,a),b.DEFAULTS={template:'<span class="cursor-flag"> <span class="cursor-name"></span> </span> <span class="cursor-caret"></span>',timeout:2500},b.events={CURSOR_ADDED:"cursor-addded",CURSOR_MOVED:"cursor-moved",CURSOR_REMOVED:"cursor-removed"},b.prototype.clearCursors=function(){return g.each(g.keys(this.cursors),g.bind(this.removeCursor,this)),this.cursors={}},b.prototype.moveCursor=function(a,b){var c;return c=this.cursors[a],c.index=b,f(c.elem).removeClass("hidden"),clearTimeout(c.timer),c.timer=setTimeout(function(){return function(){return f(c.elem).addClass("hidden"),c.timer=null}}(this),this.options.timeout),this._updateCursor(c),c},b.prototype.removeCursor=function(a){var c;return c=this.cursors[a],this.emit(b.events.CURSOR_REMOVED,c),null!=c&&c.elem.parentNode.removeChild(c.elem),delete this.cursors[a]},b.prototype.setCursor=function(a,c,d,e){var f;return null==this.cursors[a]&&(this.cursors[a]=f={userId:a,index:c,color:e,elem:this._buildCursor(d,e)},this.emit(b.events.CURSOR_ADDED,f)),g.defer(function(b){return function(){return b.moveCursor(a,c)}}(this)),this.cursors[a]},b.prototype.shiftCursors=function(a,b,c){return null==c&&(c=null),g.each(this.cursors,function(){return function(d){return d&&(d.index>a||d.userId===c)?d.index+=Math.max(b,a-d.index):void 0}}(this))},b.prototype.update=function(){return g.each(this.cursors,function(a){return function(b){return null!=b?(a._updateCursor(b),!0):void 0}}(this))},b.prototype._applyDelta=function(a){return a.apply(function(a){return function(b,c,d){return a.shiftCursors(b,c.length,d.author)}}(this),function(a){return function(b,c){return a.shiftCursors(b,-1*c,null)}}(this),function(a){return function(b){return a.shiftCursors(b,0,null)}}(this)),this.update()},b.prototype._buildCursor=function(a,b){var c,d,e,g;return c=this.container.ownerDocument.createElement("span"),f(c).addClass("cursor"),c.innerHTML=this.options.template,e=c.querySelector(".cursor-flag"),g=c.querySelector(".cursor-name"),f(g).text(a),d=c.querySelector(".cursor-caret"),d.style.backgroundColor=g.style.backgroundColor=b,this.container.appendChild(c),c},b.prototype._moveCursor=function(a,c,d){var e,g,h;return null==d&&(d="left"),h=f(c).window(),e=c.getBoundingClientRect(),a.elem.style.top=e.top+h.pageYOffset+"px",a.elem.style.left=e[d]+"px",a.elem.style.height=e.height+"px",g=a.elem.querySelector(".cursor-flag"),f(a.elem).toggleClass("top",parseInt(a.elem.style.top)<=g.offsetHeight).toggleClass("left",parseInt(a.elem.style.left)<=g.offsetWidth).toggleClass("right",this.quill.root.offsetWidth-parseInt(a.elem.style.left)<=g.offsetWidth),this.emit(b.events.CURSOR_MOVED,a)},b.prototype._updateCursor=function(a){var b,c,d,e,g,h,i,j;return this.quill.editor.checkUpdate(),i=this.quill.editor.doc.findLeafAt(a.index,!0),d=i[0],g=i[1],c=this.container.ownerDocument.createElement("span"),null!=d?(j=f(d.node).split(g),e=j[0],h=j[1],b=j[2],f(c).text(f.ZERO_WIDTH_NOBREAK_SPACE),d.node.parentNode.insertBefore(c,h)):(f(c).text(f.NOBREAK_SPACE),this.quill.root.appendChild(c)),this._moveCursor(a,c),f(c).remove(),b&&f(d.node.parentNode).normalize(),this.quill.editor.selection.update("silent")},b}(c),e.registerModule("multi-cursor",d),b.exports=d},{"../quill":36,eventemitter2:3}],32:[function(a,b){var c,d,e,f,g,h;e=a("../quill"),c=a("../core/document"),h=e.require("lodash"),g=e.require("dom"),f=e.require("tandem-core"),d=function(){function a(a,b){this.quill=a,this.options=b,this.container=this.quill.addContainer("paste-container"),this.container.setAttribute("contenteditable",!0),this.quill.addStyles({".paste-container":{left:"-10000px",position:"absolute",top:"50%"}}),g(this.quill.root).on("paste",h.bind(this._paste,this))}return a.prototype._paste=function(){var a,b,d,e;return b=this.quill.getLength(),d=this.quill.getSelection(),null!=d?(this.container.innerHTML="",a=g(this.quill.root).window(),e=a.scrollY,this.container.focus(),h.defer(function(g){return function(){var h,i,j,k,l,m,n;return i=new c(g.container,g.quill.options),h=i.toDelta(),h=h.compose(f.Delta.makeDeleteDelta(h.endLength,h.endLength-1,1)),j=h.endLength,d.start>0&&h.ops.unshift(new f.RetainOp(0,d.start)),d.end<b&&h.ops.push(new f.RetainOp(d.end,b)),h.endLength+=g.quill.getLength()-(d.end-d.start),h.startLength=b,g.quill.updateContents(h,"user"),g.quill.setSelection(d.start+j,d.start+j),n=g.quill.editor.doc.findLineAt(d.start+j),k=n[0],m=n[1],l=k.node.offsetTop+k.node.offsetHeight,l>e+g.quill.root.offsetHeight&&(e=k.node.offsetTop-g.quill.root.offsetHeight/2),a.scrollTo(0,e)}}(this))):void 0},a}(),e.registerModule("paste-manager",d),b.exports=d},{"../core/document":13,"../quill":36}],33:[function(a,b){var c,d,e,f;c=a("../quill"),f=c.require("lodash"),e=c.require("dom"),d=function(){function a(b,c){if(this.quill=b,this.options=c,null==this.options.container)throw new Error("container required for toolbar",this.options);this.container=f.isString(this.options.container)?document.querySelector(this.options.container):this.options.container,this.inputs={},this.preventUpdate=!1,this.triggering=!1,f.each(this.quill.options.formats,function(b){return function(c){return null==a.formats.TOOLTIP[c]?b.initFormat(c,function(d,e){return b.triggering?void 0:(d.isCollapsed()?b.quill.prepareFormat(c,e):null!=a.formats.LINE[c]?b.quill.formatLine(d,c,e,"user"):b.quill.formatText(d,c,e,"user"),f.defer(function(){return b.updateActive(d),b.setActive(c,e)}))}):void 0}}(this)),this.quill.on(this.quill.constructor.events.SELECTION_CHANGE,f.bind(this.updateActive,this)),e(this.container).addClass("ql-toolbar-container"),e.isIOS()&&e(this.container).addClass("ios"),e.isIE(11)&&e(this.container).on("mousedown",function(){return function(){return!1}}(this))}return a.DEFAULTS={container:null},a.formats={LINE:{align:"align",bullet:"bullet",list:"list"},SELECT:{align:"align",background:"background",color:"color",font:"font",size:"size"},TOGGLE:{bold:"bold",bullet:"bullet",image:"image",italic:"italic",link:"link",list:"list",strike:"strike",underline:"underline"},TOOLTIP:{image:"image",link:"link"}},a.prototype.initFormat=function(b,c){var d,f,g;return g=".ql-"+b,null!=a.formats.SELECT[b]?(g="select"+g,d="change"):d="click",f=this.container.querySelector(g),null!=f?(this.inputs[b]=f,e(f).on(d,function(a){return function(){var b,g;return g="change"===d?e(f).value():!e(f).hasClass("ql-active"),a.preventUpdate=!0,a.quill.focus(),b=a.quill.getSelection(),null!=b&&c(b,g),a.preventUpdate=!1,!0}}(this))):void 0},a.prototype.setActive=function(a,b){var c,d,g;return d=this.inputs[a],null!=d?(c=e(d),"SELECT"===d.tagName?(this.triggering=!0,g=c.value(d),f.isArray(b)&&(b=""),b!==g&&(null!=b?c.option(b):c.reset()),this.triggering=!1):c.toggleClass("ql-active",b||!1)):void 0},a.prototype.updateActive=function(a){var b;if(null!=a&&!this.preventUpdate)return b=this._getActive(a),f.each(this.inputs,function(a){return function(c,d){return a.setActive(d,b[d]),!0}}(this))},a.prototype._getActive=function(a){var b,c;return b=this._getLeafActive(a),c=this._getLineActive(a),f.defaults({},b,c)},a.prototype._getLeafActive=function(a){var b,c,d,e,g;return a.isCollapsed()?(g=this.quill.editor.doc.findLineAt(a.start),d=g[0],e=g[1],b=0===e?this.quill.getContents(a.start,a.end+1):this.quill.getContents(a.start-1,a.end)):b=this.quill.getContents(a),c=f.map(b.ops,"attributes"),this._intersectFormats(c)},a.prototype._getLineActive=function(a){var b,c,d,e,g,h;for(c=[],g=this.quill.editor.doc.findLineAt(a.start),b=g[0],e=g[1],h=this.quill.editor.doc.findLineAt(a.end),d=h[0],e=h[1],null!=d&&d===b&&(d=d.next);null!=b&&b!==d;)c.push(f.clone(b.formats)),b=b.next;return this._intersectFormats(c)},a.prototype._intersectFormats=function(b){return f.reduce(b.slice(1),function(b,c){var d,e,g,h,i;return d=f.keys(b),g=f.keys(c),h=f.intersection(d,g),i=f.difference(d,g),e=f.difference(g,d),f.each(h,function(d){if(null!=a.formats.SELECT[d])if(f.isArray(b[d])){if(f.indexOf(b[d],c[d])<0)return b[d].push(c[d])}else if(b[d]!==c[d])return b[d]=[b[d],c[d]]}),f.each(i,function(c){return null!=a.formats.TOGGLE[c]?delete b[c]:null==a.formats.SELECT[c]||f.isArray(b[c])?void 0:b[c]=[b[c]]}),f.each(e,function(d){return null!=a.formats.SELECT[d]?b[d]=[c[d]]:void 0}),b},b[0]||{})},a}(),c.registerModule("toolbar",d),b.exports=d},{"../quill":36}],34:[function(a,b){var c,d,e,f,g;d=a("../quill"),c=a("../lib/normalizer"),g=d.require("lodash"),f=d.require("dom"),e=function(){function a(b,d){this.quill=b,this.options=d,this.quill.addStyles(this.options.styles),this.container=this.quill.addContainer("tooltip"),this.container.innerHTML=c.stripWhitespace(this.options.template),this.container.style.position="absolute",f(this.quill.root).on("focus",g.bind(this.hide,this)),this.hide(),this.quill.on(this.quill.constructor.events.TEXT_CHANGE,function(b){return function(c,d){return"user"===d&&b.container.style.left!==a.HIDE_MARGIN?(b.range=null,b.hide()):void 0}}(this))}return a.DEFAULTS={offset:10,styles:{".tooltip":{"background-color":"#fff",border:"1px solid #000",top:"0px","white-space":"nowrap","z-index":"2000"},".tooltip a":{cursor:"pointer","text-decoration":"none"}},template:""},a.HIDE_MARGIN="-10000px",a.prototype.initTextbox=function(a,b,c){return f(a).on("keyup",function(a){return function(d){switch(d.which){case f.KEYS.ENTER:return b.call(a);case f.KEYS.ESCAPE:return c.call(a);default:return!0}}}(this))},a.prototype.hide=function(){return this.container.style.left=a.HIDE_MARGIN,this.range&&this.quill.setSelection(this.range),this.range=null},a.prototype.show=function(a){var b,c,d,e,g;return this.range=this.quill.getSelection(),e=this._position(a),b=e[0],c=e[1],g=this._limit(b,c),b=g[0],c=g[1],d=f(this.quill.root).window(),b+=d.pageXOffset,c+=d.pageYOffset,this.container.style.left=""+b+"px",this.container.style.top=""+c+"px",this.container.focus()},a.prototype._getBounds=function(){var a,b,c,d;return a=this.quill.root.getBoundingClientRect(),d=f(this.quill.root).window(),b=d.pageXOffset,c=d.pageYOffset,{left:a.left+b,right:a.right+b,top:a.top+c,bottom:a.bottom+c,width:a.width,height:a.height}},a.prototype._limit=function(a,b){var c,d;return c=this._getBounds(),d=this.container.getBoundingClientRect(),a=Math.min(c.right-d.width,a),a=Math.max(c.left,a),b=Math.min(c.bottom-d.height,b),b=Math.max(c.top,b),[a,b]},a.prototype._position=function(a){var b,c,d,e,f;return e=this.container.getBoundingClientRect(),b=this._getBounds(),null!=a?(d=a.getBoundingClientRect(),c=d.left+d.width/2-e.width/2,f=d.top+d.height+this.options.offset,f+e.height>b.bottom&&(f=d.top-e.height-this.options.offset)):(c=b.left+b.width/2-e.width/2,f=b.top+b.height/2-e.height/2),[c,f]},a}(),d.registerModule("tooltip",e),b.exports=e},{"../lib/normalizer":24,"../quill":36}],35:[function(a,b){var c,d,e,f;c=a("../quill"),f=c.require("lodash"),d=c.require("tandem-core"),e=function(){function a(a,b){this.quill=a,this.options=null!=b?b:{},this.lastRecorded=0,this.emittedDelta=null,this.clear(),this.initListeners()}return a.DEFAULTS={delay:1e3,maxStack:100},a.hotkeys={UNDO:{key:"Z",metaKey:!0},REDO:{key:"Z",metaKey:!0,shiftKey:!0}},a.prototype.initListeners=function(){return this.quill.onModuleLoad("keyboard",function(b){return function(c){return c.addHotkey(a.hotkeys.UNDO,function(){return b.undo(),!1}),c.addHotkey(a.hotkeys.REDO,function(){return b.redo(),!1})}}(this)),this.quill.on(this.quill.constructor.events.TEXT_CHANGE,function(a){return function(b){return b.isEqual(a.emittedDelta)?void(a.emittedDelta=null):(a.record(b,a.oldDelta),a.oldDelta=a.quill.getContents())}}(this))},a.prototype.clear=function(){return this.stack={undo:[],redo:[]},this.oldDelta=this.quill.getContents()},a.prototype.record=function(a,b){var c,d,e,f;if(!a.isIdentity()){this.stack.redo=[];try{if(f=b.invert(a),e=(new Date).getTime(),this.lastRecorded+this.options.delay>e&&this.stack.undo.length>0?(c=this.stack.undo.pop(),f.canCompose(c.undo)&&c.redo.canCompose(a)?(f=f.compose(c.undo),a=c.redo.compose(a)):(this.clear(),this.lastRecorded=e)):this.lastRecorded=e,this.stack.undo.push({redo:a,undo:f}),this.stack.undo.length>this.options.maxStack)return this.stack.undo.unshift()}catch(g){return d=g,this.clear()}}},a.prototype.redo=function(){return this._change("redo","undo")},a.prototype.undo=function(){return this._change("undo","redo")},a.prototype._getLastChangeIndex=function(a){var b;return b=0,a.apply(function(a,c){return b=Math.max(a+c.length,b)},function(a){return b=Math.max(a,b)},function(a,c){return b=Math.max(a+c,b)}),b},a.prototype._change=function(a,b){var c,d;return this.stack[a].length>0?(c=this.stack[a].pop(),this.lastRecorded=0,this.emittedDelta=c[a],this.quill.updateContents(c[a],"user"),this.emittedDelta=null,d=this._getLastChangeIndex(c[a]),this.quill.setSelection(d,d),this.stack[b].push(c)):void 0},a}(),c.registerModule("undo-manager",e),b.exports=e},{"../quill":36}],36:[function(a,b){var c,d,e,f,g,h,i,j,k,l={}.hasOwnProperty,m=function(a,b){function c(){this.constructor=a}for(var d in b)l.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},n=[].slice;k=a("lodash"),j=a("../package.json"),d=a("eventemitter2").EventEmitter2,i=a("./lib/dom"),c=a("./core/editor"),e=a("./core/format"),g=a("./lib/range"),h=a("tandem-core"),f=function(a){function b(a,d){var e,f,g;if(null==d&&(d={}),k.isString(a)&&(a=document.querySelector(a)),null==a)throw new Error("Invalid Quill container");if(f=k.defaults(d.modules||{},b.DEFAULTS.modules),e=a.innerHTML,this.options=k.defaults(d,b.DEFAULTS),this.options.modules=f,this.options.id=this.id="quill-"+(b.editors.length+1),this.options.emitter=this,this.modules={},this.editor=new c(a,this,this.options),this.root=this.editor.doc.root,b.editors.push(this),this.setHTML(e,b.sources.SILENT),g=b.themes[this.options.theme],null==g)throw new Error("Cannot load "+this.options.theme+" theme. Are you sure you registered it?");this.theme=new g(this,this.options),k.each(this.options.modules,function(a){return function(b,c){return a.addModule(c,b)}}(this))}return m(b,a),b.version=j.version,b.editors=[],b.modules=[],b.themes=[],b.DEFAULTS={formats:["align","bold","italic","strike","underline","color","background","font","size","link","image","bullet","list"],modules:{keyboard:!0,"paste-manager":!0,"undo-manager":!0},pollInterval:100,readOnly:!1,theme:"default"},b.events={MODULE_INIT:"module-init",POST_EVENT:"post-event",PRE_EVENT:"pre-event",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},b.sources={API:"api",SILENT:"silent",USER:"user"},b.registerModule=function(a,c){return null!=b.modules[a]&&console.warn("Overwriting "+a+" module"),b.modules[a]=c},b.registerTheme=function(a,c){return null!=b.themes[a]&&console.warn("Overwriting "+a+" theme"),b.themes[a]=c},b.require=function(a){switch(a){case"lodash":return k;case"dom":return i;case"tandem-core":return h;default:return null}},b.prototype.addContainer=function(a,b){return null==b&&(b=!1),this.editor.renderer.addContainer(a,b)},b.prototype.addFormat=function(a,b){return this.editor.doc.addFormat(a,b)},b.prototype.addModule=function(a,c){var d;if(d=b.modules[a],null==d)throw new Error("Cannot load "+a+" module. Are you sure you registered it?");return k.isObject(c)||(c={}),c=k.defaults(c,this.theme.constructor.OPTIONS[a]||{},d.DEFAULTS||{}),this.modules[a]=new d(this,c),this.emit(b.events.MODULE_INIT,a,this.modules[a]),this.modules[a]},b.prototype.addStyles=function(a){return this.editor.renderer.addStyles(a)},b.prototype.deleteText=function(a,c,d){var e,f,g;return null==d&&(d=b.sources.API),g=this._buildParams(a,c,{},d),a=g[0],c=g[1],f=g[2],d=g[3],c>a?(e=h.Delta.makeDeleteDelta(this.getLength(),a,c-a),this.editor.applyDelta(e,d)):void 0},b.prototype.emit=function(){var a,c;return c=arguments[0],a=2<=arguments.length?n.call(arguments,1):[],b.__super__.emit.apply(this,[b.events.PRE_EVENT,c].concat(n.call(a))),b.__super__.emit.apply(this,[c].concat(n.call(a))),b.__super__.emit.apply(this,[b.events.POST_EVENT,c].concat(n.call(a)))},b.prototype.focus=function(){return this.editor.focus()},b.prototype.formatLine=function(a,b,c,d,e){var f,g,h,i,j;return i=this._buildParams(a,b,c,d,e),a=i[0],b=i[1],f=i[2],e=i[3],j=this.editor.doc.findLineAt(b),g=j[0],h=j[1],null!=g&&(b+=g.length-h),this.formatText(a,b,f,e)},b.prototype.formatText=function(a,b,c,d,e){var f,g,i;return i=this._buildParams(a,b,c,d,e),a=i[0],b=i[1],g=i[2],e=i[3],g=k.reduce(g,function(a){return function(b,c,d){var e;return e=a.editor.doc.formats[d],c&&c!==e.config["default"]||(b[d]=null),b}}(this),g),f=h.Delta.makeRetainDelta(this.getLength(),a,b-a,g),this.editor.applyDelta(f,e)},b.prototype.getContents=function(a,b){var c;return null==a&&(a=0),null==b&&(b=null),k.isObject(a)?(b=a.end,a=a.start):null==b&&(b=this.getLength()),c=this.editor.getDelta().getOpsAt(a,b-a),new h.Delta(0,c)},b.prototype.getHTML=function(){return this.root.innerHTML},b.prototype.getLength=function(){return this.editor.getDelta().endLength},b.prototype.getModule=function(a){return this.modules[a]},b.prototype.getSelection=function(){return this.editor.checkUpdate(),this.editor.selection.getRange()},b.prototype.getText=function(a,b){return null==a&&(a=0),null==b&&(b=null),k.pluck(this.getContents(a,b).ops,"value").join("")},b.prototype.insertEmbed=function(a,b,c,d){return this.insertText(a,i.EMBED_TEXT,b,c,d)},b.prototype.insertText=function(a,b,c,d,e){var f,g,i,j;return j=this._buildParams(a,0,c,d,e),a=j[0],g=j[1],i=j[2],e=j[3],b.length>0?(f=h.Delta.makeInsertDelta(this.getLength(),a,b,i),this.editor.applyDelta(f,e)):void 0},b.prototype.onModuleLoad=function(a,c){return this.modules[a]?c(this.modules[a]):this.on(b.events.MODULE_INIT,function(b,d){return b===a?c(d):void 0})},b.prototype.prepareFormat=function(a,c){var d,f;return d=this.editor.doc.formats[a],null!=d&&(f=this.getSelection(),null!=f?f.isCollapsed():void 0)?d.isType(e.types.LINE)?this.formatLine(f,a,c,b.sources.USER):d.prepare(c):void 0},b.prototype.setContents=function(a,c){return null==c&&(c=b.sources.API),k.isArray(a)?a={startLength:this.getLength(),ops:a}:a.startLength=this.getLength(),this.updateContents(a,c)},b.prototype.setHTML=function(a,c){return null==c&&(c=b.sources.API),a||(a="<"+i.DEFAULT_BLOCK_TAG+"><"+i.DEFAULT_BREAK_TAG+"></"+i.DEFAULT_BLOCK_TAG+">"),this.editor.doc.setHTML(a),this.editor.checkUpdate(c)},b.prototype.setSelection=function(a,c,d){var e;return null==d&&(d=b.sources.API),k.isNumber(a)&&k.isNumber(c)?e=new g(a,c):(e=a,d=c||d),this.editor.selection.setRange(e,d)},b.prototype.updateContents=function(a,c){return null==c&&(c=b.sources.API),a=h.Delta.makeDelta(a),this.editor.applyDelta(a,c)},b.prototype._buildParams=function(){var a,c;return c=1<=arguments.length?n.call(arguments,0):[],k.isObject(c[0])&&c.splice(0,1,c[0].start,c[0].end),k.isString(c[2])&&(a={},a[c[2]]=c[3],c.splice(2,2,a)),null==c[3]&&(c[3]=b.sources.API),c},b}(d),f.registerTheme("default",a("./themes/default")),f.registerTheme("snow",a("./themes/snow")),b.exports=f},{"../package.json":12,"./core/editor":14,"./core/format":15,"./lib/dom":22,"./lib/range":26,"./themes/default":37,"./themes/snow":38,eventemitter2:3,lodash:"M4+//f","tandem-core":10}],37:[function(a,b){var c;c=function(){function a(a){this.quill=a,this.editor=this.quill.editor,this.editorContainer=this.editor.root}return a.OPTIONS={},a}(),b.exports=c},{}],38:[function(a,b){var c,d,e,f,g,h,i={}.hasOwnProperty,j=function(a,b){function c(){this.constructor=a}for(var d in b)i.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a};h=a("lodash"),c=a("../../lib/color-picker"),d=a("../default"),g=a("../../lib/dom"),e=a("../../lib/picker"),f=function(a){function b(a){this.quill=a,b.__super__.constructor.apply(this,arguments),this.quill.addStyles(b.STYLES),this.pickers=[],this.quill.on(this.quill.constructor.events.SELECTION_CHANGE,function(a){return function(b){return null!=b?h.invoke(a.pickers,"close"):void 0}}(this)),g(this.quill.root.ownerDocument.body).addClass("snow"),this.quill.onModuleLoad("multi-cursor",h.bind(this.extendMultiCursor,this)),this.quill.onModuleLoad("toolbar",h.bind(this.extendToolbar,this))}return j(b,a),b.COLORS=["#000000","#e60000","#ff9900","#ffff00","#008A00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],b.OPTIONS={"multi-cursor":{template:'<span class="cursor-flag"> <span class="cursor-triangle top"></span> <span class="cursor-name"></span> <span class="cursor-triangle bottom"></span> </span> <span class="cursor-caret"></span>'}},b.STYLES={".snow .image-tooltip-container a":{border:"1px solid #06c"},".snow .image-tooltip-container a.insert":{"background-color":"#06c",color:"#fff"},".snow .cursor-name":{"border-radius":"4px","font-size":"11px","font-family":"Arial","margin-left":"-50%",padding:"4px 10px"},".snow .cursor-triangle":{"border-left":"4px solid transparent","border-right":"4px solid transparent",height:"0px","margin-left":"-3px",width:"0px"},".snow .cursor.left .cursor-name":{"margin-left":"-8px"},".snow .cursor.right .cursor-flag":{right:"auto"},".snow .cursor.right .cursor-name":{"margin-left":"-100%","margin-right":"-8px"},".snow .cursor-triangle.bottom":{"border-top":"4px solid transparent",display:"block","margin-bottom":"-1px"},".snow .cursor-triangle.top":{"border-bottom":"4px solid transparent",display:"none","margin-top":"-1px"},".snow .cursor.top .cursor-triangle.bottom":{display:"none"},".snow .cursor.top .cursor-triangle.top":{display:"block"},".snow a":{color:"#06c"},".snow .tooltip":{border:"1px solid #ccc","box-shadow":"0px 0px 5px #ddd",color:"#222"},".snow .tooltip a":{color:"#06c"},".snow .tooltip .input":{border:"1px solid #ccc",margin:"0px",padding:"5px"},".snow .image-tooltip-container .preview":{"border-color":"#ccc",color:"#ccc"},".snow .link-tooltip-container a, .snow .link-tooltip-container span":{display:"inline-block","line-height":"25px"}},b.prototype.extendMultiCursor=function(a){return a.on(a.constructor.events.CURSOR_ADDED,function(a){var b,c;return b=a.elem.querySelector(".cursor-triangle.bottom"),c=a.elem.querySelector(".cursor-triangle.top"),b.style.borderTopColor=c.style.borderBottomColor=a.color})},b.prototype.extendToolbar=function(a){return h.each(["color","background","font","size","align"],function(b){return function(d){var f,i;if(i=a.container.querySelector(".ql-"+d),null!=i){switch(d){case"font":case"size":case"align":f=new e(i);break;case"color":case"background":f=new c(i),h.each(f.container.querySelectorAll(".ql-picker-item"),function(a,b){return 7>b?g(a).addClass("ql-primary-color"):void 0})}return null!=f?b.pickers.push(f):void 0}}}(this)),h.each(g(a.container).textNodes(),function(a){return 0===g(a).text().trim().length?g(a).remove():void 0})},b}(d),b.exports=f},{"../../lib/color-picker":21,"../../lib/dom":22,"../../lib/picker":25,"../default":37,lodash:"M4+//f"}]},{},[20])(20)});
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
/*! Responsive v3.1.3 | MIT License | responsivebp.com */
!function(t,e,i){"use strict";t.pseudoUnique=function(t){var e=t||8,i="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=n.length;e>o&&(e=o);for(var s=0;e>s;s+=1)i+=n.charAt(Math.floor(Math.random()*o));return i},t.support.rtl=function(){return t("html[dir=rtl]").length?!0:!1}(),t.support.currentGrid=function(){var e=t("<div/>").addClass("grid-state-indicator").prependTo("body");return function(){var t=["xs","s","m","l"],i=parseInt(e.width(),10);return{grid:t[i],index:i,range:t}}}(),t.support.transition=function(){var t=function(){var t=i.createElement("div"),e={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1};return t()}(),t.fn.redraw=function(){var t;return this.each(function(){t=this.offsetWidth})},t.fn.ensureTransitionEnd=function(i){if(!t.support.transition)return this;var n=/\d+(.\d+)/,o=!1,s=t(this),a=function(){o||s.trigger(t.support.transition.end)};return i||(i=1e3*(n.test(s.css("transition-duration"))?s.css("transition-duration").match(n)[0]:0)),s.one(t.support.transition.end,function(){o=!0}),e.setTimeout(a,i),this},t.fn.onTransitionEnd=function(e){var i=t.support.transition;return this.each(function(){if(t.isFunction(e)){var n=t(this).redraw();i?n.one(i.end,e):e()}})},t.support.touchEvents=function(){return"ontouchstart"in e||e.DocumentTouch&&i instanceof e.DocumentTouch}(),t.support.pointerEvents=function(){return e.PointerEvent||e.MSPointerEvent}(),function(){var e=t.support.touchEvents,i=t.support.pointerEvents,n=["pointerdown","MSPointerDown"],o=["pointermove","MSPointerMove"],s=["pointerup","pointerout","pointercancel","pointerleave","MSPointerUp","MSPointerOut","MSPointerCancel","MSPointerLeave"],a="touchstart",r="touchmove",d=["touchend","touchleave","touchcancel"],l="mousedown",h="mousemove",c=["mouseup","mouseleave"],u=function(t){var u,p,f;return e?(u=a+t,p=r+t,f=d.join(t+" ")+t):i?(u=n.join(t+" ")+t,p=o.join(t+" ")+t,f=s.join(t+" ")+t):(u=l+t,p=h+t,f=c.join(t+" ")+t),{start:u,move:p,end:f}},p=function(e,n){var o=n.namespace?"."+n.namespace:"",s="swipestart",a="swipemove",r="swipeend",d=u(o),l=n.data&&n.data.touchAction||"none",h=n.data&&n.data.sensitivity||5;return i&&e.css({"-ms-touch-action":""+l,"touch-action":""+l}),e.each(function(){var e=t(this),i={},n={},o=function(o){var s,r="mousemove"===o.type,d="touchmove"!==o.type&&!r,c=o.originalEvent;if(!(r&&1!==o.which||c.touches&&c.touches.length>1||o.scale&&1!==o.scale)){var u,p=(r?c.pageX:d?c.clientX:c.touches[0].pageX)-i.x,f=(r?c.pageY:d?c.clientY:c.touches[0].pageY)-i.y,g=Math.abs(parseFloat(p/e.width()*100))||100,m=Math.abs(parseFloat(f/e.height()*100))||100;switch(l){case"pan-x":Math.abs(f)>Math.abs(p)&&o.preventDefault(),u=Math.abs(f)>Math.abs(p)&&Math.abs(f)>h&&100>m;break;case"pan-y":Math.abs(p)>Math.abs(f)&&o.preventDefault(),u=Math.abs(p)>Math.abs(f)&&Math.abs(p)>h&&100>g;break;default:o.preventDefault(),u=Math.abs(f)>h||Math.abs(p)>h&&100>g&&100>m}o.stopPropagation(),u&&(s=t.Event(a,{delta:{x:p,y:f}}),e.trigger(s),s.isDefaultPrevented()||(n={x:p,y:f}))}},c=function(){var o,s=+new Date-i.time;if(Math.abs(n.x)>1||Math.abs(n.y)>1){var a=n.x<0?"left":"right",l=n.y<0?"up":"down",h=Math.abs(n.x)>Math.abs(n.y)?a:l;o=t.Event(r,{delta:n,direction:h,duration:s}),e.trigger(o)}e.off(d.move).off(d.end)};e.off(d.start).on(d.start,function(a){var r,l="mousedown"===a.type,h="touchstart"!==a.type&&!l,u=a.originalEvent;(h||l)&&t(a.target).is("img")&&a.preventDefault(),a.stopPropagation(),i={x:l?u.pageX:h?u.clientX:u.touches[0].pageX,y:l?u.pageY:h?u.clientY:u.touches[0].pageY,time:+new Date},r=t.Event(s,{start:i}),e.trigger(r),r.isDefaultPrevented()||(n={x:0,y:0},e.on(d.move,o).on(d.end,c))})})},f=function(e,i){var n=i.namespace?"."+i.namespace:"",o=u(n);return e.each(function(){t(this).css({"-ms-touch-action":"","touch-action":""}).off(o.start).off(o.move).off(o.end)})};t.event.special.swipe={add:function(e){p(t(this),e)},remove:function(e){f(t(this),e)}}}(),t.extend(t.expr[":"],{attrStart:function(e,i,n){var o=!1;return t.each(e.attributes,function(){return 0===this.name.indexOf(n[3])?(o=!0,!1):!0}),o}}),t.buildDataOptions=function(e,i,n,o){return t.each(e.data(),function(t,o){if(0===t.indexOf(n)&&t.length>n.length){var s=n.length,a=t.charAt(s).toLowerCase()+t.substring(s+1);i[a]=o,e.removeData(t)}}),o?e.data(o+"."+n+"Options",i):e.data(n+"Options",i),i},t.debounce=function(t,i,n){var o;return function(){var s=this,a=arguments;e.clearTimeout(o),o=e.setTimeout(function(){o=null,n||t.apply(s,a)},i),n&&!o&&t.apply(s,a)}},function(e){var n=t.Event("domchanged"),o=t(i);t.fn.html=function(){var t=e.apply(this,arguments);return arguments.length&&o.trigger(n),t}}(t.fn.html)}(jQuery,window,document),function(t,e,i){"use strict";if(!e.RESPONSIVE_AUTOSIZE){var n="ready"+i,o=["domchanged"+i,"shown.r.modal"].join(" "),s="resize orientationchange",a="keyup",r="paste",d="cut",l="size"+i,h="sized"+i,c=function(i,n){this.$element=t(i),this.defaults={removeAttributes:null,removeClasses:null},this.options=t.extend({},this.defaults,n),this.$clone=null,this.sizing=null,this.clone(),this.$element.on([a,r,d].join(" "),t.proxy(this.change,this)),t(e).off(s).on(s,t.debounce(t.proxy(this.size,this),50))};c.prototype.clone=function(){var e=this,i=this.options.removeAttributes,n=this.options.removeClasses,o=this.$element,s=function(){e.$clone=e.$element.clone().attr({tabindex:-1,rows:2,"aria-hidden":!0}).removeAttr("id name data-autosize "+i).removeClass(n).removeClass(n).addClass("autosize-clone").insertAfter(o),n&&e.$clone.removeData(n)};t.when(s()).then(this.size())},c.prototype.size=function(){var e,i,n=this,o=this.$element,s=this.$element[0],a=this.$clone,r=a[0],d=0,c=t.Event(l),u=function(){n.sizing=!1,o.trigger(t.Event(h))};for(a.width(o.width()),a.val(o.val()),e=a.height(),o.height(e);r.rows>1&&r.scrollHeight<r.offsetHeight;)r.rows-=1;for(;r.scrollHeight>r.offsetHeight&&d!==r.offsetHeight;)d=s.offsetHeight,r.rows+=1;if(r.rows+=1,i=a.height(),e!==i){if(o.trigger(t.Event(l)),this.sizing||c.isDefaultPrevented())return;this.sizing=!0,o.height(a.height()),o.onTransitionEnd(u)}},c.prototype.change=function(t){var i=this,n=0;("paste"===t.type||"cut"===t.type)&&(n=5),e.setTimeout(function(){i.size()},n)},t.fn.autoSize=function(e){return this.each(function(){var i=t(this),n=i.data("r.autosize"),o="object"==typeof e?e:null;n||i.data("r.autosize",n=new c(this,o)),"size"===e&&n.size()})},t.fn.autoSize.Constructor=c;var u=t.fn.autoSize;t.fn.autoSize.noConflict=function(){return t.fn.autoSize=u,this};var p=function(){t("textarea[data-autosize]").each(function(){var e=t(this),i=e.data("r.autosizeOptions");i||e.addClass("autosize").autoSize(t.buildDataOptions(e,{},"autosize","r"))})},f=t.debounce(p,500);t(document).on([n,o].join(" "),function(t){"ready"===t.type?p():f()}),e.RESPONSIVE_AUTOSIZE=!0}}(jQuery,window,".r.autosize"),function(t,e,i){"use strict";if(!e.RESPONSIVE_CAROUSEL){var n=t.support.transition,o=t.support.rtl,s="mouseenter",a="mouseleave",r="keydown",d="click",l="ready"+i,h=["domchanged"+i,"shown.r.modal"].join(" "),c="slide"+i,u="slid"+i,p={SPACE:32,LEFT:37,RIGHT:39},f=function(i,n){this.$element=t(i),this.defaults={interval:0,mode:"slide",pause:"hover",wrap:!0,keyboard:!0,touch:!0,lazyImages:!0,lazyOnDemand:!0,nextTrigger:null,nextHint:"Next ("+(o?"Left":"Right")+" Arrow)",previousTrigger:null,previousHint:"Previous ("+(o?"Right":"Left")+" Arrow)",indicators:null},this.options=t.extend({},this.defaults,n),this.paused=null,this.interval=null,this.sliding=null,this.$items=null,this.translationDuration=null,this.$nextTrigger=this.options.nextTrigger?t(this.options.nextTrigger):this.$element.find(".carousel-control.forward"),this.$previousTrigger=this.options.previousTrigger?t(this.options.previousTrigger):this.$element.find(".carousel-control.back"),this.$indicators=this.options.indicators?t(this.options.indicators):this.$element.find("ol > li"),this.id=this.$element.attr("id")||"carousel-"+t.pseudoUnique();var l=this,h=this.activeindex();this.options.wrap||0===h&&this.$previousTrigger.hide().attr("aria-hidden",!0),1===this.$items.length&&(this.$previousTrigger.hide().attr("aria-hidden",!0),this.$nextTrigger.hide().attr("aria-hidden",!0)),"fade"===this.options.mode&&this.$element.addClass("carousel-fade"),this.options.lazyImages&&!this.options.lazyOnDemand&&t(e).on("load",t.proxy(this.lazyimages),this),this.$element.attr({role:"listbox",id:this.id}),this.$element.children("figure").each(function(){var e=t(this),i=e.hasClass("carousel-active");e.attr({role:"option","aria-selected":i,tabindex:i?0:-1})});var c=this.$nextTrigger.add(this.$previousTrigger);c.each(function(){var e=t(this).attr({tabindex:0,"aria-controls":l.id});e.attr(e.is("button")?{type:"button"}:{role:"button"}),e.find(".visuallyhidden").length||t("<span/>").addClass("visuallyhidden").html(e.is(l.$nextTrigger.selector)?l.options.nextHint:l.options.previousHint).appendTo(e)}),this.$indicators.attr({role:"button","aria-controls":l.id}),"hover"===this.options.pause&&(t.support.touchEvents||t.support.pointerEvents||this.$element.on(s,t.proxy(this.pause,this)).on(a,t.proxy(this.cycle,this))),this.options.touch&&this.$element.on("swipe.carousel",{touchAction:"pan-y"},!0).on("swipemove.carousel",t.proxy(this.swipemove,this)).on("swipeend.carousel",t.proxy(this.swipeend,this)),this.options.keyboard&&this.$element.on(r,t.proxy(this.keydown,this)),t(document).on(d,"[aria-controls="+this.id+"]",t.proxy(this.click,this))};f.prototype.activeindex=function(){var t=this.$element.find(".carousel-active");return this.$items=t.parent().children("figure"),this.$items.index(t)},f.prototype.cycle=function(i){return i||(this.paused=!1),this.interval&&e.clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=e.setInterval(t.proxy(this.next,this),this.options.interval)),this},f.prototype.to=function(e){var i=this.activeindex(),n=this;return e>this.$items.length-1||0>e?!1:this.sliding?this.$element.one(u,function(){n.to(e)}):i===e?this.pause().cycle():this.slide(e>i?"next":"prev",t(this.$items[e]))},f.prototype.pause=function(i){return i||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=e.clearInterval(this.interval),this},f.prototype.next=function(){return this.sliding?!1:this.slide("next")},f.prototype.prev=function(){return this.sliding?!1:this.slide("prev")},f.prototype.slide=function(e,i){var n,o,s=this.$element.children("figure.carousel-active"),a=i||s[e]("figure"),r=this.interval,d="next"===e,l=d?"left":"right",h=d?"first":"last",p=this;if(r&&this.pause(),!a.length){if(!this.options.wrap)return!1;a=this.$element.children("figure")[h]()}if(a.hasClass("carousel-active"))return this.sliding=!1;if(n=t.Event(c,{relatedTarget:a[0],direction:l}),this.$element.trigger(n),n.isDefaultPrevented())return!1;this.options.lazyImages&&this.options.lazyOnDemand&&this.lazyimages.call(a),this.sliding=!0,r&&this.pause(),this.$element.one(u,function(){if(!p.options.wrap){var t=p.activeindex();p.$items&&t===p.$items.length-1?(p.$nextTrigger.hide().attr("aria-hidden",!0),p.$previousTrigger.show().removeAttr("aria-hidden")):p.$items&&0===t?(p.$previousTrigger.hide().attr("aria-hidden",!0),p.$nextTrigger.show().removeAttr("aria-hidden")):(p.$nextTrigger.show().removeAttr("aria-hidden"),p.$previousTrigger.show().removeAttr("aria-hidden"))}p.$indicators.removeClass("active").eq(p.activeindex()).addClass("active")});var f=function(){p.$items&&p.$items.removeClass("swiping").css({"transition-duration":""}),s.removeClass(["carousel-active",l].join(" ")).attr({"aria-selected":!1,tabIndex:-1}),a.removeClass([e,l].join(" ")).addClass("carousel-active").attr({"aria-selected":!0,tabIndex:0}),p.sliding=!1,o=t.Event(u,{relatedTarget:a[0],direction:l}),p.$element.trigger(o)};return a.addClass(e).redraw(),s.addClass(l),a.addClass(l),this.$items&&this.$items.each(function(){t(this).removeClass("swipe swipe-next").css({left:"",right:"",opacity:""})}),s.onTransitionEnd(f).ensureTransitionEnd(),r&&this.cycle(),this},f.prototype.keydown=function(t){var e=t&&t.which;if(e===p.LEFT||e===p.RIGHT)switch(t.preventDefault(),t.stopPropagation(),e){case p.LEFT:o?(this.next(),this.$nextTrigger.focus()):(this.prev(),this.$previousTrigger.focus());break;case p.RIGHT:o?(this.prev(),this.$previousTrigger.focus()):(this.next(),this.$nextTrigger.focus())}},f.prototype.click=function(e){if(e){e.preventDefault(),e.stopPropagation();var i=t(e.target),n=i.is(this.$indicators.selector);n?this.to(i.index()):i.is(this.$nextTrigger.selector)?this.next():i.is(this.$previousTrigger.selector)&&this.prev()}},f.prototype.swipemove=function(t){if(!this.sliding){this.pause();var e=t.delta.x<0,i=e?o?"prev":"next":o?"next":"prev",n=e?o?"last":"first":o?"first":"last",s=this.activeindex(),a=this.$items.eq(s),r=a[i]("figure");if(1!==this.$items.length){if(!r.length){if(!this.options.wrap)return;r=this.$element.children("figure")[n]()}if(this.$items.not(a).not(r).removeClass("swipe swiping swipe-next").css({left:"",right:"",opacity:""}),!r.hasClass("carousel-active")){this.options.lazyImages&&this.options.lazyOnDemand&&this.lazyimages.call(r);var d=a.width(),l=parseFloat(t.delta.x/d*100),h=e?100:-100;o&&(l*=-1),this.$element.addClass("no-transition"),"slide"===this.options.mode?o?(a.addClass("swiping").css({right:l+"%"}),r.addClass("swipe swipe-next").css({right:l-h+"%"})):(a.addClass("swiping").css({left:l+"%"}),r.addClass("swipe swipe-next").css({left:l+h+"%"})):(a.addClass("swipe").css({opacity:1-Math.abs(l/100)}),r.addClass("swipe swipe-next"))}}}},f.prototype.swipeend=function(e){if(!this.sliding&&this.$element.hasClass("no-transition")){var i=e.direction,o="next";if("right"===i&&(o="prev"),this.$element.removeClass("no-transition"),n){var s=this.activeindex(),a=this.$items.eq(s);this.translationDuration||(this.translationDuration=parseFloat(a.css("transition-duration")));var r=a.width(),d=Math.abs(e.delta.x)/r*100,l=e.duration/1e3*100/d,h=(100-d)/100*Math.min(this.translationDuration,l);this.$items.each(function(){t(this).css({"transition-duration":h+"s"})})}this.cycle(),this.slide(o,t(this.$items.filter(".swipe-next")))}},f.prototype.lazyimages=function(){this.data("lazyLoaded")||(this.find("img[data-src]").each(function(){0===this.src.length&&(this.src=this.getAttribute("data-src"))}),this.data("lazyLoaded",!0))},t.fn.carousel=function(e){return this.each(function(){var i=t(this),n=i.data("r.carousel"),o="object"==typeof e?e:null;n||i.data("r.carousel",n=new f(this,o)),"number"==typeof e?n.to(e):"string"==typeof e&&/(cycle|pause|next|prev)/.test(e)||(e=o.slide)?n[e]():n.options.interval&&n.pause().cycle()})},t.fn.carousel.Constructor=f;var g=t.fn.carousel;t.fn.carousel.noConflict=function(){return t.fn.carousel=g,this};var m=function(){t(".carousel").each(function(){var e=t(this),i=e.data("r.carouselOptions");i||e.carousel(t.buildDataOptions(e,{},"carousel","r"))})},v=t.debounce(m,500);t(document).on([l,h].join(" "),function(t){"ready"===t.type?m():v()}),e.RESPONSIVE_CAROUSEL=!0}}(jQuery,window,".r.carousel"),function(t,e,i){"use strict";if(!e.RESPONSIVE_CONDITIONAL){var n="ready"+i,o=["domchanged"+i,"shown.r.modal"].join(" "),s=["resize","orientationchange"].join(".conditional "),a="loaded"+i,r="error"+i,d=function(i,n){this.$element=t(i),this.defaults={xs:null,s:null,m:null,l:null,fallback:null,errorHint:"<p>An error has occured.</p>"},this.cache={},this.options=t.extend({},this.defaults,n),this.currentGrid=null,this.currentTarget=null,this.sizing=null,t(e).on(s,t.debounce(t.proxy(this.resize,this),50)),this.resize()};d.prototype.resize=function(){var e=t.support.currentGrid(),i=e.grid,n=e.range;if(!this.options.fallback)for(var o in n)if(n.hasOwnProperty(o)){var s=n[o];this.options[s]||(this.options[s]="fallback",this.cache[s]=this.$element.html())}if(this.currentGrid!==i){this.currentGrid=i;var d=this,l=this.options[i]||this.options.fallback;l&&l!==this.currentTarget&&(this.currentTarget=l,this.cache[this.currentGrid]?(this.$element.empty().html(this.cache[this.currentGrid]),this.$element.trigger(t.Event(a,{relatedTarget:d.$element[0],loadTarget:l,grid:this.currentGrid}))):this.$element.empty().load(l,null,function(e,n){if("error"===n)return d.$element.trigger(t.Event(r,{relatedTarget:d.$element[0],loadTarget:l,grid:d.currentGrid})),void d.$element.html(d.options.errorHint);var o,s=l.indexOf(" ");s>=0&&(o=t.trim(l.slice(s))),d.cache[i]=o?jQuery("<div>").append(t.parseHTML(e)).find(o).wrap("<div>").parent().html():e,d.$element.trigger(t.Event(a,{relatedTarget:d.$element[0],loadTarget:l,grid:d.currentGrid}))}))}},t.fn.conditional=function(e){return this.each(function(){var i=t(this),n=i.data("r.conditional"),o="object"==typeof e?e:null;n||i.data("r.conditional",n=new d(this,o)),"resize"===e&&n.resize()})},t.fn.conditional.Constructor=d;var l=t.fn.conditional;t.fn.conditional.noConflict=function(){return t.fn.conditional=l,this};var h=function(){t(":attrStart(data-conditional)").each(function(){var e=t(this),i=e.data("r.conditionalOptions");i||e.conditional(t.buildDataOptions(e,{},"conditional","r"))})},c=t.debounce(h,500);t(document).on([n,o].join(" "),function(t){"ready"===t.type?h():c()}),e.RESPONSIVE_CONDITIONAL=!0}}(jQuery,window,".r.conditional"),function(t,e,i){"use strict";if(!e.RESPONSIVE_DISMISS){var n="ready"+i,o=["domchanged"+i,"shown.r.modal"].join(" "),s="click",a="dismiss"+i,r="dismissed"+i,d=function(e,i){this.defaults={closeHint:"Click to close"},this.options=t.extend({},this.defaults,i),this.$element=t(e).attr({type:"button"}),this.$target=this.$element.closest(i.target),this.dismissing=null,this.$element.is("button")&&t(e).attr({type:"button"}),this.$target.hasClass("alert")&&this.$target.attr({role:"alert"}),this.$element.find(".visuallyhidden").length||t("<span/>").addClass("visuallyhidden").html(this.options.closeHint).appendTo(this.$element),this.$element.on(s,t.proxy(this.click,this))};d.prototype.close=function(){var e=t.Event(a),i=this.$target,n=this,o=function(){n.dismissing=!1,i.addClass("hidden").attr({"aria-hidden":!0,tabindex:-1}),n.$element.trigger(t.Event(r))};this.$element.trigger(e),this.dismissing||e.isDefaultPrevented()||(this.dismissing=!0,i.addClass("fade-in fade-out").redraw().removeClass("fade-in"),this.$target.onTransitionEnd(o))},d.prototype.click=function(t){t.preventDefault(),this.close()},t.fn.dismiss=function(e){return this.each(function(){var i=t(this),n=i.data("dismiss");n||i.data("dismiss",n=new d(this,e)),"close"===e&&n.close()})},t.fn.dismiss.Constructor=d;var l=t.fn.dismiss;t.fn.dismiss.noConflict=function(){return t.fn.dismiss=l,this};var h=function(){t("button[data-dismiss-target]").each(function(){var e=t(this),i=e.data("r.dismissOptions");i||e.dismiss(t.buildDataOptions(e,{},"dismiss","r"))})},c=t.debounce(h,500);t(document).on([n,o].join(" "),function(t){"ready"===t.type?h():c()}),e.RESPONSIVE_DISMISS=!0}}(jQuery,window,".r.dismiss"),function(t,e,i){"use strict";if(!e.RESPONSIVE_DROPDOWN){var n=e.getComputedStyle&&t.support.transition,o=t.support.rtl,s="ready"+i,a=["domchanged"+i,"shown.r.modal"].join(" "),r="click",d="keydown",l="show"+i,h="shown"+i,c="hide"+i,u="hidden"+i,p={SPACE:32,LEFT:37,RIGHT:39},f=function(e,i){this.$element=t(e),this.$target=t(i.target),this.defaults={dimension:"height"},this.options=t.extend({},this.defaults,i),this.$parent=null,this.transitioning=null,this.endSize=null,this.options.parent&&(this.$parent=this.$target.closest(this.options.parent)),this.$parent?this.$parent.attr({role:"tablist","aria-multiselectable":"true"}).find("div:not(.collapse,.accordion-body)").attr("role","presentation"):t(".accordion").find("div:not(.collapse,.accordion-body)").addBack().attr("role","presentation");var n=t("[href='"+this.options.target+"'], [data-dropdown-target='"+this.options.target+"']"),o=n.attr("id")||"dropdown-"+t.pseudoUnique(),s=this.$target.attr("id")||"dropdown-"+t.pseudoUnique(),a=!this.$target.hasClass("collapse");n.attr({id:o,role:"tab","aria-controls":s,"aria-selected":a,"aria-expanded":a,tabindex:0}),this.$target.attr({id:s,role:"tabpanel","aria-labelledby":o,"aria-hidden":!a,tabindex:a?0:-1}),this.$element.on(r,t.proxy(this.click,this)),this.$element.on(d,t.proxy(this.keydown,this))};f.prototype.show=function(){if(!this.transitioning&&!this.$target.hasClass("expand")){var i=this,o=this.options.dimension,s=[];this.$parent&&(s=this.$parent.find(" > [role=presentation] > [role=presentation]").children("[role=tab]"),s=t.grep(s,function(e){var n=t(e).data("r.dropdown"),o=n&&n.$target;return o&&o.hasClass("dropdown-group")&&!o.hasClass("collapse")&&n.$parent&&n.$parent[0]===i.$parent[0]})),this.$target[o](0),n&&(this.$target[o]("auto"),this.endSize=e.getComputedStyle(this.$target[0])[o],this.$target[o](0).redraw()),this.$target[o](this.endSize||""),this.transition("removeClass",t.Event(l),h),s&&s.length&&t.each(s,function(){t(this).dropdown("hide")})}},f.prototype.hide=function(){if(!this.transitioning&&!this.$target.hasClass("collapse")){var i,o=this.options.dimension;n&&(i=e.getComputedStyle(this.$target[0])[o],this.$target[o](i).redraw()),this.$target.removeClass("expand"),this.$target[o](0),this.transition("addClass",t.Event(c),u)}},f.prototype.toggle=function(){this[this.$target.hasClass("collapse")?"show":"hide"]()},f.prototype.transition=function(e,i,n){var o=this,s="removeClass"===e,a=function(){var e=t.Event(n);o.$target.removeClass("trans")[o.options.dimension](""),o.transitioning=!1,o.$target.attr({"aria-hidden":!s,tabindex:s?0:-1});var i=t("#"+o.$target.attr("aria-labelledby")).attr({"aria-selected":s,"aria-expanded":s});s&&i.focus(),o.$target.find("[tabindex]:not(.collapse)").attr({"aria-hidden":!s,tabindex:s?0:-1}),o.$element.trigger(e)};this.transitioning||i.isDefaultPrevented()||(this.transitioning=!0,this.$element.trigger(i),this.$target[e]("collapse"),this.$target["show"===i.type?"addClass":"removeClass"]("expand trans"),this.$target.onTransitionEnd(a))},f.prototype.click=function(t){t.preventDefault(),t.stopPropagation(),this.toggle()},f.prototype.keydown=function(e){var i=e.which;if(i===p.SPACE||i===p.LEFT||i===p.RIGHT){e.preventDefault(),e.stopPropagation();var n=t(e.target),s=n.closest(this.options.parent?"[role=tablist]":".accordion"),a=s.find(" > [role=presentation] > [role=presentation]").children("[role=tab]"),r=a.index(a.filter(":focus")),d=a.length;if(i===p.SPACE)return void t(a.eq(r)).data("r.dropdown").toggle();i===p.LEFT?o?r+=1:r-=1:i===p.RIGHT&&(o?r-=1:r+=1),r===d&&(r=0),0>r&&(r=d-1),t(a.eq(r)).data("r.dropdown").show()}},t.fn.dropdown=function(e){return this.each(function(){var i=t(this),n=i.data("r.dropdown"),o="object"==typeof e?e:null;n||i.data("r.dropdown",n=new f(this,o)),"string"==typeof e&&/(show|hide|toggle)/.test(e)&&n[e]()})},t.fn.dropdown.Constructor=f;var g=t.fn.dropdown;t.fn.dropdown.noConflict=function(){return t.fn.dropdown=g,this};var m=function(){t(":attrStart(data-dropdown)").each(function(){var e=t(this),i=e.data("r.dropdownOptions");i||e.dropdown(t.buildDataOptions(e,{},"dropdown","r"))})},v=t.debounce(m,500);t(document).on([s,a].join(" "),function(t){"ready"===t.type?m():v()}),e.RESPONSIVE_DROPDOWN=!0}}(jQuery,window,".r.dropdown"),function(t,e,i){"use strict";if(!e.RESPONSIVE_MODAL){var n=t(e),o=t("html"),s=t("body"),a=t("<div/>").attr({role:"document"}).addClass("modal-overlay modal-loader fade-out"),r=t("<div/>").addClass("modal fade-out").appendTo(a),d=t("<div/>").addClass("modal-header fade-out"),l=t("<div/>").addClass("modal-footer fade-out"),h=t("<button/>").attr({type:"button"}).addClass("modal-close fade-out"),c=t("<button/>").attr({type:"button"}).addClass("modal-direction prev fade-out"),u=t("<button/>").attr({type:"button"}).addClass("modal-direction next fade-out"),p=t("<div/>").addClass("modal-placeholder"),f="ready"+i,g="domchanged"+i,m=["resize","orientationchange"].join(".modal "),v="click",y="keydown",w="focusin",b="show"+i,$="shown"+i,x="hide"+i,C="hidden"+i,T="error"+i,E=t.support.rtl,S=t.support.transition,P=t.support.currentGrid(),O={ESCAPE:27,LEFT:37,RIGHT:39},D=0,z=0===e.location.protocol.indexOf("http")?e.location.protocol:"http:",k=new RegExp("//"+e.location.host+"($|/)"),I=/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|ti(ff|f)|webp|svg)((\?|#).*)?$)/i,A=/^#.*$/,j=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,M=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,H=function(i,n){this.$element=t(i),this.defaults={modal:null,external:!1,group:null,iframe:!1,iframeScroll:!0,keyboard:!0,touch:!0,next:">",nextHint:"Next ("+(E?"Left":"Right")+" Arrow)",prev:"<",previousHint:"Previous ("+(E?"Right":"Left")+" Arrow)",closeHint:"Close (Esc)",errorHint:"<p>An error has occured.</p>",mobileTarget:null,mobileViewportWidth:"xs",fitViewport:!0},this.options=t.extend({},this.defaults,n),this.title=null,this.description=null,this.isShown=null,this.$group=null,this.options.group&&(this.$group=t(this.options.group)),this.$element.on(v,t.proxy(this.click,this));var o=t.debounce(t.proxy(this.resize,this),15);t(e).off(m).on(m,o)};H.prototype.show=function(){if(!this.isShown){if(this.options.mobileTarget){var i=this.options.mobileViewportWidth;if("number"==typeof i&&i>=n.width())return void(e.location.href=this.options.mobileTarget);if("string"==typeof i){var o=t.inArray(i,P.range);if(P.index<=o&&o>-1)return void(e.location.href=this.options.mobileTarget)}}var s=this,d=t.Event(b),l=t.Event($),p=function(){r.data("currentModal",s.$element),r.focus(),t(document).on(w,function(e){if(e.target!==a[0]&&!t.contains(a[0],e.target)){var i=r.find("input, select, a, iframe, img, button").first();return i.length?i.focus():!s.options.modal&&h.focus()||a.focus(),!1}return!0}),s.options.keyboard&&t(document).on(y,t.proxy(s.keydown,s)),s.options.group&&s.options.touch&&r.on("swipe.modal",!0).on("swipeend.modal",t.proxy(s.swipeend,s)),r.off(v).on(v,t.proxy(function(t){var e=u[0],i=c[0],n=t.target;return n===e||n===i?(t.preventDefault(),t.stopPropagation(),void this[n===e?"next":"prev"]()):void(this.options.modal&&n===r.find(this.options.modal)[0]&&(t.preventDefault(),t.stopPropagation(),this.hide()))},s)),s.$element.trigger(l)};this.$element.trigger(d),d.isDefaultPrevented()||(this.isShown=!0,this.overlay(),this.create(),r.onTransitionEnd(p))}},H.prototype.hide=function(e,i){if(this.isShown){var n=this,o=t.Event(x),s=t.Event(C),a=function(){n.destroy(i),r.removeData("currentModal"),n.$element.trigger(s)};this.$element.trigger(o),o.isDefaultPrevented()||(this.isShown=!1,t.each([d,l,h,r,u,c],function(){this.removeClass("fade-in").redraw()}),t(document).off(w),this.options.keyboard&&t(document).off(y),this.options.touch&&r.off("swipe.modal swipeend.modal"),e||this.overlay(!0),r.onTransitionEnd(a).ensureTransitionEnd())}},H.prototype.overlay=function(e){var i=e?"removeClass":"addClass",d=this,l=function(){return e?(a.addClass("hidden"),o.removeClass("modal-on").css("margin-right",""),void(o.hasClass("modal-lock")&&(o.removeClass("modal-lock"),D!==n.scrollTop()&&(n.scrollTop(D),D=0)))):void a.off(v).on(v,function(e){if(!d.options.modal){var i=h[0],n=e.target;n===r[0]||t.contains(r[0],n)||(n===i&&(e.preventDefault(),e.stopPropagation(),d.hide()),(n===a[0]||t.contains(a[0],n))&&d.hide())}})},c=function(){var e=t("<div/>").css({width:99,height:99,overflow:"scroll",position:"absolute",top:-9999});s.append(e);var i=e[0].offsetWidth-e[0].clientWidth;return e.remove(),i};t(".modal-overlay").length||s.append(a),e||(0===D&&(D=n.scrollTop()),o.addClass("modal-on").css("margin-right",c())),a.removeClass("hidden").redraw()[i]("fade-in").redraw(),a.onTransitionEnd(l)},H.prototype.create=function(){a.addClass("modal-loader"),this.options.external=!A.test(this.options.target);var e=function(t){var e=j.exec(t)||j.exec(z+t);return void 0===e||A.test(t)?!1:e&&e[2]&&!M.test(e[1])?!k.test(e[2]):!1},i=function(){n.resize(),t.each([d,l,h,u,c,r],function(){this.addClass("fade-in").redraw()}),a.removeClass("modal-loader")},n=this,o=this.options.title,s=this.options.description,f=this.options.modal,g=this.options.target,m=e(g),v=!this.options.external&&!m,y=this.$group,w=this.options.next+'<span class="visuallyhidden">'+this.options.nextHint+"</span>",b=this.options.prev+'<span class="visuallyhidden">'+this.options.prevHint+"</span>",$=this.options.iframeScroll,x=this.options.iframe||!v?m&&!I.test(g):!1,C=t("<div/>").addClass($?"media media-scroll":"media"),E=t("<div/>").addClass("modal-content");if(y){var S=y.filter(function(){return t(this).data("r.modal")});S.length&&(u.html(w).prependTo(r),c.html(b).prependTo(r))}if(o||!f){if(o){var P="modal-label-"+t.pseudoUnique();d.html('<div class="container"><h2 id="'+P+'">'+o+"</h2></div>").appendTo(a.attr({"aria-labelledby":P}))}f||h.html('x <span class="visuallyhidden">'+this.options.closeHint+"</span>").appendTo(a)}if(s&&l.html('<div class="container">'+s+"</div>").appendTo(a),v){var O=t(g);this.isLocalHidden=O.is(":hidden"),r.addClass(this.options.fitViewport?"container":""),p.detach().insertAfter(O),O.detach().appendTo(E).removeClass("hidden"),E.appendTo(r),i()}else if(x){r.addClass("modal-iframe");var D=0!==g.indexOf("http")?z+g:g,H=function(t){var e={youtube:/youtu(be\.com|be\.googleapis\.com|\.be)/i,vimeo:/vimeo/i,vine:/vine/i,instagram:/instagram|instagr\.am/i,getty:/embed\.gettyimages\.com/i};for(var i in e)if(e.hasOwnProperty(i)&&e[i].test(t))return[i,"scaled"].join(" ");return!1};t("<iframe/>").attr({scrolling:$?"yes":"no",allowTransparency:!0,frameborder:0,hspace:0,vspace:0,webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}).one("load error",function(){i()}).appendTo(C).attr("src",D);var R=H(g)||"";C.addClass(R).appendTo(r)}else I.test(g)?(r.addClass("modal-image"),t("<img/>").one("load error",function(){i()}).appendTo(r).attr("src",g)):(r.addClass("modal-ajax"),r.addClass(this.options.fitViewport?"container":""),E.load(g,null,function(e,o){"error"===o&&(n.$element.trigger(t.Event(T,{relatedTarget:E[0]})),E.html(n.options.errorHint)),E.appendTo(r),i()}))},H.prototype.destroy=function(i){u.detach(),c.detach(),d.empty().detach(),l.empty().detach(),h.detach(),a.removeAttr("aria-labelledby"),this.options.external||(t(this.options.target).addClass(this.isLocalHidden?"hidden":"").detach().insertAfter(p),p.detach().insertAfter(a));var n=this;r.find("iframe").attr("src",""),e.setTimeout(function(){r.removeClass("modal-iframe modal-ajax modal-image container").css({"max-height":"","max-width":""}).empty(),i&&i.call(n)},100)},H.prototype.click=function(t){t.preventDefault();var i=r.data("currentModal");if(i&&i[0]!==this.$element[0]){var n=this,o=function(){S?n.show():e.setTimeout(function(){n.show()},300)};return void i.data("r.modal").hide(!0,o)}this.show()},H.prototype.keydown=function(t){this.options.modal||(t.which===O.ESCAPE&&this.hide(),this.options.group&&(t.which===O.LEFT&&(E?this.next():this.prev()),t.which===O.RIGHT&&(E?this.prev():this.next())))},H.prototype.resize=function(){var i=n.height(),s=d.length&&d.height()||0,a=h.length&&h.outerHeight()||0,c=a>s?a:s,u=l.length&&l.height()||0,p=.95*(i-(c+u));if(t(".modal-overlay").css({"padding-top":c,"padding-bottom":u}),r.hasClass("modal-image"))r.children("img").css("max-height",p);else if(r.hasClass("modal-iframe")){var f=r.find(".media > iframe"),g=f.width(),m=f.height(),v=g/m,y=p*v;f.parent().hasClass("scaled")&&r.css({"max-height":p,"max-width":y})}else{var w=r.children(".modal-content");t.each([r,w],function(){this.css({"max-height":p})}),e.MSPointerEvent&&w.length&&w.children("*:first")[0].scrollHeight>w.height()&&o.addClass("modal-lock")}P=t.support.currentGrid()},H.prototype.direction=function(i){if(this.isShown&&this.options.group){var n=this,o=this.$group.index(this.$element),s=this.$group.length,a="next"===i?o+1:o-1,r=function(){n.$sibling&&n.$sibling.data("r.modal")&&(S?n.$sibling.data("r.modal").show():e.setTimeout(function(){n.$sibling.data("r.modal").show()
},300))};"next"===i?(a>=s||0>a)&&(a=0):(a>=s&&(a=0),0>a&&(a=s-1)),this.$sibling=t(this.$group[a]),this.hide(!0,r)}},H.prototype.next=function(){this.direction("next")},H.prototype.prev=function(){this.direction("prev")},H.prototype.swipeend=function(t){return E?void this["right"===t.direction?"prev":"next"]():void this["right"===t.direction?"next":"prev"]()},t.fn.modal=function(e){return this.each(function(){var i=t(this),n=i.data("r.modal"),o="object"==typeof e?e:{};o.target||(o.target=i.attr("href")),n||i.data("r.modal",n=new H(this,o)),"string"==typeof e&&/(show|hide|next|prev)/.test(e)&&n[e]()})},t.fn.modal.Constructor=H;var R=t.fn.modal;t.fn.modal.noConflict=function(){return t.fn.modal=R,this};var L=function(){t(":attrStart(data-modal)").each(function(){var e=t(this),i=e.data("r.modalOptions");i||e.modal(t.buildDataOptions(e,{},"modal","r"))})},N=t.debounce(L,500);t(document).on([f,g,$].join(" "),function(t){"ready"===t.type?L():N()}),e.RESPONSIVE_MODAL=!0}}(jQuery,window,".r.modal"),function(t,e,i){"use strict";if(!e.RESPONSIVE_TABLE){var n="ready"+i,o=["domchanged"+i,"shown.r.modal"].join(" "),s="add"+i,a="added"+i,r=function(e){this.$element=t(e).addClass("table-list"),this.$thead=this.$element.find("thead"),this.$tfoot=this.$element.find("tfoot"),this.$tbody=this.$element.find("tbody"),this.$headerColumns=this.$thead.find("th"),this.$footerColumns=this.$tfoot.find("th"),this.$bodyRows=this.$tbody.find("tr"),this.isAdded=null,this.add()};r.prototype.add=function(){if(!this.isAdded){var e=this,i=t.Event(s),n=function(){e.$element.trigger(t.Event(a))};this.$element.trigger(i),i.isDefaultPrevented()||(this.isAdded=!0,t.each(this.$bodyRows,function(){t(this).find("th, td").each(function(i){var n=t(this),o=t(e.$headerColumns[i]).text();if(n.attr("data-thead",o),e.$tfoot.length){var s=t(e.$footerColumns[i]).text();n.attr("data-tfoot",s)}})}),this.$element.redraw().addClass("fade-in"),this.$element.onTransitionEnd(n))}},t.fn.tablelist=function(e){return this.each(function(){var i=t(this),n=i.data("r.tablelist"),o="object"==typeof e?e:null;n||i.data("r.tablelist",n=new r(this,o)),"string"==typeof e&&n[e]()})},t.fn.tablelist.Constructor=r;var d=t.fn.table;t.fn.tablelist.noConflict=function(){return t.fn.tablelist=d,this};var l=function(){t("table[data-table-list]").each(function(){var e=t(this),i=e.data("r.tablelistOptions");i||e.tablelist(t.buildDataOptions(e,{},"tablelist","r"))})},h=t.debounce(l,500);t(document).on([n,o].join(" "),function(t){"ready"===t.type?l():h()}),e.RESPONSIVE_TABLE=!0}}(jQuery,window,".r.tablelist"),function(t,e,i){"use strict";if(!e.RESPONSIVE_TABS){var n=t.support.rtl,o="ready"+i,s=["domchanged"+i,"shown.r.modal"].join(" "),a="click",r="keydown",d="show"+i,l="shown"+i,h={SPACE:32,LEFT:37,RIGHT:39},c=function(e){this.$element=t(e),this.tabbing=null;var i=this.$element.children("ul:first").attr("role","tablist"),n=i.children().attr("role","presentation"),o=this.$element.children(":not(ul)"),s=t.pseudoUnique();n.each(function(e){var i=t(this),n=i.children("a");n.attr({role:"tab",id:"tab-"+s+"-"+e,"aria-controls":"pane-"+s+"-"+e,"aria-selected":i.hasClass("tab-active")?!0:!1,tabIndex:0}),o.eq(e).attr({role:"tabpanel",id:"pane-"+s+"-"+e,"aria-labelledby":"tab-"+s+"-"+e,tabIndex:i.hasClass("tab-active")?0:-1})}),t(this.$element).on(a,"ul[role=tablist] > li > [role=tab]",t.proxy(this.click,this)).on(r,"ul[role=tablist] > li > [role=tab]",t.proxy(this.keydown,this))};c.prototype.show=function(e){var i=this.$element.children("ul").children(".tab-active"),n=i.parent().children(),o=n.index(i),s=this;return e>n.length-1||0>e?!1:o===e?!1:this.tab(o,e,function(e){var i=function(){s.tabbing=!1,s.$element.trigger(t.Event(l))};e.onTransitionEnd(i)})},c.prototype.tab=function(e,i,n){var o=t.Event(d),s=this.$element,a=s.children("ul").children("li"),r=s.children(":not(ul)"),l=a.eq(i),h=r.eq(e),c=r.eq(i);s.trigger(o),this.tabbing||o.isDefaultPrevented()||(this.tabbing=!0,a.removeClass("tab-active").children("a").attr({"aria-selected":!1}),l.addClass("tab-active").children("a").attr({"aria-selected":!0}).focus(),h.addClass("fade-out fade-in"),c.attr({tabIndex:0}).addClass("tab-pane-active fade-out"),r.filter(".fade-in").attr({tabIndex:-1}).removeClass("tab-pane-active fade-in"),c.redraw().addClass("fade-in"),n.call(this,c))},c.prototype.click=function(e){e.preventDefault(),e.stopPropagation();var i=t(e.target),n=i.parent(),o=n.index();this.show(o)},c.prototype.keydown=function(e){var i=e.which;if(i===h.SPACE||i===h.LEFT||i===h.RIGHT){e.preventDefault(),e.stopPropagation();var o=t(e.target),s=o.parent(),a=s.siblings().addBack(),r=a.length,d=s.index();if(i===h.SPACE)return void this.show(d);d=i===h.LEFT?n?d+1:d-1:n?d-1:d+1,d===r&&(d=0),0>d&&(d=r-1),this.show(d)}},t.fn.tabs=function(e){return this.each(function(){var i=t(this),n=i.data("r.tabs");n||i.data("r.tabs",n=new c(this)),"number"==typeof e&&n.show(e)})},t.fn.tabs.Constructor=c;var u=t.fn.tabs;t.fn.tabs.noConflict=function(){return t.fn.tabs=u,this};var p=function(){t("[data-tabs]").each(function(){var e=t(this),i=e.data("r.tabsLoaded");i||(e.data("r.tabsLoaded",!0),e.tabs())})},f=t.debounce(p,500);t(document).on([o,s].join(" "),function(t){"ready"===t.type?p():f()}),e.RESPONSIVE_TABS=!0}}(jQuery,window,".r.tabs");
},{}],6:[function(require,module,exports){
var jQuery = window.jQuery;
var L = require('../bower_components/leaflet/dist/leaflet');

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
    evt.preventDefault();
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

// setup map config
var map = L.map('map').setView([-23.55, -46.633333], 13);
L.Icon.Default.imagePath = '/images/leaflet';
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var App = {};
window.App = App;

App.GroupLayerView = require('./view/GroupLayer')(map);
App.ThemeView = require('./view/Theme')(map);
App.PoiView = require('./view/Poi')();
App.NewsView = require('./view/News')();

var Router = require('./router');

App.Router = new Router;
Backbone.history.start();

},{"../bower_components/Sharrre/jquery.sharrre.min":1,"../bower_components/backbone/backbone":2,"../bower_components/leaflet/dist/leaflet":3,"../bower_components/responsive/build/responsive.min":5,"./router":13,"./view/GroupLayer":14,"./view/News":15,"./view/Poi":16,"./view/Theme":17}],7:[function(require,module,exports){
var Backbone = window.Backbone;
var LayerModel = require('../model/Layer');

module.exports = Backbone.Collection.extend({
    model: LayerModel
});

},{"../model/Layer":9}],8:[function(require,module,exports){
var Backbone = window.Backbone;
var LayerCollection = require('../collection/Layer');


module.exports = Backbone.Model.extend({
        attributes : {
            'name': 'Empty Group',
            'layers': new LayerCollection(),
            'created_at':  Date.now
        },
        idAttribute: "_id",
        url: '/groups'
    });

},{"../collection/Layer":7}],9:[function(require,module,exports){
var Backbone = window.Backbone;

module.exports = Backbone.Model.extend({
    attributes : {
        'name': 'Empty Layer',
        'features': {},
        'created_at': Date.now
    },
    idAttribute: "_id",
    urlRoot: '/layer'
});
},{}],10:[function(require,module,exports){
var Backbone = window.Backbone;

module.exports = Backbone.Model.extend({
    attributes : {
        'title': 'Sem título',
        'poi': 0,
        'description': '<p>Adicione texto, imagem ou vídeo embed ao corpor da mensagem.</p>',
        'created_at': Date.now
    },
    idAttribute: "_id",
    urlRoot: '/news'
});

},{}],11:[function(require,module,exports){
var Backbone = window.Backbone;

module.exports = Backbone.Model.extend({
    attributes : {
        'name': 'Empty Poi',
        'features': {},
        'created_at': Date.now
    },
    idAttribute: "_id",
    urlRoot: '/poi'
});

},{}],12:[function(require,module,exports){
var Backbone = window.Backbone;
var LayerCollection = require('../collection/Layer');

module.exports = Backbone.Model.extend({
        attributes : {
            'name': 'Empty Theme',
            'layers': new LayerCollection(),
            'created_at':  Date.now
        },
        idAttribute: "_id",
        url: '/themes/active'
    });

},{"../collection/Layer":7}],13:[function(require,module,exports){
var App = window.App || {};

var _ = require('underscore');
var L = require('../bower_components/leaflet/dist/leaflet');

var LayerModel = require('./model/Layer');
var ThemeModel = require('./model/Theme');
var GroupLayerModel = require('./model/GroupLayer');
var PoiModel = require('./model/Poi');
var NewsModel = require('./model/News');
var Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'ponto-de-interesse/:id': 'show',
        'noticia/criar/:poi_id': 'noticiaCriar',
        'search/:query': 'search',
        '*default': 'default'
    },

    index: function() {

        var groups = new GroupLayerModel();

        groups.fetch({
            success: function(model, response, options) {
                var s = new App.GroupLayerView({
                    model: groups
                });
            }
        });

        var theme_active = new ThemeModel();

        theme_active.fetch({
            success: function(model, response, options) {
                var t = new App.ThemeView({
                    model: theme_active
                });
            }
        });

    },

    show: function(id) {
        var poi = new PoiModel({'_id':id});
        poi.fetch({success:function(model, response, options) {
            var g = new App.PoiView({
                model:poi
            });
        }});
    },

    noticiaCriar: function (poi_id) {
        var newsEntry = new NewsModel({'poi':poi_id});
        var h = new App.NewsView({
                model:newsEntry
            });
    },

    download: function(random) {
        $(document.body).append("download route has been called.. with random equals : " + random);
    },

    search: function(query) {
        $(document.body).append("Search route has been called.. with query equals : " + query);
    },

    default: function(defaultt) {
        $(document.body).append("This route is not hanled.. you tried to access: " + defaultt);

    }

});


module.exports = Router;

},{"../bower_components/leaflet/dist/leaflet":3,"./model/GroupLayer":8,"./model/Layer":9,"./model/News":10,"./model/Poi":11,"./model/Theme":12,"underscore":18}],14:[function(require,module,exports){
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
                if ($.support.currentGrid().grid == 'xs') {
                    jQuery('.mobile-sidebar').trigger('click');
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

},{"../../bower_components/leaflet/dist/leaflet":3,"../model/Layer":9,"underscore":18}],15:[function(require,module,exports){
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
            this.$el.html(this.template({poi: this.model.toJSON()}))
            .promise().done(function () {
                var quill = new Quill('#editor', {
                    modules: {
                      'toolbar': { container: '#toolbar' },
                      'image-tooltip': true,
                      'link-tooltip': true
                    },
                    theme: 'snow'
                });
                // jQuery('#overlay1').modal('show');
                jQuery('.modal-noticia-criar').modal('show');
                // .trigger('click');
            });



            return this;
        }
    });

    return NewsView;
};

},{"../../bower_components/quill/dist/quill.min":4,"underscore":18}],16:[function(require,module,exports){
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

},{"underscore":18}],17:[function(require,module,exports){
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

},{"../../bower_components/leaflet/dist/leaflet":3,"../model/Layer":9,"underscore":18}],18:[function(require,module,exports){
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    concat           = ArrayProto.concat,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.7.0';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var createCallback = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  _.iteratee = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return createCallback(value, context, argCount);
    if (_.isObject(value)) return _.matches(value);
    return _.property(value);
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    if (obj == null) return obj;
    iteratee = createCallback(iteratee, context);
    var i, length = obj.length;
    if (length === +length) {
      for (i = 0; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    if (obj == null) return [];
    iteratee = _.iteratee(iteratee, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length),
        currentKey;
    for (var index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  var reduceError = 'Reduce of empty array with no initial value';

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = function(obj, iteratee, memo, context) {
    if (obj == null) obj = [];
    iteratee = createCallback(iteratee, context, 4);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index = 0, currentKey;
    if (arguments.length < 3) {
      if (!length) throw new TypeError(reduceError);
      memo = obj[keys ? keys[index++] : index++];
    }
    for (; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = function(obj, iteratee, memo, context) {
    if (obj == null) obj = [];
    iteratee = createCallback(iteratee, context, 4);
    var keys = obj.length !== + obj.length && _.keys(obj),
        index = (keys || obj).length,
        currentKey;
    if (arguments.length < 3) {
      if (!index) throw new TypeError(reduceError);
      memo = obj[keys ? keys[--index] : --index];
    }
    while (index--) {
      currentKey = keys ? keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var result;
    predicate = _.iteratee(predicate, context);
    _.some(obj, function(value, index, list) {
      if (predicate(value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    if (obj == null) return results;
    predicate = _.iteratee(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(_.iteratee(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    if (obj == null) return true;
    predicate = _.iteratee(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    if (obj == null) return false;
    predicate = _.iteratee(predicate, context);
    var keys = obj.length !== +obj.length && _.keys(obj),
        length = (keys || obj).length,
        index, currentKey;
    for (index = 0; index < length; index++) {
      currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `include`.
  _.contains = _.include = function(obj, target) {
    if (obj == null) return false;
    if (obj.length !== +obj.length) obj = _.values(obj);
    return _.indexOf(obj, target) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matches(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matches(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = obj.length === +obj.length ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = obj && obj.length === +obj.length ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (obj.length !== +obj.length) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = _.iteratee(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = _.iteratee(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = _.iteratee(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = low + high >>> 1;
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (obj.length === +obj.length) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = _.iteratee(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    if (n < 0) return [];
    return slice.call(array, 0, n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return slice.call(array, Math.max(array.length - n, 0));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, output) {
    if (shallow && _.every(input, _.isArray)) {
      return concat.apply(output, input);
    }
    for (var i = 0, length = input.length; i < length; i++) {
      var value = input[i];
      if (!_.isArray(value) && !_.isArguments(value)) {
        if (!strict) output.push(value);
      } else if (shallow) {
        push.apply(output, value);
      } else {
        flatten(value, shallow, strict, output);
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (array == null) return [];
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = _.iteratee(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = array.length; i < length; i++) {
      var value = array[i];
      if (isSorted) {
        if (!i || seen !== value) result.push(value);
        seen = value;
      } else if (iteratee) {
        var computed = iteratee(value, i, array);
        if (_.indexOf(seen, computed) < 0) {
          seen.push(computed);
          result.push(value);
        }
      } else if (_.indexOf(result, value) < 0) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true, []));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    if (array == null) return [];
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = array.length; i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(slice.call(arguments, 1), true, true, []);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function(array) {
    if (array == null) return [];
    var length = _.max(arguments, 'length').length;
    var results = Array(length);
    for (var i = 0; i < length; i++) {
      results[i] = _.pluck(arguments, i);
    }
    return results;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    if (list == null) return {};
    var result = {};
    for (var i = 0, length = list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i = 0, length = array.length;
    if (isSorted) {
      if (typeof isSorted == 'number') {
        i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  _.lastIndexOf = function(array, item, from) {
    if (array == null) return -1;
    var idx = array.length;
    if (typeof from == 'number') {
      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
    }
    while (--idx >= 0) if (array[idx] === item) return idx;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var Ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    var args, bound;
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    args = slice.call(arguments, 2);
    bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      Ctor.prototype = func.prototype;
      var self = new Ctor;
      Ctor.prototype = null;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (_.isObject(result)) return result;
      return self;
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    return function() {
      var position = 0;
      var args = boundArgs.slice();
      for (var i = 0, length = args.length; i < length; i++) {
        if (args[i] === _) args[i] = arguments[position++];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return func.apply(this, args);
    };
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = hasher ? hasher.apply(this, arguments) : key;
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last > 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed before being called N times.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      } else {
        func = null;
      }
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    if (!_.isObject(obj)) return obj;
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
      source = arguments[i];
      for (prop in source) {
        if (hasOwnProperty.call(source, prop)) {
            obj[prop] = source[prop];
        }
      }
    }
    return obj;
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(obj, iteratee, context) {
    var result = {}, key;
    if (obj == null) return result;
    if (_.isFunction(iteratee)) {
      iteratee = createCallback(iteratee, context);
      for (key in obj) {
        var value = obj[key];
        if (iteratee(value, key, obj)) result[key] = value;
      }
    } else {
      var keys = concat.apply([], slice.call(arguments, 1));
      obj = new Object(obj);
      for (var i = 0, length = keys.length; i < length; i++) {
        key = keys[i];
        if (key in obj) result[key] = obj[key];
      }
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(concat.apply([], slice.call(arguments, 1)), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    if (!_.isObject(obj)) return obj;
    for (var i = 1, length = arguments.length; i < length; i++) {
      var source = arguments[i];
      for (var prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }
    // Objects with different constructors are not equivalent, but `Object`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (
      aCtor !== bCtor &&
      // Handle Object.create(x) cases
      'constructor' in a && 'constructor' in b &&
      !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
        _.isFunction(bCtor) && bCtor instanceof bCtor)
    ) {
      return false;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size, result;
    // Recursively compare objects and arrays.
    if (className === '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size === b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      size = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      result = _.keys(b).length === size;
      if (result) {
        while (size--) {
          // Deep compare each member
          key = keys[size];
          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
        }
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, [], []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
    for (var key in obj) if (_.has(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around an IE 11 bug.
  if (typeof /./ !== 'function') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = function(key) {
    return function(obj) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
  _.matches = function(attrs) {
    var pairs = _.pairs(attrs), length = pairs.length;
    return function(obj) {
      if (obj == null) return !length;
      obj = new Object(obj);
      for (var i = 0; i < length; i++) {
        var pair = pairs[i], key = pair[0];
        if (pair[1] !== obj[key] || !(key in obj)) return false;
      }
      return true;
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = createCallback(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property) {
    if (object == null) return void 0;
    var value = object[property];
    return _.isFunction(value) ? object[property]() : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(obj) {
    return this._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result.call(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result.call(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result.call(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}]},{},[6])