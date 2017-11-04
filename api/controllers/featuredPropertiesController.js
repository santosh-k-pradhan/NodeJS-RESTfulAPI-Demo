'use strict';

var mongoose = require('mongoose'),
    Property = mongoose.model('FeaturedPropertyCollection');

exports.createProperties = function(req, res) {
  var property = new Property(req.body);
  property.save(function(err, resProperty) {
    if (err)
      res.send(err);
    res.json(resProperty);
  });
};

exports.getAllFeaturedProperties = function(req, res) {
  Property.find({}, function(err, resProperty) {
    if (err)
      res.send(err);
    res.json(resProperty);
  });
};

exports.readFeaturedProperty = function(req, res) {
  Property.findById(req.params.propertyId, function(err, resProperty) {
    if (err)
      res.send(err);
    res.json(resProperty);
  });
};

exports.updateFeaturedProperty = function(req, res) {
  Property.findOneAndUpdate({_id: req.params.propertyId}, req.body, {new: true}, function(err, resProperty) {
    if (err)
      res.send(err);
    res.json(resProperty);
  });
};

exports.deleteFeaturedProperty = function(req, res) {
  Property.remove({
    _id: req.params.propertyId
  }, function(err, resProperty) {
    if (err)
      res.send(err);
    res.json({ message: 'Property successfully deleted' });
  });
};