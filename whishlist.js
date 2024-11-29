$(document).ready(function () {

    // Retrieve wishlist from local storage
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let wishlistContainer = $('#wishlist-container');

    // Function to render wishlist items
    function renderWishlist() {
        wishlistContainer.empty(); // Clear existing items

        if (wishlist.length === 0) {
            wishlistContainer.append('<p>Your wishlist is empty.</p>').css({
                'text-align': 'center',
                'display': 'flex',
                'justify-content': 'center',
                'align-items': 'center',
                'color': '#A00124',
                'margin': '12em',
                'padding': '30px'
            });
        } else {
            wishlist.forEach((item, index) => {
                let card = `
                 <div class="wishlist-card" data-index="${index}">
                    <div class="wishlist-item">
                        <div class="item-image">
                                <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="item-information">
                            <h2 class="item-name">${item.name}</h2>
                            <p class="item-description">${item.description || 'No description available'}</p>
                            <p class="item-price"><span class="price">${item.price}</span></p>
                        </div>
                        <div class="item-actions">
                            <button class="add-to-cart" data-index="${index}">Add to Cart</button>
                            <button class="remove-button" data-index="${index}">Remove</button>
                         </div>

                     </div>
                </div>
                `;
                wishlistContainer.append(card);
            });
        }
    }

    // Initially render wishlist
    renderWishlist();

    // Add item to cart
    $(document).on('click', '.add-to-cart', function () {
        const index = $(this).data('index');
        const item = wishlist[index];

        // Assuming you have a cart array, add the item to the cart (Cart functionality needs to be implemented)
        console.log(`${item.name} added to the cart`);
        // You can add more code here to actually add the item to a cart array or local storage

        // Optional: Feedback or animation when item is added to the cart
        alert(`${item.name} has been added to your cart.`);
    });

    // Remove item from wishlist
    $(document).on('click', '.remove-button', function () {
        const index = $(this).data('index');

        // Animate removal
        const cardToRemove = $(this).closest('.wishlist-card');
        cardToRemove.fadeOut(300, function () {
            wishlist.splice(index, 1); // Remove item from array
            localStorage.setItem('wishlist', JSON.stringify(wishlist)); // Update local storage

            // Re-render the wishlist after removal
            renderWishlist();
        });
    });
    //hamburger menu

    $('#more').click(function () {
        $('#navbar').toggle();
    });


});
