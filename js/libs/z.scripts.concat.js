require.config({
  paths: {
    'jquery': 'vendor/jquery/jquery',
    'underscore': 'vendor/underscore-amd/underscore',
    'backbone': 'vendor/backbone-amd/backbone'
  }});

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

define(['backbone'], function(Backbone) {
  var App = Backbone.View.extend({
    initialize: function() {
      console.log( 'Wahoo!' );

     
    }
  });

  return App;
});