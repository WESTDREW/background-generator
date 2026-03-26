// Bike Shop - Interactive Features

// Update price display when quantity changes
document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('change', function() {
        updatePrice(this);
    });
});

// Update total price for a bike
function updatePrice(quantityInput) {
    const row = quantityInput.closest('.bike-item');
    const price = parseFloat(row.querySelector('.price').textContent);
    const quantity = parseInt(quantityInput.value);
    const total = price * quantity;
    
    row.querySelector('.item-total').textContent = total.toFixed(2);
    updateCartTotal();
}

// Calculate and display cart total
function updateCartTotal() {
    const items = document.querySelectorAll('.item-total');
    let cartTotal = 0;
    
    items.forEach(item => {
        cartTotal += parseFloat(item.textContent) || 0;
    });
    
    const totalElement = document.querySelector('.cart-total');
    if (totalElement) {
        totalElement.textContent = cartTotal.toFixed(2);
    }
}

// Add to cart button functionality
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Added to cart!');
        this.textContent = '✓ Added';
        setTimeout(() => {
            this.textContent = 'Add to Cart';
        }, 2000);
    });
});

// Initialize
updateCartTotal();