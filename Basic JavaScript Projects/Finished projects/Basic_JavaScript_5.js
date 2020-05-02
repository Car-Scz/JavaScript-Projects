// Get a variable type
function myFunc1() {
// Display variable type:
	document.write(typeof "Felines");
}
function myFunc2() {
// invalid number operation
	document.getElementById("Test1").innerHTML = 
		'Invalid divide by zero. Result is ... ' + (0 / 0);
// Test using isNaN() method
	document.getElementById("Test2").innerHTML = 
		'NaN value testing of string --What is this?--. Result is ...' + isNaN('What is this?');
	document.getElementById("Test3").innerHTML = 
		'NaN value testing of numbers string --0123456--. Result is ...' + isNaN('0123456');
// Display a huge number
	document.getElementById("poshuge").innerHTML = 
		'An example of digital positive infinity...' + 3E110;
// Display a negative huge number
	document.getElementById("neghuge").innerHTML = 
		'An example of digital negative infinity...' + -3E110;
}
// Use console to send a message of false
function myFunc4() {
	console.log("Error! 17 is not less than 12",(17<12));
}
// Display triple equal signs for Boolean Compare
function myFunc6() {
	var x = 5;
	document.getElementById("demo1").innerHTML = 
		'Same data type and same value (x === 5) is ' + (x === 5) + "<br>";
	document.getElementById("demo2").innerHTML = 
		'Different data type and different value (x === "20") is ' + (x === "20");
	document.getElementById("demo3").innerHTML = 
		'Different data type but the same value (x === "5") is ' + (x === "5");
	document.getElementById("demo4").innerHTML = 
		'Same data type but a different value (x === 20) is ' + (x === 20);
}
function myFunc7() {
		var x = 6;
		var y = 3;
		document.getElementById("andOper").innerHTML = 
			"Is this expression 6<10 AND 3>1 T or F? " + (x < 10 && y > 1) + "<br>" + "Is this expression 6<10 AND 3<1 T or F? " + (x < 10 && y < 1);
		document.getElementById("orOper").innerHTML = 
			"Is this expression 6>10 OR 3<1 T or F? " + (x > 10 || y < 1) + "<br>" + "Is this expression 6<10 OR 3<1 T or F? " + (x < 10 || y < 1);
		document.getElementById("notOper").innerHTML = 
			"Is this expression 6<10 AND 3>1 NOT T or F? " + !(x < 10 && y > 1) + "<br>" + "Is this expression 6<10 AND 3<1 NOT T or F? " + !(x < 10 && y < 1);
}
