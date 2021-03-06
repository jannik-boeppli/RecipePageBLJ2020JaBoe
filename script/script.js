document.body.id = localStorage.getItem("toggler");
if(document.body.id == "null") {
	document.body.id = "light";
	localStorage.setItem("toggler", "light");
}

document.getElementById("toggler").onclick = function() {
	if(document.body.id == "light") {
		document.body.id = "dark";
		localStorage.setItem("toggler", "dark");
	} else {
		document.body.id = "light";
		localStorage.setItem("toggler", "light");
	}
}




// Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2020 00:00:00").getTime();

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
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "count down expired";
  }
}, 1000);