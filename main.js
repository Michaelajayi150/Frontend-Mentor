const mail_format =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const button = document.getElementById("button");
const form = document.getElementById("form");
const input_dom = document.getElementById("inputControl");
const email = document.getElementById("inputRef");
const message_dom = document.getElementById("message");

function validateMail(mail) {
  if (mail.value.match(mail_format)) {
    showMessage("We will get back to you shortly", "success");
  } else if (mail === "") {
    showMessage("Whoops! It looks like you forgot to add your email", "error");
  } else {
    showMessage("Please provide a valid email address", "error");
  }
}

function showMessage(message, confirmation) {
  message_dom.innerHTML = message;
  input_dom.classList.add(confirmation);
  setTimeout(() => {
    input_dom.classList.remove(confirmation);
  }, 1000);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateMail(email);
});
