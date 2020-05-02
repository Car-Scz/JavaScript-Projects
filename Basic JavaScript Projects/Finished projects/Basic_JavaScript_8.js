function full_Sentence() {
	var part1 = "This is the ";
	var part2 = "start of ";
	var part3 = "a new project!";
	var Complete_sentence = part1.concat(part2,part3);
	document.getElementById("concat").innerHTML = Complete_sentence;
}
function slice_Method() {
	var sentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
	var subset = sentence.slice(28,55);
	document.getElementById("slice").innerHTML = subset;
}
function convCase() {
  var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  var res = str.toUpperCase();
  document.getElementById("Upper").innerHTML = res;
}
function Search_Func() {
	var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
	var n = str.search("tempor");
	document.getElementById("search").innerHTML = n;
}
function Nbrs_to_Str() {
  var n = 4538989;
  var res = n.toString();
  document.getElementById("strNumber").innerHTML = res;
}
function precisionMethod() {
  var n = 4538989.8979633879549;
  var res = n.toPrecision(3);
  document.getElementById("nbrPrecision").innerHTML = res;
}
function Rounding_Func() {
	var n = 4538989.8979633879549;
	var res = n.toFixed(2);
	document.getElementById("roundUp").innerHTML = res;
}
function dspValue() {
  var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  var res = str.valueOf();
  document.getElementById("strValue").innerHTML = res;
}