$(document).ready(function () {
  $("#signin-form").submit(function (event) {
    event.preventDefault(); // prevent the form from submitting

    // Get the input values
    var username = $("#username-input").val();
    var email = $("#email-input").val();
    var password = $("#password-input").val();

    // Reset the error messages
    $("#username-error").empty();
    $("#email-error").empty();
    $("#password-error").empty();

    // Perform validations
    if (username.trim() === "") {
      $("#username-error").text("Username cannot be blank");
      return;
    }
    if (/[^a-zA-Z0-9]/.test(username)) {
      $("#username-error").text(
        "Username can only contain letters and numbers"
      );
      return;
    }
    if (username.length < 4 || username.length > 20) {
      $("#username-error").text(
        "Username must be between 4 and 20 characters long"
      );
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@(northeastern|NEU)\.edu$/.test(email)) {
      $("#email-error").text("Must be a valid northeastern email address");
      return;
    }

    if (password.trim() === "") {
      $("#password-error").text("Password cannot be blank");
      return;
    }
    if (password.length < 8 || password.length > 20) {
      $("#password-error").text(
        "Password must be between 8 and 20 characters long"
      );
      return;
    }

    // Store the username in localStorage
    window.localStorage.setItem("username", username);

    // Redirect to the new page
    window.location.href = "calculator.html";
  });
});
