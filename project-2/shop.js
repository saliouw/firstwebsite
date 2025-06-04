// JavaScript source code
document.addEventListener("DOMContentLoaded", function () {
    // ====== Filter logic ======
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

    // ====== Hamburger menu ======
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("nav-hidden");
        });
    }

    // ====== Add to cart ======
    document.querySelectorAll(".buy-btn").forEach(btn => {
        btn.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent scroll to top

            const productCard = btn.closest(".product-card");

            const item = {
                name: productCard.querySelector("h4").innerText,
                price: parseFloat(productCard.querySelector("p").innerText.replace("$", "")),
                quantity: 1
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const existingItem = cart.find(i => i.name === item.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push(item);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            showCartToast(`${item.name} added to cart`);
    
        });
    });

    // ===== Toast function =====
    function showCartToast(message) {
        const toast = document.getElementById("cart-toast");
        toast.textContent = message;
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);

    }
})