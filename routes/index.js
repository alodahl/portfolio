var express = require('express');
var router = express.Router();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/contact', (req, res) => {
  const msg = {
      to: process.env.ADMIN_EMAIL,
      from: "email@alina.lodahl.co",
      subject: req.body.subject,
      text: `You received a message via alina.lodahl.co: ${
        req.body.firstName
      } ${req.body.lastName} at ${req.body.email} asked: '${req.body.issue}'`,
      html: `<div style="font:20px 100 'Helvetica Neue', Helvetica; font-weight:100;">
              <p><b>You received a message via alina.lodahl.co</b></p>
              <hr>
              <p><b>from: </b>${req.body.name} at ${req.body.company}</p>
              <p><b>email: </b>${req.body.email}</p>
              <p><b>subject: </b>${req.body.subject}</p>
              <p><b>message: </b>${req.body.issue}</p>
            </div>`
    };

  sgMail.send(msg);
  res.status(200).json({ message: "email sent" });
});

module.exports = router;
