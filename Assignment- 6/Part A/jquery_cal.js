$(document).ready(() => {
  const storedUsername = window.localStorage.getItem("username");
  $(".navbutton_title").text(storedUsername);

  const performOperation = (a, b, operator) => {
    if (isNaN(a) || isNaN(b)) {
      alert("Invalid input");
      return;
    }

    const result = (() => {
      switch (operator) {
        case "add":
          return a + b;
        case "sub":
          return a - b;
        case "mult":
          return a * b;
        case "divi":
          if (b === 0) {
            alert("Cannot divide by zero");
            return;
          }
          return a / b;
        default:
          alert("Invalid operator");
          return;
      }
    })();

    if (result !== undefined) {
      $("#result").text(result);
    }
  };

  $("#add, #sub, #mult, #divi, #clear, .number").on("click keyup", (e) => {
    const { target } = e;
    const { value, id } = target;

    if (id === "clear") {
      $("#firstNumber").val("");
      $("#secondNumber").val("");
      $("#result").text("");
      return;
    }

    if (isNaN(Number(value))) {
      alert("Please enter a number");
      target.value = "";
      return;
    }

    const num1 = Number($("#firstNumber").val());
    const num2 = Number($("#secondNumber").val());

    performOperation(num1, num2, id);
  });
});
