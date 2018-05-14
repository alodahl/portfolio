var express = require('express');
var router = express.Router();
const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY, ADMIN_EMAIL } = require("./../config");
sgMail.setApiKey(SENDGRID_API_KEY);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/contact', (req, res) => {
  const msg = {
      to: ADMIN_EMAIL,
      from: "email@alinalodahl.com",
      subject: req.body.subject,
      text: `You received a message via alinalodahl.com:
      ${req.body.name} at ${req.body.email} asked: '${req.body.emailText}'`,
      html: `<div style="font:20px 100 'Helvetica Neue', Helvetica; font-weight:100;">
              <p><b>You received a message via alina.lodahl.co</b></p>
              <hr>
              <p><b>from: </b>${req.body.name} at ${req.body.organization}</p>
              <p><b>email: </b>${req.body.email}</p>
              <p><b>subject: </b>${req.body.subject}</p>
              <p><b>message: </b>${req.body.emailText}</p>
            </div>`
    };
  sgMail.send(msg);
  res.status(200).json({ message: "email sent" });
  if (err) {
      res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
