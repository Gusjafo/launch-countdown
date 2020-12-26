
var date = new Date();
date.setDate(date.getDate() + 14);

// Set the date we're counting down to
var countDownDate = date.getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("daysText").innerHTML = days;
  document.getElementById("hoursText").innerHTML = hours;
  document.getElementById("minutesText").innerHTML = minutes;
  document.getElementById("secondsText").innerHTML = seconds;

  document.getElementsByClassName("timeBox")[3].style.transform = "rotateX(180deg)";
  setTimeout(function(){
    document.getElementsByClassName("timeBox")[3].style.transform = "rotateX(0deg)";
  }, 50);

  if (seconds === 59) {
    document.getElementsByClassName("timeBox")[2].style.transform = "rotateX(180deg)";
    setTimeout(function(){
      document.getElementsByClassName("timeBox")[2].style.transform = "rotateX(0deg)";
    }, 50);
  }

  if (minutes === 59 && seconds == 59) {
    document.getElementsByClassName("timeBox")[1].style.transform = "rotateX(180deg)";
    setTimeout(function(){
      document.getElementsByClassName("timeBox")[1].style.transform = "rotateX(0deg)";
    }, 50);
  }

  if (hours === 23 && minutes === 59 && seconds == 59) {
    document.getElementsByClassName("timeBox")[0].style.transform = "rotateX(180deg)";
    setTimeout(function(){
      document.getElementsByClassName("timeBox")[0].style.transform = "rotateX(0deg)";
    }, 50);
  }


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("daysText").innerHTML = "EXPIRED";
  }
}, 1000);
