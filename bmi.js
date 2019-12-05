function bmi () {
var height = Number(document.getElementById("height").value);
var weight = Number(document.getElementById("weight").value);
var result = (weight/2.205) / ((height/39.37) * (height/39.37));
document.getElementById("result").innerHTML = "Your BMI score is : " +result.toFixed(2);
}
