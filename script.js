// Show selected recipe
function openRecipe(evt, recipeName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(recipeName).style.display = "block";
  evt.currentTarget.style.backgroundColor = "#ff4500";
}

// Show first recipe by default
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tablink").click();
});
