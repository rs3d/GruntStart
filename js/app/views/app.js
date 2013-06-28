define(['backbone', 'app/views/facebook'], function(Backbone, FacebookView) {
	var App = Backbone.View.extend({
		facebook: null,

		initialize: function() {
			console.log('Wahoo!');
			console.log(typeof FacebookView, typeof $, typeof _, typeof Backbone);
			this.facebook = new FacebookView();
		}
	});
	return App;
});