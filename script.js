// Function to show selected recipe tab
function openRecipe(evt, recipeName) {
  var i, tabcontent, tablinks;

  // Hide all tabs
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove active style from buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show current tab and highlight button
  document.getElementById(recipeName).style.display = "block";
  evt.currentTarget.style.backgroundColor = "#ff4500";
}

// Show the first recipe by default
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tablink").click();
});

