//TASK 1
//Write a program that take two numbers & add them in a 
//new variable. Show the result in your browser.
// Take two numbers as input
var sum = 3 + 5;
document.write(" The Sum Of " + 3 + " And " + 5 + " Is " + 8 + "<br>");



//TASK 2
//Repeat task1 for subtraction, multiplication, division &
//modulus.
var subtraction = 8-6;
document.write(" The Subtraction Of " + 8 + " And " + 6 + " Is " + 2 + "<br>");

var multiplication = 12*9;
document.write(" The Multiplication Of " + 12 + " And " + 9 + " Is " + 108 + "<br>");

var division = 34/7;
document.write(" The division Of " + 34 + " And " + 9 + " Is " + 3.7777 + "<br>");



//TASK 3
//Do the following using JS Mathematic Expressions
//a. Declare a variable.
//b. Show the value of variable in your browser like "Value
//after variable declaration is: ??".
//c. Initialize the variable with some number.
//d. Show the value of variable in your browser like "Initial
//value: 5".
//e. Increment the variable.
//f. Show the value of variable in your browser like "Value
//after increment is: 6".
//g. Add 7 to the variable.
//h. Show the value of variable in your browser like "Value
//after addition is: 13".
//i. Decrement the variable.
//j. Show the value of variable in your browser like "Value
//after decrement is: 12".
//k. Show the remainder after dividing the variable's value 
//by 3. 
//l. Output : "The remainder is : 0".
var num;
document.write("Value after variable declaration is " + num + "<br>");

 num = 5;
document.write("Initial value: " + num + "<br>");

 num ++ ;
document.write("Value after increment is: " + num + "<br>");

 num+= 7;
document.write("Value after addition is: " + num + "<br>");

num-- ;
document.write("Value after decrement is: " + num + "<br>");

var remainder = 0 % 3;
document.write("The remainder is:" + remainder + "<br>");



//TASK 4
//4. Cost of one movie ticket is 600 PKR. Write a script to 
//store
//ticket price in a variable & calculate the cost of buying 5 
//tickets
//to a movie. Example output:
var ticketprice = 600;
var totalcost = 600 * 5;
document.write(" Total Cost To Buy " + " 5 Tickets To a Movie Is " + totalcost + "<br>");



//TASK 5
//5. Write a script to display multiplication table of any 
//number in your browser. E.g
// Define the number for which the multiplication table will be generated
var number = 4;
document.write("<h2> Table of 4 </h2>");
for (var i = 1; i <= 10; i++) {
  var result = number * i;
  document.write(number + " x " + i + " = " + result + "<br>");
}

//TASK 6
//6. The Temperature Converter: It's hot out! Let's make a 
//converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output "NNoC is NNoF".
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output "NNoF is NNoC".
// Step 1: Store a Celsius temperature into a variable
var celsiusTemperature 




//TASK 7
//Write a program to implement checkout process of a 
//shopping cart system for an e-commerce website. Store 
//the following in variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges
//Compute the total cost & show the receipt in your browser.
//var shoppingcard ;
//document.write("<h2> Shopping Card </h2>");
//var priceofitem1 = 650;
//var quantityofitem1 = 3;
//var priceofitem2 = 100;
//var quantityofitem2 = 7;
//document.write(" Price of item 1 is 650 " + " Quantity of item 1 is 3 " + " Price of item 2 is 100 " + " Quantity of item 2 is 7 " + " Shipping charges 100 " );
// Store the prices and quantities in variables
var shoppingcart ;
document.write("<h2> Shopping Cart </h2>");

var item1Price = 650;
var item2price = 100;

var item1Quantity = 3;
var item2Quantity = 7;

var shippingCharges = 100;


var total = (item1Price * item1Quantity) + (item2price * item2Quantity);
var totalcost = total + shippingCharges;
document.write("<h2> Receipt </h2>");
document.write(" Price of item 1 is: " + item1Price + "<br>");
document.write(" Quantity of item 1 is: " + item1Quantity + "<br>" );
document.write(" Price of item 2 is: " + item2price + "<br>");
document.write(" Quantity of item 2 is: " + item2Quantity + "<br>");
document.write(" Shipping Charges " + shippingCharges + "<br>");
document.write(" Total " + total + "<br>");
document.write(" Total cost of your order is " + totalcost);


//TASK 8
//8. Store total marks & marks obtained by a student in 2 
//variables. Compute the percentage & show the result in 
//your browser
var markssheet;
document.write("<h2> Marks Sheet </h2>");

var totalmarks = 980 ;
var marksobtained = 804;
var percentage = (marksobtained / totalmarks) * 100;
document.write(" percentage: " +  percentage + "%");




//TASK 9
//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
//script to convert the total currency to Pakistani Rupees. 
//Perform all calculations in a single expression.
//(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
//and 1 Saudi Riyal = 28 Pakistani Rupee)
var currencyinPKR ;
document.write("<h2> Currency in PKR </h2>");
us_dollars = 10
saudi_riyals = 25

usd_to_pkr_rate = 104.80
sar_to_pkr_rate = 28

total_pkr = (us_dollars * usd_to_pkr_rate) + (saudi_riyals * sar_to_pkr_rate);

document.write("Total Currency in PKR:" + total_pkr + "<br>");



//TASK 10
// Write a program to initialize a variable with some 
//number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression
number = 7;
result = (((number + 5) * 10) / 2);
document.write("Result:"+  result + "<br>");



//TASK 11
// The Age Calculator: Forgot how old someone is? 
//Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored 
//values.
//Output them to the screen like so: "They are either NN or NN
//years old".

var currentYear = 2016 ;
var birthYear = 1992;

var age1 = currentYear - birthYear;

document.write("They are ", age1, "years old.");



//TASK 12
//The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and
//output "The circumference is NN".
//(Hint : Circumference of a circle = 2 π r , π = 3.142)
//Calculate the area based on the radius, and output “The 
//area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
document.write("<h2> The Geometrizer </h2>");
var radius = 5;
var circumference = 2 * Math.PI * radius;
document.write("The circumference is: " + circumference + "<br>");

var area = Math.PI * Math.pow(radius, 2);
document.write("The area is: " + area + "<br>");



//TASK 13
//The Lifetime Supply Calculator: Ever wonder how
//much a "lifetime supply" of your favorite snack is? 
//Wonder no more.
//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of
//your life.
//Output the result to the screen like so: "You will need 
//NNNN to last you until the ripe old age of NN".
document.write("<h2> The Lifetime Supply Calculator </h2>");

var favoriteSnack = "chocolate chip";
var currentAge = 15;
var maximumAge = 65;
var snacksPerDay = 3;

var yearsRemaining = maximumAge - currentAge;
var snacksLifetime = snacksPerDay * 3 * yearsRemaining;
document.write("You will need ", snacksLifetime, " to last you until the ripe old age of ", maximumAge);












