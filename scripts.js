let openedID;

function showOverlay(id) {
  openedID = id.parentNode.id + "-overlay";
  let clicked = document.getElementById(openedID);
  clicked.style.display = "block";
}

function hideOverlay(object) {
  let clicked = document.getElementById(openedID);
  clicked.style.display = "none";
}