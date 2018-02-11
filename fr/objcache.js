initialize: function(){
  this.cached = {
    model: undefined
  }
},

mainView: function(parameter){
  this.cached.model = this.cached.model || new UserModel({});
  new View({
    model: this.cached.model
  });
},

perfileView: function(parameter){
  this.cached.model = this.cached.model || new UserModel({});
  new ProfileView({
    model: this.cached.model
  });
},

initialize: function(){
  this.on("change:password", this.fetch, this);
}

