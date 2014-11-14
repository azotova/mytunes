// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
   // this.collection.on('change', this.render, this);
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.render();
  },

  render: function() {

    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(this.collection.map(function(song) {
      return new SongQueueEntryView({model: song}).render();
    }));

    //return this.$el;
  }

});

/*var songQueueEntryView = new SongQueueEntryView({ model: song });
      return songQueueEntryView.render();*/