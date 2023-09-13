const imageContainer = document.getElementById('imageContainer');

// Function to load images from the 'images' folder
function loadImages() {
    fetch('images.json') // You may need to modify this path depending on your setup
        .then(response => response.json())
        .then(data => {
            data.images.forEach(image => {
                const img = document.createElement('img');
                img.src = `images/${image}`;
                img.alt = image;
                imageContainer.appendChild(img);
            });
        })
        .catch(error => console.error('Error loading images:', error));
}

// Call the function to load images when the page loads
window.addEventListener('load', loadImages);
