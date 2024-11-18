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

  
  // document.addEventListener("DOMContentLoaded", () => {
  //   const chatbotContainer = document.getElementById("bp-webchat-container");
  
  //   // Function to ensure the chatbot is always on top
  //   function keepChatbotOnTop() {
  //     chatbotContainer.style.position = "fixed"; // Fix the chatbot position on the screen
  //     chatbotContainer.style.zIndex = "9999"; // Ensure it's above all other content
  //     chatbotContainer.style.bottom = "20px"; // Ensure it stays at the bottom of the screen
  //     chatbotContainer.style.right = "20px"; // Ensure it stays on the right side
  //   }
  
  //   // Call the function to set the position and z-index initially
  //   keepChatbotOnTop();
  // });
  