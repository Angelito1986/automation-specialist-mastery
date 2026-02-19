document.addEventListener("DOMContentLoaded", function () {

  const sections = document.querySelectorAll(".section");
  const navItems = document.querySelectorAll(".sidebar li");

  navItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      
      sections.forEach(sec => sec.style.display = "none");
      sections[index].style.display = "block";

      navItems.forEach(i => i.style.color = "#94a3b8");
      item.style.color = "#00ff9d";
    });
  });

});
