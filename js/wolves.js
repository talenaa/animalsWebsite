const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.social a img').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.filter = 'brightness(1.5)';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.filter = 'brightness(1)';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeModal = document.querySelector('.close');

    document.querySelectorAll('.galleryItem img').forEach(img => {
        img.addEventListener('click', () => {
          modal.style.display = 'block';
          modalImg.src = img.src;
          captionText.innerText = img.alt;
        });
      });

      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
      
      modal.addEventListener('click', (event) => {
        if (event.target=== modal) {
            modal.style.display = 'none';
        }
      });
    });