// Slideshow functionality
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Remove active class from all slides
        if (i === index) {
            slide.classList.add('active'); // Add active class to current slide
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to first slide
    showSlide(currentSlide);
}

// Initialize the slideshow
showSlide(currentSlide);
setInterval(nextSlide, 2000); // Change slide every 4 seconds

// Custom cursor functionality
const cursor = document.querySelector('.cursor');

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    // Position the cursor based on mouse coordinates
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});


