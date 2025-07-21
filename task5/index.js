var btn = document.querySelector("button");

function popup() {
  var newWindow = open("about.html", "", "width=200px,height=200px");
  var x = 0;
  var y = 0;

  var interval = setInterval(function () {
    x += 100;
    y += 100;

    newWindow.moveTo(x, y);
  }, 1000);

  setTimeout(function () {
    clearInterval(interval);

    var interval2 = setInterval(function () {
      x -= 100;
      y -= 100;

      newWindow.moveTo(x, y);
    }, 1000);

    setTimeout(function () {
      clearInterval(interval2);
      newWindow.close();
    }, 6000);
  }, 6000);
}
