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

const header = document.querySelector('header h1');
const currentHour = new Date().getHours();

if (currentHour < 12) {
    header.textContent = 'Good Morning! Welcome to the Animal World!';
} else if (currentHour < 18) {
    header.textContent = 'Good Afternoon! Welcome to the Animal World!';
} else {
    header.textContent = 'Good Evening! Welcome to the Animal World!';
}

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function scrollToContent() {
    const contentSection = document.getElementById('content');
    contentSection.scrollIntoView({ behavior: 'smooth' });
}