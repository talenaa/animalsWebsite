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
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    const images = Array.from(document.querySelectorAll('.galleryItem img'));
    let currentIndex = 0;

    function openModal(index) {
        currentIndex = index;
        modal.style.display = 'block';
        modal.classList.add('show');
        modalImg.src = images[currentIndex].src;
        captionText.innerText = images[currentIndex].alt;
      }

      function closeModalWithAnimation() {
        modal.classList.remove('show');
        setTimeout(() => {
          modal.style.display = 'none';
        }, 500);
      }

      function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex].src;
        captionText.innerText = images[currentIndex].alt;
      }

      function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex].src;
        captionText.innerText = images[currentIndex].alt;
      }

      images.forEach((img, index) => {
        img.addEventListener('click', () => openModal(index));
      });

      closeModal.addEventListener('click', closeModalWithAnimation);
      prevBtn.addEventListener('click', showPrevImage);
      nextBtn.addEventListener('click', showNextImage);

      document.addEventListener('keydown', (event) => {
        if (modal.style.display === 'block') {
          if (event.key === 'ArrowLeft') {
            showPrevImage();
          } else if (event.key === 'ArrowRight') {
            showNextImage();
          } else if (event.key === 'Escape') {
            closeModalWithAnimation();
          }
        }
      });
    });

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