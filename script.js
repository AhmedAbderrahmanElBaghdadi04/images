// Select all smaller images
const images = document.querySelectorAll('.gallery figure img');
// Select the large image and its text
const largeImage = document.getElementById('large-image').querySelector('img');
const largeText = document.getElementById('large-text');

// Add event listeners to each smaller image
images.forEach((img) => {
    img.addEventListener('mouseover', () => updateLargeImage(img));
    img.addEventListener('mouseleave', resetLargeImage);
    img.addEventListener('focus', () => updateLargeImage(img));
    img.addEventListener('blur', resetLargeImage);
});

// Function to update the large image and text
function updateLargeImage(img) {
    largeImage.src = img.src;
    largeText.textContent = img.alt;
    largeImage.style.backgroundImage = `url(${img.src})`;
    console.log(`Updated large image with: ${img.alt}`);
}

// Function to reset the large image and text
function resetLargeImage() {
    largeImage.src = 'default.jpg';
    largeText.textContent = 'Hover over or focus on an image to see details.';
    largeImage.style.backgroundImage = '';
    console.log('Reset large image to default');
}

// Add tabindex attribute dynamically
function addTabIndex() {
    images.forEach((img) => {
        img.setAttribute('tabindex', '0');
    });
    console.log('Tabindex added to all images');
}

// Add tabindex when the page loads
window.onload = () => {
    addTabIndex();
};
