// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  template: _.template('<tr class="songInQueue"><td class="<%= artist %>">(<%= artist %>)</td><td class="<%= title %>"><%= title %></td></tr>'),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }

});
