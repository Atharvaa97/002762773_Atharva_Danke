$(document).ready(function () {
  var storedUsername = window.localStorage.getItem("username");
  $(".username_title").text("Welcome, " + storedUsername + "!");
});
