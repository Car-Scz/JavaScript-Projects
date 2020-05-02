function Ride_Function() {
	var Height, Can_ride;
	Height = document.getElementById("Height").value;
	Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
	document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
function Author(Title, Type, Published, ISBN) {
	this.Author_Title = Title;
	this.Author_Type = Type;
	this.Author_Published = Published;
	this.Author_ISBN = ISBN;
}
var LShearin = new Author("All Spell Breaks Loose", "ebook", 2012, "9781101580820");
var NTyson = new Author("Astrophysics for People in a Hurry", "audiobook", 2017, "9781538408056");
var GKlein = new Author("The cartoon introduction to calculus", "hardback book", 2019, "9780809033690");
function myFunction() {
	document.getElementById("New_and_This").innerHTML = "In my library, I have a " + GKlein.Author_Type + " whose title is " + GKlein.Author_Title + " that was published in " + GKlein.Author_Published + " and its ISBN is " + GKlein.Author_ISBN;
}

function verifyFunction() {
	document.getElementById("Nested_Function").innerHTML = checkName("Carol");
	function checkName(name) {
		var responseMsg = " ";
			function isCarol() {             
			return name === "Carol"; }
    if (isCarol()) {
        responseMsg = "Yep, this is " + name;
    } else {
		responseMsg = "No, this is NOT  " + name; }
	return responseMsg;
	}
}
