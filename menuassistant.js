$(document).ready(function () {
    // Initialize cart counter
    updateCartCounter();

    // Add to cart button functionality
    $('.addtocart').click(function () {
        const card = $(this).closest('.card');
        const productId = card.data('product-id');
        const productName = card.find('h2').text();
        const productPrice = parseFloat(card.find('span').text().replace('$', ''));
        const productImage = card.find('img[onclick]').attr('src');

        // Create product object
        const product = {
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        };

        // Get cart from localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if product is already in cart
        const existingProductIndex = cart.findIndex(item => item.id === product.id);
        if (existingProductIndex > -1) {
            // Increment quantity if the product exists
            cart[existingProductIndex].quantity += 1;
        } else {
            // Add new product
            cart.push(product);
        }

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Update cart counter
        updateCartCounter();

      
    });

    // Function to update cart counter
    function updateCartCounter() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((total, product) => total + product.quantity, 0);
        $('#countercart').text(totalItems);
    }
}); 
