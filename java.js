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
    // Play muted audio on page load (autoplay is allowed when muted)
    backgroundMusic.play().catch(() => {
        console.warn("Autoplay was blocked. Waiting for user interaction.");
    });

    // Create a button that prompts the user to start the music
    const playButton = document.createElement("button");
    playButton.textContent = "Tap to Start Music 🎵";
    playButton.style.cssText = `
        position: absolute; 
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%); 
        padding: 10px 20px; 
        font-size: 18px;
        background-color: #ff1493;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    `;
    document.body.appendChild(playButton);

    // On user interaction (button click), unmute and start the audio
    playButton.addEventListener("click", () => {
        backgroundMusic.muted = false;  // Unmute the audio
        backgroundMusic.play().then(() => {
            playButton.remove();  // Remove the button once audio starts playing
        }).catch((err) => {
            console.error("Audio playback failed:", err);
        });
    });
});

// Event listener for the surprise button
surpriseButton.addEventListener("click", () => {
    // Hide the button after it's clicked
    surpriseButton.style.display = "none";

    // Make the image container visible with a border animation
    imageContainer.classList.add("show");

    // Start the image slideshow
    showNextImage();
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
