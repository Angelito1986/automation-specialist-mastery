document.addEventListener("DOMContentLoaded", function () {

  // ===== Sidebar Navigation =====
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


  // ===== Q&A Toggle (Accordion) =====
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const header = card.querySelector("h3");
    const answer = card.querySelector(".answer");

    if (!header || !answer) return;

    header.addEventListener("click", () => {

      const isOpen = answer.classList.contains("show");

      // Close all
      document.querySelectorAll(".answer").forEach(a => {
        a.classList.remove("show");
        a.style.maxHeight = null;
      });

      document.querySelectorAll(".card h3").forEach(h => {
        h.classList.remove("open");
      });

      // Open clicked
      if (!isOpen) {
        answer.classList.add("show");
        answer.style.maxHeight = answer.scrollHeight + "px";
        header.classList.add("open");
      }
    });
  });

});
