/*TASK 1
Write a program that takes two user inputs for first and 
last name using prompt and merge them in a new variable 
titled fullName. Greet the user using his full name.*/
// Prompt the user for first and last name
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome!");

console.log("User's full name: " + fullName);







/*TASK 2
Write a program to take a user input about his favorite 
mobile phone model. Find and display the length of user 
input in your browser*/
var phoneModel = prompt("Enter your favorite mobile phone model:");
var inputLength = phoneModel.length;
document.write("The length of your input is: " + inputLength);






/*TASK 3
Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser .*/
var word = "Pakistani";
var index = word.indexOf('n');
document.write("String :'Pakistani'" + "Lenght of 'N':" + index);






/*TASK 4
Write a program to find the last index of letter “l” in the 
word “Hello World” and display the result in your browser.*/
var word = "Hello World";
var lastIndex = word.lastIndexOf('l');
document.write("The last index of 'l' in the word 'Hello World' is: " + lastIndex);






/*TASK 5
Write a program to find the character at 3rd index in the 
word “Pakistani” and display the result in your browser.*/
// Define the word
var word = "Pakistani";
var character = word.charAt(3);
document.write("The character at the 3rd index in the word 'Pakistani' is: " + character);







/*TASK 6
Repeat Q1 using string concat() method.*/
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName.concat(" ", lastName);

var greeting = "Hello, " + fullName + "! Welcome!";
alert(greeting);

console.log(greeting);






/*TASK 7
Write a program to replace the “Hyder” to “Islam” in the 
word “Hyderabad” and display the result in your browser.*/
var word = "Hyderabad";

var newWord = word.replace("Hyder", "Islam");

document.write("Original word: " + word + "<br>");
document.write("Modified word: " + newWord);







/*TASK 8
Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and 
football together.”;*/
var message = "Ali and Sami are best friends. They play cricket and football together.";

var newMessage = message.replace(/and/g, "&");

document.write("Original message: " + message + "<br>");
document.write("Modified message: " + newMessage);





/*TASK 9
Write a program that converts a string “472” to a number 
472. Display the values & types in your browser*/
var stringNumber = "472";
var number =(stringNumber);

document.write("String: " + stringNumber + "<br>");
document.write("Character at index : " + number + "<br>");
document.write("Type of string value: " + typeof stringNumber + "<br>");
document.write("Type of converted number value: " + typeof number);






/*TASK 10
Write a program that takes user input. Convert and
show the input in capital letters.*/
var userInput = prompt("Enter your input:");
var capitalizedInput = userInput.toUpperCase();

document.write("City: " + userInput + "<br>");
document.write("After Replacement: " + capitalizedInput);






/*TASK 11
Write a program that takes user input. Convert and 
show the input in title case*/
var userInput = prompt("Enter your input:");
var titleCaseInput = TitleCase(userInput);

function TitleCase(str) {
  var words = str.toLowerCase().split(" ");

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }

  var titleCaseStr = words.join(" ");

  return titleCaseStr;
}

document.write("City: " + userInput + "<br>");
document.write(" After Replacement:" + titleCaseInput);






/*TASK 12
Write a program that converts the variable num to 
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser.*/
var num = 35.36;
var numString = num.toString();
var result = numString.replace(".", "");

document.write("Original number: " + num + "<br>");
document.write("Modified string: " + result);






/*TASK 13
Write a program to take user input and store username 
in a variable. If the username contains any special symbol 
among [@ . , !], prompt the user to enter a valid username. 
For character codes of [@ .*/
var username = prompt("Enter your username:");

if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
  username = prompt("Invalid username. Please enter a valid username:");
}
document.write("Username: " + username);






/*TASK 14
    You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an 
array. After searching, prompt the user whether the given 
item is found in the list or not.
Note: Perform case insensitive search. Whether the user 
enters cookie, Cookie, COOKIE or coOkIE, program 
should inform about its availability. Example*/
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:");

var lowercaseInput = userInput.toLowerCase();
var isItemFound = false;

for (var i = 0; i < items.length; i++) {
  var lowercaseItem = items[i].toLowerCase();
  
  if (lowercaseItem === lowercaseInput) {
    isItemFound = true;
    break;
  }
}
if (isItemFound) {
  alert("Yes, the item is found in the list.");
} else {
  alert("No, the item is not found in the list.");
}










/*TASK 15
Write a program to take password as an input from 
user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document.*/
var password = prompt("Enter your password:");

var alphabetRegex = /[a-z A-Z]/;
var numberRegex = /[0-9]/;
var startsWithAlphabetRegex = /^[a-z A-Z]/;
if (
  password.length >= 6 &&
  alphabetRegex.test(password) &&
  numberRegex.test(password) &&
  !startsWithAlphabetRegex.test(password)
) {
  alert("Valid password!");
} else {
  alert("Invalid password. Please enter a valid password.");
}









/*TASK 16
Write a program to convert the following string to an 
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser*/
var university = "University of Karachi";
var universityArray = university.split(" ");

document.write("Array elements: " + universityArray);





/*TASK 17
Write a program to display the last character of a user 
input.*/
var userInput = prompt("Enter your input:");
var lastCharacter = userInput[userInput.length - 1];

document.write("Last character: " + lastCharacter);







/*TASK 18
You have a string “The quick brown fox jumps over the 
lazy dog”. Write a program to count number of 
occurrences of word “the” in given string.*/
var sentence = "The quick brown fox jumps over the lazy dog";
var lowercaseSentence = sentence.toLowerCase();
var wordToCount = "the";
var words = lowercaseSentence.split(" ");
var count = 0;

for (var i = 0; i < words.length; i++) {
  if (words[i] === wordToCount) {
    count++;
  }
}
document.write("Number of occurrences of 'the': " + count);


