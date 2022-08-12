// $(document).ready(function(){
//   $('.card').click(function () {
//     $('.card__overlay').show();
//   });
//   $('.overlay__close').click(function () {
//     $('.card__overlay').hide();
//     console.log("clicked")
//   });
// });

var openedID;

function showOverlay(id) {
  openedID = id;
  var clicked = document.getElementById(openedID);
  var child = clicked.querySelector('.overlay');
  child.style.display = "block";
  child.style.visibility = "visible"
}

function hideOverlay(object) {
  var clicked = document.getElementById(openedID);
  var child = clicked.querySelector('.overlay');
  child.removeAttribute("style");
}