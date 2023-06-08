/*TASK 1
Consider you have 4 images in a file as shown below:*/
function openModal(imageUrl) {
  var modal = document.getElementById("modal");
  var modalImage = document.getElementById("modal-image");

  modal.style.display = "block";
  modalImage.src = imageUrl;
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}





/*TASK 2
reate a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).*/
var paragraph = document.getElementById("my-paragraph");
var zoomInButton = document.getElementById("zoom-in-btn");
var zoomOutButton = document.getElementById("zoom-out-btn");

zoomInButton.addEventListener("click", function() {
  var currentFontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
  var newFontSize = currentFontSize + 10;
  paragraph.style.fontSize = newFontSize + "px";
});

zoomOutButton.addEventListener("click", function() {
  var currentFontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
  var newFontSize = currentFontSize - 10;
  paragraph.style.fontSize = newFontSize + "px";
});



