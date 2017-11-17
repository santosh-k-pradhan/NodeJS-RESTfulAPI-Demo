'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('UserCollection');

exports.createUser = function(req, res) {
  var jsEncode = {
    encode :  function (s, k) {
      var enc = "";
      var str = "";
      // make sure that input is string
      str = s.toString();
      for (var i = 0; i < s.length; i++) {
        // create block
        var a = s.charCodeAt(i);
        // bitwise XOR
        var b = a ^ k;
        enc = enc + String.fromCharCode(b);
      }
      return enc;
    }
  };
  var hashKey = "123";

  //var e = jsEncode.encode(, hashKey);
  // result 3[Z 
  //console.log(e);
  var decryptPassword = jsEncode.encode(req.body.password, hashKey);
  var decryptConfirmPassword = jsEncode.encode(req.body.confirmPassword, hashKey);
  req.body.password = decryptPassword;
  req.body.confirmPassword = decryptConfirmPassword;
  var user = new User(req.body);
  user.save(function(err, resProperty) {
    if (err)
      res.send(err);
    res.json({ 
      status: true,
      desc: 'User created successfully'
    });
  });
};

exports.getUserMailValidation = function(req, res) {
  User.findOne( {email: req.params.email}, function(err, response) {
    if (err)
      res.send(err);
    if(response){
      res.json({ 
        status: true,
        desc: 'Email Id is already registered. Try with some other emailID'
      });
    } else {
      res.json({ 
        status: false,
        desc: 'Email Id validated successfully'
      });
    }
  });
};
