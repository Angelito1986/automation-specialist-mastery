document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll(".section");
    const navItems = document.querySelectorAll(".sidebar li");

    navItems.forEach((item, index) => {
        item.addEventListener("click", () => {

            // Hide all sections
            sections.forEach(section => section.classList.remove("active"));

            // Remove active from all nav items
            navItems.forEach(nav => nav.classList.remove("active"));

            // Show selected section
            sections[index].classList.add("active");

            // Highlight selected nav
            item.classList.add("active");
        });
    });

});
