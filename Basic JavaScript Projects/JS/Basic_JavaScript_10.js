function Call_Loop() {
    var text = "";
    var i = 0;
    while (i < 10) {
      text += "<br>The next number is " + i;
      i++;
    }
    document.getElementById("Loop").innerHTML = text;
}
function getStringLen() {
    var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    var n = str.length;
    document.getElementById("StrLen").innerHTML = "The length of this string is " + n;
  }
function for_Loop() {
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
  }
  function array_Function() {
    var cat_Breeds = [];
    cat_Breeds[0] = "Himalayan";
    cat_Breeds[1] = "Maine Coon";
    cat_Breeds[2] = "Siamese";
    cat_Breeds[3] = "Ragdoll";
    cat_Breeds[4] = "Domestic Short Hair";
    cat_Breeds[5] = "Abyssinian";
    document.getElementById("Array").innerHTML = "My cats are " + cat_Breeds[4] + ".";
}
function constant_Function() {
    const Musical_Instruments = {instrument:"guitar", type:"Classical", brand:"Yamaha"};
    Musical_Instruments.brand = "Fender";
    Musical_Instruments.price = "$500.00";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instruments.brand + " " + Musical_Instruments.type + " " + Musical_Instruments.instrument + " is " + Musical_Instruments.price;
}
function let_Function(a,b) {
    let x = 10;
    {
      let x = 29;  // variable in block scope
      console.log(x= x + (a * b));  
      }
    console.log(x = x + (a * b));  // variable in function scope
}
function cat_Function() {
    let cat = {
      breed: "Maine Coon ",
      sex: "female ",
      color: "brown/black/white ",
      age: "16 ",
      description : function() {
        return "My cat is a " + this.sex + this.color + this.breed + " and is " + this.age + "years old.";
        }
    }
    document.getElementById("catObject").innerHTML = cat.description();
}
function breakNow() {
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
      if (i === 3) { break; }
      text += "The number is " + i + "<br>";
    }
document.getElementById("useBreak").innerHTML = text;
}
function continueNow() {
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
        if (i === 5) { continue; }
        text += "The number is " + i + "<br>";
    }
document.getElementById("useContinue").innerHTML = text;
}