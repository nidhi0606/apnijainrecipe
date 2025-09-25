// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Recipe Search
const searchInput = document.createElement("input");
searchInput.setAttribute("type", "text");
searchInput.setAttribute("placeholder", "🔎 रेसिपी खोजें...");
searchInput.classList.add("search-bar");

// Add search bar into header
document.querySelector(".site-header .container").appendChild(searchInput);

searchInput.addEventListener("keyup", function() {
  const query = this.value.toLowerCase();
  document.querySelectorAll(".recipe-card").forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
});

// Show/Hide recipe details
const detailSections = document.querySelectorAll(".recipe-detail");
detailSections.forEach(section => section.style.display = "none");

document.querySelectorAll(".recipe-card .btn").forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    detailSections.forEach(sec => sec.style.display = "none");
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.style.display = "block";
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
