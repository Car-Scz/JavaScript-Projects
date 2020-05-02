function myObject() {
// Create an object:
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  hairColor: "brown"
};
delete person.hairColor;
// Display some data from the object:
document.getElementById("Extract").innerHTML =
person.firstName + " has " + person.hairColor + " hair.";
}