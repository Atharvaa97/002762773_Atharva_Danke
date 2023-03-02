$(document).ready(() => {
  const storedUsername = window.localStorage.getItem("username");
  $(".navbutton_title").text(storedUsername);

  const performOperation = (operator) => {
    if ($("#firstNumber").val() == "" || $("#secondNumber").val() == "") {
      alert("Please enter both numbers");
      return;
    }
    const num1 = parseInt($("#firstNumber").val());
    const num2 = parseInt($("#secondNumber").val());
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
        if (num2 === 0) {
          alert("Cannot divide by zero");
          return;
        }
        result = num1 / num2;
        break;
      case "clear":
        $("#firstNumber").val("");
        $("#secondNumber").val("");
        $("#result").text("");
        return;
    }
    $("#result").text(result);
  };

  $("#add").click(() => performOperation("+"));
  $("#sub").click(() => performOperation("-"));
  $("#mult").click(() => performOperation("*"));
  $("#divi").click(() => performOperation("/"));
  $("#clear").click(() => performOperation("clear"));

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
});
