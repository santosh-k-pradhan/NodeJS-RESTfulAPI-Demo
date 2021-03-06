'use strict';

exports.sendEmail = function(req, res) {
  var reqBody = req.body;
  var api_key = 'key-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
    var domain = 'XXXXXX@XXXXXX.XXX';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    
    var mailTemplate = "Dear <b>" + 
      reqBody.userName +
      "</b>," +
      "<br><br>" +
      reqBody.textBody + 
      "<br><br><b style='color:green'>Note: Do not reply to this mail. In case of any query please raise a ticket.</b><br><br>Best Regards,<br>Bhoomibazaar Team";
    var data = {
      from: 'DoNotReply - Bhoomibazaar<postmaster@sandbox667fa1ee76544bbf97b083b1af52ccff.mailgun.org>',
      to: reqBody.toEmailId,
      subject: reqBody.subject,
      html: mailTemplate
    };
     
    mailgun.messages().send(data, function (error, body) {
      console.log(body);
      if (error){
        res.json({ 
          status: false,
          desc: 'Email not sent. Please check the mailid is verified or not.'
        });
      }
      else{
        res.json({ 
          status: true,
          desc: 'Email sent successfully'
        });
      }
    });
};
