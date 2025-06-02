// JavaScript source code
document.addEventListener("DOMContentLoaded", function () {
    const categoryItems = document.querySelectorAll("[data-category]");
    const priceItems = document.querySelectorAll("[data-price]");
    const products = document.querySelectorAll(".product-card");

    let activeCategory = "all";
    let activePrice = "all";

    function filterProducts() {
        products.forEach(product => {
            const matchesCategory = activeCategory === "all" || product.dataset.category === activeCategory;
            const matchesPrice = activePrice === "all" || product.dataset.price === activePrice;

            product.style.display = (matchesCategory && matchesPrice) ? "block" : "none";
        });
    }

    categoryItems.forEach(item => {
        item.addEventListener("click", () => {
            categoryItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
            activeCategory = item.dataset.category;
            filterProducts();
        });
    });

    priceItems.forEach(item => {
        item.addEventListener("click", () => {
            priceItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
            activePrice = item.dataset.price;
            filterProducts();
        });
    });
});
/**hamburger menu*/
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("nav-hidden");
    });
});
