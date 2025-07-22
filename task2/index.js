var btn = document.querySelector("button");

var str =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus quod eligendi nihil incidunt? Harum at quis officia eaque voluptate error neque quam facilis temporibus obcaecati, itaque nulla, ea id?";

var arrString = str.split("");
var newArr = [];
var interval;
var index = 0;
var newWindow;

function pushStr() {
  if (index < arrString.length) {
    newArr.push(arrString[index]);
    newWindow.document.getElementById("aboutP").innerText = newArr.join("");
    index++;
  } else {
    clearInterval(interval);
  }
}

function startString() {
  newWindow = window.open("about.html", "", "width=400,height=400");

  newWindow.onload = function () {
    interval = setInterval(pushStr, 50);
  };
}

btn.addEventListener("click", startString);
