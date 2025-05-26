function navFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " navToggle";
  } else {
    x.className = "topnav";
  }
}
function closeMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav navToggle") {
    x.className = "topnav";
  }
}
