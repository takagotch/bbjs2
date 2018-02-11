MainView = Backbone.View.extend({
  initialize: function(){
    var self = this;
    this._views = [];

    this.collection.each(function(model){
      self._views.push(new SubView({
        model: model
      }));
    });
  },
  render: function(){
    var self = this;
    var views = this._views;
    this.$el.empty();

    for(var i = 0; i < views.length; i++){
      self.$el.append(views[i].render().el);
    }
  }
});

render: function(){
  var self = this;
  var.views = this._views;
  self.$el.empty();
  var fragment = document.createDocumentFragment();
  
  for(var i = 0; i < views.length; i++){
    fragment.appendChild(views[i].render().el);
  }
  this.$el.append(fragment);
}





