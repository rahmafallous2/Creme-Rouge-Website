$(document).ready(function () {

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let wishlistContainer = $('#wishlist-container');

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

        
        console.log(`${item.name} added to the cart`);

        alert(`${item.name} has been added to your cart.`);
    });

    $(document).on('click', '.remove-button', function () {
        const index = $(this).data('index');

  
        const cardToRemove = $(this).closest('.wishlist-card');
        cardToRemove.fadeOut(300, function () {
            wishlist.splice(index, 1); 
            localStorage.setItem('wishlist', JSON.stringify(wishlist));

            renderWishlist();
        });
    });


    //hamburger menu
    $('#more').click(function () {
        $('#navbar').toggle();
    });


});
