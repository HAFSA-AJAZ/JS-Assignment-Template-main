/*TASK 1
Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/
var userInput = prompt("Enter a positive integer:");
var number = String(userInput);
var roundOff = Math.round(number);
var floorValue = Math.floor(number);
var ceilValue = Math.ceil(number);

document.write("Number: " + number + "<br>");
document.write("Round-off value: " + roundOff + "<br>");
document.write("Floor value: " + floorValue + "<br>");
document.write("Ceil value: " + ceilValue + "<br>");









/*TASK 2
Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number*/
var userInput = prompt("Enter a negative  number:");
var number = String(userInput);
var roundOff = Math.round(number);
var floorValue = Math.floor(number);
var ceilValue = Math.ceil(number);

document.write("Number: " + number + "<br>");
document.write("Round-off value: " + roundOff + "<br>");
document.write("Floor value: " + floorValue + "<br>");
document.write("Ceil value: " + ceilValue + "<br>");









/*TASK 3
Write a program that displays the absolute value of a 
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5*/
var userInput = prompt("Enter a number:");
var number = String(userInput);
var absoluteValue = Math.abs(number);

document.write("Absolute value of " + number + " is " + absoluteValue + "<br>");







/*TASK 4
Write a program that simulates a dice using random() 
method of JS Math class. Display the value of dice in your 
browser.:*/
var diceValue = Math.floor(Math.random() * 6) + 1;

document.write("The value of the dice is: " + diceValue + "<br>");






/*TASK 5
Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browses*/
var randomNum = Math.random();
var coinValue = (randomNum < 0.5) ? "Heads" : "Tails";

document.write("The value of the coin is: " + coinValue + "<br>");






/*TASK 6
Write a program that shows a random number between 1 
and 100 in your browser.*/
var randomNumber = Math.floor(Math.random() * 100) + 1;

document.write("Random number between 1 and 100: " + randomNumber + "<br>");








/*TASK 7
Write a program that asks the user about his weight. Parse 
the user input and display his weight in your browser. 
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms*/
var userInput = prompt("Enter your weight:");
var weight = String(userInput);

document.write("Your weight is: " + weight + " kilograms" + "<br>");






/*TASK 8
Write a program that stores a random secret number from 
1 to 10 in a variable. Ask the user to input a number 
between 1 and 10. If the user input equals the secret 
number, congratulate the user.*/
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userInput = prompt("Guess the secret number (between 1 and 10):");
var userGuess = String(userInput);

if (userGuess === secretNumber) {
  document.write("Congratulations! You guessed the secret number!");
} else {
  document.write("Sorry, the secret number was " + secretNumber + ". Try again!");
}
