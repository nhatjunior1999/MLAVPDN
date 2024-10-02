document.getElementById("menu-icon").addEventListener("click", function () {
  var navList = document.getElementById("nav-list");
  navList.classList.toggle("show");
});

function toggleDetails(sectionId) {
  var section = document.getElementById(sectionId);
  section.style.display = section.style.display === "none" ? "block" : "none";
}
