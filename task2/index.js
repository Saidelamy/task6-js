var btn = document.querySelector("button");

var str =
  "Lorem ipsum dolor sit amet consectetur adipisicingelit. Blanditiis accusamus quod eligendi nihil incidunt? Harum at quisxzofficia eaque voluptate error neque quam facilis temporibus obcaecati,itaque nulla, ea id?";

var arrString = str.split("");
var newArr = [];
var interval;
var index = 0;

console.log(arrString);

function pushStr() {
  if (index < arrString.length) {
    newArr.push(arrString[index]);
    p.innerText = newArr.join("");
  } else {
    clearInterval(interval);
  }
  index++;
}
function startString() {
  newWindow = window.open("about.html", "", "width=400,height=400");
  interval = setInterval(pushStr, 50);
  console.log(interval);
}

btn.addEventListener("click", startString);
