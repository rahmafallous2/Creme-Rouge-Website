$(document).ready(function () {

    $('.categories_menu div').on('click', function () {
        let category = $(this).find('span').text().toLowerCase();
        filterCards(category);
    });

    function filterCards(category) {
        if (category === 'all') {
            $('.card').show(); // Show all cards
        } else {
            $('.card').hide(); // Hide all cards
            $('.card[data-category="' + category + '"]').show(); // Show only selected category cards
        }
    }

    $('.wishlist').on('click', function () // wishlist feature
    {
        $(this).find('.wishlist_black').toggle();
        $(this).find('.wishlist_red ').toggle();
    });
    
});
