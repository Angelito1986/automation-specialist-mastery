document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const question = card.querySelector("h3");

        question.addEventListener("click", function () {

            // Close all other open cards (accordion behavior)
            cards.forEach(c => {
                if (c !== card) {
                    c.classList.remove("active");
                }
            });

            // Toggle clicked card
            card.classList.toggle("active");
        });

    });

});
