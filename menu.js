$(document).ready(function () {
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
        let productIcon = card.find('.wishlist_red img').attr('src');
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
            $(this).find('.wishlist_red').hide();
            $(this).find('.wishlist_black').show();
        } else {
            // If not in wishlist, add it
            wishlist.push({
                id: index,
                icon: productIcon,
                image: productImage,
                name: productName,
                description: productDescription,
                price: productPrice
            });
            localStorage.setItem('wishlist', JSON.stringify(wishlist)); // Update local storage
            $(this).find('.wishlist_red').show();
            $(this).find('.wishlist_black').hide();
        }

        $(this).find('.wishlist_red').show();
        $(this).find('.wishlist_black').hide();

        // Redirect to wishlist page
        window.location.href = 'wishlist.html'; // 
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

});