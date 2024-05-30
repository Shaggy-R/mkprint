// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    const header = document.querySelector('header');
    const logoText = document.getElementById('logo-text');
    const intro = document.getElementById('intro');

    // Change header style on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Add hover effect to service cards
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Change theme to a random dark/color theme
    logoText.addEventListener('click', () => {
        const colors = [
            { primary: '#ff00ff', accent: '#ff66ff', gradient: 'linear-gradient(135deg, #ff00ff, #ff66ff)' },
            { primary: '#00ff00', accent: '#66ff66', gradient: 'linear-gradient(135deg, #00ff00, #66ff66)' },
            { primary: '#00ffff', accent: '#66ffff', gradient: 'linear-gradient(135deg, #00ffff, #66ffff)' },
            { primary: '#ff0000', accent: '#ff6666', gradient: 'linear-gradient(135deg, #ff0000, #ff6666)' },
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.documentElement.style.setProperty('--primary-color', randomColor.primary);
        document.documentElement.style.setProperty('--accent-color', randomColor.accent);
        document.documentElement.style.setProperty('--gradient', randomColor.gradient);
    });

    // Remove intro after animation
    setTimeout(() => {
        intro.style.display = 'none';
    }, 5000); // 2s for zoomIn + 3s for fadeOut
});