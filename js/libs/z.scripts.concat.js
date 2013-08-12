require.config({
  paths: {
    'jquery': 'vendor/jquery/jquery',
    'underscore': 'vendor/underscore-amd/underscore',
    'backbone': 'vendor/backbone-amd/backbone',
    'facebook-sdk': '//connect.facebook.net/en_US/all'
  },
  shim: {
    'facebook' : {
      export: 'FB'
    }
  }
});

require(['app/views/app'], function(AppView) {
  new AppView();
});
/**
 * scripts.js
 */
(function($) {

// your code here
	//window.alert('What\'s going on?');

}(jQuery));

define(['backbone', 'app/views/facebook'], function(Backbone, FacebookView) {
	var App = Backbone.View.extend({
		facebook: null,

		initialize: function() {
			console.log('Wacsshoo!');
			console.log(typeof FacebookView, typeof $, typeof _, typeof Backbone);
			this.facebook = new FacebookView();

		}
	});
	return App;
});
define(['backbone', 'facebook-sdk'], function(Backbone) {
  var FacebookView = Backbone.View.extend({
    initialize: function() {
      console.log('facebookView');
      FB.init({
        appId: '518197704914402',
        channelUrl: '//' + location.hostname + '/' + location.pathname + '/channel.html'
      });
    }
  });

  return FacebookView;
});