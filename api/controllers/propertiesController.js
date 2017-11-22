'use strict';

var mongoose = require('mongoose'),
    Property = mongoose.model('PropertyCollection');

exports.createProperties = function(req, res) {
  var property = new Property(req.body);
  property.save(function(err, resProperty) {
    if (err)
      res.send(err);
    res.json({ 
      status: true,
      desc: 'Property submitted successfully'
    });
  });
};

exports.getAllProperties = function(req, res) {
  Property.find({}, function(err, resProperty) {
    if (err)
      res.send(err);
    res.json(resProperty);
  });
};

exports.removeAllProperties = function(req, res) {
  Property.remove({}, function(err, numberRemoved) {
    if (err)
      res.send(err);
    res.json(
      { 
        status: true,
        message: 'Properties successfully deleted' 
      }
    );
  });
};
