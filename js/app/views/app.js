<<<<<<< HEAD
define(['backbone', 'app/views/facebook'], function(Backbone, FacebookView) {
	var App = Backbone.View.extend({
		facebook: null,

		initialize: function() {
			console.log('Wahoo!');
			console.log(typeof FacebookView, typeof $, typeof _, typeof Backbone);
			this.facebook = new FacebookView();
		}
	});

=======
define(['backbone'], function(Backbone) {
	var App = Backbone.View.extend({
		initialize: function() {
			console.log( 'Wahoo!' );
			console.error('where?');
		}
	});

>>>>>>> f740d565b2034fc5942e006d2396c8d7982450a7
	return App;
});