//====script section for checkout ======
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pickup = urlParams.get("pickup");

    // Shared city mapping (used for display and pricing)
    const cityMap = {
        cincinnati: "Cincinnati, OH",
        columbus: "Columbus, OH",
        philadelphia: "Philadelphia, PA",
        illinois: "Illinois",
        newyork: "New York, NY",
        newjersey: "New Jersey",
        chicago: "Chicago, IL"
    };

    // Set pickup city/state if URL has "pickup"
    if (pickup) {
        const displayValue = cityMap[pickup.toLowerCase()] || pickup;
        const pickupInput = document.getElementById("pickupCityState");
        if (pickupInput) {
            pickupInput.value = displayValue;
        }
    }

    // Pricing table
    const pricing = {
        columbus: { shared: 58, sedan: 185, suv: 285 },
        philadelphia: { shared: 173, sedan: 415, suv: 515 },
        newyork: { shared: 190, sedan: 450, suv: 550 },
        newjersey: { shared: 180, sedan: 430, suv: 530 },
        chicago: { shared: 105, sedan: 280, suv: 380 }
    };

    // Price update handler
    function updatePrice() {
        const destination = document.getElementById('destination').value;
        const carType = document.getElementById('carType').value;
        const totalSpan = document.getElementById('totalPrice');

        if (destination && carType && pricing[destination]) {
            const price = pricing[destination][carType];
            totalSpan.textContent = price.toFixed(2);
        } else {
            totalSpan.textContent = '0.00';
        }
    }

    // Event listeners
    document.getElementById('destination')?.addEventListener('change', updatePrice);
    document.getElementById('carType')?.addEventListener('change', updatePrice);
});
