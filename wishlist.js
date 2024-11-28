$(document).ready(function () {
    // Retrieve wishlist from local storage
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistContainer = $('#wishlist-container');

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
                const card = `
                    <div class="card" data-category="wishlist" data-index="${index}">
                        <div class="wishlist-item">
                            <img src="${item.image}" alt="${item.name}">
                            <div class="text_section">
                                <h3>${item.name}</h3>
                                <p>${item.description || 'No description available'}</p>
                                <p><span class="price">${item.price}</span></p>
                                <div class="remove-button" data-index="${index}">
                                    <button>Remove</button>
                                </div>
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

    // Remove item from wishlist
    $(document).on('click', '.remove-button', function () {
        const index = $(this).data('index');
        wishlist.splice(index, 1); // Remove item from array
        localStorage.setItem('wishlist', JSON.stringify(wishlist)); // Update local storage

        // Re-render the wishlist after removal
        renderWishlist();
    });
});
