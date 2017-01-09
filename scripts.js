var number1 = parseInt(prompt("Enter a number:"));

var number2 = parseInt(prompt("Enter another number:"));

var method = prompt("What would you like to do with the number? Enter 1 for addition, 2 for subtraction, 3 for multiplication, 4 for division");

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(num1, num2) {
  return num1 - num2;
}

var multiplication = function(number1, number2) {
  return number1 * number2;
}

var divide = function(number1, number2) {
  return number1/number2;
}

alert(subtract(number1, number2));

/*

var react = method;

var base = 10;

var scale = base - react;

var run = function()

*/
