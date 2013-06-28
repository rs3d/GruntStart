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