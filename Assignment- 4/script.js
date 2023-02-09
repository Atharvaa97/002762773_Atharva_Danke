var form = document.getElementById("myForm");

form.addEventListener("submit", submitted);
form.addEventListener("reset", resetDoc);

var validName = false;
var validEmail = false;
var validPhone = false;
var validZip = false;
var validCheckbox = false;

// regex checks variables
var regExName = /^[a-zA-Z]+$/;
var regExEmail =
  /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@northeastern.edu$/;
var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
var regExZip = /^[0-9]{6}(?:-[0-9]{4})?$/;

var firstName = document.getElementById("firstName");
firstName.addEventListener("input", validate);

var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate);

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate);

var zipCode = document.getElementById("zipcode");
zipCode.addEventListener("input", validate);

var selectOption = document.getElementById("drinks");
selectOption.addEventListener("change", inda);

function inda(e) {
  var ind = document.getElementById("drinks");

  var box = document.querySelector(".box");
  var box2 = document.querySelector(".box2");
  var box3 = document.querySelector(".box3");
  var box4 = document.querySelector(".box4");
  var box5 = document.querySelector(".box5");


  var radio = document.querySelector('input[type=radio][name=source1]:checked');
  if (radio)
    radio.checked = false;
  document.getElementById("username").style.display = "none";
  if (e.target.value == "Select") {
    alert("Please select a valid option");
  }

  if (e.target.value == "FlixPlus") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
  if (e.target.value == "FlixLight") {
    box2.style.display = "block";
  } else {
    box2.style.display = "none";
  }
  if (e.target.value == "FlixFam") {
    box3.style.display = "block";
  } else {
    box3.style.display = "none";
  }
  if (e.target.value == "FlixDay") {
    box4.style.display = "block";
  } else {
    box4.style.display = "none";
  }
  if (e.target.value == "FlixMulti") {
    box5.style.display = "block";
  } else {
    box5.style.display = "none";
  }
}

function textNew() {
  var x1 = document.getElementById("Premium1");
  var x2 = document.getElementById("Premium2");
  var x3 = document.getElementById("Premium3");
  var x4 = document.getElementById("ads1");
  var x5 = document.getElementById("ads2");
  var x6 = document.getElementById("ads3");
  var x7 = document.getElementById("fam1");
  var x8 = document.getElementById("fam2");
  var x9 = document.getElementById("fam3");
  var x10 = document.getElementById("day1");
  var x11 = document.getElementById("day2");
  var x12 = document.getElementById("day3");
  var x13 = document.getElementById("Multi1");
  var x14 = document.getElementById("Multi2");
  var x15 = document.getElementById("Multi3");
  if (x1.checked == true || x2.checked == true || x3.checked == true || x4.checked == true || x6.checked == true || x5.checked == true || x7.checked == true || x8.checked == true || x9.checked == true || x10.checked == true || x11.checked == true || x12.checked == true || x13.checked == true || x14.checked == true || x15.checked == true) {
    document.getElementById("username").value = "";
    document.getElementById("username").style.display = "block";
  } else {
    document.getElementById("username").style.display = "none";
  }
}

function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName("source");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}

function validate(e) {
  var value = e.target.value;
  var type = this.id;
  var em = "error_" + type;

  switch (type) {
    case "firstName":
      if (!value.trim().match(regExName)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validName = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validName = true;
      }
      break;

    case "emailId":
      if (!value.trim().match(regExEmail)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validEmail = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validEmail = true;
      }
      break;

    case "phoneNumber":
      if (!value.trim().match(regExPhone)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validPhone = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validPhone = true;
      }
      break;
    case "zipcode":
      if (!value.trim().match(regExZip)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validZip = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validZip = true;
      }
      break;
  }
}

var validName = false;
var validEmail = false;
var validPhone = false;
var validZip = false;

function submitted(e) {
  e.preventDefault();
  var checkboxValidate = document.querySelectorAll(
    'input[name="source"]:checked'
  ).length;
  var radioCheck = document.querySelectorAll(
    'input[name="source1"]:checked'
  ).length;
  if (checkboxValidate == 0 || radioCheck == 0 || document.getElementById("username").value == "") {
    alert("Please select all required fields");
    return;
  }
  if (validName && validEmail && validPhone && validZip) {
    alert("Data Saved Successfully");
  } else {
    alert("Please enter correct details");
    return;
  }
  document.getElementById("table").style.display = "block";

  var table = document.getElementById("table");
  var row = table.insertRow(-1);
  var title = row.insertCell(0);
  var firstName = row.insertCell(1);
  var lastName = row.insertCell(2);
  var emailId = row.insertCell(3);
  var phoneNumber = row.insertCell(4);
  var address1 = row.insertCell(5);
  var address2 = row.insertCell(6);
  var city = row.insertCell(7);
  var state = row.insertCell(8);
  var zipcode = row.insertCell(9);
  var drinks = row.insertCell(10);
  var radioButton = row.insertCell(11);
  var commentSection = row.insertCell(12);
  var hear = row.insertCell(13);
  var comments = row.insertCell(14);
  title.innerHTML = document.querySelector(
    'input[name="title"]:checked'
  ).value;

  firstName.innerHTML = document.getElementById("firstName").value;
  lastName.innerHTML = document.getElementById("lastName").value;
  emailId.innerHTML = document.getElementById("emailId").value;

  phoneNumber.innerHTML = document.getElementById("phoneNumber").value;
  address1.innerHTML = document.getElementById("streetAddress1").value;
  address2.innerHTML = document.getElementById("streetAddress2").value;

  city.innerHTML = document.getElementById("city").value;
  state.innerHTML = document.getElementById("state").value;
  zipcode.innerHTML = document.getElementById("zipcode").value;
  drinks.innerHTML = document.querySelector("select").value;
  radioButton.innerHTML = document.querySelector(
    'input[name="source1"]:checked'
  ).value;
  hear.innerHTML = document.querySelector(
    'input[name="source"]:checked'
  ).value;
  commentSection.innerHTML = document.getElementById("username").value;
  comments.innerHTML = document.getElementById("comments").value;
  form.reset();
  var box = document.querySelector(".box");
  var box2 = document.querySelector(".box2");
  var box3 = document.querySelector(".box3");
  var box4 = document.querySelector(".box4");
  var box5 = document.querySelector(".box5");
  box.style.display = "none";
  box2.style.display = "none";
  box3.style.display = "none";
  box4.style.display = "none";
  box5.style.display = "none";
  document.getElementById("username").style.display = "none";
}


function resetDoc(){
  form.reset();
  var box = document.querySelector(".box");
  var box2 = document.querySelector(".box2");
  var box3 = document.querySelector(".box3");
  var box4 = document.querySelector(".box4");
  var box5 = document.querySelector(".box5");
  box.style.display = "none";
  box2.style.display = "none";
  box3.style.display = "none";
  box4.style.display = "none";
  box5.style.display = "none";
  document.getElementById("username").style.display = "none";
}