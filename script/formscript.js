const submitBtn = document.getElementsByClassName("btn");

function sendForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var mailtoLink =
    "mailto:seebiprogrammer@gmail.com" +
    "?subject=" +
    encodeURIComponent("New form submission") +
    "&body=" +
    encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\nMessage: " + message
    );

  window.location.href = mailtoLink;

  return false; // Prevent default form submission
}
