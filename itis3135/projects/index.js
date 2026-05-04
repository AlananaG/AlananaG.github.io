//Slideshow & button activation
document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".track");
    const slides = document.querySelectorAll(".slide");

    if (track && slides.length > 0) {
        let index = 0;

        function moveSlide() {
            index = (index + 1) % slides.length;
            track.style.transform = `translateX(-${index * 100}%)`;
        }

        setInterval(moveSlide, 3000);
    }

    const buttons = document.querySelectorAll(".order-btn");

    if (buttons.length > 0) {
        buttons.forEach((btn) => {
            btn.addEventListener("click", () => {
                btn.classList.toggle("active-btn");
            });
        });
    }

});