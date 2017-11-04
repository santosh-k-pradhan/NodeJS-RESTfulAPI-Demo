'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FeaturedPropertySchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  property_address: {
    type: String
  },
  beds: {
    type: String
  },
  baths: {
    type: String
  },
  property_size: {
    type: String
  },
  prices: {
    type: Number
  },
  featured: {
    type: Boolean
  },  
  status: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FeaturedPropertyCollection', FeaturedPropertySchema);
