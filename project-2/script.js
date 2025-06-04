document.addEventListener("DOMContentLoaded", function () {
    // Scroll-to-top button
    const scrollUpBtn = document.getElementById('scrollUpBtn');
    if (scrollUpBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollUpBtn.classList.add('show');
            } else {
                scrollUpBtn.classList.remove('show');
            }
        });

        scrollUpBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            if (navMenu.classList.contains('nav-hidden')) {
                navMenu.classList.remove('nav-hidden');
                navMenu.classList.add('nav-visible');
            } else {
                navMenu.classList.remove('nav-visible');
                navMenu.classList.add('nav-hidden');
            }
        });
    }
});
