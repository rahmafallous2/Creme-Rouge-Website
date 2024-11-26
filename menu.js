$(document).ready(function () {
    $('#view_all').on('click', function () {
        let hidden = $('.hidden_cards');
        if (hidden.css('display') === 'flex') {
            hidden.css('display', 'none');
            $(this).text('View All'); 
        } else {
            hidden.css('display', 'flex');
            $(this).text('Back');
        }
    });
})
