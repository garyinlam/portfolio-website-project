var openedID;

function showOverlay(id) {
  openedID = id.parentNode.id + "-overlay";
  var clicked = document.getElementById(openedID);
  clicked.style.display = "block";
}

function hideOverlay(object) {
  var clicked = document.getElementById(openedID);
  clicked.style.display = "none";
}