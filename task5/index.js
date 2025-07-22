var btn = document.querySelector("button");

function popup() {
  var newWindow = open("about.html", "", "width=200px,height=200px");
  var x = 0;
  var y = 0;
  var maxX = screen.width - 300;
  var maxY = screen.height - 300;
  var direction = 1;

  var interval = setInterval(function () {
    x += 100 * direction;
    y += 100 * direction;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    newWindow.moveTo(x, y);

    if (x === maxX || y === maxY) {
      direction = -1;
    } else if ((x === 0, y === 0)) {
      direction = 1;
    }
  }, 500);

  if (newWindow.closed) {
    clearInterval(interval);
  }
}
