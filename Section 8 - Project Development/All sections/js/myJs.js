/* This function uses the navToggle class to open/close mobile menu */
function navFunction() {
  /* x is now the myTopnav element */
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    /* E.g if the navToggle class is not already there */
    /* Add it in, thus opening the mobile menu */
    x.className += " navToggle";
  } else {
    /* Else, if the navToggle class is already there then ... */
    /* Remove the navToggle class, thus closing the menu */
    x.className = "topnav";
  }
}

/* Close the mobile menu, once a link is clicked */
function closeMenu() {
  /* x is now the myTopnav element */
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav navToggle") {
    /* E.g if the mobile menu is open */
    /* Remove the navtoggle class to close it */
    x.className = "topnav";
  }
}
