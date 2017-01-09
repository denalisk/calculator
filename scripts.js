var weight = function() {
  var howHeavy = parseInt(prompt("What is your weight in pounds?"));
  return howHeavy;
}

var height = function() {
  var howHigh = parseInt(prompt("What is your height in inches"));
  return howHigh;
}

var tall = height();
var heavy = weight();

var calculateBMI = function(personHeight, personWeight) {
  return (personWeight/(personHeight*personHeight))*703;
}

var BMI = calculateBMI(tall, heavy).toPrecision(4);

alert(BMI);
