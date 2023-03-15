$(document).ready(function () {
  $("#signin-form").submit(function (event) {
    event.preventDefault();

    var username = $("#username-input").val();
    var email = $("#email-input").val();
    var password = $("#password-input").val();

    $("#username-error").empty();
    $("#email-error").empty();
    $("#password-error").empty();

    if (!username || username.trim() === "") {
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

    if (!email) {
      $("#email-error").text("Email cannot be blank");
      return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@(northeastern|NEU)\.edu$/.test(email)) {
      $("#email-error").text("Must be a valid northeastern email address");
      return;
    }

    if (!password || password.trim() === "") {
      $("#password-error").text("Password cannot be blank");
      return;
    }
    if (password.length < 8 || password.length > 20) {
      $("#password-error").text(
        "Password must be between 8 and 20 characters long"
      );
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      $("#password-error").text(
        "Password must contain at least one special character"
      );
      return;
    }

    window.localStorage.setItem("username", username);

    window.location.href = "homepage.html";
  });
});
