document.addEventListener("DOMContentLoaded", function () {

  // Sidebar Navigation Switching
  const sections = document.querySelectorAll(".section");
  const navItems = document.querySelectorAll(".sidebar li");

  navItems.forEach((item, index) => {
    item.addEventListener("click", () => {

      // Hide all sections
      sections.forEach(sec => sec.style.display = "none");

      // Remove active class from nav
      navItems.forEach(nav => nav.classList.remove("active"));

      // Show selected section
      sections[index].style.display = "block";
      item.classList.add("active");

      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

});


// Toggle Q&A Cards
function toggle(element) {
  const answer = element.nextElementSibling;

  // Close other open answers inside same section
  const allAnswers = element.closest(".section").querySelectorAll(".answer");
  allAnswers.forEach(ans => {
    if (ans !== answer) {
      ans.classList.remove("show");
      if (ans.previousElementSibling) {
        ans.previousElementSibling.classList.remove("open");
      }
    }
  });

  // Toggle current
  answer.classList.toggle("show");
  element.classList.toggle("open");
}
