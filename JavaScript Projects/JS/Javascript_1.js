function Color_Function() { 	// code 
	var Color_Output;
	var Colors = document.getElementById("Color_Input").value;
	var Color_String = " is a great color!";
	switch(Colors) {
		case "Red":
		  Color_Output = "Red" + Color_String;
		  break;
		case "Yellow":
		  Color_Output = "Yellow" + Color_String;
		  break;
		case "Green":
		  Color_Output = "Green" + Color_String;
		  break;
		case "Blue":
		  Color_Output = "Blue" + Color_String;
		  break;
		case "Pink":
		  Color_Output = "Pink" + Color_String;
		  break;
		case "Purple":
		  Color_Output = "Purple" + Color_String;
		  break;
		default:
		  Color_Output = "Please enter a color exactly as written on the above list.";
	}
document.getElementById("Output").innerHTML = Color_Output;
}
	//  Using the getElementsByClassName() method 
function classFunction() {
  var x = document.getElementsByClassName("click");
  x[1].innerHTML = "This text changed since it was the element identified in X(1).";
}
// Draw a graphic on the canvas
function draw() {
	var canvas = document.getElementById('canvas');
// Make sure we don't execute when canvas isn't supported
	if (canvas.getContext) {
// Use getContext to use the canvas for drawing
	  var ctx = canvas.getContext('2d');
// Now, draw shapes 
	  ctx.clearRect(0,0,350,200);
	  ctx.fillStyle = '#66bdff';
	  ctx.fillRect(0,0,350,200);

	  ctx.clearRect(25, 25, 100, 100);
	  ctx.strokeRect(25, 25, 100, 100);
	  ctx.clearRect(45, 45, 60, 60);
	  ctx.strokeRect(50, 50, 50, 50);
	  ctx.fillStyle = '#cc8500';
	  ctx.fillRect(50,50,50,50);
  } else {
	  alert('Your browser does not support the HTML5 canvas tag.');
  }
}  