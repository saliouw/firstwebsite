document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const clearCartBtn = document.getElementById("clear-cart"); // Optional — if used

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        if (clearCartBtn) clearCartBtn.style.display = "none";
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
            <div><strong>${item.name}</strong></div>
            <div>
                $${item.price.toFixed(2)} × 
                <button class="decrease" data-name="${item.name}">−</button>
                ${item.quantity}
                <button class="increase" data-name="${item.name}">+</button>
            </div>
            <div><strong>$${itemTotal.toFixed(2)}</strong></div>
            <button class="remove-item" data-name="${item.name}">Remove</button>
            <hr>`;
        cartItems.appendChild(itemDiv);
    });

    cartTotal.textContent = total.toFixed(2);

    // Quantity control
    cartItems.querySelectorAll(".increase").forEach(btn => {
        btn.addEventListener("click", () => updateQuantity(btn.dataset.name, 1));
    });

    cartItems.querySelectorAll(".decrease").forEach(btn => {
        btn.addEventListener("click", () => updateQuantity(btn.dataset.name, -1));
    });

    // Remove item
    cartItems.querySelectorAll(".remove-item").forEach(btn => {
        btn.addEventListener("click", () => removeItem(btn.dataset.name));
    });

    // Optional: Clear entire cart
    if (clearCartBtn) {
        clearCartBtn.addEventListener("click", () => {
            localStorage.removeItem("cart");
            location.reload();
        });
    }

    function updateQuantity(name, delta) {
        cart = cart.map(item => {
            if (item.name === name) {
                item.quantity += delta;
                if (item.quantity < 1) item.quantity = 1;
            }
            return item;
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
    }

    function removeItem(name) {
        cart = cart.filter(item => item.name !== name);
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
    }
});
