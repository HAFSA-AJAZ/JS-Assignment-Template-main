/*TASK 1
Show an alert box on click on a link.*/
var link = document.getElementById("myLink");
link.addEventListener("click", function() {

  alert("Link clicked!");
});








/*TASK 2
Display some Mobile images in browser. On click on an 
image Show the message in alert to user.*/
var mobileImages = document.getElementsByClassName("mobile-image");

for (var i = 0; i < mobileImages.length; i++) {
  mobileImages[i].addEventListener("click", function() {

    var altText = this.alt;
    
    alert("You clicked on " + altText);
  });
}








/*TASK 3
Display 10 student records in table and each row should contain a delete 
button. If you click on a button to delete a record, entire row should be 
deleted. */
var deleteButtons = document.getElementsByClassName("delete-btn");

for (var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function() {
    var row = this.parentNode.parentNode;
    
    row.remove();
  });
}









/*TASK 4
Display an image in browser. Change the picture on mouseover and set the
first picture on mouseout.*/
function changePicture(newImage) {
    var imageElement = document.getElementById("image");
    imageElement.src = newImage;
  }
  







/*TASK 5
Show a counter in browser. Counter should increase on click on increase 
button and decrease on click on decrease button. And show updated counter 
value in browser.*/
var counter = 0;

function updateCounter() {
  var counterElement = document.getElementById("counter");
  counterElement.textContent = counter;
}
document.getElementById("increaseBtn").addEventListener("click", function() {
  counter++;
  updateCounter();
});

document.getElementById("decreaseBtn").addEventListener("click", function() {
  if (counter > 0) {
    counter--;
    updateCounter();
  }
});
updateCounter();







