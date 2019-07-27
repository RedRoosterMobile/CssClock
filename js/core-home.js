var hourElement, minuteElement, secondElement;

function updateClock() {
  var date = new Date();
  var second = date.getSeconds() * 6,
    minute = date.getMinutes() * 6 + second / 60,
    hour = ((date.getHours() % 12) / 12) * 360 + 90 + minute / 12;

  hourElement.style = "transform: " + "rotate(" + hour + "deg)";
  minuteElement.style = "transform: " + "rotate(" + minute + "deg)";
  secondElement.style = "transform: " + "rotate(" + second + "deg)";
}

function timedUpdate(timestamp) {
  updateClock();
  window.requestAnimationFrame(timedUpdate);
}

document.addEventListener("DOMContentLoaded", function() {
  hourElement = document.getElementById("hour");
  minuteElement = document.getElementById("minute");
  secondElement = document.getElementById("second");
  timedUpdate();
  requestAnimationFrame(timedUpdate);
});
