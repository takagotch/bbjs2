validate: function(attrs){
  var errors = [];

  if(!attrs.email || attrs.email.indexOf('@') == -1){
    errors.push({
      '': 'Invalid email address',
      'attribute': 'email'
    });
  }

  if(errors.length){
    return errors;
  }
}


this.model.on('invalid', function(model, errors){
  for(var i = 0; i < errors.length; i++){
    if(errors[i].atrribute === 'email'){
      //errors[i].msg
    }
    if(errors[i].attributes === 'name'){
      //errors[i].message
    }
  }
});


validate: function(attrs){
  if(!attrs.email || attrs.email.indexOf('@') == -1){
    this.trigger('invalid:email', this, 'Invalid email address');
  }
  if(!attrs.email || attrs.name.length < 1){
    this.trigger('invalid:name', this, 'Name must be specified');
  }
}


this.model.on('invalid:email', function(model, error){
  //Email,EER
});
this.model.on('invalid:name', function(model, error){
  //Name, EER
});



