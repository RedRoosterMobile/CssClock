function updateClock() {
  var date = new Date();
  var second = date.getSeconds() * 6,
    minute = date.getMinutes() * 6 + second / 60,
    hour = ((date.getHours() % 12) / 12) * 360 + 90 + minute / 12;

  document.getElementById("hour").style =
    "transform: " + "rotate(" + hour + "deg)";
  document.getElementById("minute").style =
    "transform: " + "rotate(" + minute + "deg)";
  document.getElementById("second").style =
    "transform: " + "rotate(" + second + "deg)";
}

function timedUpdate() {
  updateClock();
  setTimeout(timedUpdate, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
  timedUpdate();
});
