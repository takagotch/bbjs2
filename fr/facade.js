var com = com || {};
com.apress = com.apress || {};
com.apress.model com.apress.model || {};

com.apress.model.Tweet = Backbone.Model.extend({
  parse: function(model){
    var friendly = moment(model.create_at,
      "ddd MMM DD HH:mm:ss ZZ YYYY").formNow();
    model.friendlyDate = friendly;
    return model;
  },
 //
  getText: function(){
    return this.get('text');
  },
  getProfileImage: function(){
    return this.get('user').profile.image.url;
  },
  getUserName: function(){
    return this.get('user').name;
  }
});







