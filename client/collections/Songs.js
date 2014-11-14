// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  // initialize: function(){
  // 	this.on("ended", function(e) {
  //   	//self.remove.apply(self,arguments);
  //   	console.log(arguments, "argSongs");
  //   }, this);
  // }

});