// hamburger toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.querySelector("header nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("nav-visible");
        nav.classList.toggle("nav-hidden");
    });
});
