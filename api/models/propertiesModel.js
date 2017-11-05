'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PropertySchema = new Schema({
  property_title: { type: String, required: 'Kindly enter the name of the task' },
  price: { type: Number },
  price_post: { type: Number },
  beds: { type: String },
  baths: { type: String },
  garages: { type: String },
  area: { type: String },
  area_post: { type: String },
  property_type: { type: String },
  property_status: { type: String },
  description: { type: String },
  featured_img: { type: String },
  galery_img: { type: String },
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
