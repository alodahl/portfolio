'use strict';
let messageSentAlert = `<div class="sent-message-alert"><p>Your message was sent successfully!</p><img src="images/close-button.svg" class="close-button"/></div>`;
let messageFailedAlert = `<div class="sent-message-alert failed-alert"><p>Something went wrong. your message we not sent.</p><img src="images/close-button.svg" class="close-button"/></div>`;

function sendEmailRequest(message) {
  fetch(`${BASE_URL}/contact`, {
    method: "POST",
    body: JSON.stringify(message),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
        $('.contact-main').prepend(messageFailedAlert);
      }
      return res.json();
    })
    .then(() => $('.contact-main').prepend(messageSentAlert))
    .catch(err => console.log(err));
}

function clearForm() {
  $('#name').val("");
  $('#organization').val("");
  $('#email').val("");
  $('#subject').val("");
  $('#email-text').val("");
}

$('.js-send-message-button').on('click', function(event) {
  event.preventDefault();
  let name = $('#name').val();
  let organization = $('#organization').val();
  let email = $('#email').val();
  let subject = $('#subject').val();
  let emailText = $('#email-text').val();
  let message = {
    name: name,
    organization: organization || "",
    email: email,
    subject: subject,
    emailText: emailText
  };
  let validated = name && email && subject && emailText;
  if (validated) {
    sendEmailRequest(message);
    clearForm();
    window.scrollTo(0, 0);
  } else {
    alert("Be sure to enter your name, email address, subject, and message text so we can send your message.");
  }
})

$('.contact-main').on('click', '.close-button', function(event) {
  event.preventDefault();
  $('.sent-message-alert').remove();
});
