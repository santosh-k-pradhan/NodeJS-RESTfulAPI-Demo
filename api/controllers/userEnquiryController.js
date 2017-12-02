'use strict';

var mongoose = require('mongoose'),
    Enquiry = mongoose.model('UserEnquiryCollection');

exports.createUserEnquiry = function(req, res) {
  var enquiry = new Enquiry(req.body);
  enquiry.save(function(err, resEnquiry) {
    if (err)
      res.send(err);
    res.json({ 
      status: true,
      desc: 'Enquiry submitted successfully'
    });
  });
};

exports.getAllEnquiries = function(req, res) {
  Enquiry.find({}, function(err, resEnquiry) {
    if (err)
      res.send(err);
    res.json(resEnquiry);
  });
};

exports.getPaginatedEnquiries = function(req, res) {
    if(req.body.pageNumber > 1){
        Enquiry
          .find()
          .paginate(req.body.pageNumber, req.body.pageSize, function(err, docs, total) {
            res.json({'docs' : docs, 'count' : total});
          });
    } else{
        Enquiry
          .find()
          .paginate(req.body.pageNumber, req.body.pageSize, function(err, docs, total) {
            res.json({'docs' : docs, 'count' : total});
          });     
    }
};
