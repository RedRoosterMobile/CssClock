function updateClock() {
  var date = new Date();
  var second = date.getSeconds() * 6,
    minute = date.getMinutes() * 6 + second / 60,
    hour = ((date.getHours() % 12) / 12) * 360 + 90 + minute / 12;

  $("#hour").css("transform", "rotate(" + hour + "deg)");
  $("#minute").css("transform", "rotate(" + minute + "deg)");
  $("#second").css("transform", "rotate(" + second + "deg)");
}

function timedUpdate() {
  updateClock();
  setTimeout(timedUpdate, 0);
}

timedUpdate();
