function validate() {
    var x = document.getElementById("msg").value;
    if (x == "") {
      alert("Your message cannot be blank.");
      return false;
    }
  }