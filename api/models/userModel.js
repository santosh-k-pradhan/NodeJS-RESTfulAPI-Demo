'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: { type: String, required: 'Kindly enter the name of the property' },
  email: { type: String, required: 'Kindly enter the email of the property' },
  password: {type: String, required: 'Kindly enter the password of the property' },
  confirmPassword: {type: String, required: 'Kindly enter the confirmPassword of the property' },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('UserCollection', UserSchema);
