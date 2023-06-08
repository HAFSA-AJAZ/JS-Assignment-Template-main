/*TASK 1
Write a function that displays current date & time in your 
browser.*/
function displayDateTime() {
    var currentDate = new Date();
    var formattedDateTime = currentDate.toLocaleString();
  
    var dateTimeElement = document.getElementById("datetime");
    if (dateTimeElement) {
      dateTimeElement.textContent = formattedDateTime;
    }
  }
  displayDateTime();
  



/*TASK 2 
Write a function that takes first & last name and then it 
greets the user using his full name.*/
// Function to greet the user using their full name
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    console.log("Hello, " + fullName + "! Welcome!");
  }
  
  greetUser("ALI", "AHMED");
  




/*TASK 3
Write a function that adds two numbers (input by user) 
and returns the sum of two numbers.*/
// Function to add two numbers and return their sum
function addNumbers() {
    var num1 = String(prompt("Enter the first number:"));
    var num2 = String(prompt("Enter the second number:"));
  
    var sum = num1 + num2;
    return sum;
  }
  
  var result = addNumbers();
  console.log("The sum of the two numbers is: " + result);
  


/*TASK 4
Calculator:
Write a function that takes three arguments num1, num2 
& operator & compute the desired operation. Return and 
show the desired result in your browser.*/
// Function to perform arithmetic operations
function calculator(num1, num2, operator) {
    var result;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator");
        return;
    }
  
    return result;
  }

  var number1 = String(prompt("Enter the first number:"));
 var number2 = String(prompt("Enter the second number:"));
 var operator = prompt("Enter the operator (+, -, *, /):");
   var result = calculator(number1, number2, operator);
  document.write("The result is: " + result);
  




/*TASK 5
Write a function that squares its argument.*/
function square(number) {
    return number * number;
  }
  
  var inputNumber = String(prompt("Enter a number:"));
 var squaredNumber = square(inputNumber);
  console.log("The square of " + inputNumber + " is: " + "65");
  


/*TASK 6
Write a function that computes factorial of a number*/
// Function to compute the factorial of a number
function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  var inputNumber = String(prompt("Enter a number:"));
  var result = factorial(inputNumber);
  console.log("The factorial of " + inputNumber + " is: " + result);
  


/*TASK 7 
Write a function that take start and end number as inputs 
& display counting in your browser.*/
// Function to display counting from start to end
function countNumbers(start, end) {
    var counting = "";
    
    for (var i = start; i <= end; i++) {
      counting += i + " ";
    }
    
    document.write("Counting: " + counting);
  }
  
  var startNumber = String(prompt("Enter the start number:"));
 var endNumber = String(prompt("Enter the end number:"));
  countNumbers(startNumber, endNumber);
  


/*TASK 8
Write a nested function that computes hypotenuse of a 
right angle triangle. 
Hypotenuse2 = Base2 + Perpendicular2*/
function computeHypotenuse(base, perpendicular) {
    function square(number) {
      return number * number;
    }
    
    var hypotenuseSquared = square(base) + square(perpendicular);
    var hypotenuse = Math.sqrt(hypotenuseSquared);
    
    return hypotenuse;
  }
  
  var baseLength = parseFloat(prompt("Enter the length of the base:"));
 var perpendicularLength = parseFloat(prompt("Enter the length of the perpendicular:"));
  var hypotenuseLength = computeHypotenuse(baseLength, perpendicularLength);
  console.log("The hypotenuse length is: " + hypotenuseLength);
  







/*TASK 9 
Write a function that calculates the area of a rectangle.
 A = width * height
 Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables*/
function calculateAreaWithValue(width, height) {
    var area = width * height;
    return area;
  }
  var area1 = calculateAreaWithValue(5, 8);
  console.log("The area of the rectangle (with arguments as value) is: " + area1);
  
  function calculateAreaWithVariables(width, height) {
    var area = width * height;
    return area;
  }
var rectangleWidth = 5;
  var rectangleHeight = 8;
  var area2 = calculateAreaWithVariables(rectangleWidth, rectangleHeight);
  console.log("The area of the rectangle (with arguments as variables) is: " + area2);
  



/*TASK 10
Write a JavaScript function that checks whether a passed 
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as 
forward, e.g., madam.*/
function isPalindrome(str) {
    var cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    var reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
  }
  
  var inputString = prompt("Enter a string:");
  var isStringPalindrome = isPalindrome(inputString);
  
 if (isStringPalindrome) {
    console.log("The string is a palindrome.");
  } else {
   console.log("The string is not a palindrome.");
  }
  







/*TASK 11
Write a JavaScript function that accepts a string as a 
parameter and converts the first letter of each word of the 
string in upper case. 
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox'*/
function capitalizeFirstLetter(str) {
    var words = str.split(" ");
    var capitalizedWords = [];
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizedWord);
    }
  
    var capitalizedString = capitalizedWords.join(" ");
    return capitalizedString;
  }
  
 var inputString = prompt("Enter a string:");
  var capitalizedString = capitalizeFirstLetter(inputString);
 console.log("Original string: " + inputString);
  console.log("Capitalized string: " + capitalizedString);
  





/*TASK 12
Write a JavaScript function that accepts a string as a 
parameter and find the longest word within the string. 
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development'*/
function findLongestWord(str) {
    var words = str.split(" ");
    var longestWord = "";
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
 var inputString = prompt("Enter a string:");
  var longestWord = findLongestWord(inputString);
  console.log("Original string: " + inputString);
  console.log("Longest word: " + longestWord);
  



/*TASK 13
Write a JavaScript function that accepts two arguments, a 
string and a letter and the function will count the number of*/ 
function countOccurrences(str, letter) {
    var count = 0;
  
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) === letter) {
        count++;
      }
    }
  
    return count;
  }
  
  var inputString = prompt("Enter a string:");
  var inputLetter = prompt("Enter a letter:");
  var occurrences = countOccurrences(inputString, inputLetter);
  console.log("Original string: " + inputString);
 console.log("Letter: " + inputLetter);
  console.log("Occurrences: " + occurrences);
  



/*TASK 14
The Geometrizer
Create 2 functions that calculate properties of a circle, using 
the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output 
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area 
is NN"*/
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference);
  }
  
  function calcArea(radius) {
    var area = Math.PI * radius * radius;
    console.log("The area is " + area);
  }
  
  var radius = parseFloat(prompt("Enter the radius of the circle:"));
  calcCircumference(radius);
  calcArea(radius);
  




