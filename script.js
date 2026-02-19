document.addEventListener("DOMContentLoaded", function () {

  // Sidebar Switching
  const sections = document.querySelectorAll(".section");
  const navItems = document.querySelectorAll(".sidebar li");

  navItems.forEach((item, index) => {
    item.addEventListener("click", () => {

      sections.forEach(sec => sec.style.display = "none");
      navItems.forEach(nav => nav.classList.remove("active"));

      sections[index].style.display = "block";
      item.classList.add("active");

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

});

// Toggle Answer
function toggle(element) {
  const answer = element.parentElement.querySelector(".answer");

  if (!answer) return;

  answer.classList.toggle("show");
  element.classList.toggle("open");
}
