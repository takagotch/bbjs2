Tweet = Backbone.Model.extend({

  timestamp: null,
  initialize: function(){
    timestamp = new Date();
  },

  getTimestamp: function(){
    var friendly = moment(timestamp).fromNow();
    return friendly;
  }
});


