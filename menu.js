$(document).ready(function () {
    $("#view_all").on('click', function () {
       $(".contact_icons").toggle();
       $(".categories_menu").toggleClass('column_categoties');
       $('.main_menu').toggleClass('main_column');
       $('.hidden_cards').toggle();
       $('.cards').toggleClass('center_cards');
       $(this).text($(this).text() === 'View All' ? 'Back' : 'View ALL');
    });
});
