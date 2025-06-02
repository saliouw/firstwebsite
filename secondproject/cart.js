// JavaScript source code
document.addEventListener("DOMContentLoaded", () => {
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");
    const clearCartBtn = document.getElementById("clear-cart");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartList.innerHTML = "<li>Your cart is empty.</li>";
        clearCartBtn.style.display = "none";
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const li = document.createElement("li");
        li.innerHTML = `
            <div class="cart-item">
                <span><strong>${item.name}</strong></span>
                <span>$${item.price.toFixed(2)} × 
                    <button class="decrease" data-name="${item.name}">−</button>
                    ${item.quantity}
                    <button class="increase" data-name="${item.name}">+</button>
                </span>
                <span><strong>$${itemTotal.toFixed(2)}</strong></span>
                <button class="remove-item" data-name="${item.name}">Remove</button>
            </div>
        `;
        cartList.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);

    // Quantity controls
    document.querySelectorAll(".increase").forEach(btn => {
        btn.addEventListener("click", () => updateQuantity(btn.dataset.name, 1));
    });

    document.querySelectorAll(".decrease").forEach(btn => {
        btn.addEventListener("click", () => updateQuantity(btn.dataset.name, -1));
    });

    // Remove item
    document.querySelectorAll(".remove-item").forEach(btn => {
        btn.addEventListener("click", () => removeItem(btn.dataset.name));
    });

    // Clear cart
    clearCartBtn.addEventListener("click", () => {
        localStorage.removeItem("cart");
        location.reload();
    });

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
