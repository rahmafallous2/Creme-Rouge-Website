$(document).ready(function () {
    // Check if the item is in the wishlist when the page loads
    updateWishlistIcons();

    // Menu category filtering
    $('.categories_menu > div').on('click', function () {
        const category = $(this).find('span').text().toLowerCase();
        filterCards(category);
    });

    // Dropdown category filtering
    $('.dropdown-content a').on('click', function (event) {
        event.preventDefault(); // Prevent default behavior
        let category = $(this).parent().data('category');
        filterCards(category);
    });

    // Common filter logic
    function filterCards(category) {
        if (category === 'all') {
            $('.card').show();
        } else {
            $('.card').hide();
            $('.card[data-category="' + category + '"]').show(); // Show filtered cards
        }
    }

    // Wishlist toggle functionality
    $('.wishlist').on('click', function () {
        let card = $(this).closest('.card');
        let index = $(this).closest('.card').data('index');
        let productImage = card.find('.product_image img').attr('src');
        let productName = card.find('.text_section h2').text();
        let productDescription = card.find('.text_section p').text();
        let productPrice = card.find('span:contains("$")').text().trim();

        // Save to local storage
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const isAlreadyInWishlist = wishlist.some(item => item.name === productName);

        if (isAlreadyInWishlist) {
            // If already in wishlist, remove it
            wishlist = wishlist.filter(item => item.name !== productName);
            localStorage.setItem('wishlist', JSON.stringify(wishlist)); // Update local storage
            $(this).find('.wishlist_red').hide(); // Hide red icon
            $(this).find('.wishlist_black').show(); // Show black icon
        } else {
            // If not in wishlist, add it
            wishlist.push({
                id: index,
                image: productImage,
                name: productName,
                description: productDescription,
                price: productPrice
            });
            localStorage.setItem('wishlist', JSON.stringify(wishlist)); // Update local storage
            $(this).find('.wishlist_red').show(); // Show red icon
            $(this).find('.wishlist_black').hide(); // Hide black icon
        }

        // Optional: Redirect to wishlist page after adding/removing item
        // window.location.href = 'wishlist.html'; // Uncomment to go to wishlist page after toggle
    });

    // Scroll to top button
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('#scroll-up-btn').fadeIn();
        } else {
            $('#scroll-up-btn').fadeOut();
        }
    });

    $('#scroll-up-btn').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    // Function to check wishlist status and update icons accordingly
    function updateWishlistIcons() {
        // Get the current wishlist from localStorage
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        // Loop through each card and check if it's in the wishlist
        $('.card').each(function () {
            let card = $(this);
            let productName = card.find('.text_section h2').text();
            
            // Check if the current card is in the wishlist
            const isInWishlist = wishlist.some(item => item.name === productName);

            // Update the wishlist icon based on the item state
            if (isInWishlist) {
                card.find('.wishlist_red').show(); // Show red icon
                card.find('.wishlist_black').hide(); // Hide black icon
            } else {
                card.find('.wishlist_red').hide(); // Hide red icon
                card.find('.wishlist_black').show(); // Show black icon
            }
        });
    }
});
