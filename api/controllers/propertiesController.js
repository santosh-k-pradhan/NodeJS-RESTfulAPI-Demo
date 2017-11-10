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
      desc: 'Property details inserted successfully'
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
