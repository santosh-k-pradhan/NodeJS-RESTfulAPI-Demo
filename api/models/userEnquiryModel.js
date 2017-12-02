'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserEnquirySchema = new Schema({
  name: { type: String, required: 'Kindly enter the name' },
  email: { type: String, required: 'Kindly enter the email' },
  phone: {type: String},
  subject: {type: String},
  message: { type: String, required: 'Kindly enter the message' },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('UserEnquiryCollection', UserEnquirySchema);
