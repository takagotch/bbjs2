MainView = Backbone.View.extend({
 initialize: function(){
   var self = this;
   this._views = [];

   this.collection.each(function(model){
     var subview = new SubView({
       model: model,
       parentView: self
     });
     self._views.push(subview);
     self.listenTo(subview, 'event', self.render);

//     self._views.push(new SubView({
//       model: model,
//       parentView: self
//     }));

   });
 }
});

//this.parentView.render();
this.trigger('event');



