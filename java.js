// Array of images to display in the surprise
const images = ["image1.jpg", "image2.jpg"];
let currentIndex = 0;

// DOM Elements
const imageDisplay = document.getElementById("imageDisplay");
const surpriseButton = document.getElementById("surpriseButton");
const backgroundMusic = document.getElementById("backgroundMusic");
const imageContainer = document.querySelector(".image-container");

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Make sure the audio starts muted initially (to allow autoplay on mobile)
    backgroundMusic.muted = true;
    
    // Event listener for the surprise button
    surpriseButton.addEventListener("click", () => {
        // Hide the surprise button after it's clicked
        surpriseButton.style.display = "none";
        
        // Make the image container visible with a border animation
        imageContainer.classList.add("show");

        // Start the audio
        backgroundMusic.play().then(() => {
            // Unmute the audio after it's started
            backgroundMusic.muted = false;
        }).catch((err) => {
            console.error("Audio playback failed:", err);
        });

        // Start the image slideshow
        showNextImage();
    });
});

// Function to handle image transitions
function showNextImage() {
    if (currentIndex < images.length) {
        // Set the new image source
        imageDisplay.src = images[currentIndex];

        // Trigger fade-in effect
        imageDisplay.classList.remove("visible"); // Reset visibility
        setTimeout(() => {
            imageDisplay.classList.add("visible");
        }, 10); // Delay ensures CSS transition works

        // Move to the next image after 4 seconds
        currentIndex++;
        setTimeout(showNextImage, 4000); // Continue to next image after 4 seconds
    } else {
        // Reset index and loop the slideshow
        currentIndex = 0;
        setTimeout(showNextImage, 4000); // Loop the slideshow
    }
}
