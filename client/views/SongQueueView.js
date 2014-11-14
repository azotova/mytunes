// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('change', this.render, this);
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    template: _.template('<table><th>Queue</th> <tbody> </tbody> </table>'),

    this.$el.html(this.template);

    this.$el.find('tbody').append(this.collection.map(function(song) {
      var songQueueEntryView = new SongQueueEntryView({ model: song });
      return songQueueEntryView.render();
    }));

    return this.$el;
  }

});
