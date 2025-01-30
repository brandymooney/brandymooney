function toggleDropdown(card) {
    let content = card.querySelector(".container_content");
    content.classList.toggle("active");
}

function changeSlide(button, direction) {
    let slideshow = button.closest(".slideshow-container");
    let slides = slideshow.querySelectorAll(".slide");
    let activeIndex = [...slides].findIndex(slide => slide.classList.contains("active"));

    slides[activeIndex].classList.remove("active");

    let newIndex = (activeIndex + direction + slides.length) % slides.length;
    slides[newIndex].classList.add("active");
}