var toFahren = function() {
  var startPoint = prompt("Please enter a temperature, in Celsius");
  return startPoint * 9/5 + 32;
}

var toCelsius = function() {
  var tempFahr = prompt("Please enter a temperature, in Fahrenheit");
  return (tempFahr - 32) * 5/9;
}

alert(toCelsius());

/*Volume conversions - liters as central reference point, convert from there*/

var galToLiters = function(gallons) {
  return gallons * 3.78541;
}

var cupsToLiters = function(cups) {
  return cups * 0.236588;
}

var ouncesToLiters = function(ounces) {
  return ounces * 0.0295735;
}

var pintsToLiters = function(pints) {
  return pints * 0.473176;
}

var quartsToLiters = function(quarts) {
  return quarts * 0.946353;
}

var mlToLiters = function(milliliters) {
  return milliliters * .001;
}

var clToLiters = function(centiliters) {
  return centiliters * 0.01;
}

var klToLiters = function(kiloliters) {
  return kiloliters * 1000;
}

var dlToLiters = function(deciliters) {
  return deiliters * .1;
}





var litersToGallons = function(liters) {
  return liters / 3.78541;
}

var literToCups = function(liters) {
  return liters / 0.236588;
}

var litersToOunces = function(liters) {
  return liters / 0.0295735;
}

var litersToPints = function(liters) {
  return liters / 0.473176;
}

var litersToQuarts = function(liters) {
  return liters / 0.946353;
}

var litersToMl = function(liters) {
  return liters / .001;
}

var litersToCl = function(liters) {
  return liters / 0.01;
}

var litersToKl = function(liters) {
  return liters / 1000;
}

var litersToDl = function(liters) {
  return liters / .1;
}
