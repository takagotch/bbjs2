define([
  'underscore',
  'backbone'
], function(_, Backbone){
  'use strict';
  var ConversionModel = Backbone.Model.extend({
    defaults: {
    },
    complexOperation: function(value){
    },
    secondOperation: function(value){
    }
  });
  return {
    convert: function(value){
      return ConversionModel.complexOperation(value) +
             ConversionModel.secondOperation(value);
    }
  }
});
