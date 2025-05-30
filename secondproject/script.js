// JavaScript source code

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('nav-hidden');
        navMenu.classList.toggle('nav-visible');
    });
});
