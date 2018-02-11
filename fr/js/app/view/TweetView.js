var com = com || {};
com.apress = com.apress || {};
com.apress.view = com.apress.view || {};

com.apress.view.TweetView = Backbone.View.extend({
  
  el: '#tweet',
  $timestamp: null,
  $content : null,
  tweetTemplate: Handlebars.compile($("#tweet-template").html()),
  timestampTemplate: Handlebars.compile($("#timestamp-template").html()),
  tweet : null;

  initialize: function(options){
    this.tweet = options.tweet,
    this.render();
  },

  render: function(){
    this.renderContent().renderTimestamps();
    return this;
  },

  renderContent: function(){
    if(this.$content){
      this.$content.remove();
    }

    $content = this.tweetTemplate({
      tweet: this.tweet.toJSON()
    });
    this.$el.append($content);
    return this;
  },

  renderTimestamp: function(){
    if(this.$timestamp){
      this.$timestamp.remove();
    }

    $timestamp = this.timestampTemplate({
      time: this.tweet.getTimestamp()
    });
    this.$('#timestamp').append($tiemstamp);
    return this;
  }
});

//model router
com.apress.view.TweetView = Backbone.View.extend({
  
  tweet : null,
  events: {
    'click': 'markSelected'
  },

  markSelected: function(options){
    console.log('marking..');
    var self = this,
	$target = $(options.currentTarget);
    $target.addClass('selected');
  },

});

markSelected: function(options){
  console.log('marking..');
  var self = this,
	$target = $(options.currentTarget);
  self.tweet.set('selected', true);
  $target.addClass('selected');
},


