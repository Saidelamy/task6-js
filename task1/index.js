var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var btn = document.getElementById("btn");

var pNameError = document.getElementsByClassName("pNameError")[0];
var pNameLengthError = document.getElementsByClassName("pNameLengthError")[0];
var pAgeError = document.getElementsByClassName("pAgeError")[0];
var pAgeLengthError = document.getElementsByClassName("pAgeLengthError")[0];
var pAgeTextError = document.getElementsByClassName("pAgeTextError")[0];

var table = document.querySelector("table");
var tableBody = document.getElementById("tableBody");

var p = document.getElementById("paraghraph");

var data = {};
id = 0;

function valid() {
  var input1Value = input1.value;
  var input2Value = input2.value;

  if (input1Value.length === 0) {
    pNameError.style.display = "block";
  } else {
    pNameError.style.display = "none";
  }
  if (input2Value.length === 0) {
    pAgeError.style.display = "block";
  } else {
    pAgeError.style.display = "none";
  }
}

function submit(e) {
  e.preventDefault();
  valid();

  var input1Value = input1.value;
  var input2Value = input2.value;

  if (input1Value.length >= 3 && input2Value >= 18) {
    var exist = false;

    for (var i = 0; i < tableBody.children.length; i++) {
      var row = tableBody.children[i];
      var name = row.children[1].textContent;
      var age = row.children[2].textContent;

      if (name === input1Value && age === input2Value) {
        p.style.display = "block";
        exist = true;
        break;
      } else {
        p.style.display = "none";
      }
    }

    if (!exist) {
      id++;
      data = { id: id, name: input1Value, age: Number(input2Value) };

      var tr = document.createElement("tr");

      var tdId = document.createElement("td");
      tdId.textContent = data.id;

      var tdName = document.createElement("td");
      tdName.textContent = data.name;

      var tdAge = document.createElement("td");
      tdAge.textContent = data.age;

      tr.appendChild(tdId);
      tr.appendChild(tdName);
      tr.appendChild(tdAge);

      tableBody.appendChild(tr);
    }
    if (table.children.length > 0) {
      table.style.display = "block";
    }
  }
}

input1.addEventListener("input", function (e) {
  var inputValue = e.target.value;

  if (inputValue.length > 0) {
    pNameError.style.display = "none";
  }
  if (inputValue.length < 3) {
    pNameLengthError.style.display = "block";
  } else {
    pNameLengthError.style.display = "none";
  }
});

input2.addEventListener("input", function (e) {
  var inputValue = e.target.value;

  if (isNaN(inputValue)) {
    pAgeTextError.style.display = "block";
  } else {
    pAgeTextError.style.display = "none";
  }

  if (inputValue.length > 0) {
    pAgeError.style.display = "none";
  }

  if (inputValue < 18) {
    pAgeLengthError.style.display = "block";
  } else {
    pAgeLengthError.style.display = "none";
  }
});
