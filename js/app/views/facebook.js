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