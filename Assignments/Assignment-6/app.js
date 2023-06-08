//TASK 1
//Write a program to take a number in a variable, do the
//required arithmetic to display the following result in your
//browser:
document.write("<h2> Result </h2>");
var num = 10;
var number = num * 1;
document.write(" The value of a is:" + number + "<br>");


//TASK 2
//What will be the output in variables a, b & result after
//execution of the following script:
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
//Explain the output at each stage:
//--a;
//--a - --b;
//--a - --b + ++b;
//--a - --b + ++b + b--;
var a = 2, b = 1;


//TASK 3
//Write a program that takes input a name from user & 
//greet the user.
var name = prompt("Enter your name:");
var greeting = "Hello, "  + "! Welcome."
document.write(greeting);


//TASK 5
//Write a program to take input a number from user & 
//display it's multiplication table on your browser. If user 
//does not enter a new number, multiplication table of 5 
//should be displayed by default.
    var number = document.getElementById("numberInput").value;

    if (number === "") {
        number = 5;
    }
    var table = document.getElementById("table");
    table.innerHTML = "";

    for (var i = 1; i <= 10; i++) {
        var result = number * i;
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = number;
        cell2.innerHTML = "x " + i + " = " + result;
    }


//TASK 6
// Take
//a) Take three subjects name from user and store them in 3 
//different variables.
//b) Total marks for each subject is 100, store it in another 
//variable.
//c) Take obtained marks for first subject from user and 
//stored it in different variable.
//d) Take obtained marks for remaining 2 subjects from user 
//and store them in variables.
//e) Now calculate total marks and percentage and show the 
//result in browser like this.(Hint: user table)
document.write("<h2> Suject Total Marks Obtained Mark Percentage ");

var subject1 = English;
 document.write("subject1" + "<br>");

 var subject2 = Math;
  document.write("subject2" + "<br>"); 

  var subject3 =Urdu;
   document.write("subject3" + "<br>");

var totalMarks = 100;

 var obtained1 = 82;
 document.write("obtained1" + "<br>");

  var obtained2 = 75;
  document.write("obtained2" + "<br>");

  var obtained3 = 65;
  document.write("obtained3" + "<br>");

    var totalObtainedMarks = obtained1 + obtained2 + obtained3;
   var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;




   