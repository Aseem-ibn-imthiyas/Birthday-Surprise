
const images = ["image1.jpg", "image2.jpg"]; 
let currentIndex = 0;


const imageDisplay = document.getElementById("imageDisplay");
const surpriseButton = document.getElementById("surpriseButton");
const backgroundMusic = document.getElementById("backgroundMusic");
const imageContainer = document.querySelector(".image-container");


window.onload = () => {
    backgroundMusic.play();
};


surpriseButton.addEventListener("click", () => {
    
    surpriseButton.style.display = "none";

    
    imageContainer.classList.add("show");
    showNextImage();
});


function showNextImage() {
    if (currentIndex < images.length) {
        imageDisplay.src = images[currentIndex];
        imageDisplay.classList.remove("visible"); 
        setTimeout(() => {
            imageDisplay.classList.add("visible"); 
        }, 10); 

        currentIndex++;
        setTimeout(showNextImage, 4000); 
    } else {
        
        currentIndex = 0;
        setTimeout(showNextImage, 4000); 
    }
}
