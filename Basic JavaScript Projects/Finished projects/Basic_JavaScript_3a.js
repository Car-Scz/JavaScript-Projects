function My_First_Function() {
	var str = "This text is green!";
	var result = str.fontcolor("green");
	document.getElementById("Green_Text").innerHTML = result;
}
// Add function
function addition_Function() {
	var addition = 2 + 2;
	document.getElementById("MathAdd").innerHTML = "2 + 2 = " + addition;
}
// Subtraction function
function subtraction_Function() {
	var Subtract = 5 - 2;
	document.getElementById("MathSub").innerHTML = "5 - 2 = " + Subtract;
}
// Multiply function
function multiply_Function() {
	var Mult = 6 * 8;
	document.getElementById("MathMult").innerHTML = "6 * 8 = " + Mult;
}
// Division function
function division_Function() {
	var Div = 22 / 7;
	document.getElementById("MathDiv").innerHTML = "22 / 7 = " + Div;
}
// Multiple Operations function
function multOps_Function() {
	var simple_Math = (1 + 2) * 10 / 2 - 5;
	document.getElementById("MultOps").innerHTML = "1 plus 2, multiplied by 10, then divided in half and then subtracted by 5 equals " + simple_Math;
}
// Increment function
function increment_Function() {
	var x = 5;
	document.write("Increment variable from " + x);
	x++;
	document.write(" to " + x);
}
// Decrement function
function decrement_Function() {
	var x = 5.25;
	document.write("Decrement variable from " + x);
	x--;
	document.write(" to " + x);
}
// Return a random number
function random_Function() {
	window.alert(Math.random() * 100);	
}

