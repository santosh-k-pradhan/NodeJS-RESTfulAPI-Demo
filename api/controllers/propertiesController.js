'use strict';

var mongoose = require('mongoose'),
    Property = mongoose.model('PropertyCollection');
var paginate = require('mongoose-pagination');

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

exports.getFeaturedProperties = function(req, res) {
  Property.find({'feturedPropertyFlag':true}, function(err, resFeaturedProperty) {
    if (err)
      res.send(err);
    res.json(resFeaturedProperty);
  });
};

exports.getPaginatedProperties = function(req, res) {
    //var result = '';
    if(req.body.pageNumber > 1){
        Property
          .find()
          .paginate(req.body.pageNumber, req.body.pageSize, function(err, docs, total) {
            //console.log('total: ', total, 'docs: ', docs)
            res.json({'docs' : docs, 'count' : total});
          });
    } else{
        Property
          .find()
          .paginate(req.body.pageNumber, req.body.pageSize, function(err, docs, total) {
            // console.log('total: ', total, 'docs: ', docs)
            res.json({'docs' : docs, 'count' : total});
          });     
    }
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

exports.updateToFeaturedProperty = function(req, res) {
  Property.findOneAndUpdate( {_id: req.params.propertyId}, 
    {$set:{feturedPropertyFlag:req.params.propertyFlag}}, {new: true}, function(err, response) {
    if (err)
      res.send(err);
    if(response){
      res.json({ 
        status: true,
        desc: 'Property successfully updated.'
      });
    }
  });
};

exports.updateAsSoldProperty = function(req, res) {
  Property.findOneAndUpdate( {_id: req.params.propertyId}, 
    {$set:{propertyFor:req.params.propertyFlag}}, {new: true}, function(err, response) {
    if (err)
      res.send(err);
    if(response){
      res.json({ 
        status: true,
        desc: 'Property successfully updated.'
      });
    }
  });
};

exports.getSoldProperties = function(req, res) {
  Property.find({'propertyFor':'Sold'}, function(err, resSoldProperty) {
    if (err)
      res.send(err);
    res.json(resSoldProperty);
  });
};

exports.getPropertiesById = function(req, res) {
  Property.find({_id: req.params.propertyId}, function(err, resProperty) {
    if (err)
      res.send(err);
    res.json(resProperty);
  });
};

exports.getPaginatedSoldProperties = function(req, res) {
    if(req.body.pageNumber > 1){
        Property
          .find({'propertyFor':'Sold'})
          .paginate(req.body.pageNumber, req.body.pageSize, function(err, docs, total) {
            res.json({'docs' : docs, 'count' : total});
          });
    } else{
        Property
          .find({'propertyFor':'Sold'})
          .paginate(req.body.pageNumber, req.body.pageSize, function(err, docs, total) {
            res.json({'docs' : docs, 'count' : total});
          });     
    }
};
