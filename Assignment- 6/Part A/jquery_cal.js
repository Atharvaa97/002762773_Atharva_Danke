$(document).ready(() => {
  const storedUsername = window.localStorage.getItem("username");
  $(".navbutton_title").text(storedUsername);

  let num1, num2, result;

  const calculateResult = (operator) => {
    if ($("#firstNumber").val() === "" || $("#secondNumber").val() === "") {
      alert("Please enter both numbers");
      return;
    }

    num1 = parseInt($("#firstNumber").val());
    num2 = parseInt($("#secondNumber").val());

    if (!$.isNumeric(num1) || !$.isNumeric(num2)) {
      alert("Please enter a number");
      return;
    }

    switch (operator) {
      case "add":
        result = num1 + num2;
        break;
      case "sub":
        result = num1 - num2;
        break;
      case "mult":
        result = num1 * num2;
        break;
      case "divi":
        if (num2 === 0) {
          alert("Cannot divide by zero");
          return;
        }
        result = num1 / num2;
        break;
      case "clear":
        num1 = num2 = result = "";
        $("#firstNumber").val("");
        $("#secondNumber").val("");
        $("#result").text("");
        return;
      default:
        alert("Invalid operator");
        return;
    }

    $("#result").text(result);
  };

  $(".operation").click((e) => {
    const operator = e.target.id;
    calculateResult(operator);
  });

  $("input").keyup((e) => {
    const inputVal = e.target.value;
    if (!$.isNumeric(inputVal)) {
      alert("Please enter a number");
      e.target.value = "";
    }
  });
});
