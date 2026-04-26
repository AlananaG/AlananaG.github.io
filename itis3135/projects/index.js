document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".track");
    const slides = document.querySelectorAll(".slide");

    let index = 0;

    function moveSlide() {
        index = (index + 1) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveSlide, 3000);
});

document.querySelectorAll(".order-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });
});