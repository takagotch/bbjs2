MyView = Backbone.View.extend({
  events: {
    'click .save': 'save'
  },

  save: function(e){
    this.model.save(model, response, options{
      success: function(model, response, options){
        //change render
      },
      error: functino(model, xhr, options){
        //EER render
      }	    
    });
  }
});


