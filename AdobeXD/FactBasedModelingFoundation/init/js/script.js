document.addEventListener("DOMContentLoaded", function () {
  const openIcon = document.getElementById("openIcon");
  const closeIcon = document.getElementById("closeIcon");
  const menuDropdown = document.querySelector(".menu-dropdown");
  const menuItems = document.querySelectorAll(".menu-rows .row");
  const menuMenu = document.querySelector(".menu");

  menuMenu.addEventListener("click", function () {
    menuDropdown.classList.toggle("show");
    openIcon.style.display = menuDropdown.classList.contains("show")
      ? "none"
      : "block";
    closeIcon.style.display = menuDropdown.classList.contains("show")
      ? "block"
      : "none";
  });

  document.addEventListener("click", function (event) {
    if (
      !menuDropdown.contains(event.target) &&
      !menuMenu.contains(event.target)
    ) {
      menuDropdown.classList.remove("show");
      menuItems.forEach(function (item) {
        item.style.opacity = "1"; // Reset opacity for all menu items
      });
      openIcon.style.display = "block"; // Show the openIcon
      closeIcon.style.display = "none"; // Hide the closeIcon
    }
  });

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      menuDropdown.classList.remove("show");
      menuItems.forEach(function (item) {
        item.style.opacity = "1"; // Set opacity to 1 for all menu items
      });
      openIcon.style.display = "block"; // Show the openIcon
      closeIcon.style.display = "none"; // Hide the closeIcon
    });
  });

  let currentYear = new Date().getFullYear();
  const yearSpan = document.querySelector(".yearSpan");
  yearSpan.textContent = currentYear;
});
