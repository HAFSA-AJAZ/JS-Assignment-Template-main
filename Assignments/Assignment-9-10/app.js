//TASK 1
//Write a program to take "city" name as input from user. If 
//user enters "Karachi", welcome the user like this: 
//"Welcome to city of lights"
function welcomeUser() {
    var city = document.getElementById("cityInput").value;

    if (city.toLowerCase() === "karachi") {
        alert("Welcome to the city of lights!");
}
}




//TASK 2
//write a program to take "gender" as input from user. If the
//user is male, give the message: Good Morning Sir. If the 
//user is female, give the message: Good Morning Ma'am.
var gender = prompt('Please enter your gender (male/female):');
if (gender.toLowerCase() === 'male') {
  alert('Good Morning Sir.');
} else if (gender.toLowerCase() === 'female') {
  alert('Good Morning Ma\'am.');
} else {
  alert('Invalid gender entered.');
}




//TASK 3
//Write a program to take input color of road traffic signal 
//from the user & show the message according to this table:
// Prompt the user to enter the color of the road traffic signal
var color = prompt('Please enter the color of the road traffic signal:');
color = color.toLowerCase();
if (color === 'red') {
  console.log('Stop! The traffic signal is red.');
} else if (color === 'yellow') {
  console.log('Be ready! The traffic signal is yellow.');
} else if (color === 'green') {
  console.log('Go! The traffic signal is green.');
} else {
  console.log('Invalid color entered.');
}




//TASK 4
//Write a program to take input remaining fuel in car (in 
  //  litres) from user. If the current fuel is less than 0.25litres, 
  //  show the messages"Please refill the fuel in your car"
    // Import the 'readline' module for user input
// Prompt the user to enter the remaining fuel in the car
var remainingFuel = parseFloat(prompt('Enter the remaining fuel in the car (in liters):'));

if (remainingFuel < 0.25) {
  console.log('Please refill the fuel in your car.');
}




//TASK 5
    //Run this script, & check whether alert message would be
    //displayed or not. Record the outputs.
     var a = 4;
    if (++a === 5){
    alert("given condition for variable a is true");
    }

     var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
    }
     var c = 12;
    if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
     var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");
    }
     if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
    
     if("car" < "cat"){
    alert("car is smaller than cat");
    }



    //TASK 6
    //Write a program to take input the marks obtained in three
//subjects & total marks. Compute & show the resulting
//percentage on your page. Take percentage & compute 
//grade as per following table:
//Show the total marks, marks obtained, percentage, grade &
//remarks like:
var subject1Marks = prompt('Enter the marks obtained in subject 1:');
var subject2Marks = prompt('Enter the marks obtained in subject 2:');
var subject3Marks = prompt('Enter the marks obtained in subject 3:');

var totalMarks = prompt('Enter the total marks:');

var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;

var percentage = (totalObtainedMarks / totalMarks) * 100;

var grade;

if (percentage = 90) {
  grade = 'A+';
} else if (percentage = 80) {
  grade = 'A';
} else if (percentage = 70) {
  grade = 'B';
} else if (percentage = 60) {
  grade = 'C';
} else if (percentage = 50) {
  grade = 'D';
} else {
  grade = 'Fail';
}

console.log('Result:');
console.log('Percentage:', percentage.toFixed(2) + '%');
console.log('Grade:', grade);

    



//TASK 7 
//Guess game:
//Store a secret number (ranging from 1 to 10) in a variable.
//Prompt user to guess the secret number.
//a. If user guesses the same number, show "Bingo! Correct
//nswer".
//b. If the guessed number +1 is the secret number, show
//"Close enough to the correct answer".
var secretNumber = Math.floor(Math.random() * 10) + 1;

const guess = prompt('Guess the secret number (between 1 and 10):');

if (guess === secretNumber) {
  console.log(' Correct answer');
} else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
  console.log('Close enough to the correct answer');
} else {
  console.log('Sorry, incorrect guess');
}



/*TASK 8
Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number 
is divisible by 3.*/
var number = prompt('Enter a number:');

if (number % 3 === 0) {
  console.log(`{number} is divisible by 3.`);
} else {
  console.log(`{number} is not divisible by 3.`);
}



/*TASK 9
Write a program that checks whether the given input is an
even number or an odd number.*/
var number = prompt('Enter a number:');


if (number % 2 === 0) {
  console.log(`{number} is an even number.`);
} else {
  console.log(`{number} is an odd number.`);
}



/*TASK 10
Write a program that takes temperature as input and 
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”*/
var temperature = prompt('Enter the temperature:');

if (temperature > 40) {
  console.log('It is too hot outside.');
} else if (temperature > 30) {
  console.log('The Weather today is Normal.');
} else if (temperature > 20) {
  console.log('Today\'s Weather is cool.');
} else if (temperature > 10) {
  console.log('OMG! Today\'s weather is so Cool.');
} else {
  console.log('Invalid temperature entered.');
}



/*TASK 11
Write a program to create a calculator for +,-,*, / & % 
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.*/
var firstNumber = prompt('Enter the first number:');
var secondNumber = prompt('Enter the second number:');
var operation = prompt('Enter the operation (+, -, *, /, %):');

var result;

if (operation === '+') {
  result = firstNumber + secondNumber;
} else if (operation === '-') {
  result = firstNumber - secondNumber;
} else if (operation === '*') {
  result = firstNumber * secondNumber;
} else if (operation === '/') {
  result = firstNumber / secondNumber;
} else if (operation === '%') {
  result = firstNumber % secondNumber;
} else {
  console.log('Invalid operation entered.');
}


if (result = undefined) {
  console.log('Result:', result);
}



