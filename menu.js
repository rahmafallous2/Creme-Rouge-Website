$(document).ready(function () {
    // Category filter through category menu
    $('.categories_menu > div').on('click', function () {
        const category = $(this).find('span').text().toLowerCase();
        filterCards(category);
    });

    // Dropdown filter
    $('.dropdown-content a').on('click', function (event) {
        event.preventDefault(); // Prevent the default anchor click behavior
        const drop = $(this).parent().data('category'); // Get the category from the parent div
        filterCards(drop);
    });

    // Common filter function for both menu and dropdown
    function filterCards(category) {
        if (category === 'all') {
            $('.card').show(); // Show all cards
        } else {
            $('.card').hide(); // Hide all cards
            $('.card[data-category="' + category + '"]').show(); // Show only selected category cards
        }
    }

    // Wishlist toggle feature
    $('.wishlist').on('click', function () {
        $(this).find('.wishlist_black').toggle();
        $(this).find('.wishlist_red').toggle();
    });

    // Scroll Up Button Feature
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 200) {
            $("#scroll-up-btn").fadeIn(); // Show button when scrolling down
        } else {
            $("#scroll-up-btn").fadeOut(); // Hide button when near the top
        }
    });

    $("#scroll-up-btn").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 500); // Smooth scroll to top
    });
});