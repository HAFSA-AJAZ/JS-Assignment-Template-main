/*TASK 1
Write a custom function power ( a, b ), to calculate the value of 
a raised to b.*/
function power(a, b) {
    var result = Math.pow(a, b);
    return result;
  }
  
  var base = parseInt(prompt("Enter the base number:"));
  var exponent = parseInt(prompt("Enter the exponent:"));
  var powerResult = power(base, exponent);
  console.log(base + " raised to " + exponent + " is " + powerResult);
  










/*TASK 2
Any year is entered through the keyboard. Write a function to 
determine whether the year is a leap year or not.*/
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  var inputYear = parseInt(prompt("Enter a year:"));
  var isLeap = isLeapYear(inputYear);
  
  if (isLeap) {
    console.log(inputYear + " is a leap year.");
  } else {
    console.log(inputYear + " is not a leap year.");
  }
  










/*TASK 3
If the lengths of the sides of a triangle are denoted by a, b, and 
c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2
Calculate area of triangle using 2 functions*/
function calculateSemiPerimeter(a, b, c) {
    var semiPerimeter = (a + b + c) / 2;
    return semiPerimeter;
  }
  
  function calculateTriangleArea(a, b, c) {
    var semiPerimeter = calculateSemiPerimeter(a, b, c);
    var area = Math.sqrt(
      semiPerimeter *
      (semiPerimeter - a) *
      (semiPerimeter - b) *
      (semiPerimeter - c)
    );
    return area;
  }
  
  var sideA = parseInt(prompt("Enter the length of side A:"));
  var sideB = parseInt(prompt("Enter the length of side B:"));
  var sideC = parseInt(prompt("Enter the length of side C:"));
  
  var triangleArea = calculateTriangleArea(sideA, sideB, sideC);
  console.log("The area of the triangle is: " + triangleArea);
  










/*TASK 4
Write a function that receives marks received by a student in 3 
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction 
and other are for average and percentage. Call those functions 
from mainFunction and display result in mainFunction.*/
function calculateAverage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3;
    var average = totalMarks / 3;
    return average;
  }
  
  function calculatePercentage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3;
    var totalPossibleMarks = 300; 
    var percentage = (totalMarks / totalPossibleMarks) * 100;
    return percentage;
  }

  function mainFunction() {
    var subject1Marks = parseInt(prompt("Enter marks for subject 1:"));
    var subject2Marks =parseInt(prompt("Enter marks for subject 2:"));
    var subject3Marks = parseInt(prompt("Enter marks for subject 3:"));
  
    var averageMarks = calculateAverage(subject1Marks, subject2Marks, subject3Marks);
    var percentageMarks = calculatePercentage(subject1Marks, subject2Marks, subject3Marks);
  
    console.log("Average Marks: " + averageMarks);
    console.log("Percentage: " + percentageMarks + "%");
  }
  
  mainFunction();
  









/*TASK 5
You have learned the function indexOf. Code your own custom 
function that will perform the same functionality. You can code 
for single character as of now.*/
function indexOfCustom(str, char) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i;
      }
    }
    return -1;
  }
  var string = "Hello, World!";
  var character = "o";
  
  var index = indexOfCustom(string, character);
  console.log("Index of '" + character + "' in the string is: " + index);
  











/*TASK 6
Write a function to delete all vowels from a sentence. Assume 
that the sentence is not more than 25 characters long.*/
function deleteVowels(sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var result = '';
  
    for (var i = 0; i < sentence.length; i++) {
      var char = sentence[i];
  
      if (!vowels.includes(char)) {
        result += char;
      }
    }
  
    return result;
  
}
  var sentence = "Hello, how are you today?";
  var result = deleteVowels(sentence);
  console.log(result);
  









/*TASK 7
 Write a function with switch statement to count the number of 
occurrences of any two vowels in succession in a line of text. 
For example, in the sentence*/
function countSuccessiveVowels(text) {
    var count = 0;
    text = text.toLowerCase();
  
    for (var i = 0; i < text.length - 1; i++) {
      var currentChar = text[i];
      var nextChar = text[i + 1];
  
      switch (currentChar) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          if (isVowel(nextChar)) {
            count++;
          }
          break;
      }
    }
  
    return count;
  }
  
  function isVowel(char) {
    return 'aeiou'.includes(char);
  }
  

  var sentence = "For example, in the sentence";
  var result = countSuccessiveVowels(sentence);
  console.log("Number of occurrences of successive vowels: " + result);
  








/*TASK 8
The distance between two cities (in km.) is input through the 
keyboard. Write four functions to convert and print this 
distance in meters, feet, inches and centimeters.*/
function convertToMeters(distance) {
    return distance * 1000;
  }
  
  function convertToFeet(distance) {
    return distance * 3280.84;
  }
  
  function convertToInches(distance) {
    return distance * 39370.1;
  }
  
  function convertToCentimeters(distance) {
    return distance * 100000;
  }
  
  var distanceInKilometers = parseInt(prompt("Enter the distance between two cities in kilometers:"));
  
  var distanceInMeters = convertToMeters(distanceInKilometers);
  var distanceInFeet = convertToFeet(distanceInKilometers);
  var distanceInInches = convertToInches(distanceInKilometers);
  var distanceInCentimeters = convertToCentimeters(distanceInKilometers);
  
  console.log("Distance in Meters: " + distanceInMeters);
  console.log("Distance in Feet: " + distanceInFeet);
  console.log("Distance in Inches: " + distanceInInches);
  console.log("Distance in Centimeters: " + distanceInCentimeters);
  










/*TASK 9
Write a program to calculate overtime pay of employees. 
Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
worked above 40 hours. Assume that employees do not work 
for fractional part of an hour.*/
function calculateOvertimePay(hoursWorked) {
    var regularHours = 40;
    var overtimeRate = 12.00;
    var overtimeHours = hoursWorked - regularHours;
    var overtimePay = 0;
  
    if (overtimeHours > 0) {
      overtimePay = overtimeHours * overtimeRate;
    }
  
    return overtimePay;
  }
  
  var hoursWorked = parseInt(prompt("Enter the number of hours worked:"));
  
  var overtimePay = calculateOvertimePay(hoursWorked);
  
  console.log("Overtime Pay: Rs. " + overtimePay.toFixed(2));
  








/*TASK 10
A cashier has currency notes of denominations 10, 50 and 
100. If the amount to be withdrawn is input through the 
keyboard in hundreds, find the total number of currency notes 
of each denomination the cashier will have to give to the 
withdrawer.*/
function calculateCurrencyNotes(amountInHundreds) {
    var denomination100 = 100;
    var denomination50 = 50;
    var denomination10 = 10;
  
    var notes100 = Math.floor(amountInHundreds);
    var remainingAmount = amountInHundreds % 1;
  
    var notes50 = Math.floor(remainingAmount / (denomination50 / denomination100));
    remainingAmount %= denomination50 / denomination100;
  
    var notes10 = Math.floor(remainingAmount / (denomination10 / denomination100));
  
    return {
      notes100: notes100,
      notes50: notes50,
      notes10: notes10
    };
  }
  
  var amountInHundreds = parseInt(prompt("Enter the withdrawal amount in hundreds:"));
  
  var currencyNotes = calculateCurrencyNotes(amountInHundreds);
  
  console.log("Number of 100 notes: " + currencyNotes.notes100);
  console.log("Number of 50 notes: " + currencyNotes.notes50);
  console.log("Number of 10 notes: " + currencyNotes.notes10);
  



