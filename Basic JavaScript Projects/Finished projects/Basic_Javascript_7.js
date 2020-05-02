//  Get a time-based greeting
function getTime() {
	var greeting;
	cur_date = new Date();
	time = new Date().getHours();

  if (time < 12) {
    greeting = "Good morning!";
  } else if (time < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }
  document.getElementById("Greeting").innerHTML = greeting;
}
function SqRt_Function() {
	Input = document.getElementById("Input").value;
	if (Input > 0) {
	Result = Math.sqrt(Input);
	}
	else {
	Result = "You must enter a valid number!";
	}
	document.getElementById("SquareRoot").innerHTML = Result;
    }
function time_Function() {
	var Time = new Date().getHours();
	var Reply;
	if (Time < 12 == Time > 0) {
		Reply = "It is morning time!";
	}
	else if (Time > 12 == Time < 18) { 
		Reply = "It is the afternoon!";
	} 
	else {
		Reply = "It is evening time!";
	}
	document.getElementById("Time_of_day").innerHTML = Reply;
}
