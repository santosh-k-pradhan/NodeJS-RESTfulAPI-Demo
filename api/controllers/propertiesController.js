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
