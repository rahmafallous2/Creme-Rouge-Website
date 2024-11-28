$(document).ready(function () {
    // Menu category filtering
    $('.categories_menu > div').on('click', function () {
        const category = $(this).find('span').text().toLowerCase();
        filterCards(category);
    });

    // Dropdown category filtering
    $('.dropdown-content a').on('click', function (event) {
        event.preventDefault(); // Prevent default behavior
        const category = $(this).parent().data('category');
        filterCards(category);
    });

    // Common filter logic
    function filterCards(category) {
        if (category === 'all') {
            $('.card').show(); // Show all cards
        } else {
            $('.card').hide(); // Hide all cards
            $('.card[data-category="' + category + '"]').show(); // Show filtered cards
        }
    }

    // Wishlist toggle functionality
    $('.wishlist').on('click', function () {
        const index = $(this).find('.wishlist_black').data('index');
        const productName = $(this).siblings('.text_section').find('h2').text();
        const productImage = $(this).siblings('img').attr('src');
        const productPrice = $(this).siblings('.text_section').find('.span_button span').text();

        $(this).find('.wishlist_black').toggle();
        $(this).find('.wishlist_red').toggle();

        // Save to local storage
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        if ($(this).find('.wishlist_red').is(':visible')) {
            wishlist.push({ name: productName, image: productImage, price: productPrice });
        } else {
            wishlist = wishlist.filter(item => item.name !== productName);
        }
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
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