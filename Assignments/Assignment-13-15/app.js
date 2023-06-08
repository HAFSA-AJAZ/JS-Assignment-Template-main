/*TASK 1
Declare an empty array using JS literal notation to store
student names in future.*/
var studentNames = [];



/*TASK 2
Declare an empty array using JS object notation to store
student names in future.*/
var studentNames = [];



/*TASK 3
 Declare and initialize a strings array*/
var fruits = ['apple', 'banana', 'orange', 'mango'];

console.log(fruits[0]);  
console.log(fruits[1]);  
console.log(fruits[2]);  
console.log(fruits[3]);  



/*TASK 4
Declare and initialize a numbers array.*/
var numbers = [1, 2, 3, 4, 5];

console.log(numbers[0]); 
console.log(numbers[1]);  
console.log(numbers[2]);  
console.log(numbers[3]);  
console.log(numbers[4]);  



/*TASK 5
Declare and initialize a boolean array.*/
var booleanArray = [true, false, true, false, true];

console.log(booleanArray[0]);  
console.log(booleanArray[1]);  
console.log(booleanArray[2]);  
console.log(booleanArray[3]);  
console.log(booleanArray[4]);  



/*TASK 6
Declare and initialize a mixed array.*/
var mixedArray = [1, 'apple', true, 3.14, false];

console.log(mixedArray[0]);  
console.log(mixedArray[1]);  
console.log(mixedArray[2]);  
console.log(mixedArray[3]);  
console.log(mixedArray[4]);  



/*TASK 7
Declare and Initialize an array and store available 
education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
BS, BCOM, MS, M. Phil., PhD). Show the listed 
qualifications in your browser like:*/
var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

document.write('<h3>Educational Qualifications in Pakistan:</h3>');
document.write('<ul>');
for (var i = 0; i < qualifications.length; i++) {
  document.write('<li>' + qualifications[i] + '</li>');
}
document.write('</ul>');




/*TASK 8
Write a program to store 3 student names in an array.Take
another array to store score of these three students. 
Assume that total marks are 500 for each student, display 
the scores & percentages of students like:*/

var studentNames = ['Ali', 'Ahmed', 'Affan'];
var studentScores = [380, 450, 410];

var totalMarks = 500;
var studentPercentages = [];
for (var i = 0; i < studentScores.length; i++) {
  var percentage = (studentScores[i] / totalMarks) * 100;
  studentPercentages.push(percentage);

for (var i = 0; i < studentNames.length; i++) {
  console.log('Name: ' + studentNames[i]);
  console.log('Score: ' + studentScores[i]);
  console.log('Percentage: ' + studentPercentages[i] + '%');
  console.log('------------------');
}
}




/*TASK 9
9. Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end 
& add that color to the end of the array. Display the 
updated array in your browser.
c. Add two more color to the beginning of the array. 
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color 
& color name. Then add the color to desired 
position/index. . Display the updated array in your 
browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.*/
var colors = ['Red', 'Green', 'Blue'];
document.write('<h3>Original Array:</h3>');
document.write(colors.join(', '));


var colorToAddToBeginning = prompt('Enter a color to add to the beginning:');
colors.unshift(colorToAddToBeginning);


document.write('<h3>Array after adding color to the beginning:</h3>');
document.write(colors.join(', '));


var colorToAddToEnd = prompt('Enter a color to add to the end:');
colors.push(colorToAddToEnd);


document.write('<h3>Array after adding color to the end:</h3>');
document.write(colors.join(', '));


colors.unshift('Purple', 'Yellow')


document.write('<h3>Array after adding two more colors to the beginning:</h3>');
document.write(colors.join(', '));


colors.shift();


document.write('<h3>Array after deleting the first color:</h3>');
document.write(colors.join(', '));


colors.pop();


document.write('<h3>Array after deleting the last color:</h3>');
document.write(colors.join(', '));


var indexToAdd = prompt('Enter the index where you want to add a color:');
var colorToAdd = prompt('Enter the color to add at the specified index:');
colors.splice(indexToAdd, 0, colorToAdd);


document.write('<h3>Array after adding color at a specific index:</h3>');
document.write(colors.join(', '));


var indexToDelete = prompt('Enter the index from where you want to delete color(s):');
var numOfColorsToDelete = prompt('Enter the number of colors to delete from the specified index:');
colors.splice(indexToDelete, numOfColorsToDelete);


document.write('<h3>Array after deleting color(s) from a specific index:</h3>');
document.write(colors.join(', '));





/*TASK 10
Write a program to store student scores in an array & 
sort the array in ascending order using Array’s sort 
method.*/
var studentScores = [78, 85, 67, 90];
console.log('Original Array:', studentScores);





/*TASK 11
Write a program to initialize an array with city names. 
Copy 3 array elements from cities array to selectedCities 
array.*/
var cities = ['London', 'New York', 'Paris'];
var selectedCities = [];
selectedCities.push(cities[0], cities[1], cities[2]);
console.log('Selected Cities:', selectedCities);






/*TASK 12
Write a program to create a single string from the 
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method)*/
var array = ["This", "is", "my", "cat"];
var singleString = array.join(" ");
console.log(singleString);




/*TASK 13
Create a new array. Store values one by one in such a way
that you can access the values in the order in which they 
were stored. (FIFO-First In First Out)*/
var fifoArray = [];


fifoArray.push("Value 1");
fifoArray.push("Value 2");
fifoArray.push("Value 3");


console.log(fifoArray.shift()); 
console.log(fifoArray.shift()); 
console.log(fifoArray.shift());



/*TASK 14
 Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last InFirst Out)*/
var lifoArray = [];

lifoArray.push("Value 1");
lifoArray.push("Value 2");
lifoArray.push("Value 3");


console.log(lifoArray.pop()); 
console.log(lifoArray.pop()); 
console.log(lifoArray.pop()); 




/*TASK 15
Write a program to store phone manufacturers (Apple,
    Samsung, Motorola, Nokia, Sony & Haier) in an array. 
    Display the following dropdown/select menu in your 
    browser using document.write() method*/
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");
for (var i = 0; i < manufacturers.length; i++) {
  document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");
