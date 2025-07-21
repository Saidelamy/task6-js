var colors = document.querySelectorAll("p");
var span = document.querySelector("span");
var step = 0;

colors[0].classList.add("active");

function showColor() {
  for (var i = 0; i < colors.length; i++) {
    colors[i].classList.remove("active");
  }

  if (step === 0) {
    span.innerHTML = "Stop";
    span.classList.add("stop");
  } else if (step === 1) {
    span.innerHTML = "Ready";
    span.classList.add("ready");
  } else {
    span.innerHTML = "Go";
    span.classList.add("go");
  }

  colors[step].classList.add("active");
  step = (step + 1) % 3;
}

var interval = setInterval(showColor, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 3000);
