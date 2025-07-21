var textInput = document.getElementById("textInput");
var textInputError = document.getElementById("textInputError");

var emailInput = document.getElementById("emailInput");
var emailInputError = document.getElementById("emailInputError");

var passwordInput = document.getElementById("passwordInput");
var passwordInputError = document.getElementById("passwordInputError");

var maleRadio = document.getElementById("male");
var feMaleRadio = document.getElementById("feMale");
var radioInputError = document.getElementById("redioInputError");

var tennisCheckbox = document.getElementById("tennis");
var runningCheckbox = document.getElementById("running");
var footballCheckbox = document.getElementById("football");
var checkboxInputError = document.getElementById("checkboxInputError");

var CountrySelect = document.getElementById("CountrySelect");
var selectError = document.getElementById("selectError");

// text input handle error
textInput.addEventListener("input", function (e) {
  if (textInput.value.length >= 1) {
    textInput.style.border = "3px solid green";
    textInputError.style.display = "none";
  } else {
    textInput.style.border = "3px solid red";
    textInputError.style.display = "block";
  }
});

textInput.addEventListener("blur", function (e) {
  textInput.style.border = "1px solid black";
  textInputError.style.display = "none";
});

// email input handle Error
function isEmail(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

emailInput.addEventListener("input", function (e) {
  if (isEmail(e.target.value)) {
    emailInput.style.border = "3px solid green";
    emailInputError.style.display = "none";
  } else {
    emailInput.style.border = "3px solid red";
    emailInputError.style.display = "block";
  }
});

emailInput.addEventListener("blur", function (e) {
  emailInput.style.border = "1px solid black";
  emailInputError.style.display = "none";
});

// passord input handle Error
passwordInput.addEventListener("input", function (e) {
  if (passwordInput.value.length < 8) {
    passwordInput.style.border = "3px solid red";
    passwordInputError.style.display = "block";
  } else {
    passwordInput.style.border = "3px solid green";
    passwordInputError.style.display = "none";
  }
});

passwordInput.addEventListener("blur", function (e) {
  if (passwordInput.value.length < 8) {
    passwordInput.style.border = "3px solid red";
    passwordInputError.style.display = "block";
  } else {
    passwordInput.style.border = "3px solid green";
    passwordInputError.style.display = "none";
  }
});

function submit(e) {
  e.preventDefault();

  if (maleRadio.checked || feMaleRadio.checked) {
    radioInputError.style.display = "none";
  } else {
    radioInputError.style.display = "block";
  }

  if (tennisCheckbox.checked && runningCheckbox.checked && footballCheckbox) {
    checkboxInputError.style.display = "none";
  } else {
    checkboxInputError.style.display = "block";
  }

  if (CountrySelect.value === "0") {
    selectError.style.display = "block";
  } else {
    selectError.style.display = "none";
  }
}
