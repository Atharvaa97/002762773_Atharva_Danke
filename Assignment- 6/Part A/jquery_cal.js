$(document).ready(function () {
  var storedUsername = window.localStorage.getItem("username");
  $(".navbutton_title").text(storedUsername);

  $("#firstNumber").keyup((e) => {
    if ($.isNumeric($("#firstNumber").val()) == false) {
      alert("Please enter a number");
      $("#firstNumber").val("");
    }
  });
  $("#secondNumber").keyup((e) => {
    if ($.isNumeric($("#secondNumber").val()) == false) {
      alert("Please enter a number");
      $("#secondNumber").val("");
    }
  });
  
  const performOperation = (operator) => {
    if ($("#firstNumber").val() == "" || $("#secondNumber").val() == "") {
      alert("Please enter both numbers");
      return;
    }
    let num1 = parseInt($("#firstNumber").val());
    let num2 = parseInt($("#secondNumber").val());
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }
    $("#result").val(result);
  };

  $("#add").click((e) => performOperation("+"));
  $("#sub").click((e) => performOperation("-"));
  $("#mult").click((e) => performOperation("*"));
  $("#divi").click((e) => performOperation("/"));
  
});
