function toggleDropdown(card) {
    let content = card.querySelector(".container_content");
    content.classList.toggle("active");
}

function changeSlide(button, direction) {
    let slideshow = button.parentElement; 
    let slides = slideshow.querySelectorAll(".slide");
    let activeIndex = [...slides].findIndex(slide => slide.classList.contains("active"));

    if (activeIndex === -1) {
        console.error("No active slide found!");
        return;
    }

    slides[activeIndex].classList.remove("active");

    let newIndex = (activeIndex + direction + slides.length) % slides.length;
    slides[newIndex].classList.add("active");
}