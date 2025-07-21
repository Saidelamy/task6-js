var textInput = document.getElementById("textInput");

var result = document.querySelector("p");

textInput.addEventListener("keydown", function (e) {
  // keycode is not supported in all browsers, new one is code but is not display the code by numbers
  result.innerHTML = `ASCII code of key <span>${e.key}</span> is <span>${e.keyCode}</span>`;
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
