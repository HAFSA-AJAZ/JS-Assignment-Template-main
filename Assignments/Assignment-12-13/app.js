/*TASK 1
Write a program that takes a character (number or string) 
in a variable & checks whether the given input is a 
number, uppercase letter or lower case letter. (Hint: ASCII 
codes:- A=65, Z=90, a=97, z=122).*/
var character = prompt('Enter a character:');

var asciiCode = character.charCodeAt(0);

if (asciiCode >= 48 && asciiCode <= 57) {
  console.log('The given input is a number.');
} else if (asciiCode >= 65 && asciiCode <= 90) {
  console.log('The given input is an uppercase letter.');
} else if (asciiCode >= 97 && asciiCode <= 122) {
  console.log('The given input is a lowercase letter.');
} else {
  console.log('The given input is not a number or letter.');
}







/*TASK 2
Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.*/
// Prompt the user to enter the first integer
var firstInteger = prompt('Enter the first integer:');
var secondInteger = prompt('Enter the second integer:');

if (firstInteger > secondInteger) {
  console.log('The larger number is:', firstInteger);
} else if (secondInteger > firstInteger) {
  console.log('The larger number is:', secondInteger);
} else {
  console.log('The two integers are equal.');
}







/*TASK 3
Write a program that takes input a number from user & 
state whether the number is positive, negative or zero.*/
// Function to check the sign of a number
function checkSign(number) {
    if (number > 0) {
      return 'Positive';
    } else if (number < 0) {
      return 'Negative';
    } else {
      return 'Zero';
    }
  }
  
  var userInput = prompt('Enter a number:');
  
  var number = (userInput);
  
  var sign = checkSign(number);
  console.log(`The number is ${sign}.`);







/*TASK 4
Write a program that takes a character (i.e. string of 
    length 1) and ret// Function to check if a character is a vowel
urns true if it is a vowel, false otherwise*/
function isVowel(character) {
    character = character.toLowerCase();
  
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isVowel('a'));  // Output: true
  console.log(isVowel('b'));  // Output: false
  console.log(isVowel('E'));  // Output: true
  console.log(isVowel('z'));  // Output: false








  /*TASK 5
  Write a program that
  a. Store correct password in a JS variable.
  b. Asks user to enter his/her password
  c. Validate the two passwords:
  i. Check if user has entered password. If not, then 
  give message “ Please enter your password”
  ii. Check if both passwords are same. If they are 
  same, show message “Correct! The password you 
  entered matches the original password”. Show 
  “Incorrect password” otherwise.*/
var correctPassword = 'mySecretPassword';

var userInput = prompt('Enter your password:');

if (!userInput) {
  console.log('Please enter your password.');
} else if (userInput === correctPassword) {
  console.log('Correct! The password you entered matches the original password.');
} else {
  console.log('Incorrect password.');
}

  




/*TASK 6
This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}*/
var greeting;
var hour = 13;
if (hour < 18) {
  console.log('Good day');
} else if (hour === greeting ){
  console.log = "Good evening";
}else {
    console.log('in correct.');
}






/*TASK 7
Write a program that takes time as input from user in 24 
hours clock format like: 1900 = 7pm. Implement the 
following case using if, else & else if statements*/
var userInput = prompt('Enter time in 24-hour clock format (e.g., 1900):');
var time = (userInput);

if (time >= 0 && time < 1200) {
  console.log('Good morning!');
} else if (time >= 1200 && time < 1700) {
  console.log('Good afternoon!');
} else if (time >= 1700 && time < 2000) {
  console.log('Good evening!');
} else if (time >= 2000 && time <= 2359) {
  console.log('Good night!');
} else {
  console.log('Invalid time format!');
}

