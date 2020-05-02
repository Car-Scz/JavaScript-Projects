function myFunc() {
  var age, voteable;
  age = document.getElementById("age").value;
  voteable = (age < 18) ? "Too young":"Old enough";
  document.getElementById("vote").innerHTML = voteable + " to vote.";
}