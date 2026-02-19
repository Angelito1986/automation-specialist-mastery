document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");

    questions.forEach(question => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;

            // Close all others
            document.querySelectorAll(".answer").forEach(a => {
                if (a !== answer) {
                    a.style.display = "none";
                }
            });

            // Toggle current
            answer.style.display =
                answer.style.display === "block" ? "none" : "block";
        });
    });
});
