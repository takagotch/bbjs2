require(['Mediator'], function(mediator){

  var callback = function(args){
    console.log('Handling name change. Value is ' + args.name);
  };

  mediator.subscribe('name.change', callback);
  mediator.notify('name.change', {name: 'Begining Backbone.js'});
});

