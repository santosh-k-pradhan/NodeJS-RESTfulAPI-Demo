'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PropertySchema = new Schema({
  propertyTitle: { type: String, required: 'Kindly enter the name of the property' },
  price: { type: Number, required: 'Kindly enter the price of the property' },
  pricePostFix: {type: Number},
  bedRooms: {type: Number},
  bathRooms: {type: Number},
  garages: {type: Number},
  area: {type: Number},
  areaPostFix: {type: Number},
  propertyType: {type: String},
  propertyStatus: {type: String},
  propertyDescription: {type: String},
  featuredImg: {type: String},
  additionalImg: {type: String},
  address: { type: String, required: 'Kindly enter the address of the property' },
  property_latitude: {type: String},
  property_longitude: {type: String},  
  amenities: {
    ac: {type: Boolean, default: false},
    balcony: {type: Boolean, default: false},
    bedding: {type: Boolean, default: false},
    cable: {type: Boolean, default: false},
    coffeePot: {type: Boolean, default: false},
    dishwasher: {type: Boolean, default: false},
    fridge: {type: Boolean, default: false},
    grill: {type: Boolean, default: false},
    heating: {type: Boolean, default: false},
    internet: {type: Boolean, default: false},
    microwave: {type: Boolean, default: false},
    oven: {type: Boolean, default: false},
    parking: {type: Boolean, default: false},
    pool: {type: Boolean, default: false},
    toaster: {type: Boolean, default: false}
  },
  agentDisplay: {type: String},
  agentName: {type: String},
  customAgentDetails: {},
  feturedPropertyFlag: {
    type: Boolean,
    default: true
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PropertyCollection', PropertySchema);
