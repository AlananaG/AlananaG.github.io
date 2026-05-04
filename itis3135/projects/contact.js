const questions = document.querySelectorAll(".faq-question");
//Drop down menu where after a user clicks, everything expands.
questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        const isOpen = question.getAttribute("aria-expanded") === "true";

        question.setAttribute("aria-expanded", !isOpen);

        if (isOpen) {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});