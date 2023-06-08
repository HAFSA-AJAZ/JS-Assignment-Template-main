/*TASK 1
Create a signup form and display form data in your web 
page on submission*/
var form = document.getElementById("signup-form");
var formDataDiv = document.getElementById("form-data");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var formData = "Name: " + name + "<br>" +
                 "Email: " + email + "<br>" +
                 "Password: " + password;

  formDataDiv.innerHTML = formData;
  form.reset();
});






/*TASK 2
Suppose in your webpage there is content area in which 
you have entered your item details, but user can only see 
some details on first look. When user clicks on “Read 
more” button, full detail of that particular item will be 
displayed.*/
var readMoreButtons = document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var item = button.closest(".item");
    var shortDescription = item.querySelector(".short-description");
    var fullDescription = item.querySelector(".full-description");

    shortDescription.classList.toggle("hide");
    fullDescription.classList.toggle("hide");

    button.textContent = fullDescription.classList.contains("hide") ? "Read more" : "Read less";
  });
});




/*TASK 3
In previous assignment you have created a tabular data 
using javascript. Let’s modify that. Create a form which 
takes student’s details and show each student detail in 
table. Each row of table must contain a delete button and 
an edit button. On click on delete button entire row should 
be deleted. On click on edit button, a hidden form will 
appear with the values of that row.*/
var studentForm = document.getElementById("student-form");
var studentTable = document.getElementById("student-table");
var editForm = document.getElementById("edit-form");
var updateButton = document.getElementById("update-btn");
var cancelButton = document.getElementById("cancel-btn");

studentForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var grade = document.getElementById("grade").value;

  var newRow = document.createElement("tr");
  var nameCell = document.createElement("td");
  var ageCell = document.createElement("td");
  var gradeCell = document.createElement("td");
  var actionCell = document.createElement("td");
  var deleteButton = document.createElement("button");
  var editButton = document.createElement("button");

  nameCell.textContent = name;
  ageCell.textContent = age;
  gradeCell.textContent = grade;
  deleteButton.textContent = "Delete";
  editButton.textContent = "Edit";

  deleteButton.addEventListener("click", function() {
    newRow.remove();
  });

  editButton.addEventListener("click", function() {
    document.getElementById("edit-name").value = name;
    document.getElementById("edit-age").value = age;
    document.getElementById("edit-grade").value = grade;

    editForm.classList.remove("hide");
  });

  actionCell.appendChild(deleteButton);
  actionCell.appendChild(editButton);

  newRow.appendChild(nameCell);
  newRow.appendChild(ageCell);
  newRow.appendChild(gradeCell);
  newRow.appendChild(actionCell);

  studentTable.querySelector("tbody").appendChild(newRow);

  studentForm.reset();
});

cancelButton.addEventListener("click", function() {
  editForm.classList.add("hide");
});

updateButton.addEventListener("click", function() {
  var newName = document.getElementById("edit-name").value;
  var newAge = document.getElementById("edit-age").value;
  var newGrade = document.getElementById("edit-grade").value;

  var currentRow = editButton.parentNode.parentNode;
  currentRow.querySelector("td:first-child").textContent = newName;
  currentRow.querySelector("td:nth-child(2)").textContent = newAge;
  currentRow.querySelector("td:nth-child(3)").textContent = newGrade;

  editForm.classList.add("hide");
});



