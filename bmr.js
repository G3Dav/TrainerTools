var bmr;



function calc() {
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var height = document.getElementById("yheight").value;
  var weight = (document.getElementById("sweight").value);
  if (gender == "male") {
  bmr = Math.trunc(66+( 6.23 * weight ) + ( 12.7 * height ) - ( 6.8 * age ));
  }
  else {
  bmr = Math.trunc(655 + ( 6.23 * weight) + ( 12.7 * height) - (6.8 * age ));
  }
}
