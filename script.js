// script.js

function openRecipe(evt, recipeName) {
  // सभी रेसिपी कंटेंट को छुपाएँ
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // सभी बटन से active क्लास हटाएँ
  let tablinks = document.getElementsByClassName("tablink");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // चुनी हुई रेसिपी दिखाएँ और बटन को active बनाएँ
  document.getElementById(recipeName).style.display = "block";
  evt.currentTarget.className += " active";
}

// पेज लोड होते ही पहली रेसिपी दिखाएँ
document.addEventListener("DOMContentLoaded", function() {
  // पहली टैब को एक्टिव करें (टोफू और अखरोट रोल)
  let firstTab = document.getElementsByClassName("tablink")[0];
  if (firstTab) {
    firstTab.click();
  }
});
