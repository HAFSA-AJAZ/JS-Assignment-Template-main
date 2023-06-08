/*TASK 1
Consider you have following code snippet:
i. Get element of id “main-content” and assign them in a variable.*/
var mainContent = document.getElementById("main-content");
var mainContent = document.getElementById("main-content");
var childElements = mainContent.children;

for (var i = 0; i < childElements.length; i++) {
  console.log(childElements[i]);
}
var renderElements = document.getElementsByClassName("render");

for (var i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}

var firstNameInput = document.getElementById("first-name");

firstNameInput.value = "Ali";



var lastNameInput = document.getElementById("last-name");


var emailInput = document.getElementById("email");

lastNameInput.value = "Ahmed";
emailInput.value = "Ali@example.com";



/*TASK 2
use HTML code of question 1 and show the result on browser.
i. What is node type of element having id “form-content”.
ii. Show node type of element having id “lastName” and its child node.
iii. Update child node of element having id “lastName”.
iv. Get First and last child of id “main-content”.
v. Get next and previous siblings of id “lastName”.
vi. Get parent node and node type of element having id “email”*/
var formContent = document.getElementById("form-content");
console.log("Node type of element with id 'form-content': " + formContent.nodeType);

var lastName = document.getElementById("lastName");
console.log("Node type of element with id 'lastName': " + lastName.nodeType);
console.log("Child node of element with id 'lastName': " + lastName.childNodes[0].nodeType);

lastName.childNodes[0].nodeValue = "New Last Name";

var mainContent = document.getElementById("main-content");
console.log("First child of element with id 'main-content': " + mainContent.firstChild.nodeName);
console.log("Last child of element with id 'main-content': " + mainContent.lastChild.nodeName);

var lastNameElement = document.getElementById("lastName");
console.log("Next sibling of element with id 'lastName': " + lastNameElement.nextSibling.nodeName);
console.log("Previous sibling of element with id 'lastName': " + lastNameElement.previousSibling.nodeName);

var emailElement = document.getElementById("email");
console.log("Parent node of element with id 'email': " + emailElement.parentNode.nodeName);
console.log("Node type of element with id 'email': " + emailElement.nodeType);







