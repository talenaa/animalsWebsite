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

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});