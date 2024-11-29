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
           
            wishlist = wishlist.filter(item => item.name !== productName);
            localStorage.setItem('wishlist', JSON.stringify(wishlist)); 
            $(this).find('.wishlist_red').hide();
            $(this).find('.wishlist_black').show(); 
        } else {


            wishlist.push({
                id: index,
                image: productImage,
                name: productName,
                description: productDescription,
                price: productPrice
            });
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            $(this).find('.wishlist_red').show(); 
            $(this).find('.wishlist_black').hide(); 
        }

       
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

    
    function updateWishlistIcons() {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        $('.card').each(function () {
            let card = $(this);
            let productName = card.find('.text_section h2').text();
            
            const isInWishlist = wishlist.some(item => item.name === productName);

            if (isInWishlist) {
                card.find('.wishlist_red').show(); 
                card.find('.wishlist_black').hide(); 
            } else {
                card.find('.wishlist_red').hide(); 
                card.find('.wishlist_black').show(); 
            }
        });
    }
});
