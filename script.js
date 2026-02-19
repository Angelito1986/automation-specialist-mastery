document.addEventListener("DOMContentLoaded", function () {

  const sections = document.querySelectorAll(".section");
  const navItems = document.querySelectorAll(".sidebar li");

  navItems.forEach((item, index) => {
    item.addEventListener("click", function () {

      // Hide all sections
      sections.forEach(sec => sec.classList.remove("active"));

      // Remove active from all nav items
      navItems.forEach(i => i.classList.remove("active"));

      // Show selected section
      sections[index].classList.add("active");

      // Highlight active nav item
      item.classList.add("active");
    });
  });

});
