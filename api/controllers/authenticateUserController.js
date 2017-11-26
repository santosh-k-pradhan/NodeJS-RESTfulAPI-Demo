'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('UserCollection');

exports.authenticateUser = function(req, res) {
  var reqEmail = req.body.email;
  var reqPassword = req.body.password;
  var hashKey = "123";

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

  User.findOne( {email: reqEmail}, function(err, responseUser) {
     if (err) {
      res.send(err);             
    } else if (responseUser) {
        var decryptPassword = jsEncode.encode(reqPassword, hashKey);
        if (responseUser.password === decryptPassword) {
          res.json({
            status: true,
            code: 1,
            desc: 'User successfully logged in !!!',
            name: responseUser.name,
            email: responseUser.email,
            isAdmin: responseUser.isAdmin
          });
        }
        if (responseUser.password !== decryptPassword) {
          res.json({
            status: true,
            code: 2,
            desc: 'Incorrect password'
          });
        } 
    } else {
      res.json({
          status: false,
          code: 3,
          desc: 'User not registered'
      });    
    }    
  });
};