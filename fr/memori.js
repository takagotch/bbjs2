//binding change
MyView = Backbone.View.extend({
  initialize: function(){
    this.model.on('change', this.render, this);
  },
});


MyView = Backbone.View.extend({
  events: {
    'click #search': 'runSearch'
  },
  runSearch: function(){
    //search_code
  }
});


//listenTo
MyView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },
});

//onClose()
Backbone.View.protopype.close = function(){
  this.remove();
  this.unbind();
  if(this.onClose){
    this.onClose();
  }
};


MyView = Backbone.extend({
 
  initialize: function(){
    this.model.on('change', this.render, this);
  },
  render: function(){
    //template rendering
  },
  onClose: function(){
    this.model.off('change');
  }
});


function AppView(){
  this.showView = function(view){
    if(this.currentView){
      this.currentView.close();
    }
    this.currentView = view;
    this.currentView.render();
    $("#mainContent").html(this.currentView.el);
  };
}


MyRouter = Backbone.Router.extend({
  routes: {
    "": "home",
    "search/:query": "showResults" 
  },
  initialize: function(options){
    this.appView = options.appView;
  },
  home: function(){
    var homeView = new HomeView();
    this.appView.showView(homeView);
  },
  showResults: function(query){
    var searchResultsView = new SearchResultsView({model: results});
    this.appView.showView(searchResultsView);
  }
});


//

//


//



