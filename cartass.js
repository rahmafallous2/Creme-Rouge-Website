$(document).ready(function () {
    // Load cart items
    loadCart();

    // Function to load cart from localStorage and render it
    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const $productsContainer = $('.products');

        // Clear container
        $productsContainer.empty();

        if (cart.length === 0) {
            $productsContainer.append('<p>Your cart is empty!</p>');
            updateOrderSummary(cart);
            return;
        }

        // Render cart items
        cart.forEach(product => {
            const total = (product.price * product.quantity).toFixed(2);
            const productHTML = `
                <div class="product">
                    <div class="product-title">
                        <img src="${product.image}" alt="" width="50">
                        <span>${product.name}</span>
                    </div>
                    <div class="price">$${product.price}</div>
                    <div class="quantity">
                        <button class="decrement" data-id="${product.id}">-</button>
                        <span>${product.quantity}</span>
                        <button class="increment" data-id="${product.id}">+</button>
                    </div>
                    <div class="total">$${total}</div>
                    <button class="remove" data-id="${product.id}">Remove</button>
                </div>
            `;
            $productsContainer.append(productHTML);
        });

        updateOrderSummary(cart);
    }

    // Increment quantity
    $(document).on('click', '.increment', function () {
        updateQuantity($(this).data('id'), 1);
    });

    // Decrement quantity
    $(document).on('click', '.decrement', function () {
        updateQuantity($(this).data('id'), -1);
    });

    // Remove product
    $(document).on('click', '.remove', function () {
        removeProduct($(this).data('id'));
    });

    // Function to update quantity
    function updateQuantity(productId, change) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productIndex = cart.findIndex(product => product.id === productId);

        if (productIndex > -1) {
            cart[productIndex].quantity += change;

            // Remove item if quantity is zero or less
            if (cart[productIndex].quantity <= 0) {
                cart.splice(productIndex, 1);
            }

            // Save updated cart and reload
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
            updateCartCounter();
        }
    }

    // Function to remove product
    function removeProduct(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(product => product.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
        updateCartCounter();
    }

    // Function to update cart counter
    function updateCartCounter() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((total, product) => total + product.quantity, 0);
        $('#countercart').text(totalItems);
    }

    // Function to update order summary
    function updateOrderSummary(cart) {
        const $orderSummary = $('.order-summary');
        const totalItems = cart.reduce((total, product) => total + product.quantity, 0);
        const totalCost = cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);

        $orderSummary.html(`
            <h3>Order Summary</h3>
            <p>Total Items: ${totalItems}</p>
            <p>Total Cost: $${totalCost}</p>
            <button> Checkout</button>
        `);
    }
});
// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
