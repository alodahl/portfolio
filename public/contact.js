'use strict';

function sendEmailRequest(message) {
  fetch(`/contact`, {
    method: "POST",
    body: JSON.stringify(message),
    headers: new Headers({
      Authorization: `Bearer ${auth.getAccessToken()}`,
      "Content-Type": "application/json"
    })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(() => alert("email sent"))
    .then(() => (window.location = `/${this.props.role}-dashboard`))
    .catch(err => console.log(err));
}

function clearForm() {
  $('.js-project-name').val("");
  $('.js-category-name').val("");
  $('.js-start-date').val("");
  $('.js-notes').val("");
}

$('.send-message-button').on('click', function(event) {
  let projectTime = 0;
  let projectName = $('.js-project-name').val();
  let category = $('.js-category-name').val();
  let startDate = $('.js-start-date').val();
  let notes = $('.js-notes').val();
  sendEmailRequest(message);
  clearForm();

})
