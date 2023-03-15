$(document).ready(() => {
  const storedUsername = window.localStorage.getItem("username");
  $(".navbutton_title").text(storedUsername);
});
