'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PropertySchema = new Schema({
  property-title: { type: String, required: 'Kindly enter the name of the task' },
  price: { type: Number },
  price-post: { type: Number },
  beds: { type: String },
  baths: { type: String },
  garages: { type: String },
  area: { type: String },
  area-post: { type: String },
  property_type: { type: String },
  property_status: { type: String },
  description: { type: String },
  featured-img: { type: String },
  galery-img: { type: String },
  address: { type: String },
  property_latitude: { type: String },
  property_longitude: { type: String },  
  amenities: { type: String },
  agent_display: { type: String },
  agent_select: { type: String },
  /*status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  },*/
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PropertyCollection', PropertySchema);
