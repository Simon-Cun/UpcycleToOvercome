function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var i = getRandomInt(0, 14);
var images = [];
var time = 5000;

// Populate the images array
for (let j = 1; j <= 15; j++) {  // Changed loop variable to j
    images.push("SlideShowImg/" + j + ".jpg");
}

// Slide show function
function slideShow() {
    document.slide.src = images[i];
    
    i = getRandomInt(0, 14);

    setTimeout(slideShow, time);  // Corrected to pass the function directly
}

// Ensure the page is loaded before running the slide show
window.onload = slideShow;  // Fixed window object typo
