// JavaScript source code
document.addEventListener("DOMContentLoaded", () => {
    const cartItemsEl = document.getElementById("cart-items");
    const cartTotalEl = document.getElementById("cart-total");
    const placeOrderBtn = document.getElementById("place-order");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = "<li>Your cart is empty.</li>";
        placeOrderBtn.disabled = true;
        return;
    }

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} (${item.quantity}) - $${itemTotal.toFixed(2)}
            <button class="remove-item" data-name="${item.name}">x</button>
        `;
        cartItemsEl.appendChild(li);
    });

    cartTotalEl.textContent = `$${total.toFixed(2)}`;

    // Remove item from cart
    document.querySelectorAll(".remove-item").forEach(btn => {
        btn.addEventListener("click", () => {
            const name = btn.getAttribute("data-name");
            cart = cart.filter(item => item.name !== name);
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload();
        });
    });

    // Place Order
    placeOrderBtn.addEventListener("click", () => {
        alert("Order placed successfully!");
        localStorage.removeItem("cart");
        location.reload();
    });
});
