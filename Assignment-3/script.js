//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

let checkValues = document.querySelectorAll("input[type=checkbox]");
let tableData = document.querySelectorAll("#myTable tr");
let data1 = tableData[1].cloneNode(true);
let data2 = tableData[2].cloneNode(true);
function checkboxSelect(checkbox) {
  var parentData = checkbox.parentElement.parentElement;
  var deleteElement = parentData.querySelector(":nth-child(9)");
  removeDeleteButton(deleteElement);
  var editElement = parentData.querySelector(":nth-child(10)");
  removeEditButton(editElement);
  if (checkbox.checked) {
    parentData.bgColor = "yellow";
    deleteElement.appendChild(deleteButton(parentData));
    editElement.appendChild(editButton());
  } else {
    parentData.bgColor = "";
  }
  submitButtonChange();
}

function removeDeleteButton(deleteExtraButton) {
  while (deleteExtraButton.firstChild) {
    deleteExtraButton.firstChild.remove();
  }
}

function removeEditButton(editElement) {
  while (editElement.firstChild) {
    editElement.firstChild.remove();
  }
}

function deleteButton(rowdata) {
  let deleteDataButton = document.createElement("input");
  deleteDataButton.type = "button";
  deleteDataButton.value = "Delete";
  deleteDataButton.addEventListener("click", () => {
    rowdata.nextElementSibling.remove();
    rowdata.remove();
    alert("Record of student deleted successfully..!!");

    let checkValues = document.querySelectorAll("input[type=checkbox]");
    let check = false;
    checkValues.forEach((values) => {
      if (values.checked) check = true;
    });
    if (check) {
      document.getElementById("button").style.backgroundColor = "orange";
      document.getElementById("button").disabled = false;
    } else {
      document.getElementById("button").style.backgroundColor = "";
      document.getElementById("button").disabled = true;
    }
  });

  return deleteDataButton;
}

function editButton() {
  const editButton = document.createElement("input");
  editButton.type = "button";
  editButton.value = "Edit";
  editButton.addEventListener("click", () => {
    prompt("Edit the details.", "");
  });
  return editButton;
}

function submitButtonChange() {
  let checkValues = document.querySelectorAll("input[type=checkbox]");
  let check = false;
  checkValues.forEach((values) => {
    if (values.checked) check = true;
  });
  if (check) {
    document.getElementById("button").style.backgroundColor = "orange";
    document.getElementById("button").disabled = false;
  } else {
    document.getElementById("button").style.backgroundColor = "";
    document.getElementById("button").disabled = true;
  }
  let hiddenData = document.querySelectorAll(
    "table td:nth-child(9), table th:nth-child(9),table td:nth-child(10), table th:nth-child(10)"
  );
  hiddenData.forEach((column) => {
    column.classList.remove("cellRenderer");
    if (check) {
      column.classList.add("cellRenderer");
    }
  });
}

function addCheckboxValues(checkbox) {
  checkbox.addEventListener("change", () => {
    checkboxSelect(checkbox);
  });
  let dropdown =
    checkbox.nextElementSibling.nextElementSibling.nextElementSibling;
  dropdown.addEventListener("click", () => {
    toggleButton(dropdown);
  });
}

checkValues.forEach((checkbox) => {
  addCheckboxValues(checkbox);
});

function toggleButton(dropdown) {
  if (
    dropdown.parentElement.parentElement.nextElementSibling.style.visibility ===
    "visible"
  ) {
    dropdown.parentElement.parentElement.nextElementSibling.style.visibility =
      "collapse";
  } else {
    dropdown.parentElement.parentElement.nextElementSibling.style.visibility =
      "visible";
  }
}

let addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
  addStudentButton();
});

function addStudentButton() {
  let data = document.querySelector("#myTable tbody");
  let record1 = data1.cloneNode(true);
  let record2 = data2.cloneNode(true);

  var rows = document.getElementById("myTable").rows;
  var latestIndex;
  if (rows.length > 1) {
    latestIndex =
      parseInt(
        rows[
          rows.length - 2
        ].firstElementChild.nextElementSibling.innerHTML.split(" ")[1]
      ) + 1;
  } else {
    latestIndex = 1;
  }
  let newStudentRow = record1.querySelectorAll("td");
  newStudentRow[1].innerHTML = `Student ${latestIndex}`;
  newStudentRow[2].innerHTML = `Teacher ${latestIndex}`;
  newStudentRow[6].innerHTML = `${Math.floor(Math.random() * 100000 + 1)}`;
  let checkBoxData = record1.querySelector("input[type=checkbox]");
  addCheckboxValues(checkBoxData);
  data.appendChild(record1);
  data.appendChild(record2);
  alert("Record of new student added successfully!");
}
