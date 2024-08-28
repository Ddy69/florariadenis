// JavaScript for the lightbox functionality
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const close = document.querySelector('.close');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        lightbox.style.display = 'flex'; // Show the lightbox when an image is clicked
        lightboxImg.src = this.src;
        
    });
});

close.addEventListener('click', function() {
    lightbox.style.display = 'none'; // Hide the lightbox when the close button is clicked
});

// Optional: Hide the lightbox when clicking outside the image
lightbox.addEventListener('click', function(e) {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});
